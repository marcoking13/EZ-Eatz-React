const Menu = require("./../menu_constructor.js")
const Catagory = require("./../menu_catagory.js")
const Item = require("./../menu_item_constructor.js")
const Addon = require("./../addon_constructor.js")
const Ingredients = require("./../ingredient_constructor.js")
const Foodtruck = require("./../foodtruck_constructor.js")
const Address = require("./../address_constructor.js");

const public_images ="./assets/images/";



const FoodtruckCreate = (ownerID,id,name,is_vegan_friendly,type,stars,lat,lng,address,logo,banner,background,mapLogo,routes,menu) =>{
  return (
    new Foodtruck(
  ownerID,
  id,
  name,
  is_vegan_friendly,
  type,
  stars,
  lat,
  lng,
  address,
  logo,
  banner,
  background,
  mapLogo,
  routes,
  menu

)
)
}

module.exports = FoodtruckCreate;
