
import React from "react";
import cookie from "react-cookies";
import {Map, Marker, GoogleApiWrapper, google} from 'google-maps-react';
import axios from "axios";
import ToggleIcon from "./../images/arrow_row_icon.svg";
import "./../css/home_page.css";

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
      foodtrucks:[],
      currentFoodTruck:{},
      changedAddress:false,
      lat: 59.95,
      lng: 30.33,
    }


  }


  componentDidMount(){
    // Find the foodtrucks then sets them to the state
    this.GetFoodTruckData();
  }

  GetFoodTruckData = async () =>{

    const {data} = await axios.post("/api/trucks",null);
    this.setState({foodtrucks:data});

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


  CreateFoodtruckBoxes = () => {
    var limit = 4;
    const foodtrucks = this.state.foodtrucks.map((foodtruck,i)=>{
      var randomCounter = Math.floor(Math.random() * this.state.foodtrucks.length);
      console.log(randomCounter,this.state.foodtrucks[randomCounter]);

      if(i >= limit){
        return false;
      }
      return(
        <FoodBox
          address = {this.state.foodtrucks[randomCounter].address}
          key = {i}
          id = {i}
          ClearOrder = {this.props.ClearOrder}
          SetTruck = {this.props.SetTruck}
          foodtruck = {this.state.foodtrucks[randomCounter]}
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
              SetTruck = {this.props.SetTruck}
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
              ChangeAddress = {this.props.changeAddress}
              SetAddress = {this.props.SetAddress}
              address = {this.props.address}
              changeFlag = {this.changeFlag}
              changeURL = {this.props.changeURL}
              navStyle ="white"
              />
              <div className='row'>
                <div className="col-2">
                   <Filter />
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
