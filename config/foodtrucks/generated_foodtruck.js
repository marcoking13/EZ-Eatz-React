const Menu = require("./../classes/menu_constructor.js")
const Catagory = require("./../classes/menu_catagory.js")
const Item = require("./../classes/menu_item_constructor.js")
const Addon = require("./../classes/addon_constructor.js")
const Ingredients = require("./../classes/ingredient_constructor.js")
const Foodtruck = require("./../classes/foodtruck_constructor.js")
const Address = require("./../classes/address_constructor.js");


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
