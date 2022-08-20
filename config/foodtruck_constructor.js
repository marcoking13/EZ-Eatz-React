class Foodtruck {
constructor(ownerID,objectID,name,logo,lat,lng,address,background,mapLogo,routes,menu) {
    this.ownerID = ownerID;
    this.objectID = objectID;
    this.name = name;
    this.logo = logo;
    this.lat = lat;
    this.lng = lng;
    this.address = address;
    this.background - background;
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



export Foodtruck;
