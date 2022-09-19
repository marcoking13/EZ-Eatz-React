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
  "Burger Joint",
  ["all-american","fast-food"],
  3,
  lat,
  lng,
  new Address("",random_street,"AZ",""),
  public_images+"/logos/burger_logo.png",
  public_images+"/banners/burger_banner.png",
  public_images+"/background/burger_background.png",
  public_images+"/logos/burger_map.svg",
  null,
  new Menu("10494949",

  [
  new Catagory("Appetizers","104934349490",
  [
  new Item("jumbo salted preztles","1449934457949","comes roasted pepper cheese sauce",8.95,public_images + "/food/pretzle_1.png",300,
  [
    new Ingredients("salt",true),
    new Ingredients("roasted pepper cheese sauce",true)
  ],
  [
    {
      name:"two pretzels",
      price:2.99
    },
  ],
  [
  new Addon("roasted pepper sauce",2.99),
  new Addon("extra salt",0.0),

  ],

  ),
  new Item("Garlic Parmesan Fries","14335313959749","garlic oil / shredded reggiano cheese",10.99,public_images + "/food/fries_1.png",300,
  [
    new Ingredients("shredded parmesan",true),
    new Ingredients("garlic oils",true),
    new Ingredients("salt",true),
    new Ingredients("pepper",true)
  ],
  [
    {
      name:"large",
      price:3.99
    },
  ],
  [
  new Addon("garlic oil",1.5),
  new Addon("shredded reggiano cheese",.99),

  ],

  ),

  new Item("Fried Pickles","14622995449","dill pickle chips",11.99,public_images + "/food/pickles_1.png",300,
  [
    new Ingredients("chipotle ranch",true),
    new Ingredients("salt",true)

  ],
  [
    {
      name:"large",
      price:2.99
    },
  ],
  [
    new Addon("chipotle ranch",1.5)
  ],

  ),
  new Item("Mozzarella Sticks","14341219949","mozzarella sticks and marinara dipping sauce",11.95,public_images + "/food/mozz_1.png",300,
  [
    new Ingredients("marinara sauce",true),
    new Ingredients("shredded parmesan",true)

  ],
  [

    {
      name:"6 sticks",
      price:3.99
    },
  ],
  [
  new Addon("marinara sauce",1.99)
  ],

  ),
  new Item("Hellfire Nachos","15431219949","chips / buffalo sauce / bleu cheese crumbles / green onions",11.95,public_images + "/food/chips_1.png",300,
  [
    new Ingredients("buffalo sauce",true),
    new Ingredients("bleu cheese crumbles",true),
    new Ingredients("green onions",true)
  ],
  [

  ],
  [
  new Addon("green chips",3.99),
  new Addon("bleu cheese crumbles",4.99),
  new Addon("hellfire chips",3.99)
  ],

  ),
  new Item("Chicken Tenders","145441219949","4 tenders with fries and bbq sauce",12.95,public_images + "/food/tenders_1.png",300,
  [
    new Ingredients("BBQ Sauce",true),

  ],
  [

    {
      name:"6 tenders",
      price:4.99
    },
  ],
  [
  new Addon("extra fries",5.99),
  new Addon("extra BBQ sauce",2.99)
  ],

  ),
]
),
new Catagory("Sliders","49943344944349490",
[
  new Item("Buffalo Chicken Sliders","149593749","shredded buffalo chicken / bleu cheese crumbles",12.95,public_images + "/food/sliders_1.png",300,
  [
    new Ingredients("toasted bun",true),
    new Ingredients("shredded buffalo chicken",true),
    new Ingredients("bleu cheese crumbles",true)

  ],
  [

    {
      name:"6 sliders",
      price:4.99
    },
  ],
  [
  new Addon("side of garlic fries",4.99),
  new Addon("side of cheese burger fries",6.99),
    new Addon("add slider",2.99)

  ],

  ),
  new Item("Cheeseburger Sliders","1339597419","american cheeseburgers with carmelized onions",13.99,public_images + "/food/sliders_2.png",300,
  [
    new Ingredients("carmelized onions",true),
    new Ingredients("american cheese",true),
    new Ingredients("au jus",true)
  ],
  [

    {
      name:"5 sliders",
      price:3.99
    },
  ],
  [
    new Addon("side of garlic fries",4.99),
    new Addon("side of cheese burger fries",6.99),
    new Addon("add slider",2.99)

  ],

  ),
  new Item("Bacon PB&J Cheeseburger","93939094909340","sugar cured bacon, peanut butter and jelly / cheddar",14.99,public_images + "/food/sliders_3.png",300,
  [
    new Ingredients("sugar cured bacon",true),
    new Ingredients("peanut butter",true),
    new Ingredients("grape jelly",true),
    new Ingredients("cheddar",true),
    new Ingredients("chipotle honey sauce",true)
  ],
  [

    {
      name:"6 sliders",
      price:5.99
    },
  ],
  [
    new Addon("side of garlic fries",4.99),
    new Addon("side of cheese burger fries",6.99),
    new Addon("add slider",3.99)

  ]

  )
]
),
new Catagory("1/2 LB Burgers","439349043903490",
[
  new Item("Jucy Lucy","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
  [
    new Ingredients("lettuce",true),
    new Ingredients("tomatoes",true),
    new Ingredients("pickles",true),
    new Ingredients("cheddar",true)
  ],
  [

    {
      name:"wheat bun",
      price:0
    },
    {
      name:"gluten free",
      price:0
    },
  ],
  [
  new Addon("chips",1.99),
  new Addon("tots",2.99),
  new Addon("sweet tots",2.99)

  ]

  ),
  new Item("Bacon PB&J","49349034909340","sugar cured bacon / peanut butter and jelly / cheddar / honey sauce",16.99,public_images + "/food/burgers_2.png",300,
  [
    new Ingredients("sugar cured bacon",true),
    new Ingredients("peanut butter",true),
    new Ingredients("grape jelly",true),
    new Ingredients("cheddar",true),
    new Ingredients("chipotle honey sauce",true)
  ],
  [

    {
      name:"wheat bun",
      price:0
    },
    {
      name:"gluten free",
      price:0
    },
  ],
  [
    new Addon("chips",1.99),
    new Addon("tots",2.99),
    new Addon("sweet tots",2.99),
    new Addon("honey sauce",.99)
]
  ),
  new Item("CB & CB","393984","swiss / carmelized onion / lettuce / garlic aioli",15.99,public_images + "/food/burgers_1.png",300,
  [
    new Ingredients("swiss",true),
    new Ingredients("carmelized onion",true),
    new Ingredients("lettuce",true),
    new Ingredients("garlic aioli",true),
  ],
  [

    {
      name:"wheat bun",
      price:0
    },
    {
      name:"gluten free",
      price:0
    },
  ],
  [
    new Addon("chips",1.99),
    new Addon("tots",2.99),
    new Addon("sweet tots",2.99),
    new Addon("garlic aioli",.99)
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
