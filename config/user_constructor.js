

class  User {

  constructor(account,verified){

    this.name = account.name;
    this.address = account.address;
    this.username = account.username;
    this.password = account.password;
    this.orders = [];
    this.verified = verified;
    this.image = account.image;
    this.location =null;


  }

  // GetUserLocation = async ()=>{
  //
  //   var location = {lat:null,lng:null}
  //
  //   if(this.address == ""){
  //
  //     navigator.geolocation.getCurrentPosition((pos)=>{
  //
  //      const crd = pos.coords;
  //      location.lat = crd.lat;
  //      location.lng = crd.lng;
  //      this.location = location;
  //      var address = ConvertFromCoords(location.lat,location.lng);
  //      this.address =  `${address.street}, ${address.country}, ${address.state}`;
  //
  //    });
  //
  //
  //  }else{
  //
  //    this.address = this.address;
  //
  //  }
  //
  // }

}

module.exports = User;
