const GeoDistance = require("geo-distance");

const CalculateDistance = (userLocation,foodtruckLocation,radius) =>{


       var distance = GeoDistance.between(userLocation, foodtruckLocation).human_readable('customary')
      
       var parsed_distance = parseFloat(distance.distance);

       if(distance <= radius){
         return {
           close:true,
           distance:parsed_distance,
           unit:distance.unit
         }
       }else{
         return {
         close:false,
         distance:parsed_distance,
         unit:distance.unit
       }
     }


    }




module.exports = CalculateDistance;
