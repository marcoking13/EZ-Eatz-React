//Line Count: 3870
  // Line Count with API data: 8230
const express = require("express");
const bodyParser = require("body-parser");
const collections = ["foodtrucks","users","currentUser"];
const database = "eater_db";
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/heroku_9tlg8v4r" ;
var path = require("path");
var http = require("http");
const Cookies = require("cookies");
const UserConstructor = require("./config/user_constructor.js");
const mongojs = require("mongojs");
const session = require("express-session");
const FoodtruckConfig = require("./config/foodtruckConfig.js");
const Truck = require("./database/foodtruckSchema.js");
const UserSample = require("./config/userSample.js");
// var db = mongojs(database,collections);
const Users = require("./database/userSchema.js");
const CurrentUser = require("./database/currentUserSchema.js");
const geocoder = require("node-geocoder");
const ConvertToCoords = require("./geoconvert.js");
const CalculateDistance = require("./distance_calculator.js");
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

 MongoClient.connect(url, async (err,db)=>{
  var dbO = db.db("heroku_9tlg8v4r");
  console.log("Database is working")

  app.post("/api/signup",async (req,res)=>{
    var found = false;

    const data = await dbO.collection("users").find({}).toArray();

      for(var i =0; i<data.length; i++){
        if(data[i].username === req.body.username){
          return res.json(false);
          found = true;
          break;
        }
      }
      if(!found){
        const data = req.body;

        const account = {
          name:data.name,
          image:"",
          address:data.address,
          orders:[],
          username:data.username,
          password:data.password
        }


        const NewUser = new UserConstructor(account);

        dbO.collection("users").insertOne(NewUser);
        res.json(NewUser);
      }



  });

  app.get("/api/currentUser",(req,res)=>{
    PostFoodtrucksToAPI(req,res);
  });

  app.post("/api/geoconverter",(req,res) => {
    res.json(ConvertToCoords(req.body.address));
  });

  app.post("/api/distance-calculator",(req,res) => {

    var data = req.body;

    const distance = CalculateDistance(data.userLocation,data.foodtruckLocation,data.radius);
    res.json(distance);

  });

  app.post("/api/trucks", async (req,res)=>{

      const data = await dbO.collection("foodtrucks").find({}).toArray();
      res.json(data);

  });

  app.post("/api/google_login", async (req,res)=>{

    const data = req.body;

    const account = {
      name:data.name,
      image:data.image,
      address:data.address,
      orders:[],
      username:data.username,
      password:data.password
    }


    const NewUser = new UserConstructor(account);



    const search = await dbO.collection("users").findOne({password:account.password,username:account.username});

    if(search){
      res.json(search);
    }else{
      dbO.collection("users").insertOne(NewUser);
      const search = await dbO.collection("users").findOne({password:NewUser.password,username:NewUser.username});
      res.json(search);
    }

  });

  app.post("/api/login", async (req,res)=>{


    const search = await dbO.collection("users").findOne({password:req.body.password,username:req.body.username});
    res.json(search);

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

});

// End of Express

//----------------------------------------------------------------------------

// Database Functions


var PostUsersToAPI= (req,res,db) =>{
    //
    // db.collection("users").find({}).toArray((err,result)=>{
    //   res.json(result);
    // });

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



var UpdateAddress = (req,res)=>{

  var userData = req.body.userData;
  var address = req.body.address;

  Users.updateOne({"account.username": userData.username}, {$set: { address: address}}, function (err, user) {
       if (err) throw error
       console.log("update user complete");

   });

}


var mongooseStartup = () => {

    MongoClient.connect(url,async(err,db)=>{
      if(err) throw err;

      var dbO = db.db("heroku_9tlg8v4r");
      const foodtrucks = dbO.collection("foodtrucks");
    //  const result = await foodtrucks.deleteMany({});
    //  console.log("Deleted " + result.deletedCount + " documents");
      dbO.collection("foodtrucks").find({}).toArray(function(err, result) {
          if (err) throw err;

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
