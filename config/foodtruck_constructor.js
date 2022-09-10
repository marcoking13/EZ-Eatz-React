class Foodtruck {
constructor(ownerID,objectID,name,type,stars,lat,lng,address,logo,banner,background,mapLogo,routes,menu) {
    this.ownerID = ownerID;
    this.objectID = objectID;
    this.name = name;
    this.logo = logo;
    this.lat = lat;
    this.lng = lng;
    this.type = type;
    this.stars = stars;
    this.address = address;
    this.background = background;
    this.banner = banner;
    this.mapLogo = mapLogo;
    this.routes = routes;
    this.menu = menu;
    this.priceAverage = function(prices){
      var total = 0;
      for (var i = 0; i < prices.length;i++){
        total += prices[i];
      }
      var average = total / prices.length;
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
