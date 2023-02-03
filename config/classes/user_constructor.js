 const db = require("./../../database/database.js");

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

  static async FindAllUsers(cb){

     var db_instance = db.GetDB();
     const data = await db_instance.collection("users").find({}).toArray();

     if(data.length > 0){
       cb(data);
     }else{
       cb(null)
     }

  }

  static FindIfUserMatches(users,match_to_this_user,cb){

    for(var i =0; i< users.length; i++){

      if(users[i].username === match_to_this_user.username){
        cb(match_to_this_user);
        return;
      }

    }

    cb(null);

  }

  static async FindOneUser(creds,cb){

     var db_instance = db.GetDB();
     const search = await db_instance.collection("users").findOne({password:creds.password,username:creds.username});

     if(search){
       cb(search);
     }else{
       cb(null);
     }

  }

  static async UpdateAccount(data,cb){

         var db_instance = db.GetDB();

         const newvalues = { $set: {address: data.address, lat:data.lat,lng:data.lng} };

         db_instance.collection("users").updateOne({username:data.username},{$set:{address: data.address}}, function(err, res) {

           if (err){
             cb(false)
             return;
           }else{
             cb(true);
           }

        });

  }

  save(){

      var db_instance = db.GetDB();
      const {...object} = this;

      db_instance.collection("users").insertOne(object,(err,result)=>{
        console.log("");
      });

    }

}

module.exports = User;
