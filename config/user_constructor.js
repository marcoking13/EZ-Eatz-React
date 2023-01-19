const MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGODB_URI || "mongodb://sableye12:thirdpi1@iad2-c11-0.mongo.objectrocket.com:54979,iad2-c11-2.mongo.objectrocket.com:54979,iad2-c11-1.mongo.objectrocket.com:54979/ezEatz?replicaSet=1ef93570889249a49db7dbe2d95a2050" ;


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

  static FindAllUsers(cb){

    MongoClient.connect(url, async (err,db)=>{

     var db_instance = db.db("ezEatz");
     const data = await db_instance.collection("users").find({}).toArray();

     if(data.length > 0){
       cb(data);
     }else{
       cb(null)
     }

   });

  }

  static FindIfUserMatches(users,match_to_this_user,cb){

    for(var i =0; i< users.length; i++){

      if(users[i].username === match_to_this_user.username){
        console.log(match_to_this_user);
        cb(match_to_this_user);
        return;
      }

    }

    cb(null);

  }

  static FindOneUser(creds,cb){
    MongoClient.connect(url, async (err,db)=>{

     var db_instance = db.db("ezEatz");
     const search = await db_instance.collection("users").findOne({password:creds.password,username:creds.username});
     if(search){
       cb(search);
     }else{
       cb(null);
     }
    });


  }

  static UpdateAccount(data,cb){

    MongoClient.connect(url, async (err,db)=>{

     var db_instance = db.db("ezEatz");

     console.log("Database is working");

     const newvalues = { $set: {address: data.address, lat:data.lat,lng:data.lng} };

         db_instance.collection("users").updateOne({username:data.username},{$set:{address: data.address}}, function(err, res) {

         if (err){

           cb(false)
           return;
         }else{

           cb(true);
       }

       });

     });

  }

  save(){

    MongoClient.connect(url, async (err,db)=>{

      var db_instance = db.db("ezEatz");

      const {...object} = this;
      db_instance.collection("users").insertOne(object,(err,result)=>{
        console.log("");
      });

    });

  }



}

module.exports = User;
