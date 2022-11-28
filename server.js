const express = require("express");
const bodyParser = require("body-parser");
const geocoder = require("node-geocoder");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const Cookies = require("cookies");
const MongoClient = require("mongodb").MongoClient;
const mongojs = require("mongojs");
const session = require("express-session");
var path = require("path");
var http = require("http");
var url = process.env.MONGODB_URI || "mongodb://sableye12:thirdpi1@iad2-c11-0.mongo.objectrocket.com:54979,iad2-c11-2.mongo.objectrocket.com:54979,iad2-c11-1.mongo.objectrocket.com:54979/ezEatz?replicaSet=1ef93570889249a49db7dbe2d95a2050" ;
console.log(url);
const ConvertToCoords = require("./config/geocode.js");
const CalculateDistance = require("./distance_calculator.js");

const collections = ["foodtrucks","users","currentUser"];
const database = "eater_db";
const Users = require("./database/userSchema.js");
const CurrentUser = require("./database/currentUserSchema.js");
const UserConstructor = require("./config/user_constructor.js");
// const FoodtruckConfigNew = require("./config/foodtruckConfig.js");
const Truck = require("./database/foodtruckSchema.js");
const UserSample = require("./config/userSample.js");

const FoodtruckGenerator = require("./config/foodtruck_generator.js")
FoodtruckGenerator();
const app = express();
const port = process.env.PORT || 4002;

app.use(bodyParser());
app.use(session({secret:"njerenve",saveUnintialized:true,resave:true,httpOnly:false}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static('build'));

app.listen(port,function(){

  MongooseStartup();
  console.log(port,url);
  console.log("App running on "+port);

});






const LoopThroughFoodtruck = (data,lat,lng,radius,sort,price_sort)=> {
  var trucks = [];


  data.map((truck)=>{

    const userLocation = {
      lat:lat,
      lng:lng
    }

    const foodtruckLocation = {
      lat:truck.lat,
      lng:truck.lng
    }

    const data = CalculateDistance(userLocation,foodtruckLocation,radius);

    if(data.distance <= radius && price_sort >= truck.expensive){

      if(sort.name){

        if(sort.name == "ratings"){

          if(sort.criteria <= truck.stars){

            truck.distance = data.distance.toString() +""+ data.unit;
            truck.distance_int = data.distance;
            trucks.push(truck);

          }

        }else if(sort.name == "nearest"){

            if(sort.criteria >= data.distance){

              truck.distance = data.distance.toString() +""+ data.unit;
              trucks.push(truck);

            }

        }
        }else{

          truck.distance = data.distance.toString() +""+ data.unit;
          trucks.push(truck);

        }
    }


  })
  console.log(trucks);
  return trucks;

}


const MongooseStartup = () => {

    MongoClient.connect(url,async(err,db)=>{
      if(err) throw err;

      var dbO = db.db("ezEatz");
      const foodtrucks = dbO.collection("foodtrucks");
      // const result = await foodtrucks.deleteMany({});
      // console.log("Deleted " + result.deletedCount + " documents");
      dbO.collection("foodtrucks").find({}).toArray(async function(err, result) {
          if (err) throw err;
          var foodtrucks = await FoodtruckGenerator();
          if(result.length <= 0){
            dbO.collection("foodtrucks").insertMany(foodtrucks);
          }else{
            console.log("Trucks already in Db "+foodtrucks.length );
          }

      });


    });

    app.get('/*', (req, res) => {

      res.sendFile(__dirname + '/build/index.html');

    });

}

 MongoClient.connect(url, async (err,db)=>{

  var dbO = db.db("ezEatz");

  console.log("Database is working");

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
          password:data.password,
          profile_color:[ Math.floor(Math.random() * 255),Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
        }

        const NewUser = new UserConstructor(account);

        dbO.collection("users").insertOne(NewUser);

        res.json(NewUser);

      }

  });

  app.post("/api/change_user_address",(req,res)=>{

      const id = req.body.username;
      const address = req.body.address;
      const lat = req.body.lat;
      const lng = req.body.lng;

      const newvalues = { $set: {address: address, lat:lat,lng:lng} };

      dbO.collection("users").updateOne({username:id},{$set:{address: address}}, function(err, res) {

      if (err) throw err;

      console.log("User address has been updated!",res);

    });

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

  app.post("/api/best_rated_trucks", async (req,res) =>{
      var {lat,lng,radius,sort,price_sort} = req.body;

      const data = await dbO.collection("foodtrucks").find({stars: {$gt:3.5}}).toArray();

      var trucks = LoopThroughFoodtruck(data,lat,lng,radius,sort,price_sort);

      res.json(trucks);

  });

  app.post("/api/vegan_trucks", async (req,res) =>{
      var {lat,lng,radius,sort,price_sort} = req.body;

      const data = await dbO.collection("foodtrucks").find({type: {$in:["vegan"]}}).toArray();

      var trucks = LoopThroughFoodtruck(data,lat,lng,radius,sort,price_sort);

      res.json(trucks);

  });

  app.post("/api/nearest_trucks", async (req,res) =>{
      var {lat,lng,radius,sort,price_sort} = req.body;

      const data = await dbO.collection("foodtrucks").find({}).toArray();

      var trucks = LoopThroughFoodtruck(data,lat,lng,radius,sort,price_sort);

      res.json(trucks);

  });


  app.post("/api/cheapest_trucks", async (req,res) =>{
      var {lat,lng,radius,sort,price_sort} = req.body;

      const data = await dbO.collection("foodtrucks").find({expensive: {$lt:3}}).toArray();

      var trucks = LoopThroughFoodtruck(data,lat,lng,radius,sort,price_sort);

      res.json(trucks);

  });

  app.post("/api/login", async (req,res)=>{

    const search = await dbO.collection("users").findOne({password:req.body.password,username:req.body.username});
    res.json(search);

  });


  app.post("/api/google_login", async (req,res)=>{

    const data = req.body;

    const account = {
      name:data.name,
      image:data.image,
      address:data.address,
      orders:[],
      profile_color:[ Math.floor(Math.random() * 255),Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)],
      username:data.username,
      password:data.password,
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
});
