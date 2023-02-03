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
  "Rotating Chicken",
  true,
  ["all-american","fast-food"],
  2,
  lat,
  lng,
  new Address("",random_street,"AZ",""),
  public_images+"/logos/chicken_logo.png",
  public_images+"/banners/chicken_banner.png",
  public_images+"/background/johnny_background.png",
  public_images+"/logos/chicken_map.svg",
  null,
  new Menu("10494949",

  [
  new Catagory("Appetizers","104949490",
  [
  new Item("Fried Calamari","14997949","lemon, chickpeas and garlic",8.99,public_images + "/food/chicken_20.png",300,
  [
    new Ingredients("calamari sauce",true),
    new Ingredients("seasoned garnish",true)
  ],
  [
    {
      name:"regular",
      price:0
    },
    {
      name:"large",
      price:2.99
    },
  ],
  [
  new Addon("calamari sauce",2.5),
  new Addon("side of fries",4.5),
  new Addon("side of pickles",3)

  ],

  ),
  new Item("Ceaser Salad","14959749","lemon, chickpeas and garlic",5.99,public_images + "/food/pita_jungle_7.png",300,
  [
    new Ingredients("tomato",true),
    new Ingredients("onions",true),
    new Ingredients("mixed greens",true),
    new Ingredients("croutons",true)
  ],
  [
    {
      name:"regular",
      price:0
    },
    {
      name:"large",
      price:2.99
    },
  ],
  [
  new Addon("ceaser dressing",2.5),
  new Addon("side of croutons",2.5),
  new Addon("side of feta",3)

  ],

  ),

  new Item("Truffle Oil Fries","14699949","lemon, chickpeas and garlic",4.99,public_images + "/food/pita_jungle_7.png",300,
  [
    new Ingredients("parmasene",true),
    new Ingredients("truffle oils",true),
    new Ingredients("salt",true)

  ],
  [
    {
      name:"regular",
      price:0
    },
    {
      name:"large",
      price:2.99
    },
  ],
  [
  new Addon("secret sauce",2.5),
  new Addon("truffle oil",2.99)
  ],

  ),
  new Item("Pretzle Bites","14199949","lemon, chickpeas and garlic",6.99,public_images + "/food/pita_jungle_7.png",300,
  [
    new Ingredients("garlic seasoning",true),
    new Ingredients("cheese fondu",true)

  ],
  [
    {
      name:"regular",
      price:0
    },
    {
      name:"large",
      price:2.99
    },
  ],
  [
  new Addon("extra fondu",2.99)
  ],

  ),
]
),
new Catagory("Entrees","4994949490",
[
  new Item("Grilled Chicken Platter","14959749","lemon, chickpeas and garlic",9.99,public_images + "/food/pita_jungle_7.png",300,
  [
    new Ingredients("grilled chicken",true),
    new Ingredients("brown rice",true),
    new Ingredients("tomato",true),
    new Ingredients("onions",true)
  ],
  [
    {
      name:"rice",
      price:0
    },
    {
      name:"smashed potatoes",
      price:2.99
    },
  ],
  [
  new Addon("side of fries",4.99),
  new Addon("side of smashed potatoes",3.99),
  new Addon("extra chicken",9.99)

  ],

  ),
  new Item("Fried Chicken Nuggets","149597419","lemon, chickpeas and garlic",9.99,public_images + "/food/pita_jungle_7.png",300,
  [
    new Ingredients("side of fries",true),
    new Ingredients("10-piece chicken nuggets",true)
  ],
  [
    {
      name:"regular meal",
      price:0
    },
    {
      name:"large meal",
      price:4.99
    },
  ],
  [
  new Addon("side of fries",4.99),
  new Addon("side of smashed potatoes",3.99),
  new Addon("extra chicken nuggets",2.99)

  ],

  ),
  new Item("Fried Chicken Breast","149533749","lemon, chickpeas and garlic",7.99,public_images + "/food/pita_jungle_7.png",300,
  [
    new Ingredients("fried chicken breast",true),
    new Ingredients("brown rice",true),
    new Ingredients("tomato",true),
    new Ingredients("onions",true)
  ],
  [
    {
      name:"rice",
      price:0
    },
    {
      name:"smashed potatoes",
      price:2.99
    },
  ],
  [
  new Addon("side of fries",4.99),
  new Addon("side of smashed potatoes",3.99),
  new Addon("extra chicken",9.99)

  ]

  )
]
),
new Catagory("Dessert","104949490",
[
  new Item("Ice Cream Sundae","14959749","lemon, chickpeas and garlic",9.99,public_images + "/food/pita_jungle_7.png",300,
  [
    new Ingredients("hot fudge",true),
    new Ingredients("vanilla ice cream",true),
    new Ingredients("cherry",true),
    new Ingredients("rainbow sprinkles",true)
  ],
  [
    {
      name:"vanilla",
      price:0
    },
    {
      name:"french vanilla",
      price:.99
    },
  ],
  [
  new Addon("rainbow sprinkles",1.99),
  new Addon("hot fudge",1.99),
  new Addon("sugar coated pistachios",3.99)

  ]

  ),
  new Item("Ice Cream Cookie Cake","149259749","lemon, chickpeas and garlic",4.99,public_images + "/food/pita_jungle_7.png",300,
  [
    new Ingredients("handmade warm cookie",true)
  ],
  [
    {
      name:"vanilla",
      price:0
    },
    {
      name:"french vanilla",
      price:.99
    },
  ],
  [
    new Addon("rainbow sprinkles",1.99),
    new Addon("hot fudge",1.99),
    new Addon("sugar coated pistachios",3.99)

  ]

  )
]
),
new Catagory("Beverages","504949490",
[
  new Item("Coca Cola","nicrmvmnjernvn","an coca cola soda",2.99,public_images + "/food/coke.png",400,
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

  new Item("Root Beer","r3im3iimc","an rootbeer soda / A&W",2.99,public_images + "/food/root_beer.png",400,
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

  new Item("Dr Pepper","4jfi3ri8fji3","an sparkly soda with a kick",2.99,public_images + "/food/dr_pepper.png",400,
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


  new Item("Sierra Mist","5492jfuij4949","an refreshing sprite soda",2.99,public_images + "/food/sprite.png",400,
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

  new Item("Water","549322949","Pure filtered water",.99,public_images + "/food/water.png",0,
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

new Item("Diet Coca Cola","vjnfnvjfnjn_njrencjen","an diet coca cola soda",2.99,public_images + "/food/diet_coke.png",400,
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
new Item("Orange Fanta","jcvnjfjnvdjnvdfjnfdj","an orange fizzy soda",2.99,public_images + "/food/fanta.png",400,
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
