const GeocodeNormal = require('node-geocoder');
const GeocodeReverse = require("react-geocode");
const GeoDistance = require("geo-distance");
const axios = require("axios");

class Geocoder {

    constructor(){
      this.address = null;
    }

    static TurnCoordsToAddress(lat,lng,cb){

      GeocodeReverse.fromLatLng(lat,lng).then(
        (response) => {

          if(!response){
             cb(null);
             return;
          }

           const address = response.results[0].formatted_address;
           cb(address);

        },
        (error) => {
          console.error(error);
          cb(null)
        }
      );

    }

    static async ConvertAddressToCoords (address,cb){

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
