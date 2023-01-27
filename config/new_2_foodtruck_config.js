//
// const Menu = require("./foodtruck_constructor.js")
// const Catagory = require("./foodtruck_constructor.js")
// const Item = require("./foodtruck_constructor.js")
// const Addon = require("./foodtruck_constructor.js")
// const Ingredients = require("./foodtruck_constructor.js")
// const Foodtruck = require("./foodtruck_constructor.js")
// const Address = require("./address_constructor.js");
//
// const public_images ="./../public/assets/images/";
//
//
// const ice_cream_flavors = ["chocolate","vanilla","strawberry"];
// console.log(Address,Foodtruck);
//
// const IceCreamSandwichCatagory =   new Catagory("Ice Cream Sandwiches","404949490",
//   [
//     new Item("Classic Ice Cream Sandwich","4494949",3.99,public_images + "icecream_sandwich_1.png",400,
//   [new Ingredients("Homemade Ice Cream",true),new Ingredients("Triple Chocolate Cookie",true)],
//   ["chocolate","vanilla","strawberry"],
//   [
//     new Addon("skittles",.5),
//     new Addon("fudge",.4),
//     new Addon("m&m",.3),
//     new Addon("oreos",.6),
//     new Addon("sprinkles",.5),
//     new Addon("marshmallow",.5)
//   ],
//
// )
// ]);
//
// const HomemadeIcecream =   new Catagory("Ice Cream Sandwiches","404949490",
//   [
//     new Item("Vanilla Ice Cream","4494949",3.99,public_images + "icecream_sandwich_5.png",400,
//   [new Ingredients("Homemade Ice Cream",true),new Ingredients("Triple Chocolate Cookie",true)],
//   ["chocolate","vanilla","strawberry"],
//   [
//     new Addon("skittles",.5),
//     new Addon("fudge",.4),
//     new Addon("m&m",.3),
//     new Addon("oreos",.6),
//     new Addon("sprinkles",.5),
//     new Addon("marshmallow",.5)
//   ],
//
// ),
// new Item("Strawberry Ice Cream","4494949",3.99,public_images + "icecream_sandwich_5.png",400,
// [new Ingredients("Homemade Ice Cream",true),new Ingredients("Triple Chocolate Cookie",true)],
// ["chocolate","vanilla","strawberry"],
// [
// new Addon("skittles",.5),
// new Addon("fudge",.4),
// new Addon("m&m",.3),
// new Addon("oreos",.6),
// new Addon("sprinkles",.5),
// new Addon("marshmallow",.5)
// ],
//
// ),
// new Item("Chocolates Ice Cream","4494949",3.99,public_images + "icecream_sandwich_5.png",400,
// [new Ingredients("Homemade Ice Cream",true),new Ingredients("Triple Chocolate Cookie",true)],
// ["chocolate","vanilla","strawberry"],
// [
// new Addon("skittles",.5),
// new Addon("fudge",.4),
// new Addon("m&m",.3),
// new Addon("oreos",.6),
// new Addon("sprinkles",.5),
// new Addon("marshmallow",.5)
// ],
//
// )
// ]);
//
// const SpecialIceCream =   new Catagory("Specialty Ice Cream","404949490",
//   [
//     new Item("Rocky Road","4494949",3.99,public_images + "icecream_sandwich_4.png",400,
//   [
//    new Ingredients("Chocolate Ice Cream",true),
//    new Ingredients("Hot Fudge",true),
//    new Ingredients("Marshmallow Drizzle",true),
//    new Ingredients("Marshmallow Topping",true)
// ],
//   ice_cream_flavors,
//   [
//     new Addon("skittles",.5),
//     new Addon("fudge",.4),
//     new Addon("m&m",.3),
//     new Addon("oreos",.6),
//     new Addon("marshmallow",.5),
//     new Addon("marshmallow drizzle",.5)
//   ],
//
// ),
// new Item("Triple Fudge","4494949",4.99,public_images + "icecream_sandwich_4.png",400,
// [
// new Ingredients("Chocolate Ice Cream",true),
// new Ingredients("Hot Fudge",true),
// new Ingredients("Chocolate Chunk Cookie",true),
// new Ingredients("Chocolate Chips",true)
// ],
// ["chocolate","vanilla","strawberry"],
// [
// new Addon("skittles",.5),
// new Addon("fudge",.4),
// new Addon("m&m",.3),
// new Addon("oreos",.6),
// new Addon("marshmallow",.5),
// new Addon("marshmallow drizzle",.5)
// ],
//
// ),
// new Item("Vanilla Bean Delight","4494949",3.99,public_images + "icecream_sandwich_4.png",400,
// [
// new Ingredients("Ice Cream of Your Choosing",true),
// new Ingredients("Vanilla Bean",true),
// new Ingredients("Waffle Cone",true),
// new Ingredients("Rainbow Sprinkles",true)
// ],
// ice_cream_flavors,
// [
// new Addon("skittles",.5),
// new Addon("fudge",.4),
// new Addon("m&m",.3),
// new Addon("oreos",.6),
// new Addon("marshmallow",.5),
// new Addon("chocolate dipped cone",.5)
// ],
//
// ),
// new Item("Freezy Cake Blast","4494949",3.99,public_images + "icecream_sandwich_5.png",400,
// [
// new Ingredients("Cake Batter Ice Cream",true),
// new Ingredients("M&Ms",true),
// new Ingredients("Rainbow Sprinkles",true),
// new Ingredients("Hot Fudge",true)
// ],
// ice_cream_flavors,
// [
// new Addon("skittles",.5),
// new Addon("fudge",.4),
// new Addon("m&m",.3),
// new Addon("oreos",.6),
// new Addon("marshmallow",.5),
// new Addon("marshmallow drizzle",.5)
// ],
//
// )
// ]);
//
//
// const foodtrucks =
// [
//   new Foodtruck(
//     "404040",
//     "383838383820",
//     "Freeze-Dry",
//     ["all-american","ice-cream"],
//     3,
//     null,
//     null,
//     new Address("4545 N Scottsdale Rd","Scottsdale","AZ",85260),
//     public_images+"freeze_dry_logo.png",
//     public_images+"freeze_dry_background.png",
//     public_images+"freeze_dry_map_logo.png",
//     null,
//     new Menu("40494949",
//     [
//         IceCreamSandwichCatagory,
//         HomemadeIcecream
//         SpecialIceCream
//     ])
// )
// ]
//
// module.exports = foodtrucks;
