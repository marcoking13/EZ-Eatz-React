const ConvertToCoords = require("./../config/geocode.js");
const CalculateDistance = require("./../distance_calculator.js");

const GeoConverter = (req,res,next) => {
  res.json(ConvertToCoords(req.body.address));
}

const DistanceCalculator = (req,res) => {

  var data = req.body;
  const distance = CalculateDistance(data.userLocation,data.foodtruckLocation,data.radius);
  res.json(distance);

}


exports.GeoConverter = GeoConverter;
exports.DistanceCalculator = DistanceCalculator;
