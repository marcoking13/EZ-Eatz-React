
const Menu = require("./../menu_constructor.js")
const Catagory = require("./../menu_catagory.js")
const Item = require("./../menu_item_constructor.js")
const Addon = require("./../addon_constructor.js")
const Ingredients = require("./../ingredient_constructor.js")
const Foodtruck = require("./../foodtruck_constructor.js")
const Address = require("./../address_constructor.js");

const public_images ="./assets/images/";

const fake_street = ["Scottsdale","Arcadia", "Tempe","Phoenix","Tucson","Paradise Valley","Queen Creek","Peoria","Chandler","Flagstaff","South Phoenix","Desert Ridge","Cave Creek"]

const FoodtruckCreate = (random_street,id,ownerID,lat,lng) =>{
  return (
    new Foodtruck(
  ownerID,
  id,
  "Pita Jungle",
  ["healthy","greek food"],
  4,
  lat,
  lng,
  new Address("",random_street,"AZ",""),
  public_images+"/logos/pita_logo.png",
  public_images+"/banners/pita_jungle_banner.png",
  public_images+"/background/pita_background.png",
  public_images+"/logos/pita_logo.png",
  null,
  new Menu("40494949",

  [
  new Catagory("Appetizers","404949490",
  [
  new Item("Regular Hummus","44999949","lemon, chickpeas and garlic",3.99,public_images + "/food/pita_jungle_8.png",300,
  [
    new Ingredients("Garbanzo Garnish",true),
    new Ingredients("Pita Bread",true)
  ],
  [
    {
      name:"small",
      price:0
    },
    {
      name:"large",
      price:2.99
    },
  ],
  [
  new Addon("blue corn chips",2.5),
  new Addon("pita chips",2.5),
  new Addon("extra pita",3),
  new Addon("baked pita chips",3)
  ],

  ),
  new Item("Red Bell Pepper Hummus","44998949","lemon, red bell pepper, chickpeas and garlic",3.99,public_images + "/food/pita_jungle_4.png",300,
  [
    new Ingredients("Garbanzo Garnish",true),
    new Ingredients("Pita Bread",true)
  ]
  [
    {
      name:"small",
      price:0
    },
    {
      name:"large",
      price:2.99
    }
  ],
  [
  new Addon("blue corn chips",2.5),
  new Addon("pita chips",2.5),
  new Addon("extra pita",3),
  new Addon("baked pita chips",3)
  ],

  ),

  new Item("Cilantro Jalapeno Hummus","44398949","lemon, cilantro, jalapeno, chickpeas and garlic",3.99,public_images + "/food/pita_jungle_3.png",300,
  [
    new Ingredients("Garbanzo Garnish",true),
    new Ingredients("Pita Bread",true)
  ],
  [
    {
      name:"small",
      price:0
    },
    {
      name:"large",
      price:2.99
    }
  ],
  [
  new Addon("blue corn chips",2.5),
  new Addon("pita chips",2.5),
  new Addon("extra pita",3),
  new Addon("baked pita chips",3)
  ],

  ),
  new Item("Greek Salad","44298949","Our housemade greek salad",3.99,
  public_images + "/food/pita_jungle_7.png",400,
  [new Ingredients("mixed greens",true),new Ingredients("tomato",true),new Ingredients("feta",true),new Ingredients("lemon dressing",true)],
  [{
    name:"small",
    price:0
  },
  {
    name:"large",
    price:2.99
  }],
  [
  new Addon("crushed pita chips",2.5),
  new Addon("golden raisans",2.5),
  new Addon("extra tomato",3),
  new Addon("extra olives",3),
  new Addon("extra onions",3),
  new Addon("extra feta",3),
  new Addon("extra vinegrette",3)
  ],

  ),

]
),
new Catagory("Specials","4994949490",
[
new Item("Chicken Combo","44399949","lemon, chickpeas and garlic",10.99,public_images + "/food/pita_jungle_10.png",300,
[new Ingredients("grilled chicken"),new Ingredients("tomato sauce"),new Ingredients("smashed potatoes")],
[],
[
new Addon("blue corn chips",2.5),
new Addon("pita chips",2.5),
new Addon("extra pita",3),
new Addon("baked pita chips",3)
],

),
new Item("Wood Fired Salmon","31998949","lemon, red bell pepper, chickpeas and garlic",12.99,public_images + "/food/pita_jungle_8.png",800,
[new Ingredients("grilled salmon",true),new Ingredients("wilted spinach",true),new Ingredients("smashed potatoes",true)],
[],
[
new Addon("blue corn chips",2.5),
new Addon("pita chips",2.5),
new Addon("extra pita",3),
new Addon("baked pita chips",3)
],

),

new Item("Pesto Pizza","406698949","lemon, cilantro, jalapeno, chickpeas and garlic",3.99,public_images + "/food/pita_jungle_12.png",300,
[new Ingredients("pesto sauce",true),new Ingredients("roasted mushrooms",true),
new Ingredients("spinach",true), new Ingredients("feta",true)],
[{
  name:"gluten-free",
  price:1.99
},
{
  name:"califlower crust",
  price:3.99
}],
[
new Addon("blue corn chips",2.5),
new Addon("pita chips",2.5),
new Addon("extra pita",3),
new Addon("baked pita chips",3)
],

),
new Item("Lavash Pizza","44298949","Our housemade greek salad",3.99,
public_images + "/food/pita_jungle_13.png",400,
[new Ingredients("olives",true),new Ingredients("roasted mushrooms",true),
new Ingredients("spinach",true), new Ingredients("feta",true)],
[{
  name:"gluten-free",
  price:1.99
},
{
  name:"califlower crust",
  price:3.99
}],
[
new Addon("crushed pita chips",2.5),
new Addon("golden raisans",2.5),
new Addon("extra tomato",3),
new Addon("extra olives",3),
new Addon("extra onions",3),
new Addon("extra feta",3),
new Addon("extra vinegrette",3)
],

),

]
),
new Catagory("Entrees","404949490",
[
new Item("Gyro","449998849","a lamb-beef wrap",8.99,public_images + "/food/pita_jungle_1.png",599,
[new Ingredients("gyro meat",true),new Ingredients("tzaiki",true),
new Ingredients("pickles",true), new Ingredients("mixed greens",true)],
[{
  name:"wrap",
  price:0
},
{
  name:"bowl",
  price:0
}],
[
new Addon("tzaiki",2.5),
new Addon("tahnini",2.5),
new Addon("pickles",3),
new Addon("garlic dip",3)
],

),
new Item("Philly Steak","44990949","a philly steak wrap",6.99,public_images + "/food/pita_jungle_11.png",599,
[new Ingredients("philly steak meat",true),new Ingredients("swiss",true),
new Ingredients("mushrooms",true), new Ingredients("mixed greens",true)],
[{
  name:"wrap",
  price:0
},
{
  name:"bowl",
  price:0
}],
[
new Addon("tzaiki",2.5),
new Addon("tahnini",2.5),
new Addon("pickles",3),
new Addon("garlic dip",3)
],

),

new Item("Shawarma","44995949","a chicken steak wrap",7.99,public_images + "/food/pita_jungle_6.png",599,
[new Ingredients("grilled chicken",true),new Ingredients("tahini",true),
new Ingredients("pickles",true), new Ingredients("mixed greens",true)],
[{
  name:"wrap",
  price:0
},
{
  name:"bowl",
  price:0
}],
[
new Addon("tzaiki",2.5),
new Addon("tahnini",2.5),
new Addon("pickles",3),
new Addon("garlic dip",3)
],

),
new Item("Chicken Curry Salad","44298949","Our housemade chicken curry salad",10.99,
public_images + "/food/pita_jungle_15.png",400,
[new Ingredients("grilled chicken",true),new Ingredients("curry sauce",true),
new Ingredients("mixed greens",true), new Ingredients("onions",true)],
[],
[
  new Addon("crushed pita chips",2.5),
  new Addon("golden raisans",2.5),
  new Addon("extra tomato",3),
  new Addon("extra olives",3),
  new Addon("extra onions",3),
  new Addon("extra feta",3),
  new Addon("extra vinegrette",3)
],

),

]
)




]



)
)

)
}
module.exports = FoodtruckCreate;
