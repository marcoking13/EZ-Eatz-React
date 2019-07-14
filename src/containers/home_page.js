
import React from "react";
import cookie from "react-cookies";
import "./../css/home_page.css";
import axios from "axios";
import Geocode from "react-geocode";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import HomePageNav from "./../components/home_nav_bar.js";

import Placeholder from "./../images/placeholder.jpg"
import Star from "./../images/star.png";
import GoogleMap from "./../images/googleMap.png";
import FoodBox from "./../components/foodtruck_box_home.js";
import GoogleMapPage from "./google_map.js"

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
    return  this.state.foodtrucks.map((foodtruck)=>{
        return    <FoodBox foodtruck = {foodtruck} changeURL = {this.props.changeURL} />
    });
  }

  //------------------------------Renderer--------------------------------
  //-----------------------------------------------------------------------

  render(){


      return (
        <div>

          <HomePageNav
            PostAddress = {this.props.PostAddress}
            changeZip = {this.props.zip}
            changeAddress = {this.props.changeAddress} SetAddress = {this.props.SetAddress} address = {this.props.address}changeFlag = {this.changeFlag}  changeURL = {this.props.changeURL}
            navStyle ="white"
            />

          <div className="divder2"/>
          <div className="pb5">
            <h4 className="resultTitle">Food Trucks</h4>
              {this.foodTruckLoop()}
          </div>
            <br />
            <br />
        </div>
    );


  }
}


export default HomePage;
