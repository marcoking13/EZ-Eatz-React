import React, { Component } from 'react';
import axios from  "axios";
import cookie from "react-cookies";
import Geocode from "react-geocode";

import './css/Fonts.css';

import SignupAndLoginPage from "./containers/login_signup";
import LoadingPage from "./containers/loading_page";
import ModifyPage from "./containers/modify_page";
import CheckoutPage from "./containers/checkout_page.js";
import HomePage from "./containers/home_page.js";
import MenuPage from "./containers/menu_page.js";
import GoogleMap from "./containers/google_map.js";
import SignupForm from "./containers/signup_form.js";




class App extends Component {
  constructor(props){
    super(props);
    var orders = [];
    var truck;
    var urlCookie = cookie.load("url",{path:"/"});
    if(!cookie.load("currentItem",{path:"/"})){
      urlCookie = "menu";
    }
    var foodtruckID  = cookie.load("foodtruckCurrent",{path:"/"});
    cookie.remove("currentItem",{path:"/"});

    axios.get("/api/trucks").then((response)=>{
      var trucks = response.data;
        // Loop through each truck object
      for(var i = 0; i<trucks.length;i++){
        // If the selected truck's id matches the looped trucks
          //Save the currently looped truck into the state
        if(foodtruckID === trucks[i].objectID){
          truck = trucks[i];

          break;
        }
      }
    });

    if(cookie.load("orders",{path:"/"}) && cookie.load("foodtruck",{path:"/"})){

        orders= JSON.parse(cookie.load("orders",{path:"/"}));

    }

    this.state = {
      url:urlCookie,
      item:{},
      zip:"",
      account:"",
      address:"Enter Address",
      lat:33.4255104 ,
      lng:-111.9400054,
      orders:orders,
      truck:truck

    }



    this.PostAddress = this.PostAddress.bind(this);
    this.SetAddress = this.SetAddress.bind(this);
    this.changeZip = this.changeZip.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeURL = this.changeURL.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.SetTruck = this.SetTruck.bind(this);
    this.ClearOrder = this.ClearOrder.bind(this);



  }

  componentWillMount(){

      if(cookie.load("account",{path:"/"})){
        this.Initialization();

      }
          this.ClearCookieTimer();
  }

  componentDidUpdate(){
    cookie.save("orders",this.state.orders,{path:"/"});

  }


  SetTruck(truck){

    this.setState({truck:truck})
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


  addToOrder(order){
    cookie.remove("orders",{path:"/"});
    this.setState({orders:this.state.orders.concat([order])});
  }

  ClearOrder(){
    cookie.remove("orders",{path:"/"});
    var foodtruckID  = cookie.load("foodtruckCurrent",{path:"/"});
      axios.get("/api/trucks").then((response)=>{
        var trucks = response.data;

          for(var i = 0; i<trucks.length;i++){

            if(foodtruckID === trucks[i].objectID){
              this.setState({orders:[],foodtruck:trucks[i]});
              break;
            }
          }

        });

  }
//----------------------------State Changer-----------------------------
  changeAddress(e){
    this.setState({address:e.target.value});
    cookie.remove("address",{path:"/"});
    cookie.save("address",this.state.formatted_address,{path:"/"});
  }

  PostAddress(address,user){
      axios.post("/api/updateUserAddress",{userData:user,address:address});
      this.setState({address:address});
  }

  changeZip(e){
    this.setState({zip:e.target.value});
  }

  changeURL(url){
        cookie.remove("url",{path:"/"});
        if(url !== "modify"){
          cookie.save("url",url,{path:"/"});
        }


        this.setState({url:url});
  }
  //-----------------------------------------------------------------------
  // Sets Address to geocode then save to state to be used on maps
  SetAddress(address){


    if(!address){
      address = "Enter Address";
    }

    Geocode.fromAddress(address).then(
      response => {

        const { lat, lng } = response.results[0].geometry.location;
        this.setState({address:address,lat:lat, lng:lng });
        },error => { console.error(error,'error')}
      );
    }

// JSX will return component depending on url state
  render() {

        if(this.state.url === "loading"){
               return  <div className="App">    <LoadingPage  PostAddress = {this.PostAddress}  changeURL={this.changeURL} />   </div>
         }
         if(this.state.url === "checkout"){
                return  <div className="App">    <CheckoutPage orders = {this.state.orders} changeURL={this.changeURL} />   </div>
          }
         if(this.state.url === "map"){
                return  <div className="App">    <GoogleMap  orders= {this.state.orders}  ClearOrder = {this.ClearOrder} PostAddress = {this.PostAddress} changeAddress = {this.changeAddress} changeZip = {this.changeZip} lat = {this.state.lat} lng = {this.state.lng} address = {this.state.address} SetAddress={this.SetAddress} changeURL={this.changeURL} />   </div>
          }
         if(this.state.url === "modify"){
                return  <div className="App">    <ModifyPage  orders= {this.state.orders} ClearOrder = {this.ClearOrder} addToOrder = {this.addToOrder} PostAddress = {this.PostAddress} changeAddress = {this.changeAddress} changeZip = {this.changeZip} address = {this.state.address} SetAddress={this.SetAddress} item = {this.state.item}changeURL={this.changeURL} />   </div>
          }
         if(this.state.url === "menu"){
               return  <div className="App">    <MenuPage truck = {this.state.truck} orders= {this.state.orders}  SetTruck = {this.SetTruck} PostAddress = {this.PostAddress} changeAddress = {this.changeAddress} changeZip = {this.changeZip} address = {this.state.address} SetAddress={this.SetAddress} SetItem = {this.SetItem} changeURL={this.changeURL} />   </div>
          }
          if(this.state.url === "login"){
               return  <div className="App">    <SignupAndLoginPage  PostAddress = {this.PostAddress} changeURL={this.changeURL} />   </div>
          }
          if(this.state.url === "home"){
               return  <div className="App">    <HomePage  orders= {this.state.orders} ClearOrder = {this.ClearOrder} PostAddress = {this.PostAddress} changeAddress = {this.changeAddress} changeZip = {this.changeZip} lat = {this.state.lat} lng = {this.state.lng} address = {this.state.address} SetAddress={this.SetAddress} changeURL={this.changeURL} />   </div>
           }
          if(this.state.url === "usersign"){
               return   <div className="App">    <SignupForm  PostAddress = {this.PostAddress} changeURL={this.changeURL} type="user" />  </div>
            }
          if(this.state.url === "ownersign"){
               return   <div className="App">    <SignupForm   PostAddress = {this.PostAddress} changeURL={this.changeURL} type="user" />  </div>
            }else{
               return  <div className="App">    <LoadingPage  PostAddress = {this.PostAddress}  changeURL={this.changeURL} />   </div>
            }
      }

}

export default App;
