import React, { Component } from 'react';
import axios from  "axios";
import cookie from "react-cookies";
import Geocode from "react-geocode";

import './css/Fonts.css';
import "./css/utility.css";
import "./css/authentication.css";

import "./css/landing_page.css";
import "./css/layout.css";

import LoginConfig from "./config/login_info.js";
import SignupConfig from "./config/signup_info.js";
import AdminSignupConfig from "./config/admin_signup_info.js";
import AdminLoginConfig from "./config/admin_signup_info.js";

import LandingPage from "./containers/landing_page";
import AuthenticationPage from "./containers/authentication_page";

import ModifyPage from "./containers/modify_page";
import CheckoutPage from "./containers/checkout_page.js";
import HomePage from "./containers/home_page.js";
import MenuPage from "./containers/menu_page.js";
import GooglePage from "./containers/google_page.js";

import AddFoodTruckPage from "./components/Admin/add_food_truck_page.js";
import AdminLandingPage from "./containers/Admin/landing_page";
import AdminLoginPage from "./containers/Admin/login_page";
import AdminSignupPage from "./containers/Admin/signup_page";
import AdminDashboardPage from "./containers/Admin/dashboard_page.js";
import LocationAdminPage from "./containers/Admin/location_admin_page.js";
import EditMenuPage from "./containers/Admin/edit_menu_page.js";

class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      url:"landing",
      item:{},
      zip:"",
      hasSelected:false,
      username:null,
      profile_color:null,
      account:"",
      loading:false,
      address:"",
      lat:null ,
      lng:null,
      name:"",
      profilePhoto:null,
      orders:[],
      checkout_truck:null,
      truck:null,
      adminOrders:[],
      adminTruck:null,
      adminPhoto:null,
      adminName:"",
      adminLat:null,
      adminLng:null,
      adminAddress:"",
      adminProfileColor:null,
      adminZip:""


    }


  }



  SetCheckoutTruck = (truck) => {
    this.setState({checkout_truck:truck});
  }


  CapitlizeWordsOfSentence = (sentence) => {

    const new_sentence = sentence.split(" ");

    new_sentence.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

    console.log(new_sentence);

    return new_sentence;

  }

  ConvertAddress = async () =>{
    const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

    if(response){
      const { lat, lng } = response.data.results[0].geometry.location;
      this.setState({lat:lat,lng:lng});
    }else{
      this.setState({lat:null,lng:null});
    }

  }

  ClearCurrentTruck = () =>{
    this.setState({truck:null});
  }

  componentWillMount(){

      if(cookie.load("account",{path:"/"})){
        this.Initialization();
      }

      this.ClearCookieTimer();

  }


  SetTruck = (truck) => {

    this.setState({truck:truck})

  }


  SetItem = (item) => {

    this.setState({item:item,url:"modify"});

  }


  ClearCookieTimer = ()=>{

    var seconds = 0;
    var minutes;

    this.cookieIntervals = setInterval(()=>{
      minutes = seconds / 60;

      seconds ++;

      if(minutes >= 60){
        seconds = 0;
        minutes = 0;
        cookie.remove("currentItem",{path:"/"});
        cookie.remove("foodtruckCurrent",{path:"/"});
        cookie.remove("account",{path:"/"});
      }

    },1000);

  }

  Initialization(){

      axios.get("/api/users").then((res)=>{

        var users = res.data;
        var savedUser = JSON.parse(cookie.load("account",{path:"/"}));

        for(var i = 0; i<= users.length; i++){
          var loopedUsername = users[i].account.username;

          if(loopedUsername === savedUser.username){
            this.SetAddress(cookie.load("address",{path:"/"}));
            break;
          }

        }

     });

  }

  ChangeAddressFormat = (address)=>{
    this.setState({address:address});
  }

  AddToOrder = (order,truck) =>{
    cookie.remove("orders",{path:"/"});
    this.setState({orders:this.state.orders.concat(order),checkout_truck:truck});
  }

  LetUserInside = async (data) => {

    var {address,name,orders,image,username,orders,profile_color} = data;

    this.setState({loading:true});

    const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

    if(response.data.results.length > 0){

      const { lat, lng } = response.data.results[0].geometry.location;

      var location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng};
      this.setState({url:"home",loading:false,profile_color:profile_color,address:location.address,name:name,profilePhoto:image,username:username,orders:orders,lat:lat,lng:lng});

    }else{

      this.setState({url:"home",loading:false,address:address,name:name,profilePhoto:image,username:username,orders:orders,profile_color:profile_color});

    }


}

