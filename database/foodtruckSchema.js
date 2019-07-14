const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/eater_db",()=>{
    console.log("foodtrucks colletion connected");
  });
var TruckSchema = new Schema({
    name:String,
    logo:String,
    locations:[{
      address:{
        street:String,
        state:String,
        zip:Number,
        city:String
      }
    }],
    type:Array,
    ownerID:Number,
    __id:String,
    menu:[{
      catagory:String,
      id:String,
      food:[{
        name:String,
        id:String,
        recipe:Array,
        price:Number,
        calories:Number,
        image:String
      }]
    }],
    backgroundFinder:String,
    backgroundMenu:String,
    sides:[{
        name:String,
        price:Number,
        image:String
    }]
});


module.exports = mongoose.model("foodtruck",TruckSchema);
