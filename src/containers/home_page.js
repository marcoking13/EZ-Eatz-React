
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

import GoogleMapsSection from "./../images/maps_2.png";

///-------------------------Component----------------------//
class HomePage extends React.Component {
  //---------------------------Constructor------------------------------

  constructor(props){
    super(props);

    this.state={
      cookie:"",
      currentFoodTruck:{},
      best_rated_foodtrucks:[],
      best_rated_starting:0,
      cheapest_starting:0,
      nearby_starting:0,
      vegan_starting:0,
      nearbyFoodtrucks:[],
      cheapest_trucks:[],
      vegan_trucks:[],
      ethnic_trucks:[],
      radius:50,
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
      this.BestRatedFoodtrucks(lat,lng);
      this.CheapestTrucks(lat,lng);
      this.VeganTrucks(lat,lng);
      this.props.ClearCurrentTruck();

    }

  }



  ToggleRatingStarting = (multiplier) =>{
    var toggle_amount = multiplier * 4;
    console.log(toggle_amount + this.state.best_rated_starting);
    if(this.state.best_rated_starting + toggle_amount < this.state.best_rated_foodtrucks.length && this.state.best_rated_starting + toggle_amount > 0){
      this.setState({best_rated_starting: this.state.best_rated_starting + toggle_amount});
    }else{
      this.setState({best_rated_starting:0})
    }
  }

  ToggleVeganStarting = (multiplier) =>{
    var toggle_amount = multiplier * 4;

    if(this.state.vegan_starting + toggle_amount < this.state.vegan_foodtrucks.length && this.state.vegan_starting + toggle_amount > 0){
      this.setState({vegan_starting: this.state.vegan_starting + toggle_amount});
    }else{
      this.setState({vegan_starting:0})
    }
  }

  ToggleNearbyStarting = (multiplier) =>{
    var toggle_amount = multiplier * 4;
      console.log(this.state.nearby_starting + toggle_amount > this.state.nearbyFoodtrucks.length);
    if(this.state.nearby_starting + toggle_amount < this.state.nearbyFoodtrucks.length && this.state.nearby_starting + toggle_amount > 0){
      this.setState({nearby_starting: this.state.nearby_starting + toggle_amount});
      console.log(this.state.nearby_starting);
    }else{
      this.setState({nearby_starting:0})
    }
    console.log(this.state.nearby_starting);
  }

  ToggleExpensiveStarting = (multiplier) =>{
    var toggle_amount = multiplier * 4;

    if(this.state.cheapest_starting + toggle_amount < this.state.cheapest_trucks.length && this.state.cheapest_starting + toggle_amount > 0){
      this.setState({cheapest_starting: this.state.cheapest_starting + toggle_amount});

    }else{
      this.setState({cheapest_starting:0})
    }

  }

  componentDidMount(){
    this.IntializePage();
  }

