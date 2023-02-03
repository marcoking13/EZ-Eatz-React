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
  return (
    new Foodtruck(
  ownerID,
  id,
  "China's Bowl",
  true,
  ["asian","fast-food"],
  2,
  lat,
  lng,
  new Address("",random_street,"AZ",""),
  public_images+"/logos/china_logo.png",
  public_images+"/banners/china_banner.png",
  public_images+"/background/china_background.png",
  public_images+"/logos/china_map.svg",
  null,
  new Menu("10494949",

  [
  new Catagory("Appetizers","104934349490",
  [
  new Item("cream cheese rangoon","1449934457949","comes with 3 rangoons",5.95,public_images + "/food/rangoon_1.png",300,
  [
    new Ingredients("salt",true),
  ],
  [
    {
      name:"6 rangoos",
      price:2.99
    },
  ],
  [
  new Addon("spicy mayo sauce",1.99),
  new Addon("fortune cookie",.99)

  ],

  ),
  new Item("Chicken Egg Roll","14335313959749","garlic oil / shredded reggiano cheese",10.99,public_images + "/food/egg_roll_1.png",300,
  [
    new Ingredients("chicken",true),
    new Ingredients("egg",true),
    new Ingredients("asian spices",true),
    new Ingredients("salt",true)
  ],
  [
    {
      name:"4 rolls",
      price:3.99
    },
  ],
  [
  new Addon("spicy mayo sauce",1.5),
  new Addon("fortune cookie",.99),
  new Addon("fortune cookie",.99)
  ],

  ),

  new Item("Original Orange Chicken","14622995449","our most popular dish",6.99,public_images + "/food/orange_chicken_1.png",300,
  [
    new Ingredients("orange sauce",true),
    new Ingredients("salt",true)

  ],
  [
    {
      name:"large",
      price:2.99
    },
  ],
  [
    new Addon("spicy mayo",1.5),
    new Addon("chow mein",2.99),
    new Addon("fortune cookie",.99)
  ],

  ),
  new Item("Honey Walnut Shrimp","14341219949","honey glazed shimp and walnuts with chow mein",11.95,public_images + "/food/honey_shrimp_1.png",300,
  [
    new Ingredients("glazed walnuts",true),
    new Ingredients("onions",true),
    new Ingredients("chow mein",true)

  ],
  [

    {
      name:"big plate",
      price:2.99
    },
    {
      name:"bigger plate",
      price:4.99
    },
  ],
  [
  new Addon("brown rice",1.99),
  new Addon("white rice",1.99),
  new Addon("chow mein",1.99),
  new Addon("fortune cookie",.99)
  ],

  ),
  new Item("Fried Rice","145441219949","fried rice",12.95,public_images + "/food/fried_rice_1.png",300,
  [
    new Ingredients("salt",true),

  ],
  [

    {
      name:"6 tenders",
      price:4.99
    },
  ],
  [
  new Addon("extra fries",5.99),
  new Addon("extra BBQ sauce",2.99),
  new Addon("fortune cookie",.99)
  ],

  ),
]
),
new Catagory("Entrees","49943344944349490",
[
  new Item("Mushroom Chicken","149593749","shredded buffalo chicken / bleu cheese crumbles",12.95,public_images + "/food/china_2.png",300,
  [
    new Ingredients("mushrooms",true),
    new Ingredients("carrots",true),
    new Ingredients("grilled chicken",true)

  ],
  [

    {
      name:"big plate",
      price:3.99
    },
    {
      name:"bigger plate",
      price:5.99
    },
  ],
  [
  new Addon("chow mein",1.99),
  new Addon("brown rice",1.99),
  new Addon("extra chicken",2.99),
  new Addon("fortune cookie",.99)

  ],

  ),
  new Item("Black Pepper Chicken","1339597419","american cheeseburgers with carmelized onions",13.99,public_images + "/food/china_3.png",300,
  [
    new Ingredients("black pepper",true),
    new Ingredients("chow mein",true),
    new Ingredients("grilled chicken",true),
    new Addon("fortune cookie",.99)
  ],
  [
    {
      name:"big plate",
      price:3.99
    },
    {
      name:"bigger plate",
      price:5.99
    },
  ],
  [
    new Addon("chow mein",1.99),
    new Addon("brown rice",1.99),
    new Addon("extra chicken",2.99),
    new Addon("fortune cookie",.99)

  ],

  ),
  new Item("String Bean Chicken","93939094909340","sugar cured bacon, peanut butter and jelly / cheddar",14.99,public_images + "/food/china_4.png",300,
  [
    new Ingredients("string beans",true),
    new Ingredients("grilled chicken breast",true),
    new Ingredients("chow mein",true),
    new Ingredients("brown rice",true),
    new Ingredients("soy sauce",true),
    new Addon("fortune cookie",.99)
  ],
  [

    {
      name:"big plate",
      price:3.99
    },
    {
      name:"bigger plate",
      price:5.99
    },
  ],
  [
    new Addon("chow mein",1.99),
    new Addon("brown rice",1.99),
    new Addon("extra chicken",2.99),
    new Addon("fortune cookie",.99)

  ]

  )
]
),

new Catagory("Beverages","83h4f98345hf954hj9ufhh9ghf9h49s",
[
  new Item("Coca Cola","vmnjfnvjrfnvjjrenvkjervnrjknr","an coca cola soda",2.99,public_images + "/food/coke.png",400,
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

  new Item("Root Beer"," jfnvjfndkcnjewmxksmcdkndjkn","an rootbeer soda / A&W",2.99,public_images + "/food/root_beer.png",400,
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

  new Item("Dr Pepper","vnjfnjfnjvnfjnvjfvnjnf","an sparkly soda with a kick",2.99,public_images + "/food/dr_pepper.png",400,
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


  new Item("Sierra Mist","hg8g7hg78h8547h5hg8h5h","an refreshing sprite soda",2.99,public_images + "/food/sprite.png",400,
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

  new Item("Water","4tyhvb874vh844h48vhs","Pure filtered water",.99,public_images + "/food/water.png",0,
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

new Item("Diet Coca Cola","j894gh8v4vh8thgv85hvb578tbh78b85h","an diet coca cola soda",2.99,public_images + "/food/diet_coke.png",400,
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
new Item("Orange Fanta","jvr4r9hjvj9u4tvhhv9uh4t9uhvt94","an orange fizzy soda",2.99,public_images + "/food/fanta.png",400,
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
