
import React from "react";
import cookie from "react-cookies";
import GeoDistance from "geo-distance";
import {Map, Marker, GoogleApiWrapper, google} from 'google-maps-react';
import axios from "axios";

import NoResults from "./../components/no_results"
import ToggleIcon from "./../images/arrow_row_icon.svg";
import HomePageNav from "./../components/Navbar/home_nav_bar.js";
import FoodBox from "./../components/Home/foodtruck_box_home.js";
import Filter from "./../components/Home/filter.js";
import Footer from "./../components/Footer/footnote.js";


import "./../css/home_page.css";

import Logo from "./../images/logo.png";

///-------------------------Component----------------------//
class HomePage extends React.Component {
  //---------------------------Constructor------------------------------

  constructor(props){
    super(props);

    this.state={
      cookie:"",
      currentFoodTruck:{},
      nearbyFoodtrucks:[],
      radius:10000,
      changedAddress:false,
    }

  }

//------------------------------State Changer-------------------------------//


  changeRadius = (radius) => {
    this.setState({radius:radius});
  }

  IntializePage = async ()=>{

    const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.account.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

    if(response.data.results.length > 0){

      const { lat, lng } = response.data.results[0].geometry.location;
      var location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng };

      this.FoodtrucksNearMe(lat,lng);

    }

  }

  componentDidMount(){
    this.IntializePage();
  }

  FoodtrucksNearMe = async (lat,lng) => {

    const {data} = await axios.post("/api/trucks",null);
    const nearbyFoodtrucks = [];

    data.map(async(foodtruck)=>{

      var foodtruckLocation = {
        lat:foodtruck.lat,
        lng:foodtruck.lng
      }
      var userLocation = {
        lat:lat,
        lng: lng
      }

      var body = {
        foodtruckLocation:foodtruckLocation,
        userLocation:userLocation,
        radius:2000
      }

      const response = await axios.post("/api/distance-calculator",body);

      foodtruck.distance = response.data.distance.toString() +""+response.data.unit;

      if(response.data.distance <= this.state.radius )
      {
        nearbyFoodtrucks.push(foodtruck);
      }

      this.setState({nearbyFoodtrucks:nearbyFoodtrucks});

    });

  }

  CreateFoodtruckBoxes = () => {

    var limit = 4;
    const foodtrucks = this.state.nearbyFoodtrucks.map((foodtruck,i)=>{
    var randomCounter = Math.floor(Math.random() * this.state.nearbyFoodtrucks.length);

      if(i >= limit){
        return false;
      }

      return(
        <FoodBox
          address = {this.state.nearbyFoodtrucks[randomCounter].address}
          key = {i}
          id = {i}
          ClearOrder = {this.props.ClearOrder}
          SetTruck = {this.props.SetTruck}
          foodtruck = {this.state.nearbyFoodtrucks[randomCounter]}
          ChangeURL = {this.props.ChangeURL}
        />
      )
    });

    return foodtrucks;

  }

  CreateFoodtruckRow = (title,foodtrucks) => {
     return (
       <div className="container-fluid row margin-top-5">

            <div className="col-5">
              <p className="truck_row_title">{title}</p>
            </div>
            <div className="col-3"/>
            <div className="col-1">
              <p className="hyperlink">See All</p>
            </div>
            <div className="col-2"/>
            <div className="col-1">
              <div className="row">
                <div className="col-6">
                  <img src ={ToggleIcon} className="w100 truck_row_toggle_icon rotate-180" />
                </div>
                <div className="col-6">

                  <img src ={ToggleIcon} className="w100 truck_row_toggle_icon" />
                </div>
              </div>
            </div>
            <div className="row">
              {this.CreateFoodtruckBoxes()}
            </div>


       </div>
     )
  }

  renderFoodtruckSection(){
    if(this.state.nearbyFoodtrucks.length > 0){
    return(
      <div className='row'>
        <div className="col-2">
           <Filter radius = {this.state.radius} changeRadius = {this.changeRadius}/>
        </div>
        <div className="foodtruck_container col-10">
          {this.CreateFoodtruckRow("Most Popular Brands")}
          {this.CreateFoodtruckRow("Closest To You")}
          {this.CreateFoodtruckRow("Most Affordable")}
          {this.CreateFoodtruckRow("Hot Deals")}
          {this.CreateFoodtruckRow("Vegan Trucks")}
          {this.CreateFoodtruckRow("Try Something New")}
        </div>
      </div>
    )
  }else{
    return <NoResults text = "There are no Trucks in Radius Yet"/>
  }
  }

  //------------------------------Renderer--------------------------------
  //-----------------------------------------------------------------------

  render(){

        return (
          <div className="container-fluid pb5" key = {this.props.lat}>

            <HomePageNav
              PostAddress = {this.props.PostAddress}
              orders = {this.props.orders}
              account = {this.props.account}
              isMap = {false}
              FoodtrucksNearMe = {this.FoodtrucksNearMe}
              ChangeAddressFormat = {this.props.ChangeAddressFormat}
              changeZip = {this.props.zip}
              ConvertAddress = {this.props.ConvertAddress}
              ChangeAddress = {this.props.ChangeAddress}
              address = {this.props.address}
              changeFlag = {this.changeFlag}
              ChangeURL = {this.props.ChangeURL}
              navStyle ="white"
              />

              {this.renderFoodtruckSection()}

            </div>
        );

  }

}

export default HomePage;
