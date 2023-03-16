
// LetUserInsideAdmin = async (data) => {
//
//   var {address,name,image,username,orders,profile_color,truck} = data;
//
//   this.setState({loading:true});
//
//   const response = await axios.post(`/util/get_coords`,{address:address});
//   if(response){
//     this.setState({url:"/admin/dashboard",loading:false,adminProfileColor:profile_color,adminAddress:response.address,adminName:name,adminProfilePhoto:image,adminUsername:username,adminOrders:orders,adminLat:response.lat,adminLng:response.lng});
//
//   }else{
//     this.setState({url:"/admin/dashboard",loading:false,adminProfileColor:profile_color,adminAddress:"",adminName:name,adminProfilePhoto:image,adminUsername:username,adminOrders:orders});
//   }
//
// }
//
//  GuestEntrance = async (address) =>{
//
//     this.setState({loading:true});
//
//     const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);
//
//     var guest_account = {
//       lat:null,
//       lng:null,
//       name:"Guest",
//       username:Math.floor((Math.random() * 3000) + (3000 * (Math.random() *2000)+20)),
//       password:null,
//       profile_color:"black",
//       address:address,
//       orders:[]
//     }
//
//     if(response.data.results.length > 0){
//
//         const { lat, lng } = response.data.results[0].geometry.location;
//
//         var location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng};
//
//         this.setState({
//           loading:false,
//           name:guest_account.name,
//           profile_color:guest_account.profile_color,
//           profileIcon:null,
//           username:guest_account.name,
//           orders:[],
//           address:guest_account.address,
//           lat:lat,
//           lng:lng,
//           url:"home"
//         });
//
//       }
//    else{
//
//      this.setState({
//        loading:false,
//        name:guest_account.name,
//        profile_color:guest_account.profile_color,
//        profileIcon:null,
//        username:guest_account.name,
//        orders:[],
//        address:guest_account.address,
//        url:"home"
//      });
//
//     }
//
//  }
