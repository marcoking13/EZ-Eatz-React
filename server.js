const express = require("express");
const bodyParser = require("body-parser");
// const geocoder = require("node-geocoder");
const MongoClient = require("mongodb").MongoClient;
var path = require("path");
// var http = require("http");

const userRoutes = require("./routes/user_routes.js");
const userLoginRoutes = require("./routes/user_login_routes.js");
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
app.use(userLoginRoutes);
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

              app.get('/*', (req, res) => {
                res.sendFile(__dirname + '/build/index.html');
              });
            })

          }else{
          
            app.get('/*', (req, res) => {
              res.sendFile(__dirname + '/build/index.html');
            });
          }

    });

}
