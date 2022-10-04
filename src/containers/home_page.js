import React from "react";
import cookie from "react-cookies";
import GeoDistance from "geo-distance";
import {Map, Marker, GoogleApiWrapper, google} from 'google-maps-react';
import axios from "axios";

import NoResults from "./../components/Loading/home_no_results"
import Loading from "./../components/Loading/loading_home";
import Navbar from "./../components/Navbar/home_nav_bar.js";
import FoodtruckBox from "./../components/Home/foodtruck_box_home.js";
import SeeAll from "./../components/Home/see_all.js";
import Filter from "./../components/Home/filter.js";
import Footer from "./../components/Footer/footnote.js";

import "./../css/home_page.css";

import GoogleMapsSection from "./../images/maps_2.png";
import ToggleIcon from "./../images/arrow_row_icon.svg";

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
      price_sort:5,
      see_all:null,
      cheapest_trucks:[],
      title:null,
      is_loading:true,
      vegan_trucks:[],
      ethnic_trucks:[],
      sort:{
        name:null,
        criteria:null
      },
      radius:30,
      changedAddress:false,
    }

  }

//------------------------------State Changer-------------------------------//

  changeRadius = (radius) => {

    this.setState({radius:radius});
    this.IntializePage(radius)
  }

  toggleSeeAll = (trucks,title) =>{

    this.setState({see_all:trucks,title:title});

  }

  changePriceSort = (price_sort) => {
    console.log(price_sort);
    this.setState({price_sort:price_sort});
    this.IntializePage()
  }

  changeSort = (sort) =>{
    this.setState({sort});
    this.IntializePage()
  }

  IntializePage = async ()=>{

    const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.account.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

    if(response.data.results.length > 0){

      this.setState({is_loading:true})

      const { lat, lng } = response.data.results[0].geometry.location;
      var location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng };

      this.OrganizeFoodtrucks(lat,lng,this.state.radius,this.state.sort,this.state.price_sort);
      this.props.ClearCurrentTruck();

    }

  }


  OrganizeFoodtrucks = async(lat,lng,radius,sort,price_sort) => {

    var config = {lat:lat,lng:lng,radius:radius,sort:sort,price_sort:price_sort};
    var close_config = config;
    close_config.radius = (close_config.radius / 2)

    const best_rated_data = await axios.post("/api/best_rated_trucks",config);
    const best_rated_trucks = best_rated_data.data;

    const nearest_data = await axios.post("/api/nearest_trucks",close_config);
    const nearest_trucks = nearest_data.data;

    const vegan_data = await axios.post("/api/vegan_trucks",config);
    const vegan_trucks = vegan_data.data;

    const cheapest_data = await axios.post("/api/cheapest_trucks",config);
    const cheapest_trucks = cheapest_data.data;

    this.setState({
      best_rated_foodtrucks:best_rated_trucks,
      vegan_trucks:vegan_trucks,
      cheapest_trucks:cheapest_trucks,
      nearbyFoodtrucks:nearest_trucks,
      is_loading:false
    })


  }

  ToggleTrucks = (multiplier,starting,trucks_length) => {
    var toggle_amount = multiplier * 4;
    var new_toggle = starting + toggle_amount;

    if(new_toggle < trucks_length && new_toggle > 0){
      return new_toggle;
    }else{
      return 0;
    }

  }

  ToggleRatingStarting = (multiplier,starting,trucks_length) =>{
    var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);
    this.setState({best_rated_starting:toggle});
  }

  ToggleVeganStarting = (multiplier,starting,trucks_length) =>{
    var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);
    this.setState({vegan_starting:toggle});
  }

  ToggleNearbyStarting = (multiplier,starting,trucks_length) =>{
    var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);
    this.setState({nearby_starting:toggle});
  }

  ToggleExpensiveStarting = (multiplier,starting,trucks_length) =>{
    var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);
    this.setState({cheapest_starting:toggle});
  }

  componentDidMount(){
    this.IntializePage();
  }

  CreateFoodtruckBoxes = (truck_catagory,starting) => {

    var limit = 4;
    var html = [];

      for (var i = 0 ; i < limit; i ++){

        var index = starting + i;

        if(truck_catagory[index]){
        html.push(
          <FoodtruckBox
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
    if(foodtruck_catagory.length > 0){
     return (
       <div className="container-fluid row margin-top-5">

            <div className="col-5">
              <p className="truck_row_title">{title}</p>
            </div>

            <div className="col-3"/>

            <div className="col-1">
              <p className="hyperlink" onClick = {()=>{
                this.toggleSeeAll(foodtruck_catagory,title)
              }}>See All</p>
            </div>

            <div className="col-2"/>

            <div className="col-1">

              <div className="row">

                <div className="col-6">
                  <img src ={ToggleIcon} onClick = {()=>{console.log(toggle_func,toggle_catagory,foodtruck_catagory.length);toggle_func(-1,toggle_catagory,foodtruck_catagory.length)}} className="w100 truck_row_toggle_icon rotate-180" />
                </div>
                <div className="col-6">
                  <img src ={ToggleIcon} onClick = {()=>{toggle_func(1,toggle_catagory,foodtruck_catagory.length)}} className="w100 truck_row_toggle_icon" />
                </div>

              </div>

            </div>

            <div className="row">
              {this.CreateFoodtruckBoxes(foodtruck_catagory,toggle_catagory)}
            </div>


       </div>
     )
   }else{
     return <NoResults title = {title}/>
   }
  }

  renderFoodtruckSection(){

    if(this.state.is_loading){
        return <Loading text = "There are no Trucks in Radius Yet"  key = {this.state.radius}/>
    }

      return(
        <div className='row' key = {this.state.radius}>

          <div className="col-2">
             <Filter price_sort = {this.state.price_sort} changePriceSort = {this.changePriceSort} radius = {this.state.radius} changeRadius = {this.changeRadius} sort = {this.state.sort} changeSort = {this.changeSort}/>
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
    }



  //------------------------------Renderer--------------------------------
  render(){
      var modal_is_active = this.state.see_all ? "active_modal_see_all no-point" : "";

      if(this.state.see_all){
        return  (
          <div>
            <div className= {modal_is_active} />

              <SeeAll
                SetTruck = {this.props.SetTruck}
                ClearOrder = {this.props.ClearOrder}
                ChangeURL = {this.props.ChangeURL}
                see_all = {this.state.see_all}
                title = {this.state.title}
                key = {this.state.see_all}
                toggleSeeAll = {this.toggleSeeAll}
                address = {this.props.address}
                account = {this.props.account}
              />

           </div>
         )
      }
      
        return (
          <div className={"container-fluid pb5 "} key = {this.props.lat}>

            <Navbar
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
