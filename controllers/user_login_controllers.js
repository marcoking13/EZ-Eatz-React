const UserConstructor = require("./../config/user_constructor.js");
const express = require("express");
const router = express.Router();

const ChangeAddress = (req,res,next) => {
      console.log(req.body);
    var updated_props = {
      address:req.body.address,
      username:req.body.username,
      lat:req.body.lat,
      lng:req.body.lng
    }

    UserConstructor.UpdateAccount(updated_props,(feedback)=>{
      console.log(feedback);
    });

  }


const CreateUser = (data) => {

  var {name,address,password,username} = data;
  var potential_user =   {
      name:name,
      image:"",
      address:address,
      orders:[],
      username:username,
      password:password,
      profile_color:[ Math.floor(Math.random() * 255),Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
    }

  const newUser = new UserConstructor(potential_user);
  newUser.save();
  return potential_user;

}

const UserSignup = (req,res,next) => {

    var creds = {
      username:req.body.username,
      password:req.body.password
    }
    var data = req.body;
    console.log(req.body);
    UserConstructor.FindOneUser(creds,(user)=>{

      if(user){
        res.json(null)
      }else{
        var new_user = CreateUser(data);
        res.json(new_user);
      }

    });

  }

const UserLogin = (req,res,next)=>{

    var creds = {
      username:req.body.username,
      password:req.body.password
    }

    UserConstructor.FindOneUser(creds,(user)=>{

      if(user){
        res.json(user)
      }else{
        res.json(null)
      }

    })

  }

const GoogleLogin = (req,res,next) => {

  var creds = {
    username:req.body.username,
    password:req.body.password
  }
  var data = req.body;

  UserConstructor.FindOneUser(creds,(user)=>{

    if(!user){
      var new_user = CreateUser(data);
      res.json(new_user);
    }else{
      res.json(user);
    }

  });

}


exports.GoogleLogin = GoogleLogin;
exports.UserLogin = UserLogin;
exports.UserSignup = UserSignup;
exports.ChangeAddress = ChangeAddress;
