const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var url = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/eater_db";
mongoose.connect(url,()=>{
    console.log("foodtrucks colletion connected");


var UserSchema = new Schema({

    name:String,
    address:String,
    zip:Number,
    profilePhoto:String,
    orders:Array,
    account:{
      username:String,
      password:String

    }


  });


  module.exports = mongoose.model("users",UserSchema);

});
