
import React from "react";
import cookie from "react-cookies";
import {Map, Marker, GoogleApiWrapper, google} from 'google-maps-react';
import axios from "axios";

import "./../css/home_page.css";

import HomePageNav from "./../components/Navbar/home_nav_bar.js";
import FoodBox from "./../components/Home/foodtruck_box_home.js";
import Footer from "./../components/Footer/footnote.js";
import FooterMobile from "./../components/Footer/footnote_mobile.js";

import Logo from "./../images/logo.png";

///-------------------------Component----------------------//
class HomePage extends React.Component {
  //---------------------------Constructor------------------------------

  constructor(props){
    super(props);

    this.state={
      cookie:"",
      foodtrucks:[],
      currentFoodTruck:{},
      changedAddress:false,
      lat: 59.95,
      lng: 30.33,
    }
    //----------------------------Binders----------------------------//
    // this.postAddress = this.postAddress.bind(this);
    this.changeAddressFlag = this.changeAddressFlag.bind(this);
    this.changeFlag = this.changeFlag.bind(this);
    //----------------------Axios Inialization For Foodtrucks-----------------------------
      // Find the foodtrucks then sets them to the state
    axios.get("/api/trucks").then((response)=>{
      var  foodtrucks = response.data;
      this.setState({foodtrucks:foodtrucks});
    });
  }
//------------------------------State Changer-------------------------------//

  // Used to Toggle Map and Search
  changeFlag(bool){
    this.setState({flag:bool,maps:false});
  }
  // Used to change the address bar form
  changeAddressFlag(){
    this.setState({changedAddress:true});
  }

  //-------------------------Foodtruck Box Component Loop----------------------------
  // Loops through foodtrucks in state then renders them in JSX
  foodTruckLoop(){
    var key = 0;
    return  this.state.foodtrucks.map((foodtruck)=>{

          key ++;
          // Not working -- Value is out of scope so i can't use the value for the foodtruck
          // Gets user location and the foodtruck location
          // Then calculates distance and returns the distance
          // Then passes down the returned value to the rendered component Food Box
          var destinations = foodtruck.address.street + " "+ foodtruck.address.city + " "+ foodtruck.address.state + " " + foodtruck.address.zip;
          var service = new this.props.google.maps.DistanceMatrixService();
          var address = cookie.load("address",{path:"/"});
          var distance;
          service.getDistanceMatrix({
            origins: [address],
            destinations: [destinations],
            travelMode: this.props.google.maps.TravelMode.DRIVING,
            unitSystem: this.props.google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          },(data,status)=>{

              if(data.rows[0].elements[0].distance){
                console.log("Found");
              }else{
                console.log("Not Found");
              }
            });

          return (
            <FoodBox
              address = {this.props.address}
              key = {key}
              id = {key}
              ClearOrder = {this.props.ClearOrder}
              foodtruck = {foodtruck}
              changeURL = {this.props.changeURL}
            />
          );

    });

  }

  //------------------------------Renderer--------------------------------
  //-----------------------------------------------------------------------

  render(){

    if(window.innerWidth > 500){
        return (
          <div className="container-fluid pb5">

            <HomePageNav
              PostAddress = {this.props.PostAddress}
              orders = {this.props.orders}
              changeZip = {this.props.zip}
              changeAddress = {this.props.changeAddress}
              SetAddress = {this.props.SetAddress}
              address = {this.props.address}
              changeFlag = {this.changeFlag}
              changeURL = {this.props.changeURL}
              navStyle ="white"
              />
              <br />

              <h4 className="ml5 mb1 text-center posRel resultTitle">Food Trucks</h4>
              <div className="divder2 mt2_5"/>

              <div className="pb5 row">
                {this.foodTruckLoop()}
              </div>

              <br />
          
              <Footer />
            </div>
    );


    }else{
      return (
        <div>

          <HomePageNav
              PostAddress = {this.props.PostAddress}
              changeZip = {this.props.zip}
              changeAddress = {this.props.changeAddress}
              SetAddress = {this.props.SetAddress}
              address = {this.props.address}
              changeFlag = {this.changeFlag}
              changeURL = {this.props.changeURL}
              navStyle ="white"
            />
            <div className="divder2"/>
            <img src = {Logo} className="logoHM"/>
            <br/>
            <ul className="list-group ">
              <h4 className="ml5 resultTitle text-center posRel mb1">Food Trucks</h4>
              <br/>
              {this.foodTruckLoop()}
          </ul>

          <FooterMobile />
        </div>
      );
    }
  }
}

export default GoogleApiWrapper(
  {
    apiKey: "AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM",
  })(HomePage);
