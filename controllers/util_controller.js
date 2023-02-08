const Geocoder = require("./../config/classes/geocode_class.js");
const axios = require("axios");

const GeoConverter = (req,res,next) => {

    var address = req.body.address;
    console.log(address + " devmcadoejvnfejo");
    Geocoder.ConvertAddressToCoords(address,(response)=>{
        console.log(response);
        if(response){
          res.json(response);
        }else{
          res.json(null);
        }

      })


}

const DistanceCalculator = (req,res) => {

    var {userLocation,foodtruckLocation,radius} = req.body;
    Geocoder.CalculateDistance(userLocation,foodtruckLocation,radius, (distance) =>{
      res.json(distance);
    });

}


exports.GeoConverter = GeoConverter;
exports.DistanceCalculator = DistanceCalculator;
