const GeocodeNormal = require('node-geocoder');
const GeocodeReverse = require("react-geocode");
const GeoDistance = require("geo-distance");

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

    static TurnAddressToCoords (address,cb){

      const options = {
        provider: 'google',
        fetch: null,
        apiKey: 'AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE',
        formatter: null // 'gpx', 'string', ...
      };

       const geocoder = NodeGeocoder(options);
       geocoder.geocode(address,(res)=>{

        if(res){
          const { latitude, longitude } = res[0];
          cb({lat:latitude,lng:longitude});
        }else{
          console.error(error);
          cb(null);
        }

      });

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
