
import React from "react";
import cookie from "react-cookies";
import {Map, Marker, GoogleApiWrapper, google} from 'google-maps-react';
import axios from "axios";
import NoResults from "./../components/no_results"

import ToggleIcon from "./../images/arrow_row_icon.svg";
import "./../css/home_page.css";
import GeoDistance from "geo-distance";
import HomePageNav from "./../components/Navbar/home_nav_bar.js";
import FoodBox from "./../components/Home/foodtruck_box_home.js";
import Filter from "./../components/Home/filter.js";
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
      currentFoodTruck:{},
      nearbyFoodtrucks:[],
      radius:20,
      changedAddress:false,

    }

console.log(this.props.account);


  }


//------------------------------State Changer-------------------------------//

  // Used to Toggle Map and Search
  changeFlag = (bool) => {
    this.setState({flag:bool,maps:false});
  }
  // Used to change the address bar form
  changeAddressFlag = () => {
    this.setState({changedAddress:true});
  }

  // GetFoodTruckData = async () =>{
  //
  //   const {data} = await axios.post("/api/trucks",null);
  //   return data;
  //
  // }


  IntializePage = async()=>{
    const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.account.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

    console.log(response);
    if(response.data.results.length > 0){

      const { lat, lng } = response.data.results[0].geometry.location;

      var location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng };
      console.log(location);
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
      console.log(userLocation,foodtruckLocation);

      var body = {
        foodtruckLocation:foodtruckLocation,
        userLocation:userLocation,
        radius:this.state.radius
      }

      const response = await axios.post("/api/distance-calculator",body);

      foodtruck.distance = response.data.distance.toString() +""+response.data.unit;
      nearbyFoodtrucks.push(foodtruck);
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
          changeURL = {this.props.changeURL}
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

//  -------------------------Foodtruck Box Component Loop----------------------------
  // Loops through foodtrucks in state then renders them in JSX
  foodTruckLoop(){
    var key = 0;
    return  this.state.nearbyFoodtrucks.map((foodtruck)=>{

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
            console.log(foodtruck);
          return (
            <FoodBox
              address = {this.props.address}
              key = {key}
              SetTruck = {this.props.SetTruck}
              id = {key}
              ClearOrder = {this.props.ClearOrder}
              foodtruck = {foodtruck}
              changeURL = {this.props.changeURL}
            />
          );

    });

  }

  renderFoodtruckSection(){
    if(this.state.nearbyFoodtrucks.length > 0){
    return(
      <div className='row'>
        <div className="col-2">
           <Filter radius = {this.state.radius}/>
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

    if(window.innerWidth > 500){

        return (
          <div className="container-fluid pb5" key = {this.props.lat}>

            <HomePageNav
              PostAddress = {this.props.PostAddress}
              orders = {this.props.orders}
              account = {this.props.account}
              isMap = {false}
              FoodtrucksNearMe = {this.FoodtrucksNearMe}
              changeAddressFormat = {this.props.changeAddressFormat}
              changeZip = {this.props.zip}
              ConvertAddress = {this.props.ConvertAddress}
              changeAddress = {this.props.changeAddress}
              address = {this.props.address}
              changeFlag = {this.changeFlag}
              changeURL = {this.props.changeURL}
              navStyle ="white"
              />


              {this.renderFoodtruckSection()}




            </div>
    );


    }else{
      return (
        <div>

          <HomePageNav
              PostAddress = {this.props.PostAddress}
              changeZip = {this.props.zip}
              account = {this.props.account}
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