  BestRatedFoodtrucks = async (lat,lng) => {
    const {data} = await axios.post("/api/trucks",null);
    console.log(data);
    const foodtrucks = [];
    data.map(async(foodtruck)=>{
        var rating = foodtruck.stars;
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
          radius:this.state.radius
        }

        const response = await axios.post("/api/distance-calculator",body);

        foodtruck.distance = response.data.distance.toString() +""+response.data.unit;

        if(response.data.distance <= this.state.radius && rating > 3.5)
        {
          foodtrucks.push(foodtruck);
        }

        this.setState({best_rated_foodtrucks:foodtrucks});

    });
  }

  CheapestTrucks = async (lat,lng) => {
    const {data} = await axios.post("/api/trucks",null);

    console.log(data);

    const foodtrucks = [];

    data.map(async(foodtruck)=>{
        var expensive = foodtruck.expensive;
        console.log(expensive)
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
          radius:this.state.radius
        }

        const response = await axios.post("/api/distance-calculator",body);

        foodtruck.distance = response.data.distance.toString() +""+response.data.unit;

        if(response.data.distance <= this.state.radius && expensive < 3)
        {
          foodtrucks.push(foodtruck);
        }

        this.setState({cheapest_trucks:foodtrucks});

    });

  }


  VeganTrucks = async (lat,lng) => {
    const {data} = await axios.post("/api/trucks",null);

    console.log(data);

    function isVegan(types){
      for(var i = 0; i < types.length; i++){
        if(types[i] == "vegan"  || types[i] =="Vegan"){
          return true;
          break;
        }
      }
      return false;
    }

    const foodtrucks = [];

    data.map(async(foodtruck)=>{
        var type = foodtruck.type;
        var is_vegan = isVegan(type);
        console.log(is_vegan);
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
          radius:this.state.radius
        }



        const response = await axios.post("/api/distance-calculator",body);

        foodtruck.distance = response.data.distance.toString() +""+response.data.unit;



        if(response.data.distance <= this.state.radius && is_vegan)
        {
          foodtrucks.push(foodtruck);
        }

        this.setState({vegan_trucks:foodtrucks});

    });

  }

  FoodtrucksNearMe = async (lat,lng) => {

    const {data} = await axios.post("/api/trucks",null);
    const foodtrucks = [];

    data.map(async(foodtruck)=>{

      var foodtruckLocation = {
        lat:foodtruck.lat,
        lng:foodtruck.lng
      }
      var userLocation = {
        lat:lat,
        lng: lng
      }

      var closer_radius = parseFloat(this.state.radius / 1.5).toFixed(2);

      var body = {
        foodtruckLocation:foodtruckLocation,
        userLocation:userLocation,
        radius:closer_radius
      }

      const response = await axios.post("/api/distance-calculator",body);

      foodtruck.distance = response.data.distance.toString() +""+response.data.unit;

      if(response.data.distance <= this.state.radius )
      {
        foodtrucks.push(foodtruck);
      }



    });

    this.setState({nearbyFoodtrucks:foodtrucks});


  }

  CreateFoodtruckBoxes = (truck_catagory,starting) => {

    var limit = 4;
    var html = [];

      for (var i = 0 ; i < limit; i ++){

        var index = starting + i;

        if(truck_catagory[index]){
        html.push(
          <FoodBox
            address = {truck_catagory[index].address}
            key = {index}
            id = {i}
            ClearOrder = {this.props.ClearOrder}
            SetTruck = {this.props.SetTruck}
            foodtruck = {truck_catagory[index]}
            ChangeURL = {this.props.ChangeURL}
          />
        )

      }
    }

    return html;

  }

  CreateFoodtruckRow = (title,foodtruck_catagory,toggle_catagory,toggle_func) => {
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
                  <img src ={ToggleIcon} onClick = {()=>{toggle_func(-1)}} className="w100 truck_row_toggle_icon rotate-180" />
                </div>
                <div className="col-6">
                  <img src ={ToggleIcon} onClick = {()=>{toggle_func(1)}} className="w100 truck_row_toggle_icon" />
                </div>

              </div>

            </div>

            <div className="row">
              {this.CreateFoodtruckBoxes(foodtruck_catagory,toggle_catagory)}
            </div>


       </div>
     )
  }
  // {this.CreateFoodtruckRow("Most Affordable",this.state.cheapest_foodtrucks)}
  // {this.CreateFoodtruckRow("Vegan Trucks",this.state.vegan_trucks)}
  // {this.CreateFoodtruckRow("Try Something New",this.state.ethnic_trucks)}
  renderFoodtruckSection(){
    console.log(this.state.nearbyFoodtrucks,this.state.best_rated_foodtrucks);
    if(this.state.nearbyFoodtrucks.length > 0 && this.state.best_rated_foodtrucks.length >0){
      return(
        <div className='row'>

          <div className="col-2">
             <Filter radius = {this.state.radius} changeRadius = {this.changeRadius}/>
          </div>

          <div className="foodtruck_container col-10">

            {this.CreateFoodtruckRow("Nearest You",this.state.nearbyFoodtrucks,this.state.nearby_starting,this.ToggleNearbyStarting)}
            {this.CreateFoodtruckRow("Best Rated",this.state.best_rated_foodtrucks,this.state.best_rated_starting,this.ToggleRatingStarting)}
            <div className="relative w100">
              <img src = {GoogleMapsSection} className="w100" />
              <button onClick = {()=>{
                this.props.ChangeURL("map");
              }}style={{top:"60%",left:"2.5%",position:"absolute",width:"30%",color:"white",background:"black"}} className="button black ui inverted invert add-to-cart cw">See Map</button>
            </div>
            {this.CreateFoodtruckRow("Most Affordable",this.state.cheapest_trucks,this.state.cheapest_starting,this.ToggleExpensiveStarting)}
            {this.CreateFoodtruckRow("Vegan Options",this.state.vegan_trucks,this.state.vegan_starting,this.ToggleVeganStarting)}
          </div>

        </div>
      )
    }else{
      return <NoResults text = "There are no Trucks in Radius Yet"/>
    }

  }

  //------------------------------Renderer--------------------------------
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
