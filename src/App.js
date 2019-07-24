import React, { Component } from 'react';
import axios from  "axios";
import cookies from "react-cookies";
import './css/Fonts.css';

import SignupAndLoginPage from "./containers/login_signup";
import LoadingPage from "./containers/loading_page";
import ModifyPage from "./containers/modify_page";
import cookie from "react-cookies";
import GoogleMap from "./containers/google_map.js";
import SignupForm from "./containers/signup_form.js";
import HomePage from "./containers/home_page.js";
import MenuPage from "./containers/menu_page.js";
import Geocode from "react-geocode";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      url:"loading",
      item:{},
      zip:"",
      account:"",
      address:"Enter Address",
      lat:33.4255104 ,
      lng:-111.9400054
    }
    cookie.remove("currentItem",{path:"/"});
    this.PostAddress = this.PostAddress.bind(this);
    this.SetAddress = this.SetAddress.bind(this);
    this.changeZip = this.changeZip.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeURL = this.changeURL.bind(this);





  }
  componentWillMount(){
      if(cookie.load("account",{path:"/"})){

        this.Initialization()

      }
  }
  Initialization(){

      axios.get("/api/users").then((res)=>{

        var users = res.data;
        var savedUser = JSON.parse(cookie.load("account",{path:"/"}));
        for(var i = 0; i<= users.length; i++){
          var loopedUsername = users[i].account.username;
          if(loopedUsername === savedUser.username){
            console.log(users[i]);
            this.SetAddress(cookie.load("address",{path:"/"}));
            break;
          }
        }
    });

  }
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

    SetAddress(address){
      console.log(address);
      if(!address){
        address = "Enter Address";
      }

      Geocode.fromAddress(address).then(
        response => {

          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat,lng);

          this.setState({address:address,lat:lat, lng:lng });

        },
          error => {
            console.error(error,'error');
          }
        );


    }

  changeURL(url){
      this.setState({url:url});
  }

  render() {

        if(this.state.url == "loading"){
               return  <div className="App">    <LoadingPage  PostAddress = {this.PostAddress}  changeURL={this.changeURL} />   </div>
         }
         if(this.state.url == "map"){
                return  <div className="App">    <GoogleMap   PostAddress = {this.PostAddress} changeAddress = {this.changeAddress} changeZip = {this.changeZip} lat = {this.state.lat} lng = {this.state.lng} address = {this.state.address} SetAddress={this.SetAddress} changeURL={this.changeURL} />   </div>
          }
         if(this.state.url == "modify"){
                return  <div className="App">    <ModifyPage  PostAddress = {this.PostAddress} changeAddress = {this.changeAddress} changeZip = {this.changeZip} address = {this.state.address} SetAddress={this.SetAddress} item = {this.state.item}changeURL={this.changeURL} />   </div>
          }
         if(this.state.url == "menu"){
               return  <div className="App">    <MenuPage  PostAddress = {this.PostAddress} changeAddress = {this.changeAddress} changeZip = {this.changeZip} address = {this.state.address} SetAddress={this.SetAddress} SetItem = {this.SetItem} changeURL={this.changeURL} />   </div>
          }
          if(this.state.url == "login"){
               return  <div className="App">    <SignupAndLoginPage  PostAddress = {this.PostAddress} changeURL={this.changeURL} />   </div>
          }
          if(this.state.url == "home"){
               return  <div className="App">    <HomePage  PostAddress = {this.PostAddress} changeAddress = {this.changeAddress} changeZip = {this.changeZip} lat = {this.state.lat} lng = {this.state.lng} address = {this.state.address} SetAddress={this.SetAddress} changeURL={this.changeURL} />   </div>
           }
          if(this.state.url == "usersign"){
               return   <div className="App">    <SignupForm  PostAddress = {this.PostAddress} changeURL={this.changeURL} type="user" />  </div>
            }
          if(this.state.url == "ownersign"){
               return   <div className="App">    <SignupForm   PostAddress = {this.PostAddress} changeURL={this.changeURL} type="user" />  </div>
            }else{
              return Error;
            }
      }

}

export default App;
