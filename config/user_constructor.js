

class  User {

  constructor(account,verified){

    this.name = account.name;
    this.address = account.address;
    this.username = account.username;
    this.password = account.password;
    this.orders = [];
    this.profile_color = account.profile_color;
    this.verified = verified;
    this.image = account.image;
    this.location = null;


  }



}

module.exports = User;
