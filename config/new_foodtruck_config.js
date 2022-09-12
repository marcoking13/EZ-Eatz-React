const Menu = require("./menu_constructor.js")
const Catagory = require("./menu_catagory.js")
const Item = require("./menu_item_constructor.js")
const Addon = require("./addon_constructor.js")
const Ingredients = require("./ingredient_constructor.js")
const Foodtruck = require("./foodtruck_constructor.js")
const Address = require("./address_constructor.js");

const FreezeDry = require("./foodtrucks/freeze_dry.js");
const PitaJungle = require("./foodtrucks/pita_jungle.js");
const RotatingChicken = require("./foodtrucks/rotating_chicken.js");
const BurgerJoint = require("./foodtrucks/burger_joint.js")


const FoodtruckConfig = ()=>{

  const config = [PitaJungle,RotatingChicken,BurgerJoint,FreezeDry];
  const public_images ="./../public/assets/images/";
  const fake_street = ["Scottsdale","Arcadia", "Tempe","Phoenix","Tucson","Paradise Valley","Queen Creek","Peoria","Chandler","Flagstaff","South Phoenix","Desert Ridge","Cave Creek"]
  const foodtrucks = [];

  for (var i =0; i < 20; i++){

    var fake_street_i = fake_street[Math.floor(Math.random() * fake_street.length )]
    var id = Math.floor(Math.random() * 3000 );
    var ownerID = Math.floor(Math.random() * 3000)

    var randomize_lng = (Math.random() * .056) -111;
    var randomize_lat = (Math.random() * .056) + 31;

    lat = randomize_lat.toFixed(5)
    lng = randomize_lng.toFixed(5);
    lat = parseFloat(lat);
    lng = parseFloat(lng);

    foodtrucks.push(config[Math.floor(Math.random() * config.length)](fake_street_i,id,ownerID,lat,lng));

  }

  return foodtrucks;

}

module.exports = FoodtruckConfig;
