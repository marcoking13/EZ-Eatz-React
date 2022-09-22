// BestRatedFoodtrucks = async (lat,lng) => {
//   const {data} = await axios.post("/api/trucks",null);
//
//   const foodtrucks = [];
//   data.map(async(foodtruck)=>{
//       var rating = foodtruck.stars;
//       var foodtruckLocation = {
//         lat:foodtruck.lat,
//         lng:foodtruck.lng
//       }
//       var userLocation = {
//         lat:lat,
//         lng: lng
//       }
//
//      var data = await this.CheckDistance(foodtruckLocation,userLocation);
//
//      if(data){
//        foodtruck.distance = data;
//        if(rating > 3.5){
//          foodtrucks.push(foodtruck);
//        }
//      }
//
//    });
//       this.setState({best_rated_foodtrucks:foodtrucks});
//
//   }
//
// CheckDistance = async(foodtruckLocation,userLocation) => {
//
//   var body = {
//     foodtruckLocation:foodtruckLocation,
//     userLocation:userLocation,
//     radius:this.state.radius
//   }
//
//   const response = await axios.post("/api/distance-calculator",body);
//
//   if(response.data.distance <= this.state.radius)
//   {
//       return response.data.distance.toString() +""+response.data.unit;
//   }else{
//       return false;
//   }
//
//
//
//   }
//
//
//
// CheapestTrucks = async (lat,lng) => {
//   const {data} = await axios.post("/api/trucks",null);
//
//
//
//   const foodtrucks = [];
//
//   data.map(async(foodtruck)=>{
//       var expensive = foodtruck.expensive;
//
//       var foodtruckLocation = {
//         lat:foodtruck.lat,
//         lng:foodtruck.lng
//       }
//       var userLocation = {
//         lat:lat,
//         lng: lng
//       }
//
//       var body = {
//         foodtruckLocation:foodtruckLocation,
//         userLocation:userLocation,
//         radius:this.state.radius
//       }
//
//       const response = await axios.post("/api/distance-calculator",body);
//
//       foodtruck.distance = response.data.distance.toString() +""+response.data.unit;
//
//       if(response.data.distance <= this.state.radius && expensive < 3)
//       {
//         foodtrucks.push(foodtruck);
//       }
//
//       this.setState({cheapest_trucks:foodtrucks});
//
//   });
//
// }
//
//
// VeganTrucks = async (lat,lng) => {
//
//   const {data} = await axios.post("/api/trucks",null);
//
//   function isVegan(types){
//     for(var i = 0; i < types.length; i++){
//       if(types[i] == "vegan"  || types[i] =="Vegan"){
//         return true;
//         break;
//       }
//     }
//     return false;
//   }
//
//   const foodtrucks = [];
//
//   data.map(async(foodtruck)=>{
//       var type = foodtruck.type;
//       var is_vegan = isVegan(type);
//
//       var foodtruckLocation = {
//         lat:foodtruck.lat,
//         lng:foodtruck.lng
//       }
//       var userLocation = {
//         lat:lat,
//         lng: lng
//       }
//
//       var body = {
//         foodtruckLocation:foodtruckLocation,
//         userLocation:userLocation,
//         radius:this.state.radius
//       }
//
//
//
//       const response = await axios.post("/api/distance-calculator",body);
//
//       foodtruck.distance = response.data.distance.toString() +""+response.data.unit;
//
//
//
//       if(response.data.distance <= this.state.radius && is_vegan)
//       {
//         foodtrucks.push(foodtruck);
//       }
//
//       this.setState({vegan_trucks:foodtrucks});
//
//   });
//
// }
//
// FoodtrucksNearMe = async (lat,lng) => {
//
//   const {data} = await axios.post("/api/trucks",null);
//   const foodtrucks = [];
//
//   data.map(async(foodtruck)=>{
//
//     var foodtruckLocation = {
//       lat:foodtruck.lat,
//       lng:foodtruck.lng
//     }
//     var userLocation = {
//       lat:lat,
//       lng: lng
//     }
//
//     var closer_radius = parseFloat(this.state.radius / 1.5).toFixed(2);
//
//     var body = {
//       foodtruckLocation:foodtruckLocation,
//       userLocation:userLocation,
//       radius:closer_radius
//     }
//
//     const response = await axios.post("/api/distance-calculator",body);
//
//     foodtruck.distance = response.data.distance.toString() +""+response.data.unit;
//
//     if(response.data.distance <= this.state.radius )
//     {
//       foodtrucks.push(foodtruck);
//     }
//
//
//
//   });
//
//   this.setState({nearbyFoodtrucks:foodtrucks});
//
//
// }
