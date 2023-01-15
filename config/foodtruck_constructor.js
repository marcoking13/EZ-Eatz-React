const ConvertToCoords  = require("./geocode");
const CalculateDistance = require("./../distance_calculator.js");
const MongoClient = require("mongodb").MongoClient;
const FoodtruckGenerator = require("./foodtruck_generator.js")
var url = process.env.MONGODB_URI || "mongodb://sableye12:thirdpi1@iad2-c11-0.mongo.objectrocket.com:54979,iad2-c11-2.mongo.objectrocket.com:54979,iad2-c11-1.mongo.objectrocket.com:54979/ezEatz?replicaSet=1ef93570889249a49db7dbe2d95a2050" ;


class Foodtruck {
constructor(ownerID,objectID,name,vegan_friendly,type,stars,lat,lng,address,logo,banner,background,mapLogo,routes,menu) {
    this.ownerID = ownerID;
    this.objectID = objectID;
    this.name = name;
    this.vegan_friendly = vegan_friendly;
    this.logo = logo;
    this.lat = lat;
    this.lng = lng;
    this.type = type;
    this.stars = stars;
    this.distance = null,
    this.distance_int = 0,
    this.address = address;
    this.background = background;
    this.banner = banner;
    this.mapLogo = mapLogo;
    this.routes = routes;
    this.menu = menu;

    this.convert_address = async function(address){

        var {lat,lng} = await ConvertToCoords(address);
        //
        this.lat = lat;
        this.lng = lng;

        return {
          lat:lat,
          lng:lng
        }

    }





    this.expensive = function(average){

      if(average < 5){
        return 1
      }else if (average > 5 && average < 10){
        return 2
      }else if (average > 10 && average < 30){
        return 3
      }
      else if(average > 30 && average < 100){
        return 4
      }else{
        return 5
      }


    }

    this.priceAverage = function(prices){

      var total = 0;
      var items = 0;

      this.menu.catagories.map((catagory)=>{
        catagory.menu.map((item)=>{
          total += item.price;
          items ++;
        });
      })

      var average = parseInt(total / items);


      return average;

    }

  }
  //
  //  FindAllTruckPublic(cb){
  //
  //   MongoClient.connect(url, async (err,db)=>{
  //     var db_instance = db.db("ezEatz");
  //     db_instance.collection("foodtrucks").find({}).toArray((found_trucks)=>{
  //
  //         if(found_trucks && found_trucks.length > 0){
  //           cb(found_trucks);
  //         }else{
  //           cb([]);
  //         }
  //
  //     });
  //   });
  //
  // }

  static FindAllTrucks(cb){

      MongoClient.connect(url,async (err,db)=>{
      var db_instance = db.db("ezEatz");
      var found_trucks = await db_instance.collection("foodtrucks").find({}).toArray();
      console.log(found_trucks.length);
        if(found_trucks && found_trucks.length > 0){
          cb(found_trucks);
        }else{
          cb([]);
        }

  });


  }

  static async InsertManyFoodtrucks(cb){

          var new_trucks = await FoodtruckGenerator();
          MongoClient.connect(url, async (err,db)=>{
          var db_instance = db.db("ezEatz");
          db_instance.collection("foodtrucks").insertMany(new_trucks,(err,result) =>{
            if(err){
              cb(err);
            }else{
              cb("Inserted Foodtrucks");
            }
          });

      });

  }


   static FindBestRatedTrucks(cb){

  MongoClient.connect(url, async (err,db)=>{
      var db_instance = db.db("ezEatz");
      var found_trucks = await db_instance.collection("foodtrucks").find({stars: {$gt:3.5}}).toArray();
        console.log(found_trucks);

          if(found_trucks && found_trucks.length > 0){
            cb(found_trucks);
          }else{
            cb([]);
          }

      });

  }

  static FindCheapestTrucks(cb){

    MongoClient.connect(url, async (err,db)=>{
      var db_instance = db.db("ezEatz");
      var found_trucks = await db_instance.collection("foodtrucks").find({expensive: {$lt:3.5}}).toArray();
       console.log(found_trucks.length);

         if(found_trucks && found_trucks.length > 0){
           cb(found_trucks);
         }else{
           cb([]);
         }
     });

 }

 static FindVeganTrucks(cb){

    MongoClient.connect(url, async (err,db)=>{
      var db_instance = db.db("ezEatz");
      var found_trucks = await db_instance.collection("foodtrucks").find({type: {$in:["vegan"]}}).toArray();

        if(found_trucks && found_trucks.length > 0){
          cb(found_trucks);
        }else{
          cb([]);
        }

    });

}

static FindTruckType(query,cb){

  MongoClient.connect(url, async (err,db)=>{
      var db_instance = db.db("ezEatz");
      var found_trucks = await db_instance.collection("foodtrucks").find(query).toArray();
        console.log(found_trucks.length);
          if(found_trucks && found_trucks.length > 0){
            cb(found_trucks);
          }else{
            cb([]);
          }

    });

}



  static FilterTrucks(data,lat,lng,radius,sort,price_sort,cb) {

      var trucks = [];

      if(!data || data.length <= 0){
        cb([]);
        return;
      }
      data.map((truck)=>{

        const userLocation = {
          lat:lat,
          lng:lng
        }

        const foodtruckLocation = {
          lat:truck.lat,
          lng:truck.lng
        }

        const data = CalculateDistance(userLocation,foodtruckLocation,radius);

        if(data.distance <= radius && price_sort >= truck.expensive){

          if(sort.name){

            if(sort.name == "ratings"){

              if(sort.criteria <= truck.stars){

                truck.distance = data.distance.toString() +""+ data.unit;
                truck.distance_int = data.distance;
                trucks.push(truck);

              }

            }else if(sort.name == "nearest"){

                if(sort.criteria >= data.distance){
                  truck.distance = data.distance.toString() +""+ data.unit;
                  trucks.push(truck);
                }

            }

            }else{
              truck.distance = data.distance.toString() +""+ data.unit;
              trucks.push(truck);
            }

        }

      });
      if(trucks.length > 0 && trucks){
        cb(trucks);
      }else{
        cb([])
      }


  }



}



class Catagory {

  constructor(catagory,id,food){

    this.catagory = catagory;
    this.id = id;
    this.food = food;

  }

}

class Item {

  constructor(name,id,price,image,calories,ingredients,options,addon){

    this.options = options;
    this.id = id;
    this.ingredients = ingredients;
    this.addon = addon;

  }

}

class Ingredients{

  constructor(name,display){

    this.name = name;
    this.display = display;
  }


}

class Addon {

    constructor(name,price){

      this.name=name,
      this.price=price

    }

}



module.exports = Foodtruck;
