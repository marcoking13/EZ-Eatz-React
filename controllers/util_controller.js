const Geocoder = require("./../config/classes/geocode_class.js");
const axios = require("axios");

const GeoConverter = (req,res,next) => {

    var address = req.body.address;

    Geocoder.ConvertAddressToCoords(address,(response)=>{

        if(response){
          res.json(response);
        }else{
          res.json(null);
        }

      })


}

const ReverseGeoConverter = async (req,res,next) => {

    var location = req.body;
    Geocoder.TurnCoordsToAddress(location,(response)=>{

        if(response){
          res.json(response);
        }else{
          res.json(null);
        }

      })


}

const CheckIfImageIsReal = (req,res,next) =>{

  // var imageReq = new XMLHttpRequest();
  // imageReq.open("GET", req.body.url, true);
  // imageReq.send();

  // imageReq.onload = function() {
  //   status = imageReq.status;
    var status = 200;
    if (status == 200) //if(statusText == OK)
    {
        res.json(true);
    } else {
        res.json(false);
    }



}

const DistanceCalculator = (req,res) => {

    var {userLocation,foodtruckLocation,radius} = req.body;
    Geocoder.CalculateDistance(userLocation,foodtruckLocation,radius, (distance) =>{
      res.json(distance);
    });

}


exports.GeoConverter = GeoConverter;
exports.ReverseGeoConverter = ReverseGeoConverter;
exports.DistanceCalculator = DistanceCalculator;
exports.CheckIfImageIsReal = CheckIfImageIsReal;
