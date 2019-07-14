//Line Count: 3870
  // Line Count with API data: 8230
const express = require("express");
const bodyParser = require("body-parser");
const collections = ["foodtrucks","users","currentUser"];
const database = "eater_db";
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
var path = require("path");
var http = require("http");
const Cookies = require("cookies");
const mongojs = require("mongojs");
const session = require("express-session");
const FoodtruckConfig = require("./config/foodtruckConfig.js");
const Truck = require("./database/foodtruckSchema.js");
const UserSample = require("./config/userSample.js");
var db = mongojs(database,collections);
const Users = require("./database/userSchema.js");
const CurrentUser = require("./database/currentUserSchema.js");
const geocoder = require("node-geocoder");

const app = express();

const port = 4001;
var loginFlag = false;

app.set("port",process.env.PORT || port);

app.use(bodyParser());
app.use(session({secret:"njerenve",saveUnintialized:true,resave:true,httpOnly:false}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());




var server = http.createServer(app).listen(port,function(){
  mongooseStartup(FoodtruckConfig,null);

  console.log("App running on "+port);

});



app.post("/api/signupUser",(req,res)=>{

  SignupUser(req,res);

});



app.get("/api/currentUser",(req,res)=>{

  PostFoodtrucksToAPI(req,res);

});

app.get("/api/trucks",(req,res)=>{

  PostFoodtrucksToAPI(req,res);

});

app.post("/api/login",(req,res)=>{

  delete req.body.__v

  VerifyUsername(req,res);

});


app.get("/api/users",(req,res)=>{

  PostUsersToAPI(req,res);

});

app.post("/api/updateUserAddress",(req,res)=>{

    UpdateAddress(req,res);

});



// End of Express

//----------------------------------------------------------------------------

// Database Functions


var PostUsersToAPI= (req,res) =>{
  Users.find({}).exec((err,data)=>{
    res.json(data);
  });
}
var PostFoodtrucksToAPI= (req,res) =>{
  db.foodtrucks.find({},(err,data)=>{
    res.json(data);
  });
}

var PostCurrentUserToAPI = (req,res)=>{
  db.currentUser.find({},(err,rep)=>{
    res.json(rep[0]);
  })
}

var SignupUser = (req,res)=>{

    Users.find({},(err,data)=>{
      var found = false;
      for(var i =0; i<data.length; i++){
        if(data[i].account.username === req.body.username){
          console.log("Error: Name already Taken");
          found = true;
          break;
        }
      }
      if(!found){
        Users.create({
          name:req.body.first + " " + req.body.last,
          address:"",
          profilePhoto:"",
          orders:[],
          account:{
            username:req.body.username,
            password:req.body.password
          }
        });
      }

      });
}



var UpdateAddress = (req,res)=>{
  console.log(req.body);
  var userData = req.body.userData;
  var address = req.body.address;



  Users.updateOne({"account.username": userData.username}, {$set: { address: address}}, function (err, user) {
       if (err) throw error
       console.log(user);
       console.log("update user complete");

   });

}



var VerifyUsername = (req,res)=>{
  var i =0;
  Users.find({}).exec((err,datas)=>{
    for(var k =0; k<datas.length;k++){
        i++;
        console.log(i,datas.length);
        if(datas[k].account.username == req.body.username || datas[k].account.password == req.body.password){
            loginFlag = true;

            db.currentUser.remove({},(err,rep)=>{console.log(rep)});
            db.currentUser.insert(datas[k],(err,rep)=>{console.log(rep)});
            db.currentUser.find({},(er,re)=>{console.log(re)});
            break;


      }else if(i>=datas.length){

          console.log("Cannot Find User");
          loginFlag = false;
      }

    };
  });

}

var  mongooseStartup = (trucks,users)=>{

    // verify to see if trucks are not already in the database
      db.foodtrucks.find({},(err,data)=>{
        console.log(data.length);
        // if trucks are already inserted do not execute function and return log below
        if(data.length > 0){
           console.log("Trucks are already in the database");

        }

        else{
            db.foodtrucks.insert(FoodtruckConfig,(err,data)=>{
              console.log("Foodtrucks Entered");
            });

        }

});

}
