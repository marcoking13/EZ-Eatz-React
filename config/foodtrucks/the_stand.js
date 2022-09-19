
const Menu = require("./../menu_constructor.js")
const Catagory = require("./../menu_catagory.js")
const Item = require("./../menu_item_constructor.js")
const Addon = require("./../addon_constructor.js")
const Ingredients = require("./../ingredient_constructor.js")
const Foodtruck = require("./../foodtruck_constructor.js")
const Address = require("./../address_constructor.js");

const public_images ="./assets/images/";

const FoodtruckCreate = (random_street,id,ownerID,lat,lng) =>{
  return (
    new Foodtruck(
  ownerID,
  id,
  "The Stand",
  ["all-american","fast-food"],
  4,
  lat,
  lng,
  new Address("",random_street,"AZ",""),
  public_images+"/logos/stand_logo.png",
  public_images+"/banners/stand_banner.png",
  public_images+"/background/stand_background.png",
  public_images+"/logos/the_stand_map.svg",
  null,
  new Menu("585875787854hh558855hg8gh58h8",

  [
  new Catagory("Salads","8gh7785hg5h87h5678g56h78g56h78",
  [
  new Item("Chinese Chicken Chop Salad","h856gh58gh87g5h678t","comes roasted pepper cheese sauce",7.95,public_images + "/food/pretzle_1.png",300,
  [
    new Ingredients("sliced grilled chicken breast",true),
    new Ingredients("crispy wontons",true),
    new Ingredients("mandarins",true),
    new Ingredients("crispy noodles",true),
    new Ingredients("house made chop salad mix",true),
    new Ingredients("red ginger dressing ",true),

  ],
  [
    {
      name:"large salad",
      price:5.99
    },
  ],
  [
    new Addon("sliced grilled chicken breast",3.99),
    new Addon("crispy wontons",2.99),
    new Addon("mandarins",2.99),
    new Addon("crispy noodles",1.99),
    new Addon("house made chop salad mix",1.99),
    new Addon("red ginger dressing ",.99),

  ],

  ),
  new Item("Southwest Chicken Salad","g57gh65hg576hg578t5gh8t7gt5h678","garlic oil / shredded reggiano cheese",7.99,public_images + "/food/fries_1.png",300,
  [
    new Ingredients("sliced grilled chicken breast",true),
    new Ingredients("avocado",true),
    new Ingredients("cucumber",true),
    new Ingredients("corn salsa",true),
    new Ingredients("house made chop salad mix",true),
    new Ingredients("shredded feta",true),
    new Ingredients("cherry tomato",true),
    new Ingredients("house vinaigrette",true),
    new Ingredients("diced red peppers",true),
    new Ingredients("blue cheese & bacon",true)
  ],
  [
    {
      name:"large",
      price:3.99
    },
  ],
  [
    new Addon("sliced grilled chicken breast",3.99),
    new Addon("avocado",2.99),
    new Addon("cucumber",1.99),
    new Addon("corn salsa",2.99),
    new Addon("house made chop salad mix",1.99),
    new Addon("cherry tomato",2.99),
    new Addon("house vinaigrette",.99),
    new Addon("diced red peppers",1.99),
    new Addon("blue cheese & bacon",2.99)

  ],

  ),

  new Item("Seared Ahi Tuna Salad","14622995449","dill pickle chips",11.99,public_images + "/food/pickles_1.png",300,
  [
    new Ingredients("seared ahi tuna",true),
    new Ingredients("spring mix",true),
    new Ingredients("cucumber",true),
    new Ingredients("scallion",true),
    new Ingredients("red onion",true),
    new Ingredients("diced red peppers",true),
    new Ingredients("sesame seeds",true),
    new Ingredients("spicy thai vinaigrette",true),
    new Ingredients("crispy onion strings",true)

  ],
  [
    {
      name:"large",
      price:4.99
    },
  ],
  [
    new Addon("seared ahi tuna",3.99),
    new Addon("avocado",2.99),
    new Addon("cucumber",1.99),
    new Addon("corn salsa",2.99),
    new Addon("spring mix",1.99),
    new Addon("red onion",.99),
    new Addon("spicy thai sauce",1.99),
    new Addon("diced red peppers",1.99),
    new Addon("sesame seeds",2.99)
  ]
  ),
  new Item("Baby Kale & Quinoa Salad","858549849458954894","mozzarella sticks and marinara dipping sauce",11.95,public_images + "/food/mozz_1.png",300,
  [
    new Ingredients("baby kale",true),
    new Ingredients("crispy quinoa",true),
    new Ingredients("green apples",true),
    new Ingredients("cherry tomatoes",true),
    new Ingredients("honey roasted pumpkin seeds",true),
    new Ingredients("feta cheese",true),
    new Ingredients("avocado",true),
    new Ingredients("house vinaigrette. ",true),

  ],
  [

    {
      name:"large",
      price:3.99
    },
  ],
  [
    new Addon("seared ahi tuna",3.99),
    new Addon("sliced grilled chicken",3.99),
    new Addon("avocado",2.99),
    new Addon("baby kale",1.99),
    new Addon("corn salsa",2.99),
    new Addon("crispy quinoa",1.99),
    new Addon("green apples",1.99),
    new Addon("feta cheese",1.99),
    new Addon("diced red peppers",1.99),
    new Addon("sesame seeds",2.99)
  ],

)
]
),
new Catagory("Sandwiches","49943344944349490",
[
  new Item("BBQ Brisket on A Pretzel Roll","149593749","14 hour bbq beef brisket with sweet chili hickory glaze, stand slaw, banana peppers, spicy honey mustard bbq sauce on a locally made pretzel bun",12.95,public_images + "/food/sliders_1.png",300,
  [
    new Ingredients("14 hour bbq beef brisket",true),
    new Ingredients("stand slaw",true),
    new Ingredients("spicy honey mustard pretzel bun",true),
    new Ingredients("banana peppers",true),
    new Ingredients("sweet chili hickory glaze",true)

  ],
  [ ],
  [
  new Addon("side of garlic fries",5.99),
  new Addon("14 hour bbq beef brisket",7.99),
  new Addon("stand slaw",3.99),
  new Addon("spicy honey mustard pretzel bun",2.99),
  new Addon("banana peppers",1.99),
  new Addon("sweet chili hickory glaze",1.99)

  ],

  ),
  new Item("Short Rib Grilled Cheese","1339597419","american cheeseburgers with carmelized onions",13.99,public_images + "/food/sliders_2.png",300,
  [
    new Ingredients("parmesan crusted sourdough",true),
    new Ingredients("braised beef short rib",true),
    new Ingredients("hickory sauce",true),
    new Ingredients("crispy onion",true),
    new Ingredients("tomato jam",true),
    new Ingredients("triple cheddar",true)

  ],
  [],
  [
    new Addon("side of garlic fries",4.99),
    new Addon("braised beef short rib",2.99),
    new Addon("hickory sauce",1.99),
    new Addon("crispy onion",1.99),
    new Addon("tomato jam",1.99),
    new Addon("cheddar",2.99)

  ],

  ),
  new Item("Chicken Club","93939094909340","sugar cured bacon, peanut butter and jelly / cheddar",10.99,public_images + "/food/sliders_3.png",300,
  [
    new Ingredients("marinated grilled chicken",true),
    new Ingredients("roasted tomato",true),
    new Ingredients("avocado",true),
    new Ingredients("bacon",true),
    new Ingredients("arugula",true),
    new Ingredients("gourmet brioche bun",true),
    new Ingredients("sweet chili aioli",true),


  ],
  [


  ],
  [
    new Addon("side of garlic fries",4.99),
    new Addon("marinated grilled chicken",4.99),
    new Addon("roasted tomato",2.99),
    new Addon("avocado",2.99),
    new Addon("bacon",3.99),
    new Addon("arugula",1.99),
    new Addon("sweet chili aioli",3.99),
    new Addon("gourmet brioche bun",2.99),

  ]

  )
]
),
new Catagory("Kids Menu","58584998858549845489894",
  [
    new Item("Kid's Burger","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
    [
      new Ingredients("beef or turkey",true),
      new Ingredients("toasted bun",true),

    ],
    [

      {
        name:"Beef",
        price:0
      },
      {
        name:"Turkey",
        price:0
      },
    ],
    [
    new Addon("add cheese",1.99),
    new Addon("tots",2.99),
    new Addon("kid's fries",1.99)

    ]

  ),
  new Item("Grilled Cheese","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
  [
    new Ingredients("grilled brioche",true),
    new Ingredients("american cheese",true),
  ],
  [
    {
      name:"fries",
      price:0
    },
    {
      name:"chips",
      price:0
    },
    {
      name:"tots",
      price:0
    }
  ],
  [
  new Addon("cheddar",1.99),
  new Addon("tots",2.99),
  new Addon("kid's fries",1.99)

  ]

  ),
  new Item("Mac & Cheese","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
  [
    {
      name:"fries",
      price:0
    },
    {
      name:"chips",
      price:0
    },
    {
      name:"tots",
      price:0
    }
  ],
  [
  ],
  [
  new Addon("chips",1.99),
  new Addon("tots",2.99),
  new Addon("kid's fries",1.99)

  ]

  ),
  new Item("Kid's Chicken Bites","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
  [

  ],
  [
    {
      name:"6 bites",
      price:1.99
    },
    {
      name:"10 bites",
      price:5.99
    },
    {
      name:"20 bites",
      price:9.99
    },
  ],
  [
  new Addon("chips",1.99),
  new Addon("tots",2.99),
  new Addon("kid's fries",1.99)

  ]

  ),
  new Item("Kid's Hot Dog","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
  [
    new Ingredients("hot dog bun",true),
  ],
  [
    {
      name:"fries",
      price:0
    },
    {
      name:"chips",
      price:0
    },
    {
      name:"tots",
      price:0
    }
  ],
  [
  new Addon("chips",1.99),
  new Addon("tots",2.99),
  new Addon("",2.99)

  ]

  ),
  ]
),
new Catagory("Burgers","439349043903490",
[
  new Item("Big Blue","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
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
  new Item("Make a Beef Burger","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
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
  new Item("Make a Chicken Burger","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
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
  new Item("Make a Impossible Burger","32939039303940","cheddar-jack stuffed patty / lettuce / tomatoes / pickles",15.95,public_images + "/food/burgers_3.png",300,
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
  new Item("ABC Burger","49349034909340","sugar cured bacon / peanut butter and jelly / cheddar / honey sauce",16.99,public_images + "/food/burgers_2.png",300,
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
  new Item("Stand Burger","393984","swiss / carmelized onion / lettuce / garlic aioli",15.99,public_images + "/food/burgers_1.png",300,
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
