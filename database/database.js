const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
var url = process.env.MONGODB_URI || "mongodb://sableye12:thirdpi1@iad2-c11-0.mongo.objectrocket.com:54979,iad2-c11-2.mongo.objectrocket.com:54979,iad2-c11-1.mongo.objectrocket.com:54979/ezEatz?replicaSet=1ef93570889249a49db7dbe2d95a2050" ;
let _db;

const MongoConnect = (cb) => {
  MongoClient.connect(url).then((client) => {
    _db = client.db("ezEatz");
    cb("Success")
  }).catch(err => {console.log(err)});
}


const GetDB = () =>{
  if(_db){
    return _db;
  }else{
    console.log("No Database");
    return null;
  }
}



exports.GetDB = GetDB;
exports.MongoConnect = MongoConnect;
