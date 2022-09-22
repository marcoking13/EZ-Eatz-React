
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
  "Freeze-Dry",
  false,
  ["all-american","ice-cream"],
  2,
  lat,
  lng,
  new Address("",random_street,"AZ",""),
  public_images+"/logos/freeze_dry_logo.png",
  public_images+"banners/freeze_dry_banner.png",
  public_images+"/background/freeze_dry_background.png",
  public_images+"/logos/freeze_map.svg",
  null,
  new Menu("40594949",

  [
  new Catagory("Ice Cream Sandwiches","504949490",
  [
  new Item("Classic Ice Cream Sandwich","5494949","A hot fudge ice cream sandwich",3.99,public_images + "/food/freeze_dry_12.png",400,
  [new Ingredients("Homemade Ice Cream",true),new Ingredients("Triple Chocolate Cookies",true)],
  [
    {
      name:"chocolate",
      price:0
    },
    {
      name:"strawberry",
      price:0
    },
    {
      name:"mint chocolate chip",
      price:0
    },
    {
      name:"cake batter",
      price:0
    },
    {
      name:"rocky road",
      price:0
    }
  ],
  [
  new Addon("skittles",.5),
  new Addon("fudge",.4),
  new Addon("m&m",.3),
  new Addon("oreos",.6),
  new Addon("sprinkles",.5),
  new Addon("marshmallow",.5)
  ],

  ),
  new Item("Hot Fudge Sandwich","5474949","A hot fudge ice cream sandwich",6.99,public_images + "/food/freeze_dry_10.png",400,
  [new Ingredients("Homemade Ice Cream",true),new Ingredients("Hot Fudge",true),new Ingredients("Triple Chocolate Cookies",true)],
  [{
    name:"chocolate",
    price:0
  },
  {
    name:"strawberry",
    price:0
  },
  {
    name:"mint chocolate chip",
    price:0
  },
  {
    name:"cake batter",
    price:0
  },
  {
    name:"rocky road",
    price:0
  }],
  [
  new Addon("chocolate chips",.5),
  new Addon("extra fudge",.4),
  new Addon("m&m",.3),
  new Addon("oreos",.6),
  new Addon("sprinkles",.5),
  new Addon("marshmallow",.5)
  ],

  ),

  new Item("Classic Ice Cream Sandwich","5484949","A hot fudge ice cream sandwich",3.99,public_images + "/food/freeze_dry_8.png",400,
  [new Ingredients("Homemade Ice Cream",true),new Ingredients("Triple Chocolate Cookies",true)],
  [
    {
      name:"chocolate",
      price:0
    },
    {
      name:"strawberry",
      price:0
    },
    {
      name:"mint chocolate chip",
      price:0
    },
    {
      name:"cake batter",
      price:0
    },
    {
      name:"rocky road",
      price:0
    }
  ],
  [
  new Addon("skittles",.5),
  new Addon("fudge",.4),
  new Addon("m&m",.3),
  new Addon("oreos",.6),
  new Addon("sprinkles",.5),
  new Addon("marshmallow",.5)
  ],

  ),
  new Item("Special Ice Cream Sandwich","5492949","A hot fudge ice cream sandwich",5.99,public_images + "/food/freeze_dry_7.png",400,
  [new Ingredients("Homemade Ice Cream",true),new Ingredients("Nerd Ropes",true),new Ingredients("Triple Chocolate Cookies",true)],
  [
    {
      name:"chocolate",
      price:0
    },
    {
      name:"strawberry",
      price:0
    },
    {
      name:"mint chocolate chip",
      price:0
    },
    {
      name:"cake batter",
      price:0
    },
    {
      name:"vanilla",
      price:0
    }
  ],
  [
  new Addon("chocolate chips",.5),
  new Addon("mystery gummies",.5),
  new Addon("extra fudge",.4),
  new Addon("m&m",.3),
  new Addon("oreos",.6),
  new Addon("sprinkles",.5),
  new Addon("marshmallow",.5)
  ],
)]


),
new Catagory("Ice Cream Sandwiches","504949490",
[
new Item("Classic Ice Cream Sandwich","5494949","A hot fudge ice cream sandwich",3.99,public_images + "/food/freeze_dry_12.png",400,
[new Ingredients("Homemade Ice Cream",true),new Ingredients("Triple Chocolate Cookies",true)],
[
  {
    name:"chocolate",
    price:0
  },
  {
    name:"strawberry",
    price:0
  },
  {
    name:"mint chocolate chip",
    price:0
  },
  {
    name:"cake batter",
    price:0
  },
  {
    name:"rocky road",
    price:0
  }
],
[
new Addon("skittles",.5),
new Addon("fudge",.4),
new Addon("m&m",.3),
new Addon("oreos",.6),
new Addon("sprinkles",.5),
new Addon("marshmallow",.5)
],

),
new Item("Hot Fudge Sandwich","5474949","A hot fudge ice cream sandwich",6.99,public_images + "/food/freeze_dry_10.png",400,
[new Ingredients("Homemade Ice Cream",true),new Ingredients("Hot Fudge",true),new Ingredients("Triple Chocolate Cookies",true)],
[{
  name:"chocolate",
  price:0
},
{
  name:"strawberry",
  price:0
},
{
  name:"mint chocolate chip",
  price:0
},
{
  name:"cake batter",
  price:0
},
{
  name:"rocky road",
  price:0
}],
[
new Addon("chocolate chips",.5),
new Addon("extra fudge",.4),
new Addon("m&m",.3),
new Addon("oreos",.6),
new Addon("sprinkles",.5),
new Addon("marshmallow",.5)
],

),

new Item("Classic Ice Cream Sandwich","5484949","A hot fudge ice cream sandwich",3.99,public_images + "/food/freeze_dry_8.png",400,
[new Ingredients("Homemade Ice Cream",true),new Ingredients("Triple Chocolate Cookies",true)],
[
  {
    name:"chocolate",
    price:0
  },
  {
    name:"strawberry",
    price:0
  },
  {
    name:"mint chocolate chip",
    price:0
  },
  {
    name:"cake batter",
    price:0
  },
  {
    name:"rocky road",
    price:0
  }
],
[
new Addon("skittles",.5),
new Addon("fudge",.4),
new Addon("m&m",.3),
new Addon("oreos",.6),
new Addon("sprinkles",.5),
new Addon("marshmallow",.5)
],

),
new Item("Special Ice Cream Sandwich","5492949","A hot fudge ice cream sandwich",5.99,public_images + "/food/freeze_dry_7.png",400,
[new Ingredients("Homemade Ice Cream",true),new Ingredients("Nerd Ropes",true),new Ingredients("Triple Chocolate Cookies",true)],
[
  {
    name:"chocolate",
    price:0
  },
  {
    name:"strawberry",
    price:0
  },
  {
    name:"mint chocolate chip",
    price:0
  },
  {
    name:"cake batter",
    price:0
  },
  {
    name:"vanilla",
    price:0
  }
],
[
new Addon("chocolate chips",.5),
new Addon("mystery gummies",.5),
new Addon("extra fudge",.4),
new Addon("m&m",.3),
new Addon("oreos",.6),
new Addon("sprinkles",.5),
new Addon("marshmallow",.5)
],
)]


),
new Catagory("Beverages","yry47hyrfy754yf7hvcr78fh48hj89fs",
[
  new Item("Coca Cola","jfgvnjgnjnvjgnjnvjgvngjngjngjngjn","an coca cola soda",2.99,public_images + "/food/coke.png",400,
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

  new Item("Root Beer","mnmmnncnncncncn","an rootbeer soda / A&W",2.99,public_images + "/food/root_beer.png",400,
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

  new Item("Dr Pepper","jncdfjndfnjdnfjnjdn","an sparkly soda with a kick",2.99,public_images + "/food/dr_pepper.png",400,
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


  new Item("Sierra Mist","cnccncndkkddkkdkewoeooe","an refreshing sprite soda",2.99,public_images + "/food/sprite.png",400,
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

  new Item("Water","oeoeoeirjfeko","Pure filtered water",.99,public_images + "/food/water.png",0,
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

new Item("Diet Coca Cola","n_mkdmjcnjfnjvfjnv","an diet coca cola soda",2.99,public_images + "/food/diet_coke.png",400,
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
new Item("Orange Fanta","j_jncdfncjfndnfdjdcn","an orange fizzy soda",2.99,public_images + "/food/fanta.png",400,
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
