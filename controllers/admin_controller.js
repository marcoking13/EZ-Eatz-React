// const UserConstructor = require("./../config/user_constructor.js");
const express = require("express");
const axios = require("axios");
var mongodb = require("mongodb");
const FoodtruckClass = require("./../config/classes/foodtruck_constructor.js");
const AdminClass = require("./../config/classes/admin_constructor.js");
const router = express.Router();


const AddTruckToUser = (req,res,next) =>{
  console.log(req.body);
}

const EditTruck = async (req,res,next) =>{
  var truck = req.body;
  console.log(truck);
  var latitude = null;
  var longitude = null;

 const coords = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${truck.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

  if(coords){
    if(coords.data.results.length > 0){

      var { lat, lng } = coords.data.results[0].geometry.location;
      latitude = lat;
      longitude = lng;
    }

    truck.lat = latitude;
    truck.longitude = lng;
    new_truck = new FoodtruckClass(truck.ownerID,truck.objectID,truck.name,false,truck.types,3,latitude,longitude,truck.address,truck.logo,truck.background,truck.background,truck.mapLogo,truck.routes,truck.menu,truck.ownerName)
    console.log(truck.ownerID)
    await new_truck.save(truck.ownerID);
    res.json(true);
  }



}

const FindOneAdmin = (req,res,next) => {
  AdminClass.FindOne(req.body.username,(results)=>{
    console.log(results);
    if(results){
      res.json(results);
    }else{
      res.json(null);
    }
  })
}

const UpdateLocation = async (req,res,next) => {
  console.log(req.body);
  AdminClass.FindOne(req.body.username,(results)=>{

    if(results){
      var ownerID = results.ownerID;

      AdminClass.UpdateLocation(ownerID,req.body,(data)=>{
          console.log(data);
        FoodtruckClass.UpdateLocation(ownerID,req.body,(datas)=>{
          console.log(datas);
        })
      });
    }

  });

}

const TrackLocation = async (req,res,next) => {
  AdminClass.FindOne(req.body.username,(results)=>{
    let toggle = false;

    if(results.tracking){
      toggle = false;
    }else{
      toggle = true;
    }

    if(results){
      AdminClass.ToggleTracker({username:req.body.username,toggle:toggle},(success)=>{
        if(success){
          res.json(toggle);
        }else{
          res.json(null);
        }
      })
    }else{
      res.json(null);
    }
  })
}

const AddTruckToDb = async (req,res,next) =>{
  var truck = req.body.truck;
  var user = {
    name:req.body.name,
    address:req.body.address,
    username:req.body.username,
    password:req.body.password,
    orders:req.body.orders,
    truck:req.body.truck,
    ownerID:null,
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

if(coords){
  if(coords.data.results.length > 0){

    var { lat, lng } = coords.data.results[0].geometry.location;
    latitude = lat;
    longitude = lng;
    user.location.lat = lat;
    user.location.lng = lng;

  }
}


  AdminClass.FindOneUser({username:req.body.username},(result)=>{

    if(!result){
      const new_admin = new AdminClass(user);
      new_admin.save();
      AdminClass.FindOne(req.body.username,(result)=>{
         truck.ownerID = new mongodb.ObjectId(result._id);
         new_truck = new FoodtruckClass(truck.ownerID,truck.objectID,truck.name,false,truck.types,3,latitude,longitude,truck.address,truck.logo,truck.background,truck.background,truck.mapLogo,truck.routes,truck.menu,truck.ownerName)
         new_truck.save(null);
         res.json(true);
      });
    }else{
      res.json(true);
    }

    // AdminClass.FindAllUsers((users)=>{console.log(users)})


})





}

const FindAdminTruck = async (req,res,next) => {
  var _id = req.body._id;

  FoodtruckClass.FindOne(new mongodb.ObjectId(_id),(results) =>{
  console.log(results);
    if(results){
      res.json(results);
    }else{
      res.json(null);
    }
  })



}


exports.AddTruckToUser = AddTruckToUser;
exports.FindOneAdmin = FindOneAdmin;
exports.EditTruck = EditTruck;
exports.FindAdminTruck = FindAdminTruck
exports.UpdateLocation = UpdateLocation;
exports.AddTruckToDb = AddTruckToDb;
exports.TrackLocation = TrackLocation;
