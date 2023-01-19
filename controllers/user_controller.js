const FoodtruckClass = require("./../config/foodtruck_constructor.js");



const FindAllTrucks = (req,res,next) => {

      var {lat,lng,radius,sort,price_sort} = req.body;
      console.log(req.body)
      var found_trucks = FoodtruckClass.FindAllTrucks((found_trucks)=>{
        console.log(found_trucks.length);
        FoodtruckClass.FilterTrucks(found_trucks,lat,lng,radius,sort,price_sort,(filtered_trucks)=>{
          console.log(filtered_trucks)
            res.json(filtered_trucks);
        });

      });

}

const FindBestRatedTrucks = (req,res,next) => {

        var {lat,lng,radius,sort,price_sort} = req.body;

        FoodtruckClass.FindBestRatedTrucks((found_trucks)=>{

          FoodtruckClass.FilterTrucks(found_trucks,lat,lng,radius,sort,price_sort,(filtered_trucks)=>{
              res.json(filtered_trucks);
          });

        });

  }

const FindVeganTrucks =  (req,res,next) => {

    var {lat,lng,radius,sort,price_sort} = req.body;

    FoodtruckClass.FindVeganTrucks((found_trucks)=>{

      FoodtruckClass.FilterTrucks(found_trucks,lat,lng,radius,sort,price_sort,(filtered_trucks)=>{
          res.json(filtered_trucks);
      })

    })

}


const FindNearestTrucks = (req,res,next) => {

      var {lat,lng,radius,sort,price_sort} = req.body;

      FoodtruckClass.FindAllTrucks((found_trucks)=>{

        FoodtruckClass.FilterTrucks(found_trucks,lat,lng,radius,sort,price_sort,(filtered_trucks)=>{
            res.json(filtered_trucks);
        })

      })

}

const FindCheapestTrucks = (req,res,next) =>{

  var {lat,lng,radius,sort,price_sort} = req.body;

  FoodtruckClass.FindCheapestTrucks((found_trucks)=>{

    FoodtruckClass.FilterTrucks(found_trucks,lat,lng,radius,sort,price_sort,(filtered_trucks)=>{
        res.json(filtered_trucks);
    })

  })

}

exports.FindAllTrucks = FindAllTrucks;
exports.FindNearestTrucks = FindNearestTrucks;
exports.FindVeganTrucks = FindVeganTrucks;
exports.FindCheapestTrucks = FindCheapestTrucks;
exports.FindBestRatedTrucks = FindBestRatedTrucks;
