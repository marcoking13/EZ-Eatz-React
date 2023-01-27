// const NodeGeocoder = require('node-geocoder');
//
//
// const ConvertToCoords = async (address) =>{
//
//   const options = {
//     provider: 'google',
//
//     // Optional depending on the providers
//     fetch: null,
//     apiKey: 'AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE',
//     formatter: null // 'gpx', 'string', ...
//   };
//
//   const geocoder = NodeGeocoder(options);
//
//   const res = await geocoder.geocode(address);
//
//     if(res){
//       const { latitude, longitude } = res[0];
//       return {lat:latitude,lng:longitude}
//   }else{
//
//       console.error(error);
//       return false;
//
//   }
//
//
// }
//
//
// module.exports = ConvertToCoords;
