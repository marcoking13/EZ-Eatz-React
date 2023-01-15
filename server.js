const express = require("express");
const bodyParser = require("body-parser");
// const geocoder = require("node-geocoder");
const MongoClient = require("mongodb").MongoClient;
var path = require("path");
// var http = require("http");

const userRoutes = require("./routes/user_routes.js");
const utilRoutes = require("./routes/util_routes.js");

var url = process.env.MONGODB_URI || "mongodb://sableye12:thirdpi1@iad2-c11-0.mongo.objectrocket.com:54979,iad2-c11-2.mongo.objectrocket.com:54979,iad2-c11-1.mongo.objectrocket.com:54979/ezEatz?replicaSet=1ef93570889249a49db7dbe2d95a2050" ;

const UserConstructor = require("./config/user_constructor.js");
const UserSample = require("./config/userSample.js");
const FoodtruckGenerator = require("./config/foodtruck_generator.js")
const FoodtruckClass = require("./config/foodtruck_constructor.js")

const app = express();
const port = process.env.PORT || 4002;

app.use(bodyParser());
app.use(userRoutes);
app.use(utilRoutes);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('build'));

app.listen(port,function(){
    Init();
    console.log("App running on "+port);
});


const Init = () => {

      FoodtruckClass.FindAllTrucks((foodtrucks)=>{

          if(foodtrucks.length < 0){

            FoodtruckClass.InsertManyFoodtrucks(db,(feedback)=>{
              console.log(feedback);

              app.get('/*', (req, res) => {
                res.sendFile(__dirname + '/build/index.html');
              });

            })

          }else{

            console.log("Foodtrucks already in db");

            app.get('/*', (req, res) => {
              res.sendFile(__dirname + '/build/index.html');
            });

          }

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
