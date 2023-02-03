const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
const userRoutes = require("./routes/user_routes.js");
const db = require("./database/database.js");
const userLoginRoutes = require("./routes/user_login_routes.js");
const utilRoutes = require("./routes/util_routes.js");
const adminRoutes  = require("./routes/admin_routes.js");
const app = express();
const port = process.env.PORT || 4002;

const UserConstructor = require("./config/classes/user_constructor.js");
const FoodtruckGenerator = require("./config/foodtruck_generator.js")
const FoodtruckClass = require("./config/classes/foodtruck_constructor.js")

app.use(bodyParser());
app.use(userRoutes);
app.use(utilRoutes);
app.use(userLoginRoutes);
app.use(adminRoutes);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('build'));

db.MongoConnect(()=>{
  app.listen(port,function(){
      Init();
      console.log("App running on "+port);
  });
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
