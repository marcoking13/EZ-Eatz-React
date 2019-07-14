const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/eater_db",()=>{
    console.log("foodtrucks colletion connected");

  });
var CurrentUserSchema = new Schema({

    name:String,
    address:String,
    profilePhoto:String,
    orders:Array,
    account:{
      username:String,
      password:String

    }


});


module.exports = mongoose.model("currentUser",CurrentUserSchema);
