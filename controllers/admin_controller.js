// const UserConstructor = require("./../config/user_constructor.js");
const express = require("express");
const axios = require("axios");
const FoodtruckClass = require("./../config/classes/foodtruck_constructor.js");
const AdminClass = require("./../config/classes/admin_constructor.js");
const router = express.Router();


const AddTruckToUser = (req,res,next) =>{
  console.log(req.body);
}

const FindOneAdmin = (req,res,next) => {
  AdminClass.FindOne(info.username,(results)=>{
    console.log(results);
    if(results){
      res.json(results);
    }else{
      res.json(null);
    }
  })
}

const AddTruckToDb = async (req,res,next) =>{
  var truck = req.body.truck;
  var user = {
    name:req.body.name,
    address:req.body.truck.address,
    username:req.body.username,
    password:req.body.password,
    orders:req.body.orders,
    truck:req.body.truck,
    ownerID:req.body.truck.ownerID,
    profile_color:req.body.profileColor,
    verified:true,
    image:req.body.image,
    location:{
      lat:null,
      lng:null
    }
  }

  var latitude = null;
  var longitude = null;

  const coords = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${truck.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

  if(coords.data.results.length > 0){

    var { lat, lng } = coords.data.results[0].geometry.location;
    latitude = lat;
    longitude = lng;
    user.location.lat = lat;
    user.location.lng = lng;

  }

  new_truck = new FoodtruckClass(truck.ownerID,truck.objectID,truck.name,false,truck.types,3,latitude,longitude,truck.address,truck.logo,truck.background,truck.background,truck.mapLogo,truck.routes,truck.menu,truck.ownerName)

  AdminClass.FindOneUser({username:req.body.username},(result)=>{

    if(!result){
      const new_admin = new AdminClass(user);
      new_admin.save();
      FoodtruckClass.InsertFoodtruck(new_truck,(result)=>{console.log(result)});
    }else{
      console.log("User Already Exists");
    }

    AdminClass.FindAllUsers((users)=>{console.log(users)})

  });


}


exports.AddTruckToUser = AddTruckToUser;
exports.AddTruckToDb = AddTruckToDb;