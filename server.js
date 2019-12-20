//Line Count: 3870
  // Line Count with API data: 8230
const express = require("express");
const bodyParser = require("body-parser");
const collections = ["foodtrucks","users","currentUser"];
const database = "eater_db";
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/eater_db" ;
var path = require("path");
var http = require("http");
const Cookies = require("cookies");
const mongojs = require("mongojs");
const session = require("express-session");
const FoodtruckConfig = require("./config/foodtruckConfig.js");
const Truck = require("./database/foodtruckSchema.js");
const UserSample = require("./config/userSample.js");
// var db = mongojs(database,collections);
const Users = require("./database/userSchema.js");
const CurrentUser = require("./database/currentUserSchema.js");
const geocoder = require("node-geocoder");

const app = express();

const port = process.env.PORT || 4001;
var loginFlag = false;



app.use(bodyParser());
app.use(session({secret:"njerenve",saveUnintialized:true,resave:true,httpOnly:false}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


app.use(express.static('build'));


app.listen(port,function(){

  mongooseStartup();
  console.log(port,url);
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

app.post("/api/address",(req,res)=>{
  PostAddressToUser(req,res);
})

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
  MongoClient.connect(url,(err,db)=>{
    if(err) throw err;

    var dbO = db.db("heroku_9tlg8v4r");
    dbO.collection("users").find({}).toArray((err,result)=>{
      res.json(result);
    });
  });
}

var PostFoodtrucksToAPI= (req,res) =>{
  MongoClient.connect(url,(err,db)=>{
    var dbO = db.db("heroku_9tlg8v4r");
    dbO.collection("foodtrucks").find({}).toArray((err, result) => {
      res.json(result);
    });
  });
}

var PostAddressToUser = (req,res) => {
  MongoClient.connect(url,(err,db)=>{
      var dbO = db.db("heroku_9tlg8v4r");
      console.log(req.body);

      dbO.collection("users").remove({"account.username":req.body.account.username}).then((response)=>{console.log(response.result)});

      dbO.collection("users").insertOne({
        name:req.body.account.username,
        profilePhoto:"",
        address:req.body.address,
        orders:[],
        account:{
          username:req.body.account.username,
          password:req.body.account.password
        }
      }).then((resp)=>{console.log("L")});
    });
}

var PostCurrentUserToAPI = (req,res)=>{

  MongoClient.connect(url,(err,db)=>{
    var dbO = db.db("heroku_9tlg8v4r");
    dbO.collection("currentUser").find({}).toArray((err, result) => {
        res.json(result[0]);
      });
    });
};


var SignupUser = (req,res)=>{
  MongoClient.connect(url,(err,db)=>{

    var dbO = db.db("heroku_9tlg8v4r");

    dbO.collection("users").find({}).toArray((err,data)=>{
      var found = false;
      for(var i =0; i<data.length; i++){
        if(data[i].account.username === req.body.username){
          console.log("Error: Name already Taken");
          found = true;
          break;
        }
      }
      if(!found){
        dbO.collection("users").insertOne({
          name:req.body.username,
          profilePhoto:"",
          address:"United States of America",
          orders:[],
          account:{
            username:req.body.username,
            password:req.body.password
          }
        });
      }
    });
  });
}

var UpdateAddress = (req,res)=>{

  var userData = req.body.userData;
  var address = req.body.address;

  Users.updateOne({"account.username": userData.username}, {$set: { address: address}}, function (err, user) {
       if (err) throw error
       console.log("update user complete");

   });

}

var VerifyUsername = (req,res)=>{
  var i = 0;
  console.log("verify");
  MongoClient.connect(url,(err,db)=>{
    if(err) throw err;

    var dbO = db.db("heroku_9tlg8v4r");

  dbO.collection("users").find({}).exec((err,datas)=>{
    for(var k =0; k<datas.length;k++){
        i++;
        console.log(i,datas.length);
        if(datas[k].account.username == req.body.username || datas[k].account.password == req.body.password){
            loginFlag = true;

            dbO.collection("currentUser").remove({});
            dbO.collection("currentUser").insertOne(datas[k]);

            break;

      }else if(i>=datas.length){

          console.log("Cannot Find User");
          loginFlag = false;
      }

    };
  });
});
}

var  mongooseStartup = () => {

    MongoClient.connect(url,(err,db)=>{
      if(err) throw err;

      var dbO = db.db("heroku_9tlg8v4r");


      dbO.collection("foodtrucks").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result,"l");
          if(result.length <= 0){
            dbO.collection("foodtrucks").insertMany(FoodtruckConfig,(err,data)=>{console.log(data)});
          }else{
            console.log("Trucks already in Db");
          }

      });


    });

    app.get('/*', (req, res) => {

      res.sendFile(__dirname + '/build/index.html');
    });

}