LetUserInsideAdmin = async (data) => {

  var {address,name,image,username,orders,profile_color,truck} = data;
  console.log(data);
  this.setState({loading:true});

  const response = await axios.post(`/util/get_coords`,{address:address});
  console.log(response);
  if(response){
    this.setState({url:"/admin/dashboard",loading:false,adminProfileColor:profile_color,adminAddress:response.address,adminName:name,adminProfilePhoto:image,adminUsername:username,adminOrders:orders,adminLat:response.lat,adminLng:response.lng});

  }else{
    this.setState({url:"/admin/dashboard",loading:false,adminProfileColor:profile_color,adminAddress:"",adminName:name,adminProfilePhoto:image,adminUsername:username,adminOrders:orders});
  }


}




 GuestEntrance = async (address) =>{

    this.setState({loading:true});

    const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

    var guest_account = {
      lat:null,
      lng:null,
      name:"Guest",
      username:Math.floor((Math.random() * 3000) + (3000 * (Math.random() *2000)+20)),
      password:null,
      profile_color:"black",
      address:address,
      orders:[]
    }

    if(response.data.results.length > 0){

        const { lat, lng } = response.data.results[0].geometry.location;

        var location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng};

        this.setState({
          loading:false,
          name:guest_account.name,
          profile_color:guest_account.profile_color,
          profileIcon:null,
          username:guest_account.name,
          orders:[],
          address:guest_account.address,
          lat:lat,
          lng:lng,
          url:"home"
        });

      }
   else{

     this.setState({
       loading:false,
       name:guest_account.name,
       profile_color:guest_account.profile_color,
       profileIcon:null,
       username:guest_account.name,
       orders:[],
       address:guest_account.address,
       url:"home"
     });

    }

 }

  ClearOrder = (order,truck) =>{

    // cookie.remove("orders",{path:"/"});
    // var foodtruckID  = cookie.load("foodtruckCurrent",{path:"/"});
    console.log(truck,this.state.truck);
    if(truck === this.state.checkout_truck || !this.state.checkout_truck){

      this.setState({orders:this.state.orders.concat(order),checkout_truck:truck});
      return true;
    }else{

      var confirm_bool = window.confirm("Warning: Adding from another foodtruck will clear your current order");
      console.log(confirm_bool);

      if(confirm_bool){
        this.setState({orders:[]}, ()=>{
          this.setState({orders:this.state.orders.concat(order),checkout_truck:truck});
        });
        console.log(this.state.orders);
        return true;
      }else{
        return false;
      }

    }
  }

//----------------------------State Changer-----------------------------
   ChangeAddress  = async (address,lat,lng)=>{
     this.setState({address:address,lat:lat,lng:lng});
     console.log(this.state.address);

    const response = await axios.post("/api/change_user_address",{username:this.state.username,address:address,lat:lat,lng:lng});

  }

   ChangeURL = (url) =>{

    cookie.remove("url",{path:"/"});

    if(url !== "modify"){
      cookie.save("url",url,{path:"/"});
    }

    this.setState({url:url});

  }

