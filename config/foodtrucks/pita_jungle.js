const Menu = require("./../classes/menu_constructor.js")
const Catagory = require("./../classes/menu_catagory.js")
const Item = require("./../classes/menu_item_constructor.js")
const Addon = require("./../classes/addon_constructor.js")
const Ingredients = require("./../classes/ingredient_constructor.js")
const Foodtruck = require("./../classes/foodtruck_constructor.js")
const Address = require("./../classes/address_constructor.js");


const public_images ="./assets/images/";

const fake_street = ["Scottsdale","Arcadia", "Tempe","Phoenix","Tucson","Paradise Valley","Queen Creek","Peoria","Chandler","Flagstaff","South Phoenix","Desert Ridge","Cave Creek"]

const FoodtruckCreate = (random_street,id,ownerID,lat,lng) =>{
  console.log(Foodtruck + "mkevkefmvkvmek");
  return (
    new Foodtruck(
  ownerID,
  id,
  "Pita Jungle",
  true,
  ["healthy","greek food","vegan"],
  4,
  lat,
  lng,
  new Address("",random_street,"AZ",""),
  public_images+"/logos/pita_logo.png",
  public_images+"/banners/pita_jungle_banner.png",
  public_images+"/background/pita_background.png",
  public_images+"/logos/pita_map.svg",
  null,
  new Menu("40494949",

  [
  new Catagory("Appetizers","404949490",
  [
  new Item("Regular Hummus","44999949","lemon, chickpeas and garlic",3.99,public_images + "/food/hummus_1.png",300,
  [
    new Ingredients("Garbanzo Garnish",true),
    new Ingredients("Pita Bread",true)
  ],
  [
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
  ],
  [
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
  [
    {
      name:"large",
      price:2.99
    }
  ],
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
new Item("Wood Fired Salmon","31998949","lemon, red bell pepper, chickpeas and garlic",12.99,public_images + "/food/pesto_3.png",800,
[new Ingredients("grilled salmon",true),new Ingredients("wilted spinach",true),new Ingredients("smashed potatoes",true)],
[],
[
new Addon("blue corn chips",2.5),
new Addon("pita chips",2.5),
new Addon("extra pita",3),
new Addon("baked pita chips",3)
],

),

new Item("Pesto Pizza","406698949","lemon, cilantro, jalapeno, chickpeas and garlic",3.99,public_images + "/food/pesto_2.png",300,
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
public_images + "/food/pesto_1.png",400,
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
[
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
new Item("Philly Steak","44990949","a philly steak wrap",6.99,public_images + "/food/philly_1.png",599,
[new Ingredients("philly steak meat",true),new Ingredients("swiss",true),
new Ingredients("mushrooms",true), new Ingredients("mixed greens",true)],
[
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

new Item("Shawarma","44995949","a chicken steak wrap",7.99,public_images + "/food/wrap_1.png",599,
[new Ingredients("grilled chicken",true),new Ingredients("tahini",true),
new Ingredients("pickles",true), new Ingredients("mixed greens",true)],
[
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
public_images + "/food/curry_1.png",400,
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
),

new Catagory("Beverages","jnfdjndfndnfdj",
[
  new Item("Coca Cola","njfdnjdnjvndfjnfdjn_j","an coca cola soda",2.99,public_images + "/food/coke.png",400,
  [],
  [
    {
      name:"small",
      price:-1.99
    },
    {
      name:"large",
      price:1.99
    },
    {
      name:"extra large",
      price:2.99
    }
  ],
  [],
  ),

  new Item("Root Beer","ncjcfnvdjn_fd_njdfn_dfjn","an rootbeer soda / A&W",2.99,public_images + "/food/root_beer.png",400,
  [],
  [
    {
      name:"small",
      price:-1.99
    },
    {
      name:"large",
      price:1.99
    },
    {
      name:"extra large",
      price:2.99
    }
  ],
  [],
  ),

  new Item("Dr Pepper","33ojfiefc3inc","an sparkly soda with a kick",2.99,public_images + "/food/dr_pepper.png",400,
  [],
  [
    {
      name:"small",
      price:-1.99
    },
    {
      name:"large",
      price:1.99
    },
    {
      name:"extra large",
      price:2.99
    }
  ],
  [],
  ),


  new Item("Sierra Mist","5492949","an refreshing sprite soda",2.99,public_images + "/food/sprite.png",400,
  [],
  [
    {
      name:"small",
      price:-1.99
    },
    {
      name:"large",
      price:1.99
    },
    {
      name:"extra large",
      price:2.99
    }
  ],
  [],
  ),

  new Item("Water","5492949","Pure filtered water",.99,public_images + "/food/water.png",0,
  [],
  [
    {
      name:"small",
      price:0
    },
    {
      name:"large",
      price:.50
    },
    {
      name:"extra large",
      price:1.50
    }
  ],
  [],
  ),

new Item("Diet Coca Cola","5492949","an diet coca cola soda",2.99,public_images + "/food/diet_coke.png",400,
[],
[
  {
    name:"small",
    price:-1.99
  },
  {
    name:"large",
    price:1.99
  },
  {
    name:"extra large",
    price:2.99
  }
],
[],
),
new Item("Orange Fanta","5492949","an orange fizzy soda",2.99,public_images + "/food/fanta.png",400,
[],
[
  {
    name:"small",
    price:-1.99
  },
  {
    name:"large",
    price:1.99
  },
  {
    name:"extra large",
    price:2.99
  }
],
[],
)

]


)


]

)
)

)
}
module.exports = FoodtruckCreate;
