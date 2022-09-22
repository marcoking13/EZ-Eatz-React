const ConvertToCoords  = require("./geocode");

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
    this.convert_address = async function(address){

      var {lat,lng} = await ConvertToCoords(address);
      this.lat = lat;
      this.lng = lng;
      return {
        lat:lat,
        lng:lng
      }
    }
    this.menu = menu;
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
