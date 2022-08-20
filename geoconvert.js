
const Geocode = require("react-geocode");


const ConvertToCoords = async (address) =>{

  Geocode.setApiKey("AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE");
  Geocode.enableDebug();

  const {results,error} = Geocode.fromAddress(address);

  const returnResponse = (results,error) => {
    if(results){
      const { lat, lng } = results[0].geometry.location;
      return {lat:lat,lng:lng}
  }else{

      console.error(error);
      return false;

  }
}



}


module.exports = ConvertToCoords;
