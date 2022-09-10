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

import LandingPage from "./containers/landing_page";
import AuthenticationPage from "./containers/authentication_page";

import LoadingPage from "./containers/loading_page";
import ModifyPage from "./containers/modify_page";
import CheckoutPage from "./containers/checkout_page.js";
import HomePage from "./containers/home_page.js";
import MenuPage from "./containers/menu_page.js";
import GooglePage from "./containers/google_page.js";
import SignupForm from "./containers/signup_form.js";




class App extends Component {
  constructor(props){
    super(props);

    // var orders = [];
    // var truck;
    // var urlCookie = "landing";
    //
    // if(cookie.load("account",{path:"/"})){
    //   urlCookie = "home";
    // }
    //
    // var foodtruckID  = cookie.load("foodtruckCurrent",{path:"/"});
    //
    // cookie.remove("currentItem",{path:"/"});
    // cookie.remove("foodtruck",{path:"/"});
    //
    // axios.get("/api/trucks").then((response)=>{
    //   var trucks = response.data;
    //     // Loop through each truck object
    //   for(var i = 0; i<trucks.length;i++){
    //     // If the selected truck's id matches the looped trucks
    //       //Save the currently looped truck into the state
    //     if(foodtruckID === trucks[i].objectID){
    //       truck = trucks[i];
    //
    //       break;
    //     }
    //
    //   }
    //
    // });
    //
    // if(cookie.load("orders",{path:"/"}) && cookie.load("foodtruck",{path:"/"})){
    //     orders= JSON.parse(cookie.load("orders",{path:"/"}));
    //   }

    this.state = {
      url:"landing",
      item:{},
      zip:"",
      hasSelected:false,
      username:null,
      profile_color:null,
      account:"",
      loading:false,
      address:this.props.address,
      lat:null ,
      lng:null,
      name:"",
      profilePhoto:null,
      orders:[],
      truck:null

    }


    this.changeURL = this.changeURL.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.ClearOrder = this.ClearOrder.bind(this);

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
  componentWillMount(){

      if(cookie.load("account",{path:"/"})){
        this.Initialization();
      }
      if(window.innerWidth < 480){
        this.setState({url:"map"})
      }
      this.ClearCookieTimer();

  }

  componentDidUpdate(){
    cookie.save("orders",this.state.orders,{path:"/"});
  }

  SetTruck = (truck) => {

    if(this.state.hasSelected == false){
      this.setState({truck:truck,hasSelected:true})
    }
  }


  SetItem = (item) => {


      this.setState({item:item,url:"modify"});
      console.log(this.state.item);

  }



  ClearCookieTimer(){

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

  changeAddressFormat = (address)=>{
    this.setState({address:address});
  }

  addToOrder(order){
    cookie.remove("orders",{path:"/"});
    this.setState({orders:this.state.orders.concat([order])});
  }



  letUserInside = async(data)=>{

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

  ClearOrder(){
    cookie.remove("orders",{path:"/"});
    var foodtruckID  = cookie.load("foodtruckCurrent",{path:"/"});
      axios.get("/api/trucks").then((response)=>{
        var trucks = response.data;

          for(var i = 0; i<trucks.length;i++){

            if(foodtruckID === trucks[i].objectID){
              this.setState({orders:[]});
              break;
            }
          }

        });

  }
//----------------------------State Changer-----------------------------
   changeAddress  = async (address,lat,lng)=>{
    this.setState({address:address,lat:lat,lng:lng});
    const response = await axios.post("/api/change_user_address",{username:this.state.username,address:address,lat:lat,lng:lng});
  }

  changeURL(url){
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

      if(this.state.loading){
        return <div>Loading.....</div>
      }

      if(this.state.loading){
        return <LoadingPage  PostAddress = {this.PostAddress}  changeURL={this.changeURL} />
       }

     if(this.state.url === "checkout"){
        return (
          <CheckoutPage
              orders = {this.state.orders}
              changeURL={this.changeURL}
              account = {account}
              truck = {this.state.truck}
              ClearOrder = {this.ClearOrder}
              changeAddress = {this.changeAddress}
              lat = {this.state.lat}
              lng = {this.state.lng}
              address = {this.state.address}
              changeURL={this.changeURL}

           />
         )
      }

      if(this.state.url === "map"){
            return (
                <GooglePage
                  orders= {this.state.orders}
                  account = {account}
                  ClearOrder = {this.ClearOrder}
                  changeAddress = {this.changeAddress}
                  lat = {this.state.lat}
                  lng = {this.state.lng}
                  address = {this.state.address}
                  changeURL={this.changeURL} />
            )
          }
      if(this.state.url === "modify"){
            return(
              <ModifyPage
                 account = {account}
                 orders= {this.state.orders}
                 ClearOrder = {this.ClearOrder}
                 addToOrder = {this.addToOrder}
                 changeAddress = {this.changeAddress}
                 address = {this.state.address}
                 item = {this.state.item}
                 changeURL={this.changeURL}
              />
            )
          }
         if(this.state.url === "menu"){
           return (
             <MenuPage
                account = {account}
                truck = {this.state.truck}
                orders= {this.state.orders}
                SetItem = {this.SetItem}
                SetTruck = {this.SetTruck}
                changeAddress = {this.changeAddress}
                address = {this.state.address}
                SetItem = {this.SetItem}
                changeURL={this.changeURL}
            />
          );
        }
        if(this.state.url === "landing"){
            return <LandingPage  PostAddress = {this.PostAddress} changeURL={this.changeURL} />
          }
          if(this.state.url === "home"){
             return (
               <HomePage
                  account = {account}
                  changeAddressFormat = {this.changeAddressFormat}
                  SetTruck = {this.SetTruck}
                  orders= {this.state.orders}
                  ClearOrder = {this.ClearOrder}
                  ConvertAddress = {this.ConvertAddress}
                  changeAddress = {this.changeAddress}
                  foodtrucks = {this.state.truck}
                  address = {this.state.address}
                  lat = {this.state.lat}
                  lng = {this.state.lng}
                  changeURL={this.changeURL} />
                )
           }
          if(this.state.url === "usersign")
          {
               return <AuthenticationPage  letUserInside = {this.letUserInside} config = {SignupConfig} changeURL={this.changeURL} type="user" />
          }
          if(this.state.url === "userlogin")
          {
              return <AuthenticationPage letUserInside = {this.letUserInside} config = {LoginConfig} changeURL={this.changeURL} type="user" />
          }
      }

}

export default App;
