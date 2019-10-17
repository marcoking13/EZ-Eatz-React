var total = 0;
var routes = "s";
const FoodTrucks =  [{
  ownerID:"jfu3fb3u9f2ufh2408fj24hr42089fnceorm0d32uj0p324",
  objectID:"319ei310328eu30ejsnm0i32ds320dj230d",
  name:"Freeze-Dry",
  logo:"./assets/images/sm.png",
  address:{

    street:"4005 N Scottsdale Rd",
    city:"Scottsdale",
    state:"AZ",
    zip: 85251
  },
  stars:3,
  background:"./assets/images/samplebanner2.jpg",
  display:"./assets/images/smoothie.jpg",
  mapLogo:"./assets/images/smoothieKingMap.png",
  type:["dessert","all-american"],
  routes:routes,
  priceAverage:total,
  menu:[{
    catagory:"Sandwiches",
    id:"nveovneronevnoejvnejvnjmcmcmcmcmm",
    food:[{
      item:"King Size Sandwich",
      add:[
        {
          name:"fudge",
          price:.44
        },
        {
          name:"rainbow sprinkles",
          price:.44
        },
        {
          name:"strawberries",
          price:.99
        },
        {
          name:"gummy worms",
          price:.50
        },
        {
          name:"oreos",
          price:.60
        },

      ],
      id:"nvovbn3ovnojevn",
      ingredients:[{name:"ice cream sandwich",display:false}],
      calories:300,
      price:9.53,
      description:"A giant ice cream sandwich",
      image:"./assets/images/kingicecreamsandwich.png"
    },
    {
      item:"Oreo Sandwich",
      id:"nvovbn3ovnojevncnrocekjlewljkcl",
     ingredients:[{name:"oreo sandwich",display:false}],
     add:[
       {
         name:"fudge",
         price:.44
       },
       {
         name:"rainbow sprinkles",
         price:.44
       },
       {
         name:"strawberries",
         price:.99
       },
       {
         name:"gummy worms",
         price:.50
       },
       {
         name:"oreos",
         price:.60
       },

     ],
      calories:450,
      price:10.41,
      description:"A oreo ice cream sandwich",
      image:"./assets/images/oreoicecreamsandwich.png"
    },
    {
      item:"Toll House Sandwich",
      id:"39393939392eie39488494839849348983943948398490228t43798",
      add:[
        {
          name:"fudge",
          price:.44
        },
        {
          name:"rainbow sprinkles",
          price:.44
        },
        {
          name:"strawberries",
          price:.99
        },
        {
          name:"gummy worms",
          price:.50
        },
        {
          name:"oreos",
          price:.60
        },

      ],
      ingredients:[{name:"toll house sandwich",display:false}],
      image:"./assets/images/tollhouse.png",
      calories:1000,
      price:4.50,
      description:"Classic ice cream sandwich"
    }]
},
{
  catagory:"Homemade",
    id:"nveovneronevnoejvnejvnjmcmcmcmcvnwwumbmbmivnifeuvn",
  food:[{
    item:"Vanilla Ice Cream",
    add:[
      {
        name:"fudge",
        price:.44
      },
      {
        name:"rainbow sprinkles",
        price:.44
      },
      {
        name:"strawberries",
        price:.99
      },
      {
        name:"gummy worms",
        price:.50
      },
      {
        name:"oreos",
        price:.60
      },

    ],
    id:"fo3wifj290rejd1mco-1nojevn",
    ingredients:[{name:"vanilla ice cream",display:false}],
    calories:400,
    price:2.99,
    description:"A scoop of vanilla ice cream",
    image:"./assets/images/vanillaicecream.png"
  },
  {
    item:"Strawberry Ice Cream",
    add:[
      {
        name:"fudge",
        price:.44
      },
      {
        name:"rainbow sprinkles",
        price:.44
      },
      {
        name:"strawberries",
        price:.99
      },
      {
        name:"gummy worms",
        price:.50
      },
      {
        name:"oreos",
        price:.60
      },

    ],
    id:"meckmedqkkqelmceklcmdo1dx",
    ingredients:[{name:"strawberry ice cream",display:false}],
    calories:450,
    price:2.99,
    description:"A scoop of strawberry ice cream",
    image:"./assets/images/strawberryicecream.png"
  },
  {
    item:"Rocky Road Ice Cream",
    add:[
      {
        name:"fudge",
        price:.44
      },
      {
        name:"rainbow sprinkles",
        price:.44
      },
      {
        name:"strawberries",
        price:.99
      },
      {
        name:"gummy worms",
        price:.50
      },
      {
        name:"oreos",
        price:.60
      },

    ],
    id:"nconcncnc0330393939r48398394348943894389",
    ingredients:[{name:"chocolate ice cream",display:false},{name:"marshmallow",display:true},{name:"twix bars",display:true}],
    calories:400,
    price:4.99,
    description:"A scoop of rocky road ice cream",
    image:"./assets/images/rockyicecream.png"
  }]
},
{
  catagory:"Crazy-Creations",
    id:"nveovneronevnoejvnejvnjmcmcmcmcmmvvvv",
  food:[{
    item:"End of the World Cookie",
    add:[
      {
        name:"fudge",
        price:.44
      },
      {
        name:"rainbow sprinkles",
        price:.44
      },
      {
        name:"strawberries",
        price:.99
      },
      {
        name:"gummy worms",
        price:.50
      },
      {
        name:"oreos",
        price:.60
      },

    ],

    id:"nvovbn3ovnojevfcmwofdcmwiocmwoicwocamn222",
    ingredients:[{name:"chocolate ice cream",display:false},{name:"strawberries",display:true},{name:"fudge",display:true}],
    calories:2000,
    price:11.53,
    description:"A 2 pound ice cream cookie we recommend it",
    image:"./assets/images/endcake.png"
  },
  {
    item:"Flamingo Cake",
    id:"mkcmeklmcklmqkmlcmq1111",
    add:[
      {
        name:"fudge",
        price:.44
      },
      {
        name:"rainbow sprinkles",
        price:.44
      },
      {
        name:"strawberries",
        price:.99
      },
      {
        name:"gummy worms",
        price:.50
      },
      {
        name:"oreos",
        price:.60
      },

    ],
    ingredients:[{name:"strawberry ice cream",display:false},{name:"lemon",display:true},{name:"mango",display:true}],
    calories:550,
    price:2.41,
    description:"Affordable and fancy cake",
    image:"./assets/images/flamingocake.png"
  },
  {
    item:"Fried Ice Cream",
    add:[
      {
        name:"fudge",
        price:.44
      },
      {
        name:"rainbow sprinkles",
        price:.44
      },
      {
        name:"strawberries",
        price:.99
      },
      {
        name:"gummy worms",
        price:.50
      },
      {
        name:"oreos",
        price:.60
      },

    ],
    id:"rhy7f92j9fhj209fduj013ed9j01ss02982928",
   ingredients:[{name:"chocolate ice cream",display:false},{name:"fudge",display:true}],
   image:"./assets/images/firedicecream.jpg",
    calories:800,
    price:4.50,
    description:"Fried ice  cream"
  }]
}],

images:["image2.png","image3.png","image4.png"],
 sides:[
   {
   name:"skittles",
   price:.50,
   image:"./assets/images/samplebanner2.jpg"
 },
 {
 name:"fudge",
 price:.40,
 image:"./assets/images/samplebanner2.jpg"
},
{
name:"m&m",
price:.30,
image:"./assets/images/samplebanner2.jpg"
},
{
name:"oreos",
price:.60,
image:"./assets/images/samplebanner2.jpg"
},
{
name:"sprinkles",
price:.50,
image:"./assets/images/samplebanner2.jpg"
},
{
name:"marshmallow",
price:.50,
image:"./assets/images/samplebanner2.jpg"

}




]
},
{
  ownerID:"mveonv49eeee8hj3vm930fc2m0",
  objectID:"er54g7g484g5g4gm2f09rjf09cncff948fn4920",
  name:"Pita Jungle",
  mapLogo:"./assets/images/pitaJungleMap.png",
  routes:routes,
    stars:5,
  logo:"./assets/images/pita.png",
  background:"./assets/images/samplebanner.jpg",
  display:"./assets/images/pitajungle.jpg",
  type:["all-american","greek"],
  priceAverage:total,
  menu:[{
    catagory:"Wraps",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Gyro",
      add:[
        {
          name:"tzakiki",
          price:.99
        },
        {
          name:"garlic dip",
          price:.40
        },
        {
          name:"tahini",
          price:.33
        },
        {
          name:"jalapeno",
          price:.50
        },
        {
          name:"bell pepper",
          price:.60
        },
        {
          name:"carmelized onions",
          price:.60
        },
        {
          name:"mixed greens",
          price:.60
        }



      ],
      id:"skm1pdm12309e120esjm1209e102",
      image:"./assets/images/gyro.png",
      buns:["wheat","gluten-free"],
      ingredients:[{
        name:"mixed greens",
        display:true
      },
      {
        name:"greek pita",
        display:false
      },
      {
        name:"gyro meat",
        display:true
      },
      {
        name:"tahini",
        display:false
      },
      {
        name:"mushroom",
        display:true
      },
      {
        name:"jalapeno",
        display:true
      }
    ],
      calories:870,
      price:4.50,
      description:"A classic gyro"
    }]
},
{
  catagory:"Pizzas",
    id:"mcocimcnceicnnnnnnn",
  food:[{
    image:"./assets/images/lavashpizza.png",
    item:"Lavosh Pizza",
    id:"xkwnccwococne",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    ingredients:[{
      name:"tomato",
      display:true
    },
    {
      name:"olives",
      display:true
    },
    {
      name:"feta",
      display:true
    },
    {
      name:"mushroom",
      display:true
    },
    {
      name:"spinach",
      display:true
    },
    {
      name:"lavash bread",
      display:false
    }
  ],

    calories:400,
    price:2.99,
    description:"A lavosh Pizza"
  },
  {
    image:"./assets/images/mushroompizza.png",
    item:"Garlic Mushroom Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"021wo220w2o0e2o202",
    ingredients:[{
      name:"tomato",
      display:true
    },

    {
      name:"garlic",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"mushroom",
      display:true
    },
    {
      name:"lavash bread",
      display:false
    }
  ],

    calories:450,
    price:5.99,
    description:"A lavosh mushroom pizza"
  },
  {
    item:"Pesto Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"ek102eke1209e201",
    image:"./assets/images/pestopizza.png",
    ingredients:[{
      name:"pesto",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"chicken",
      display:true
    },
    {
      name:"mushrooms",
      display:true
    },
    {
      name:"spinach",
      display:true
    },
    {
      name:"lavash bread",
      display:false
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic pesto pizza"
  }]
},
{
  catagory:"Hummus",
  add:[
    {
      name:"tzakiki",
      price:.99
    },
    {
      name:"garlic dip",
      price:.40
    },
    {
      name:"tahini",
      price:.33
    },
    {
      name:"jalapeno",
      price:.50
    },
    {
      name:"bell pepper",
      price:.60
    },
    {
      name:"carmelized onions",
      price:.60
    },
    {
      name:"mixed greens",
      price:.60
    }



  ],
  id:"nojdmi0ednemide",
  food:[{
    item:"Avocado Hummus",
    image:"./assets/images/avacadohummus.png",
    id:"nd39d3d8end2o9d2nodj29",
    ingredients:[{
      name:"olive oil",
      display:false
    },
    {
      name:"garnish",
      display:true
    },
    {
      name:"garbanzo beans",
      display:false
    },
    {
      name:"tahini",
      display:false
    },
    {
      name:"garlic",
      display:false
    },
    {
      name:"lemon juice",
      display:true
    }
  ],

    calories:500,
    price:5.53,
    description:"Avocado infused hummus"
  },
  {
    item:"Red Bell Pepper Hummus",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"nc2enfdun298d29dj2398jdm2",
    image:"./assets/images/redhummus.png",
    ingredients:[{
      name:"olive oil",
      display:false
    },
    {
      name:"garnish",
      display:true
    },
    {
      name:"garbanzo beans",
      display:false
    },
    {
      name:"tahini",
      display:false
    },
    {
      name:"garlic",
      display:false
    },
    {
      name:"red bell pepper",
      display:false
    },
    {
      name:"lemon juice",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Red bell pepper infused hummus"
  },
  {
    item:"Cilantro Hummus",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"cdmi30dn32dn3d23o",
    image:"./assets/images/greenhummus.png",
    ingredients:[{
      name:"olive oil",
      display:false
    },
    {
      name:"garnish",
      display:true
    },
    {
      name:"garbanzo beans",
      display:false
    },
    {
      name:"tahini",
      display:false
    },
    {
      name:"garlic",
      display:false
    },
    {
      name:"cilantro",
      display:false
    },
    {
      name:"pico de gallo",
    diplay:true
    },
    {
      name:"lemon juice",
      display:true
    }
  ],
    calories:500,
    price:4.50,
    description:"Cilantro infused hummus"
  }]
},
{
  catagory:"Specials",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Wood-fired Salmon",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    image:"./assets/images/woodfiredsalmon.png",
    id:"nd39d3d8end2o44449d2nodj29",
    ingredients:[{
      name:"garlic",
      display:true
    },
    {
      name:"mashed potatoes",
      display:true
    },
    {
      name:"salmon",
      display:true
    },
    {
      name:"wilted spinach",
      display:true
    },
    {
      name:"pita",
      display:true
    },
    {
      name:"lemon juice",
      display:true
    }
  ],

    calories:400,
    price:9.99,
    description:"Wood fired salmon with mashed potatoes"
  },
  {
    item:"Garbanzo Bowl",
    id:"2932939nddneudn932",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    image:"./assets/images/garbanzo.jpg",
    ingredients:[{
      name:"garbanzo beans",
      display:true
    },
    {
      name:"kimchi",
      display:true
    },
    {
      name:"avocado",
      display:true
    },
    {
      name:"spinach",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"tomato",
      display:true
    }
  ],

    calories:800,
    price:12.99,
    description:"Garbanzo bowl with kimchi"
  },
  {
    item:"Chicken del Sol",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    image:"./assets/images/chickendelsol.png",
    id:"nc2enfd399393un298d29dj2398jdm2",
    ingredients:[{
      name:"chicken",
      display:true
    },
    {
      name:"tomato sauce",
      display:false
    },
    {
      name:"pita crisp",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"red bell pepper",
      display:true
    },
    {
      name:"lemon juice",
      display:false
    }
  ],
    calories:600,
    price:8.50,
    description:"Tomato basil soup with chicken;comes with a pita crisp"
  },
  {
    item:"Avocado Tostada",
    image:"./assets/images/tostada.png",
    id:"cvnjjdn3d23o3939393993",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    ingredients:[{
      name:"avocado",
      display:true
    },
    {
      name:"corn torilla",
      display:true
    },
    {
      name:"tahini",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"avocado hummus",
      display:true
    },
    {
      name:"cilantro",
      display:true
    },
    {
      name:"pico de gallo",
    diplay:true
    }
  ],
    calories:330,
    price:3.50,
    description:"Avocado tostada with avocado hummus"
  }]
},
{
  catagory:"Drinks",
  id:"2390nojdmi0ednemid339934894389489894303r4382939e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
  stars:3,
address:{

  street:"7th and Mill Ave ",
  city:"Tempe",
  state:"AZ",
  zip: 85285
},
 sides:[{
   name:"hummus",
   type:null,
   price:.99
 },
 {
   name:"cucumber",
   type:null,
   price:.4
 },
 {
   name:"tomato",
   type:null,
   price:.4
 },
 {
   name:"pico de gallo",
   type:null,
   price:.2
 },
 {
   name:"pita",
   type:["greek","regular","wheat"],
   price:.4
 }]
},
{
  ownerID:"39384rh393939393939393939393939393939348hdj8m",
  objectID:"102293ednfuvb4tuig4tuivbt4uivb4utfnu4k92kfdc4900ecm",
  name:"Burger Joint",
  mapLogo:"./assets/images/burgerMap.png",
  routes:routes,
  logo:"./assets/images/burgerjoint.png",
  background:"./assets/images/burgerjointbanner.jpg",
  display:"./assets/images/burger33.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Double Burger Meal",
      buns:["leaf","gluten-free"],
      add:[
        {
          name:"tzakiki",
          price:.99
        },
        {
          name:"garlic dip",
          price:.40
        },
        {
          name:"tahini",
          price:.33
        },
        {
          name:"jalapeno",
          price:.50
        },
        {
          name:"bell pepper",
          price:.60
        },
        {
          name:"carmelized onions",
          price:.60
        },
        {
          name:"mixed greens",
          price:.60
        }



      ],
      id:"2ewjsdxme2dcxk203x298292298",
      image:"./assets/images/burger3.png",
      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Sliders",
    id:"-20239049fjjj--",
  food:[{
    item:"6 burger slider",
    id:"33456789dmxewicm",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    buns:["leaf","gluten-free"],
    image:"./assets/images/burger1.png",
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    image:"./assets/images/wings.png",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa2442020393939838jgjgjg",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/salad1.png",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  add:[
    {
      name:"tzakiki",
      price:.99
    },
    {
      name:"garlic dip",
      price:.40
    },
    {
      name:"tahini",
      price:.33
    },
    {
      name:"jalapeno",
      price:.50
    },
    {
      name:"bell pepper",
      price:.60
    },
    {
      name:"carmelized onions",
      price:.60
    },
    {
      name:"mixed greens",
      price:.60
    }



  ],
  food:[{
    item:"Classic Cheese",
        image:"./assets/images/cheesepizza.png",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
        image:"./assets/images/mushroompizza.png",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/pestopizza.png",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  zip:85054,
  street:"7111 E Mayo Blvd",
  city:"Phoenix",
  state:"AZ"

},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"12345678webgfhurfi3ufin43uifb4ivn4uivgbdj328jd389omss",
  stars:2,
  objectID:"sjkdxm33103vub3i4vbu4f 34uif5474578455785478457845784578542dn992d201ks1",
  name:"Acai Shop",
  mapLogo:"./assets/images/acaiMap.png",
  routes:routes,
  logo:"./assets/images/acaishop.png",
  background:"./assets/images/acaishopbanner.jpg",
  display:"./assets/images/acai02.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Acai-Bowls",
      id:"csmoicrercwnjwcvned2dw92290923923",
    food:[

    {
      item:"Tropic Bowl",
      add:[
        {
          name:"blueberries",
          price:.99
        },
        {
          name:"strawberries",
          price:.40
        },
        {
          name:"pineapple",
          price:.33
        },
        {
          name:"pear",
          price:.50
        },
        {
          name:"peaches",
          price:.60
        },
        {
          name:"grass",
          price:.60
        },
        {
          name:"watermelon",
          price:.60
        }



      ],
      id:"2ewjsdxme2dcxwddd2wk203x29829sss2298",
      image:"./assets/images/acai1.png",
      ingredients:[{
        name:"strawberry",
        display:true
      },
      {
        name:"nuts",
        display:true
      },
      {
        name:"blueberries",
        display:true
      },
      {
        name:"kale",
        display:true
      },
      {
        name:"rasberry sorbet",
        display:true
      },
      {
        name:"cherries",
        display:true
      }
    ],
      calories:370,
      price:6.50,
      description:""
    },
    {
      item:"Strawberry Bowl",
      add:[
        {
          name:"blueberries",
          price:.99
        },
        {
          name:"strawberries",
          price:.40
        },
        {
          name:"pineapple",
          price:.33
        },
        {
          name:"pear",
          price:.50
        },
        {
          name:"peaches",
          price:.60
        },
        {
          name:"grass",
          price:.60
        },
        {
          name:"watermelon",
          price:.60
        }



      ],
      id:"2ewjsdxme2dcxwdddddwk203x298292298",
      image:"./assets/images/acai3.png",
      ingredients:[{
        name:"strawberry",
        display:true
      },
      {
        name:"nuts",
        display:true
      },
      {
        name:"blueberries",
        display:true
      },
      {
        name:"kale",
        display:true
      },
      {
        name:"rasberry sorbet",
        display:true
      },
      {
        name:"cherries",
        display:true
      }
    ],
      calories:370,
      price:6.50,
      description:""
    },
    {
      item:"Classic Acai Bowl",
      add:[
        {
          name:"blueberries",
          price:.99
        },
        {
          name:"strawberries",
          price:.40
        },
        {
          name:"pineapple",
          price:.33
        },
        {
          name:"pear",
          price:.50
        },
        {
          name:"peanut butter",
          price:.60
        },
        {
          name:"walnuts",
          price:.60
        },
        {
          name:"almonds",
          price:.60
        }



      ],
      id:"2ewjsdxme2dcxwdd2wk203x298292298",
      image:"./assets/images/acai2.png",
      ingredients:[{
        name:"strawberry",
        display:true
      },
      {
        name:"nuts",
        display:true
      },
      {
        name:"blueberries",
        display:true
      },
      {
        name:"kale",
        display:true
      },
      {
        name:"rasberry sorbet",
        display:true
      },
      {
        name:"cherries",
        display:true
      }
    ],
      calories:370,
      price:6.50,
      description:""
    }


  ]
},
{
  catagory:"Smoothies",
    id:"-e20239042023904kvl9fjjj--",

  food:[{
    image:"./assets/images/smoothie2.png",
    add:[
      {
        name:"blueberries",
        price:.99
      },
      {
        name:"strawberries",
        price:.40
      },
      {
        name:"pineapple",
        price:.33
      },
      {
        name:"pear",
        price:.50
      },
      {
        name:"peaches",
        price:.60
      },
      {
        name:"grass",
        price:.60
      },
      {
        name:"watermelon",
        price:.60
      }



    ],
    item:"Strawberry Smoothie",
    id:"33456789dmxjidewicm",
    ingredients:[{
      name:"strawberry",
      display:true
    },
    {
      name:"nuts",
      display:true
    },
    {
      name:"blueberries",
      display:true
    },
    {
      name:"kale",
      display:true
    },
    {
      name:"rasberry sorbet",
      display:true
    },
    {
      name:"cherries",
      display:true
    }
  ],
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Tropic Smoothie",
      image:"./assets/images/smoothie5.png",
      add:[
        {
          name:"blueberries",
          price:.99
        },
        {
          name:"strawberries",
          price:.40
        },
        {
          name:"pineapple",
          price:.33
        },
        {
          name:"pear",
          price:.50
        },
        {
          name:"peaches",
          price:.60
        },
        {
          name:"grass",
          price:.60
        },
        {
          name:"watermelon",
          price:.60
        }



      ],
    id:"20kj29e0i3290r203",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:""
  },
  {
    item:"Pineapple Smoothie",
    image:"./assets/images/smoothie4.png",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"strawberry",
      display:true
    },
    {
      name:"pineapple",
      display:true
    },
    {
      name:"blueberries",
      display:true
    },
    {
      name:"kale",
      display:true
    },
    {
      name:"rasberry sorbet",
      display:true
    },
    {
      name:"cherries",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{

  street:"7354 E Shea Blvd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85260
},
 sides:[]
},
{
  ownerID:"39384rh4854854th45gh54gh4u9g5hjufecnovtbnuivhw9jfi3rgn94uhn39gi4hdj8m",
  objectID:"102293edkfnhubv4tuif4huth45th7tg548gt54h78t592kfdc4900ecm",
  name:"The Rotating Chicken",
  mapLogo:"./assets/images/chickenMap.png",
  routes:routes,
  logo:"./assets/images/rotatingchicken.png",
  background:"./assets/images/rotatingchickenbanner.jpg",
  display:"./assets/images/chicken2029.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Chicken Burgers",
      id:"cmoicrew2cvnew92290923923",
    food:[

    {
      item:"Classic Chicken Burger",
      buns:["leaf","gluten-free"],
      id:"2ewjsdxme2dcxk203x29m8292298",
      image:"./assets/images/burger1.png",
      add:[
        {
          name:"A1 sauce",
          price:.99
        },
        {
          name:"carmelized onions",
          price:.40
        },
        {
          name:"secret sauce",
          price:.33
        },
        {
          name:"onions",
          price:.50
        },
        {
          name:"jalapeno",
          price:.60
        },
        {
          name:"chicken 5oz",
          price:2.99
        },
        {
          name:"avocado",
          price:.99
        }



      ],
      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"tomatoes",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"grilled chicken",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of honey sauce",
        display:true
      }
    ],
      calories:570,
      price:5.50,
      description:""
    }]
},
{
  catagory:"Meals",
    id:"-20239049fjjj--",
  food:[{
    item:"6 pieace meal",
    add:[
      {
        name:"A1 sauce",
        price:.99
      },
      {
        name:"carmelized onions",
        price:.40
      },
      {
        name:"secret sauce",
        price:.33
      },
      {
        name:"onions",
        price:.50
      },
      {
        name:"jalapeno",
        price:.60
      },
      {
        name:"chicken 5oz",
        price:2.99
      },
      {
        name:"avocado",
        price:.99
      }



    ],
    id:"33456789eidmxewicm",
        image:"./assets/images/meal1.png",
    ingredients:[{
      name:"6 chicken pieces",
      display:true
    },
    {
      name:"drink",
      flag:true,
      catagory:"Drinks",
      display:true
    },
    {
      name:"medium fries",
      display:true
    }
  ],

    calories:700,
    price:4.99,
    description:""
  },
  {
    item:"Chicken Burger Meal",
    add:[
      {
        name:"A1 sauce",
        price:.99
      },
      {
        name:"carmelized onions",
        price:.40
      },
      {
        name:"secret sauce",
        price:.33
      },
      {
        name:"onions",
        price:.50
      },
      {
        name:"jalapeno",
        price:.60
      },
      {
        name:"chicken 5oz",
        price:2.99
      },
      {
        name:"avocado",
        price:.99
      }



    ],
    id:"2029e0i3290r203",
    buns:["leaf","gluten-free"],
    image:"./assets/images/meal2.png",
    ingredients:[{
      name:"Classic Chicken Burger",
      flag:true,
      catagory:"Classic Chicken Burger",
      display:true
    },
    {
      name:"drink",
      flag:true,
      catagory:"Drinks",
      display:true
    },
    {
      name:"fries",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    add:[
      {
        name:"A1 sauce",
        price:.99
      },
      {
        name:"carmelized onions",
        price:.40
      },
      {
        name:"secret sauce",
        price:.33
      },
      {
        name:"onions",
        price:.50
      },
      {
        name:"jalapeno",
        price:.60
      },
      {
        name:"chicken 5oz",
        price:2.99
      },
      {
        name:"avocado",
        price:.99
      }



    ],
    id:"aa2442ww020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    image:"./assets/images/salad2.png",
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",

  food:[{
    item:"Classic Cheese",
    add:[
      {
        name:"A1 sauce",
        price:.99
      },
      {
        name:"carmelized onions",
        price:.40
      },
      {
        name:"secret sauce",
        price:.33
      },
      {
        name:"onions",
        price:.50
      },
      {
        name:"jalapeno",
        price:.60
      },
      {
        name:"chicken 5oz",
        price:2.99
      },
      {
        name:"avocado",
        price:.99
      }



    ],
    id:"19292929229384567438920394857",
        image:"./assets/images/cheesepizza.png",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    add:[
      {
        name:"A1 sauce",
        price:.99
      },
      {
        name:"carmelized onions",
        price:.40
      },
      {
        name:"secret sauce",
        price:.33
      },
      {
        name:"onions",
        price:.50
      },
      {
        name:"jalapeno",
        price:.60
      },
      {
        name:"chicken 5oz",
        price:2.99
      },
      {
        name:"avocado",
        price:.99
      }



    ],
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
        image:"./assets/images/pestopizza.png",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    add:[
      {
        name:"A1 sauce",
        price:.99
      },
      {
        name:"carmelized onions",
        price:.40
      },
      {
        name:"secret sauce",
        price:.33
      },
      {
        name:"onions",
        price:.50
      },
      {
        name:"jalapeno",
        price:.60
      },
      {
        name:"chicken 5oz",
        price:2.99
      },
      {
        name:"avocado",
        price:.99
      }



    ],
        image:"./assets/images/mushroompizza.png",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{

  street:"7354 E Shea Blvd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"xn1mi9fdm2ntuibt4ugn4tjign4tjibnt9jfcm20q1sj120392029",
  stars:3,
  objectID:"210e91320irnvrgunov45uibt4nuivbnt4uibnt4ui3280ei129ei30i09ei1ddxcx",
  name:"Salad Go",
  mapLogo:"./assets/images/saladBarMap.png",
  routes:routes,
  logo:"./assets/images/saladgo.png",
  background:"./assets/images/saladgobanner.jpg",
  display:"./assets/images/salad999.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Salads",
      id:"cmoicrew032--dedd---------------------------cvnew92290923923",
    food:[

    {
      item:"Greek Salad",
      add:[
        {
          name:"A1 sauce",
          price:.99
        },
        {
          name:"carmelized onions",
          price:.40
        },
        {
          name:"secret sauce",
          price:.33
        },
        {
          name:"onions",
          price:.50
        },
        {
          name:"jalapeno",
          price:.60
        },
        {
          name:"chicken 5oz",
          price:2.99
        },
        {
          name:"avocado",
          price:.99
        }



      ],
      id:"222www--ewj-3-3-3-33-sdxme2dcxk203x298292298",
      image:"./assets/images/greeksalad.png",
      ingredients:[{
        name:"Onions",
        display:true
      },
      {
        name:"Tomatoes",
        display:true
      },
      {
        name:"Mixed Greens",
        display:true
      },
      {
        name:"Feta",
        display:false
      },
      {
        name:"Olives",
        display:true
      },
      {
        name:"toasted bread crumbs",
        display:true
      }
    ],
      calories:270,
      price:6.50,
      description:""
    },
    {
      item:"Greek Salad",
      add:[
        {
          name:"bread crumbs",
          price:.99
        },
        {
          name:"carmelized onions",
          price:.40
        },
        {
          name:"tomatoes",
          price:.33
        },
        {
          name:"onions",
          price:.50
        },
        {
          name:"jalapeno",
          price:.60
        },
        {
          name:"chicken 5oz",
          price:2.99
        },
        {
          name:"avocado",
          price:.99
        }



      ],
      image:"./assets/images/salad1.png",
      id:"222w3-3--3-3ww--ewjsdxme2dcxk203x298292298",

      ingredients:[{
        name:"Onions",
        display:true
      },
      {
        name:"Tomatoes",
        display:true
      },
      {
        name:"Mixed Greens",
        display:true
      },
      {
        name:"Feta",
        display:false
      },
      {
        name:"Olives",
        display:true
      },
      {
        name:"toasted bread crumbs",
        display:true
      }
    ],
      calories:270,
      price:6.50,
      description:""
    },
    {
      item:"Ceaser Salad",
      add:[
        {
          name:"tomatoes",
          price:.99
        },
        {
          name:"onions",
          price:.40
        },
        {
          name:"dressing",
          price:.33
        },
        {
          name:"onions",
          price:.50
        },
        {
          name:"jalapeno",
          price:.60
        },
        {
          name:"chicken 5oz",
          price:2.99
        },
        {
          name:"avocado",
          price:.99
        }



      ],
      id:"239223900932--22-33-3-www--ewjsdxme2dcxk203x298292298",
      image:"./assets/images/salad2.png",
      ingredients:[{
        name:"Lemon Dressing",
        display:true
      },
      {
        name:"Parsely",
        display:true
      },
      {
        name:"Mixed Greens",
        display:true
      },
      {
        name:"Feta",
        display:false
      },
      {
        name:"Olives",
        display:true
      },
      {
        name:"toasted bread crumbs",
        display:true
      }
    ],
      calories:470,
      price:4.50,
      description:""
    },
    {
      item:"Chicken Salad",
      id:"222www--ew03303-3-3-jsdxme-33-3-2dcxk203x298292298",
      image:"./assets/images/chickensalad.png",
      add:[
        {
          name:"bread crumbs",
          price:.99
        },
        {
          name:"carmelized onions",
          price:.40
        },
        {
          name:"dressing",
          price:.33
        },
        {
          name:"onions",
          price:.50
        },
        {
          name:"jalapeno",
          price:.60
        },
        {
          name:"chicken 5oz",
          price:2.99
        },
        {
          name:"avocado",
          price:.99
        }



      ],
      ingredients:[{
        name:"Grilled Chicken",
        display:true
      },
      {
        name:"Tomatoes",
        display:true
      },
      {
        name:"Mixed Greens",
        display:true
      },
      {
        name:"Kale",
        display:true
      },
      {
        name:"Olives",
        display:true
      },
      {
        name:"toasted bread crumbs",
        display:true
      }
    ],
      calories:670,
      price:9.50,
      description:""
    }
  ]
},
{
  catagory:"Juices",
  id:"nojdm-3-3--3-3i0edne2-20-340-3403-30-2-2-2-2-2-2-2032032-2332-3mide",
  food:[{
    item:"Green Boost",
    add:[
      {
        name:"lemon",
        price:.99
      },
      {
        name:"oranges",
        price:.40
      },
      {
        name:"whey protein",
        price:.33
      },
      {
        name:"mango",
        price:.50
      },
      {
        name:"blueberries",
        price:.60
      },
      {
        name:"strawberries",
        price:.99
      },
      {
        name:"avocado",
        price:.99
      }



    ],
    id:"19-2-329292922212193doi0jkf845670020202-222-2-2-2-2-2-2-2-2-2-323232438920394857",
    ingredients:[{
      name:"kale",
      display:true
    },
    {
      name:"chard",
      display:true
    },
    {
      name:"spinach",
      display:true
    },
    {
      name:"water",
      display:"false"
    },
    {
      name:"orange juice",
      display:"true"
    }

  ],

    calories:400,
    price:8.99,
    description:"",
    image:"./assets/images/boost.png"
  },
  {
    item:"Fruit Blast",
    add:[
      {
        name:"lemon",
        price:.99
      },
      {
        name:"oranges",
        price:.40
      },
      {
        name:"whey protein",
        price:.33
      },
      {
        name:"mango",
        price:.50
      },
      {
        name:"blueberries",
        price:.60
      },
      {
        name:"strawberries",
        price:.99
      },
      {
        name:"avocado",
        price:.99
      }



    ],
    id:"1929292922-2-2-2-2111111129384------5670020202-222-2-2-2-2-2-2-2-2-2-323232438920394857",
    ingredients:[{
      name:"oranges",
      display:true
    },
    {
      name:"apples",
      display:true
    },
    {
      name:"grapefruit",
      display:true
    },
    {
      name:"strawberries",
      display:"true"
    },
    {
      name:"water",
      display:"false"
    }

  ],

    calories:300,
    price:6.99,
    description:"",
    image:"./assets/images/fruitblast.png",
  },
  {
    item:"Grass Shake",
      image:"./assets/images/grass.png",
      add:[
        {
          name:"lemon",
          price:.99
        },
        {
          name:"oranges",
          price:.40
        },
        {
          name:"whey protein",
          price:.33
        },
        {
          name:"mango",
          price:.50
        },
        {
          name:"blueberries",
          price:.60
        },
        {
          name:"strawberries",
          price:.99
        },
        {
          name:"avocado",
          price:.99
        }



      ],
    id:"192929291-1-2-2332229384567000-0-0-020202-222-2-2-2-2-2-2-2-2-2-323232438920394857",
    ingredients:[{
      name:"soil",
      display:true
    },
  ],

    calories:20,
    price:3.99,
    description:""
  },
]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  street:"1290 S Normal Ave",
  city:"Tempe",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rfhu34h45tfh478th89rht78ty7t8t548tg4578gh48hdj8m",
  objectID:"10229ifgn4utgn49ug5u9h54ug54hgub5t4hg93h98ht49gh5gh3493edk92kfdc4900ecm",
  name:"Steak Truck",
  mapLogo:"./assets/images/steakMap.png",
  routes:routes,
  logo:"./assets/images/firegrill.png",
  background:"./assets/images/steaktruckbanner.jpg",
  display:"./assets/images/steak498.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
          image:"./assets/images/burger1.png",
    food:[

    {
      item:"Double Cheese Meal",
      add:[
        {
          name:"tzakiki",
          price:.99
        },
        {
          name:"garlic dip",
          price:.40
        },
        {
          name:"tahini",
          price:.33
        },
        {
          name:"jalapeno",
          price:.50
        },
        {
          name:"bell pepper",
          price:.60
        },
        {
          name:"carmelized onions",
          price:.60
        },
        {
          name:"mixed greens",
          price:.60
        }



      ],
      id:"2ewjsdxme2dcxk203x298292298",
      buns:["leaf","gluten-free"],
    image:"./assets/images/burger2.png",
      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of BBQ sauce",
        display:true
      }
    ],
      calories:1070,
      price:9.99,
      description:"A classic double cheeseburger with a side of fries"
    }]
},
{
  catagory:"Steaks",
    id:"-20239049fjjj--",
  food:[{
    item:"Top Sirloin",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    image:"./assets/images/topsirloin.png",
    id:"3345678hvtu4ebicbeicebcriebi9dmxewicm",
    ingredients:[{
      name:"mashed potatoes",
      display:true
    },
    {
      name:"side of steak sauce",
      display:true
    },
    {
      name:"fries",
      display:true
    }
  ],
    calories:600,
    price:19.99,
    description:"",
    cooked:["medium","medium-rare","rare"]
  },
  {
    item:"New York Steak",
    image:"./assets/images/newyorksteak.png",
    id:"33456789dmxewic930203f98juf08fj38fj08038jm",
    ingredients:[{
      name:"mashed potatoes",
      display:true
    },
    {
      name:"side of steak sauce",
      display:true
    },
    {
      name:"fries",
      display:true
    }
  ],

    calories:900,
    price:29.99,
    description:"",
    cooked:["medium","medium-rare","rare"]
  },
  {
    item:"Filet Milon",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    image:"./assets/images/filetmilon.png",
    id:"33456789dm2-2309-2309-2309-3-9023-0nrwoocrwnjxewicm",
    ingredients:[{
      name:"mashed potatoes",
      display:true
    },
    {
      name:"side of steak sauce",
      display:true
    },
    {
      name:"fries",
      display:true
    }
  ],

    calories:600,
    price:19.99,
    description:"",
    cooked:["medium","medium-rare","rare"]
  }
]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"19292929229384567438920394857",
        image:"./assets/images/cheesepizza.png",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
        image:"./assets/images/pestopizza.png",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/mushroompizza.png",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Sides",
  id:"nojdmi0ednem-3-33--320-3-03-20-349-3094-230ide",
  food:[{
    item:"Grilled Artichoke",
    id:"1929292922938421020-2---2-2-2-2--2-567438920394857",
    image:"./assets/images/grilledartichoke.png",
    ingredients:[],
    calories:500,
    price:9.99,
    description:""
  },
  {
    item:"Baked Potato",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"jnnv90239023903290---1--nvnreivvnvnvnvnrvnvrrvnj22",
    image:"./assets/images/bakedpotato.png",
    ingredients:[],
    calories:350,
    price:2.99,
    description:""
  },
  {
    id:"r3j29fj2f92m9mc0-0-0-0-0-0-0-0-09m29",
    item:"Fries",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"cheese",
        price:.40
      },
      {
        name:"secret sauce",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"truffles",
        price:1.99
      },
      {
        name:"parmesan",
        price:.99
      },



    ],
    image:"./assets/images/fries.png",
    ingredients:[],
    calories:500,
    price:5.50,
    description:""
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  zip:85251,
  street:"7333 E Indian Plaza",
  city:"Scottsdale",
  state:"AZ"
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rh4rfngu4igbi81w1cexjouqcchsk290d2edj8m",
  stars:3,
  objectID:"y543u8dn3uirvbr3vgui3ng34ubg3gf329dxdn2i1ocd2ocmwco100eal",
  name:"China Bowl",
  mapLogo:"./assets/images/chinaMap.png",
  routes:routes,
  logo:"./assets/images/chinabowl.png",
  background:"./assets/images/chinabowlbanner.jpg",
  display:"./assets/images/china9292.jpg",
  type:["all-american","burgers","chinese"],
  priceAverage:total,
  menu:[{
    catagory:"Appetizer",
      id:"33d2cmoicrmomk39ej2903dj901djewcvnew92290923923",
    food:[
      {
        item:"Rice Bowl",
        add:[
          {
            name:"tzakiki",
            price:.99
          },
          {
            name:"garlic dip",
            price:.40
          },
          {
            name:"tahini",
            price:.33
          },
          {
            name:"jalapeno",
            price:.50
          },
          {
            name:"bell pepper",
            price:.60
          },
          {
            name:"carmelized onions",
            price:.60
          },
          {
            name:"mixed greens",
            price:.60
          }



        ],
        id:"3345jciekjijmiomoinceiu6789dmxewicm",
            image:"./assets/images/ricebowl.png",
        ingredients:[{
          name:"brown rice",
          display:true
        },
        {
          name:"garnish",
          display:true
        }
      ],
      calories:300,
      price:2.99,
        description:"Wonton Soup"
      },
    {
      item:"Tariaki Chicken",
      add:[
        {
          name:"tzakiki",
          price:.99
        },
        {
          name:"garlic dip",
          price:.40
        },
        {
          name:"tahini",
          price:.33
        },
        {
          name:"jalapeno",
          price:.50
        },
        {
          name:"bell pepper",
          price:.60
        },
        {
          name:"carmelized onions",
          price:.60
        },
        {
          name:"mixed greens",
          price:.60
        }



      ],
      id:"2ew32i3290ei3j32cmiovc32dcsdxme2dcxk203x298292298",
    image:"./assets/images/chinachicken.png",
      ingredients:[{
        name:"brown rice",
        display:true
      },
      {
        name:"seasoned chicken",
        display:true
      },
      {
        name:"sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A bowl of fresh chicken and rice"
    }]
},
{
  catagory:"Entrees",
    id:"-2023904cmoicncemowocknc1ei9fjjj--",
  food:[{
    name:"Wonton Salad",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/wontonsalad.png",
    id:"fj308jv39iqnq3u9tvbverwmncnucqvnrutpg293nqfcvneifjvcenroii",
    ingredients:[
    {name:"olives",display:true},
    {name:"greens",display:true},
    {name:"lemon dressing",display:true},
    {name:"wonton",display:true}],
    calories:600,
    price:4.99,
    description:"Wonton Salad"
  },
  {
    name:"Wonton Soup",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/wontonsoup.png",
    id:"fj308jv39iqnq3u9tvbvnucqvnrutpg293nqfcvneifjveeeecenroicndwoixqoxmmoxqmocmqcmoi",
    ingredients:[
    {name:"wontons",display:true}
  ],
    calories:300,
    price:4.99,
    description:"Wonton Soup"
  },
  {
    item:"China Special",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/china1.png",
    id:"2029e0i3mecpqcm290r203",
    ingredients:[{
      name:"chicken",
      display:true
    },
    {
      name:"homemade soy sauce",
      display:true
    },
    {
      name:"brown rice",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our special dish from the chef"
  }
]},
{
  catagory:"Drinks",
  id:"nojdmi0edncmwkecnkemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  street:"3123 N Scottsdale Rd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"wontons",
   type:null,
   price:2.99
 },
 {
   name:"rice",
   type:null,
   price:2.99
 },
 {
   name:"soy sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rh48hdj8m000sss",
  objectID:"102293edk92kfdc4900ecm2020209",
  stars:3,

  name:"Johnny Rocket",
  routes:routes,
  mapLogo:"./assets/images/johnnyMap.png",
  logo:"./assets/images/johnnyrocket.png",
  background:"./assets/images/johnnyrocketbanner.jpg",
  display:"./assets/images/america33.jpg",
  type:["all-american","burgers","healthy","dessert"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Double Burger Meal",
      buns:["leaf","gluten-free"],
      id:"2ewjsdxme2dcxk203x298292298",
      add:[
        {
          name:"tzakiki",
          price:.99
        },
        {
          name:"garlic dip",
          price:.40
        },
        {
          name:"tahini",
          price:.33
        },
        {
          name:"jalapeno",
          price:.50
        },
        {
          name:"bell pepper",
          price:.60
        },
        {
          name:"carmelized onions",
          price:.60
        },
        {
          name:"mixed greens",
          price:.60
        }



      ],
          image:"./assets/images/burger1.png",
      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Sliders",
    id:"-20239049fjjj--",
    image:"./assets/images/burger2.png",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
  food:[{
    item:"6 burger slider",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"33456789dmxewicm",
    buns:["leaf","gluten-free"],
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"2029e0i3290r203",
        image:"./assets/images/wings.png",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/salad2.png",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",

  food:[{
    item:"Classic Cheese",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
      image:"./assets/images/cheesepizza.png",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
        image:"./assets/images/mushroompizza.png",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/pestopizza.png",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  street:"7354 E Shea Blvd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rh48nfrvurivgrn8gh54n9g579ghhdj8mfj230f08",
    stars:3,
  objectID:"102293edntuivb4fvgn45gu4n39vfng54ug8b34bgk92kfdc4900ecmceroinveiu",
  name:"The Stand",
  mapLogo:"./assets/images/burgerMap2.png",
  routes:routes,
  logo:"./assets/images/thestand.png",
  background:"./assets/images/thestandbanner.jpg",
  display:"./assets/images/burger339.jpg",
  type:["all-american","burgers","dessert","healthy","chinese"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Cheese Burger",
      id:"2ewjsdxme2dcxk23e13erdcqdrvc2qwq03x298292298",
          image:"./assets/images/burger3.png",
          buns:["leaf","gluten-free"],
      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Starters",
    id:"-20239049fj4kd340f134jj--",
  food:[{
    item:"Fries",
        image:"./assets/images/fries.png",
    id:"33456789dmxew3ekdc2jmo1cj12oiicm",
    modal:false,
    ingredients:[],
    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    modal:true,
        image:"./assets/images/wings.png",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa244340904909412020393939838jgjgjg",
    modal:false,
        image:"./assets/images/salad1.png",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
        image:"./assets/images/cheesepizza.png",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
        image:"./assets/images/cheesepizza.png",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
        image:"./assets/images/pestopizza.png",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{

  street:"4385 E Indian School Rd",
  city:"Phoenix",
  state:"AZ",
  zip: 85018
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},

{
  ownerID:"308eu023dfm20dj1mx231343e4ndcocdcndsoicndsocsndocdsnciod123e3e32130",
  objectID:"93292398eui33cnewiovnklaSCMRI3UVNEIAONVRQ39V33343323248u483938r3320492",
  name:"Pizza Town",
  mapLogo:"./assets/images/pizzaMap.png",
  routes:routes,
  logo:"./assets/images/pizzatown.png",
  background:"./assets/images/pizzatownbanner.jpg",
  display:"./assets/images/pizza45.jpg",
  type:["all-american","pizza"],
  priceAverage:total,
  menu:[{
    catagory:"Starters",
      id:"2ncocnewxmom23j3dk093djxcmwqp0",
    food:[
      {
        item:"Golden Fries",
        add:[
          {
            name:"tzakiki",
            price:.99
          },
          {
            name:"garlic dip",
            price:.40
          },
          {
            name:"tahini",
            price:.33
          },
          {
            name:"jalapeno",
            price:.50
          },
          {
            name:"bell pepper",
            price:.60
          },
          {
            name:"carmelized onions",
            price:.60
          },
          {
            name:"mixed greens",
            price:.60
          }



        ],
        id:"e2222222cmkemeockmekocmokmcxlwql222mceqn",
            image:"./assets/images/fries.png",
        ingredients:[],
        calories:370,
        price:4.95,
        description:"A plate of golden brown fries"
      },
      {
        item:"Buffalo Wings",
        add:[
          {
            name:"tzakiki",
            price:.99
          },
          {
            name:"garlic dip",
            price:.40
          },
          {
            name:"tahini",
            price:.33
          },
          {
            name:"jalapeno",
            price:.50
          },
          {
            name:"bell pepper",
            price:.60
          },
          {
            name:"carmelized onions",
            price:.60
          },
          {
            name:"mixed greens",
            price:.60
          }



        ],
        id:"e239439039222222cmkemeockmekocmokmcxlwql222mceqn",
            image:"./assets/images/wings.png",
        ingredients:[],
        calories:580,
        price:4.95,
        description:"A plate of fresh buffalo wings"
      },
      {
        item:"Calamari",
        add:[
          {
            name:"tzakiki",
            price:.99
          },
          {
            name:"garlic dip",
            price:.40
          },
          {
            name:"tahini",
            price:.33
          },
          {
            name:"jalapeno",
            price:.50
          },
          {
            name:"bell pepper",
            price:.60
          },
          {
            name:"carmelized onions",
            price:.60
          },
          {
            name:"mixed greens",
            price:.60
          }



        ],
            image:"./assets/images/calamari.png",
        id:"e2222222cmkemeockmekocmokmcxlwq992093e0l222mceqn",

        ingredients:[{
          name:"calamari sauce",
          display:true
        }],
        calories:370,
        price:4.95,
        description:"A plate of calamari"
      }
    ]
},
{
  catagory:"Pizzas",
    id:"-20239049f2e323e212e2ejjj--",
  food:[{
    item:"Margerita Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"ecmkemeockmekocmokmcxlwql222mceqn",
        image:"./assets/images/cheesepizza.png",
    ingredients:[{
      name:"tomato",
      display:true
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"flour dough",
      display:false
    }
  ],
    calories:870,
    price:7.95,
    description:"A classic pizza with tomato on top"
  },
  {
    item:"Townstyle Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"334567893940343490409dmxewicm",
        image:"./assets/images/pepperonipizza.png",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"mozzerella",
      display:true
    },
    {
      name:"mushrooms",
      display:true
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"flour dough",
      display:false
    }
  ],

    calories:800,
    price:9.99,
    description:"Our special pizza: we recommend it"
  },
  {
    item:"Chicken Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"3930409eidsj0ci3cx01qcmeonv4ubgf9743bdq2dj9021cn",
        image:"./assets/images/pestopizza.png",
    ingredients:[{
      name:"chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },{
      name:"mozzerella",
      display:true
    },{
      name:"tomato",
      display:true
    },{
      name:"sourdough bread",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Chef's special pizza with grilled chicken"
  },
  {
    item:"Veggie Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
    id:"aa2442309340020393939838jgjgjg",
        image:"./assets/images/mushroompizza.png",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"mozzerella",
      display:true
    }
  ],

    calories:500,
    price:4.99,
    description:"A classic veggie pizza"
  }]
},
{
  catagory:"Pizzas",
  add:[
    {
      name:"tzakiki",
      price:.99
    },
    {
      name:"garlic dip",
      price:.40
    },
    {
      name:"tahini",
      price:.33
    },
    {
      name:"jalapeno",
      price:.50
    },
    {
      name:"bell pepper",
      price:.60
    },
    {
      name:"carmelized onions",
      price:.60
    },
    {
      name:"mixed greens",
      price:.60
    }



  ],
  id:"nojdmi0ednemide33",
  food:[{
    item:"Classic Cheese",
        image:"./assets/images/cheesepizza.png",
    id:"1929292922938456743338920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/mushroompizza.png",
    id:"jnnvnvnreivvnvnv33nvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"8323984394839483023902encjo940",
    item:"Chicken Pizza",
    add:[
      {
        name:"tzakiki",
        price:.99
      },
      {
        name:"garlic dip",
        price:.40
      },
      {
        name:"tahini",
        price:.33
      },
      {
        name:"jalapeno",
        price:.50
      },
      {
        name:"bell pepper",
        price:.60
      },
      {
        name:"carmelized onions",
        price:.60
      },
      {
        name:"mixed greens",
        price:.60
      }



    ],
        image:"./assets/images/lavashpizza.png",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid333399339e2882",
  food:[{
    item:"Coca-Cola",
    image:"./assets/images/coke.png",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    image:"./assets/images/fanta.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    image:"./assets/images/dietcoke.png",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },

  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
      image:"./assets/images/drpepper.png",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
      image:"./assets/images/sprite.png",
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:"",
    image:"./assets/images/rootbeer.png"
  }
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
  stars:3,
address:{
  zip:85014,
  street:"5505 N 7th St",
  city:"Phoenix",
  state:"AZ"

},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 },
 {
   name:"bread",
   type:null,
   price:.99
 }
]
}


]

module.exports = FoodTrucks;
