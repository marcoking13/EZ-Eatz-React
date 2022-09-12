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

import ModifyPage from "./containers/modify_page";
import CheckoutPage from "./containers/checkout_page.js";
import HomePage from "./containers/home_page.js";
import MenuPage from "./containers/menu_page.js";
import GooglePage from "./containers/google_page.js";





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
      address:this.props.address,
      lat:null ,
      lng:null,
      name:"",
      profilePhoto:null,
      orders:[],
      truck:null

    }


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


  SetTruck = (truck) => {

    if(this.state.hasSelected == false){
      this.setState({truck:truck,hasSelected:true})
    }

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

  AddToOrder = (order) =>{
    cookie.remove("orders",{path:"/"});
    this.setState({orders:this.state.orders.concat([order])});
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
   ChangeAddress  = async (address,lat,lng)=>{
    this.setState({address:address,lat:lat,lng:lng});
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

      if(this.state.loading){
        return <div>Loading.....</div>
      }

     if(this.state.url === "checkout"){
        return (
          <CheckoutPage
              orders = {this.state.orders}
              ChangeURL={this.ChangeURL}
              account = {account}
              truck = {this.state.truck}
              ClearOrder = {this.ClearOrder}
              ChangeAddress = {this.ChangeAddress}
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
                  orders= {this.state.orders}
                  account = {account}
                  ClearOrder = {this.ClearOrder}
                  ChangeAddress = {this.ChangeAddress}
                  lat = {this.state.lat}
                  lng = {this.state.lng}
                  address = {this.state.address}
                  ChangeURL={this.ChangeURL} />
            )
          }
      if(this.state.url === "modify"){
            return(
              <ModifyPage
                 account = {account}
                 orders= {this.state.orders}
                 ClearOrder = {this.ClearOrder}
                 AddToOrder = {this.AddToOrder}
                 ChangeAddress = {this.ChangeAddress}
                 address = {this.state.address}
                 item = {this.state.item}
                 ChangeURL={this.ChangeURL}
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
                ChangeAddress = {this.ChangeAddress}
                address = {this.state.address}
                SetItem = {this.SetItem}
                ChangeURL={this.ChangeURL}
            />
          );
        }
        if(this.state.url === "landing"){
            return <LandingPage  ChangeURL={this.ChangeURL} />
          }
          if(this.state.url === "home"){
             return (
               <HomePage
                  account = {account}
                  ChangeAddressFormat = {this.ChangeAddressFormat}
                  SetTruck = {this.SetTruck}
                  orders= {this.state.orders}
                  ClearOrder = {this.ClearOrder}
                  ConvertAddress = {this.ConvertAddress}
                  ChangeAddress = {this.ChangeAddress}
                  foodtrucks = {this.state.truck}
                  address = {this.state.address}
                  lat = {this.state.lat}
                  lng = {this.state.lng}
                  ChangeURL={this.ChangeURL} />
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