// JSX will return component depending on url state
  render() {

      var account = {
        address:this.state.address,
        name:this.state.name,
        username:this.state.username,
        profilePhoto:this.state.profilePhoto,
        profile_color:this.state.profile_color,
        lat:this.state.lat,
        lng:this.state.lng,
        orders:this.state.orders,
      }

      var admin_account= {
        address:this.state.adminSddress,
        name:this.state.adminName,
        username:this.state.adminUsername,
        profilePhoto:this.state.adminProfilePhoto,
        profile_color:"red",
        lat:this.state.adminLat,
        lng:this.state.adminLng,
        orders:this.state.orders,
      }

      if(this.state.url == "/admin/dashboard"){
        return <AdminDashboardPage ChangeURL={this.ChangeURL} account = {admin_account} />
      }
      if(this.state.url == "/admin/edit_truck"){
        return <EditMenuPage ChangeURL={this.ChangeURL} account = {admin_account}  />

      }
      if(this.state.url == "/admin/location"){
        return <LocationAdminPage ChangeURL={this.ChangeURL} account = {admin_account} />
      }
      if(this.state.url == "/admin/"){
        return <AdminLandingPage ChangeURL={this.ChangeURL}  />
      }
      if(this.state.url == "/admin/login"){
        return <AdminLoginPage ChangeURL={this.ChangeURL} config = {AdminLoginConfig} LetUserInside = {this.LetUserInsideAdmin}  />
      }
      if(this.state.url == "/admin/signup"){
        return <AdminSignupPage ChangeURL={this.ChangeURL} config = {AdminSignupConfig} LetUserInside = {this.LetUserInsideAdmin}  />
      }
      if(this.state.loading){
        return <div>Loading.....</div>
      }

     if(this.state.url === "checkout"){
        return (
          <CheckoutPage
            url = {this.state.url}
              orders = {this.state.orders}
              ChangeURL={this.ChangeURL}
              account = {account}
              truck = {this.state.truck}
              ClearOrder = {this.ClearOrder}
              CapitlizeWordsOfSentence = {this.CapitlizeWordsOfSentence}
              ChangeCurrentAddress = {this.ChangeCurrentAddress}
              lat = {this.state.lat}
              lng = {this.state.lng}
              address = {this.state.address}
              ChangeURL={this.ChangeURL}

           />
         )
      }

      if(this.state.url === "map"){
            return (
                <GooglePage
                  url = {this.state.url}
                  orders= {this.state.orders}
                  account = {account}
                  ChangeAddress = {this.ChangeAddress}
                  SetTruck = {this.SetTruck}
                  lat = {this.state.lat}
                  lng = {this.state.lng}
                  address = {this.state.address}
                  ChangeURL={this.ChangeURL}
                />
            )
          }
      if(this.state.url === "modify"){
            return(
              <ModifyPage
                url = {this.state.url}
                 account = {account}
                 orders= {this.state.orders}
                 ClearOrder = {this.ClearOrder}
                 AddToOrder = {this.AddToOrder}
                 ChangeAddress = {this.ChangeAddress}
                 address = {this.state.address}
                 CapitlizeWordsOfSentence = {this.CapitlizeWordsOfSentence}
                 ClearOrder = {this.ClearOrder}
                 SetCheckoutTruck = {this.SetCheckoutTruck}
                 item = {this.state.item}
                 ChangeURL={this.ChangeURL}
                 truck = {this.state.truck}
              />
            )
          }
         if(this.state.url === "menu"){
           return (
             <MenuPage
               url = {this.state.url}
                account = {account}
                truck = {this.state.truck}
                orders= {this.state.orders}
                SetItem = {this.SetItem}
                SetTruck = {this.SetTruck}
                ChangeAddress = {this.ChangeAddress}
                CapitlizeWordsOfSentence = {this.CapitlizeWordsOfSentence}
                address = {this.state.address}
                SetItem = {this.SetItem}
                ChangeURL={this.ChangeURL}
            />
          );
        }
        if(this.state.url === "landing"){
            return <LandingPage  ChangeURL={this.ChangeURL} GuestEntrance = {this.GuestEntrance} />
          }
          if(this.state.url === "home"){
             return (
               <HomePage
                 url = {this.state.url}
                  account = {account}
                  ChangeAddressFormat = {this.ChangeAddressFormat}
                  SetTruck = {this.SetTruck}
                  orders= {this.state.orders}
                  ClearCurrentTruck = {this.ClearCurrentTruck}
                  ChangeAddress = {this.ChangeAddress}
                  CapitlizeWordsOfSentence = {this.CapitlizeWordsOfSentence}
                  foodtrucks = {this.state.truck}
                  address = {this.state.address}
                  lat = {this.state.lat}
                  lng = {this.state.lng}
                  ChangeURL={this.ChangeURL}
                />
                )
           }
          if(this.state.url === "usersign")
          {
               return <AuthenticationPage  LetUserInside = {this.LetUserInside} config = {SignupConfig} ChangeURL={this.ChangeURL} type="user" />
          }
          if(this.state.url === "userlogin")
          {
              return <AuthenticationPage LetUserInside = {this.LetUserInside} config = {LoginConfig} ChangeURL={this.ChangeURL} type="user" />
          }
      }

}

export default App;
