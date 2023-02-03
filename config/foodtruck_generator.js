const fakeAddress = require("fake-address-generator");
const UniqueNames  = require("unique-names-generator")
const Foodtruck = require("./classes/foodtruck_constructor.js");
const PlaceHolderMenu = require("./placeholder_menu.js");
const Address = require("./classes/address_constructor.js");
const FreezeDry = require("./foodtrucks/freeze_dry.js");
const PitaJungle = require("./foodtrucks/pita_jungle.js");
const RotatingChicken = require("./foodtrucks/rotating_chicken.js");
const BurgerJoint = require("./foodtrucks/burger_joint.js")
const ChinaBowl = require("./foodtrucks/china_bowl.js");
const TheStand = require("./foodtrucks/the_stand.js");
const GenerateFoodtruck = require("./foodtrucks/generated_foodtruck.js");


const FoodtruckGenerator = async() => {

  const names = [];
  const limit = 50;
  const trucks = [];
  const addresses = [];
  const ids = [];
  const types = [];
  const owner_ids = [];
  const stars = [];
  const expensive = [];
  const backgrounds = [];
  const banners = [];
  const mapLogos = [];
  const logos = [];
  const menus = [];
  const placeholder_menu = PlaceHolderMenu;

  const ModifyExistingTrucks = async() => {
    const config = [PitaJungle,RotatingChicken,BurgerJoint,FreezeDry,TheStand,ChinaBowl,FreezeDry,PitaJungle,RotatingChicken,BurgerJoint,FreezeDry,TheStand,ChinaBowl,FreezeDry,PitaJungle,RotatingChicken,BurgerJoint,FreezeDry,TheStand,ChinaBowl,FreezeDry];
    const public_images ="./../public/assets/images/";
    const fake_street = ["Scottsdale","Arcadia", "Tempe","Phoenix","Tucson","Paradise Valley","Queen Creek","Peoria","Chandler","Flagstaff","South Phoenix","Desert Ridge","Cave Creek"]
    const foodtrucks = [];

    for (var i =0; i < config.length; i++){

      var address = fake_street[Math.floor(Math.random() * fake_street.length )]
      var id = Math.floor(Math.random() * 3000 );
      var ownerID = Math.floor(Math.random() * 3000);
      var truck_length = config.length;

      foodtrucks.push(config[i](address,id,ownerID));

      var price_average = foodtrucks[i].priceAverage();
      var formatted_address = `${foodtrucks[i].address.city},${foodtrucks[i].address.state}`;
      foodtrucks[i].expensive = foodtrucks[i].expensive(price_average);

      await foodtrucks[i].convert_address(formatted_address)

      trucks.push(foodtrucks[i]);

    }

  }

  const TypeGenerator = ()=>{

    const types = ["vegan","all-american","asian","greek","healthy","fast-food","salads","steak","burgers","dessert"];
    var generated_types = [];

    for(var i = 0; i <2; i++){
      const random_counter = Math.floor(Math.random() * types.length);
      var random_type = types[random_counter];
      generated_types.push(random_type);
    }

    return generated_types;

  }

  const LogoGenerator = (i,suffix,type)=>{
    var url = "./assets/images/"+type+"/";
    return url+suffix+i+".png";
  }

  const StarsGenerator = ()=>{
    var star =(Math.floor(Math.random() * 4) +1)
    return star;
  }

  const IDGenerator = () => {

    function random_index(arr){
      return arr[Math.floor(Math.random() * arr.length)];
    }

    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const special_cases = ["!","@","#","%","*","_","+","$"];
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]

    var limit = 10;
    var id = "";

    for (var i =0 ; i < limit; i++){

      id+= random_index(alphabet);
      id+= random_index(numbers);
      id+= random_index(special_cases);
      id+= random_index(alphabet);
    }

    return id;

  }

  const VeganGenerator = ()=>{

    var counter = Math.floor(Math.random() * 100);

    if(counter >= 75){
      return true;
    }else{
      return false;
    }

  }

  const AddressGenerator = () => {

    const fake_street = ["Yuma","Bisbee","South Phoenix","Scottsdale","Arcadia", "Tempe","Phoenix","Tucson","Paradise Valley","Queen Creek","Peoria","Chandler","Flagstaff","South Phoenix","Desert Ridge","Cave Creek"]
    var fake_address = fake_street[Math.floor(Math.random() * fake_street.length )]
    var address = new Address("",fake_address,"AZ","");

    return address

  }

  const NameGenerator = () => {

    const config ={ dictionaries: [UniqueNames.colors,UniqueNames.names]}

    var random_name =  UniqueNames.uniqueNamesGenerator(config);
    random_name = random_name.replace("_"," ")
    random_name = random_name.charAt(0).toUpperCase() + random_name.slice(1);

    return random_name;

  }


const InitGenerator = async() => {

    var img_counter = 1;

    for(var i = 0; i < 100; i++){

        if(img_counter > 19){
          img_counter = 1;
        }else{
          img_counter += 1;
        }

        var foodtruck = GenerateFoodtruck(
           IDGenerator(),
           IDGenerator(),
           NameGenerator(),
           VeganGenerator(),
           TypeGenerator(),
           StarsGenerator(),
           0,
           0,
           AddressGenerator(),
           LogoGenerator(img_counter,"gen_logo_","logos"),
           LogoGenerator(img_counter,"gen_banner_","banners"),
           LogoGenerator(img_counter,"gen_background_","background"),
           LogoGenerator(img_counter,"gen_logo_","logos"),
           null,
           placeholder_menu
       );

       var price_average = foodtruck.priceAverage();

       foodtruck.expensive = StarsGenerator();

       var formatted_address = `${foodtruck.address.city},${foodtruck.address.state}`;

       await foodtruck.convert_address(formatted_address)

       trucks.push(foodtruck);

      }


    }

    await ModifyExistingTrucks();
    await InitGenerator();
    return trucks;

}



module.exports = FoodtruckGenerator;
