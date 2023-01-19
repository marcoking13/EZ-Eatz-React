const ConvertToCoords = require("./../config/geocode.js");
const Geocoder = require("./../config/geocode_class.js");

const GeoConverter = (req,res,next) => {

    var address = req.body.address;
    Geocoder.TurnCoordsToAddress(address,(formatted_address)=>{
        res.json(formatted_address);
      });

}

const DistanceCalculator = (req,res) => {

    var {userLocation,foodtruckLocation,radius} = req.body;
    Geocoder.CalculateDistance(userLocation,foodtruckLocation,radius, (distance) =>{
      res.json(distance);
    });

}


exports.GeoConverter = GeoConverter;
exports.DistanceCalculator = DistanceCalculator;
