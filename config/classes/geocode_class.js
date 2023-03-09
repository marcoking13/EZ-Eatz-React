// const GeocodeNormal = require('node-geocoder');
// const GeocodeReverse = require("react-geocode");
const ReverseGeocoding = new require("reverse-geocoding")
const GeoDistance = require("geo-distance");
const axios = require("axios");

class Geocoder {

    constructor(){
      this.address = null;
    }

    static async TurnCoordsToAddress  (location,cb){

      //
      // ReverseGeocoding(location, function (err, data){
      //   if(err){
      //
      //   cb(null);
      // }else{
      //
      //   cb(data);
      // }
      const response = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

      if(response.data){
        var address = response.data.results[0].formatted_address;
        cb(address);

      }else{
        cb(null);
      }
    }



    static async ConvertAddressToCoords (address,cb){
      if(!address){
        cb(null);
        return;
      }
      if(address.length <= 0){
        cb(null);
        return;
      }else{
          const response = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);
           console.log(response.data.results[0].geometry.location);
          if(response.data.results){

            if(response.data.results.length > 0){

              const { lat, lng } = response.data.results[0].geometry.location;

              var location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng};
              cb(location)

            }else{
              cb(null)
            }

          }else{
            cb(null);
          }
        }

      }



    static CalculateDistance(userLocation,foodtruckLocation,radius){


           var distance = GeoDistance.between(userLocation, foodtruckLocation).human_readable('customary')
           var parsed_distance = parseFloat(distance.distance);
           var config = {
             close:null,
             distance:parsed_distance,
             unit:distance.unit
           }

           if(distance <= radius){
             config.close = true;
             cb(config);
           }else{
             config.close = false;
             cb(config);
         }

       }

  }


module.exports = Geocoder;
