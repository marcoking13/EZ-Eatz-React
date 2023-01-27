//
// const Geocode = require("react-geocode");
//
//
// const ConvertFromCoords = async (lat,lng) =>{
//
//   Geocode.fromLatLng(lat,lng).then(
//     (response) => {
//
//
//       var simple_adrress = {
//         city:null,
//         state:null,
//         country: null
//       }
//
//
//       if(!response){
//         return null;
//       }
//       const address = response.results[0].formatted_address;
//
//       // for (let i = 0; i < response.results[0].address_components.length; i++) {
//       //   for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
//       //     switch (response.results[0].address_components[i].types[j]) {
//       //       case "locality":
//       //         simple_address.city = response.results[0].address_components[i].long_name;
//       //         break;
//       //       case "administrative_area_level_1":
//       //         simple_address.state  = response.results[0].address_components[i].long_name;
//       //         break;
//       //       case "country":
//       //         simple_address.country = response.results[0].address_components[i].long_name;
//       //         break;
//       //     }
//       //   }
//       // }
//
//
//       return address;
//
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
//
//
// }
//
//
// module.exports = ConvertFromCoords;
