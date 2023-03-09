const CalculateDistance = require("./../../distance_calculator.js");
const FoodtruckGenerator = require("./../foodtruck_generator.js")
var mongodb = require("mongodb");
const db = require("./../../database/database.js");

class Foodtruck {

   constructor(ownerID,objectID,name,vegan_friendly,type,stars,lat,lng,address,logo,banner,background,mapLogo,routes,menu,ownerName) {
    this.ownerID = ownerID;
    this.priceAverage = 0;
    this.objectID = objectID;
    this.name = name;
    this.ownerName = ownerName;
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
}

   async convert_address (address){

        var {lat,lng} = await ConvertToCoords(address);
        //
        this.lat = lat;
        this.lng = lng;

        return {
          lat:lat,
          lng:lng
        }

    }

   SetExpensive(average){

    if(average < 5){
      this.expensive = 1
    }else if (average > 5 && average < 10){
      this.expensive = 2
    }else if (average > 10 && average < 30){
      this.expensive = 3
    }
    else if(average > 30 && average < 100){
      this.expensive = 4
    }else{
      this.expensive = 5
    }

  }

   PriceAverage(){


      var total = 0;
      var items = 0;

      this.menu.catagories.map((catagory)=>{
        catagory.menu.map((item)=>{
          total += item.price;
          items ++;
        });
      })

      var average = parseInt(total / items);

      this.priceAverage = average;


  }

   static async FindAllTrucks(cb){

        var db_instance =  db.GetDB();
        var found_trucks = await db_instance.collection("foodtrucks").find({}).toArray();

            if(found_trucks && found_trucks.length > 0){
              cb(found_trucks);
            }else{
              cb([]);
            }



  }

   static async InsertFoodtruck(truck,cb){

      var db_instance =  db.GetDB();
      const insert_response = await db_instance.collection("foodtrucks").insertOne(truck);
      if(!insert_response){
        cb(null);
      }else{
        cb("Inserted Foodtrucks");
      }


  }

   static async InsertManyFoodtrucks(cb){

          var new_trucks =  FoodtruckGenerator();
          var db_instance = db.GetDB();
          const insert_response = await db_instance.collection("foodtrucks").insertMany(new_trucks);

              if(!insert_response){
                cb([]);
              }else{
                cb("Inserted Foodtrucks");
              }



  }

   static async FindBestRatedTrucks(cb){

      var db_instance =  db.GetDB();
      var found_trucks = await db_instance.collection("foodtrucks").find({stars: {$gt:3.5}}).toArray();

      if(found_trucks && found_trucks.length > 0){
          cb(found_trucks);
        }else{
          cb([]);
        }


  }

  static async FindOne(_id,cb){

    var db_instance =  db.GetDB();
    // console.log(_id);
    // console.log(new mongodb.ObjectId(_id));
  // var k = await db_instance.collection("foodtrucks").find().toArray();
  // console.log(k)
    var found_trucks = await db_instance.collection("foodtrucks").findOne({ownerID:_id});
    console.log(found_trucks);
    if(found_trucks){
        cb(found_trucks);
      }else{
        cb(null);
      }

  }

  async save(_id){
        var db_instance = db.GetDB();
        console.log(_id);
        if(!_id){
          const insert_response = await db_instance.collection("foodtrucks").insertOne(this);
          if(!insert_response){
            console.log(null)
          }else{

            console.log(this);
          }
        }else{
            const updatedData = await db_instance.collection("foodtrucks").updateOne({ownerID:_id},{$set:this});
            console.log(updatedData);

        }
  }

  static async UpdateLocation(_id,data,cb){
    var db_instance = db.GetDB();
    console.log(data);
    const newvalues = { $set: {address: data.address, lat:data.lat,lng:data.lng} };

        db_instance.collection("adminUsers").updateOne({ownerID:_id},{$set:{address: data.address,lat:data.lat,lng:data.lng}}, function(err, res) {
          console.log(err);
        if (err){

          cb(null)
          return;
        }else{

          cb(data);
      }

     });
  }

  static async UpdateOne(data,cb){
    var db_instance = db.GetDB();
    var updateObj =
      {
        address: data.address,
        logo:data.logo,
        mapLogo:data.mapLogo,
        menu:data.menu,
        name:data.name,
        lat:data.lat,
        lng:data.lng,
        types:data.types,
        background:data.background
      }

    const updatedData = await db_instance.collection("foodtrucks").updateOne({objectID:data.objectID},{$set:  {
        address: data.address,
        logo:data.logo,
        mapLogo:data.mapLogo,
        menu:data.menu,
        name:data.name,
        lat:data.lat,
        lng:data.lng,
        types:data.types,
        background:data.background
      }});
    console.log(updatedData);
  }

  static async DeleteAll(){
      var db_instance = db.GetDB();
    db_instance.collection("foodtrucks").deleteMany().then((results)=>{console.log(results)});

  }
   static async FindCheapestTrucks(cb){

      var db_instance = db.GetDB();
      var found_trucks = await db_instance.collection("foodtrucks").find({expensive: {$lt:3.5}}).toArray();

         if(found_trucks && found_trucks.length > 0){
           cb(found_trucks);
         }else{
           cb([]);
         }



 }

   static async FindVeganTrucks(cb){

      var db_instance = db.GetDB();
      var found_trucks = await db_instance.collection("foodtrucks").find({type: {$in:["vegan"]}}).toArray();

        if(found_trucks && found_trucks.length > 0){
          cb(found_trucks);
        }else{
          cb([]);
        }



}

   static async FindTruckType(query,cb){

      var db_instance = db.GetDB();
      var found_trucks = await db_instance.collection("foodtrucks").find(query).toArray();

          if(found_trucks && found_trucks.length > 0){
            cb(found_trucks);
          }else{
            cb([]);
          }



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
       console.log(trucks[0],trucks.length);
        const data = CalculateDistance(userLocation,foodtruckLocation,radius);
        console.log(data);
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




module.exports = Foodtruck;
