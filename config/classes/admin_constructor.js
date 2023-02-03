const MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGODB_URI || "mongodb://sableye12:thirdpi1@iad2-c11-0.mongo.objectrocket.com:54979,iad2-c11-2.mongo.objectrocket.com:54979,iad2-c11-1.mongo.objectrocket.com:54979/ezEatz?replicaSet=1ef93570889249a49db7dbe2d95a2050" ;
const db = require("./../../database/database.js");

class  Admin {

  constructor(account,verified){

    this.name = account.name;
    this.address = account.address;
    this.username = account.username;
    this.password = account.password;
    this.orders = [];
    this.truck = account.truck;
    this.ownerID = account.truck.ownerID;
    this.profile_color = account.profile_color;
    this.verified = verified;
    this.image = account.image;
    this.location = null;

  }

  static async FindAllUsers(cb){

     var db_instance = db.GetDB();
     const data = await db_instance.collection("adminUsers").find({}).toArray();

     if(data.length > 0){
       cb(data);
     }else{
       cb(null)
     }

  }

  static async FindOne(username,cb){

     var db_instance = db.GetDB();
     const data = await db_instance.collection("adminUsers").findOne({username:username}).toArray();

     if(data.length > 0){
       cb(data[0]);
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
     const search = await db_instance.collection("adminUsers").findOne({username:creds.username});

     if(search){
       cb(search);
     }else{
       cb(null);
     }

  }

  static async UpdateAccount(data,cb){

     var db_instance = db.GetDB();
     const newvalues = { $set: {address: data.address, lat:data.lat,lng:data.lng} };

         db_instance.collection("adminUsers").updateOne({username:data.username},{$set:{address: data.address}}, function(err, res) {

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
      console.log(object);

      db_instance.collection("adminUsers").insertOne(object,(err,result)=>{
        console.log("Inserted")
      });

  }

}

module.exports = Admin;
