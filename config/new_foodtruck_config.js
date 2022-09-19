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
const ChinaBowl = require("./foodtrucks/china_bowl.js");
const TheStand = require("./foodtrucks/the_stand.js");

const ConvertToCoords = require("./geocode");

const FoodtruckConfig = async()=>{

  const config = [PitaJungle,RotatingChicken,BurgerJoint,FreezeDry,TheStand,ChinaBowl,FreezeDry];
  const public_images ="./../public/assets/images/";
  const fake_street = ["Scottsdale","Arcadia", "Tempe","Phoenix","Tucson","Paradise Valley","Queen Creek","Peoria","Chandler","Flagstaff","South Phoenix","Desert Ridge","Cave Creek"]
  const foodtrucks = [];

  for (var i =0; i < 50; i++){

    var address = fake_street[Math.floor(Math.random() * fake_street.length )]
    var id = Math.floor(Math.random() * 3000 );
    var ownerID = Math.floor(Math.random() * 3000);
    var truck = Math.floor(Math.random() * config.length);

    foodtrucks.push(config[truck](address,id,ownerID));

    var price_average = foodtrucks[i].priceAverage();

    foodtrucks[i].expensive = foodtrucks[i].expensive(price_average);

    var formatted_address = `${foodtrucks[i].address.city},${foodtrucks[i].address.state}`;

    await foodtrucks[i].convert_address(formatted_address)



  }

  return foodtrucks;

}

module.exports = FoodtruckConfig;
