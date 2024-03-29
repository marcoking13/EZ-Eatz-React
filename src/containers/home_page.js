import React from "react";
import cookie from "react-cookies";
import GeoDistance from "geo-distance";
import {Map, Marker, GoogleApiWrapper, google} from 'google-maps-react';
import axios from "axios";

import FoodtruckRow from "./../components/Home/foodtruck_row"
import Loading from "./../components/Loading/loading_home";
import Navbar from "./../components/Navbar/home_nav_bar.js";
import SeeAll from "./../components/Home/see_all.js";
import Filter from "./../components/Home/filter.js";
import Filter_Mobile_Icon from "./../images/filter_mobile_icon.png";
import Footer from "./../components/Footer/footnote.js";

import "./../css/home_page.css";

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
      nearbyFoodtrucks:[],
      cheapest_trucks:[],
      vegan_trucks:[],
      ethnic_trucks:[],
      best_rated_starting:0,
      cheapest_starting:0,
      nearby_starting:0,
      vegan_starting:0,
      filter_modal:false,
      price_sort:5,
      see_all:null,
      title:null,
      is_loading:true,
      sort:{
        name:null,
        criteria:null
      },
      radius:30,
      changedAddress:false,
      address:this.props.address
    }

  }

  componentDidMount(){
    this.IntializePage();
  }

//------------------------------State Changer-------------------------------//

  changeRadius = (radius) => {
    this.setState({radius:radius});
    this.IntializePage(radius);
  }

  ChangeCurrentAddress = (address,lat,lng) =>{
    this.setState({address:address});
    this.props.ChangeAddress(address,lat,lng)
    this.IntializePage()
  }


  changePriceSort = (price_sort) => {
    this.setState({price_sort:price_sort});
    this.IntializePage()
  }

  changeSort = (sort) =>{
    this.setState({sort});
    this.IntializePage()
  }

  IntializePage = async ()=>{

    const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

    if(response.data.results.length > 0 && response){

      this.setState({is_loading:true})

      const { lat, lng } = response.data.results[0].geometry.location;
      var location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng };

      this.OrganizeFoodtrucks(lat,lng,this.state.radius,this.state.sort,this.state.price_sort);
      this.props.ClearCurrentTruck();

    } else{

      this.setState({
        best_rated_foodtrucks:[],
        vegan_trucks:[],
        cheapest_trucks:[],
        nearbyFoodtrucks:[],
        is_loading:false
      });

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

  toggleSeeAll = (trucks,title) =>{
    this.setState({see_all:trucks,title:title});
  }

  toggleFilterModal = (toggle) =>{
    this.setState({filter_modal:toggle})
  }
  //
  // ToggleRatingStarting = (multiplier,starting,trucks_length) =>{
  //   var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);
  //   this.setState({best_rated_starting:toggle});
  // }
  //
  // ToggleVeganStarting = (multiplier,starting,trucks_length) =>{
  //   var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);
  //   this.setState({vegan_starting:toggle});
  // }
  //
  // ToggleNearbyStarting = (multiplier,starting,trucks_length) =>{
  //   var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);
  //   this.setState({nearby_starting:toggle});
  // }
  //
  // ToggleExpensiveStarting = (multiplier,starting,trucks_length) =>{
  //   var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);
  //   this.setState({cheapest_starting:toggle});
  // }

  ToggleCatagory = (multiplier,starting,trucks_length,catagory_toggle)=>{

    var obj = {};
    const toggle_props = catagory_toggle;
    var toggle = this.ToggleTrucks(multiplier,starting,trucks_length);

    obj = {...obj, [toggle_props]: toggle };
    this.setState(obj)

  }

  renderFilter =() =>{
    if(window.innerWidth >= 844){

          return(
             <div className="col-2">
                 <Filter price_sort = {this.state.price_sort} changePriceSort = {this.changePriceSort} radius = {this.state.radius} changeRadius = {this.changeRadius} sort = {this.state.sort} changeSort = {this.changeSort}/>
              </div>
            )

    }else{

      var visibility = this.state.filter_modal ? "visible" : "invisible";

      return (
        <div className={"filter_modal  "+visibility} >
          <div className="filter_modal_background"/>
          <p className="x_modal_filter"onClick = {()=>{
            this.toggleFilterModal(false);
          }}>X</p>
          <Filter price_sort = {this.state.price_sort} changePriceSort = {this.changePriceSort} radius = {this.state.radius} changeRadius = {this.changeRadius} sort = {this.state.sort} changeSort = {this.changeSort}/>
        </div>
      )

    }

  }

  renderFoodtruckSection(){

    var spacer = window.innerWidth >= 844 ? null : <div className="col-1 margin-left-2_5"/> ;
    var active = this.state.filter_modal ? "filter_icon_mobile_active" : ""

    var filter_icon = window.innerWidth >= 844 ? null : <img src = {Filter_Mobile_Icon} onClick = {()=>{
      this.toggleFilterModal(true);
    }}className={"filter_icon_mobile " + active} />;

    if(this.state.is_loading){
        return <Loading text = "There are no Trucks in Radius Yet"  key = {this.state.radius}/>
    }

      return(
        <div className='row' key = {this.state.radius}>

          {filter_icon}
          {this.renderFilter()}
          {spacer}

          <div className="foodtruck_container col-10">

            <FoodtruckRow
              title = "Nearest You"
              catagory={this.state.nearbyFoodtrucks}
              toggle_catagory = {this.state.nearby_starting}
              toggle_func = {this.ToggleCatagory}
              toggle_prop = "nearby_starting"

              />

            <FoodtruckRow
              title = "Best Rated"
              catagory={this.state.best_rated_foodtrucks}
              toggle_catagory = {this.state.best_rated_starting}
              toggle_prop = "best_rated_starting"
              toggle_func = {this.ToggleCatagory}
             />


            <div className="relative w100 maps_ad_container">
              <img src = {GoogleMapsSection} className="w100" />
              <button onClick = {()=>{
                this.props.ChangeURL("map");
              }} className="button black ui add-to-cart cw google_home_button">See Map</button>
            </div>

            <FoodtruckRow
              title = "Most Affordable"
              catagory={this.state.cheapest_trucks}
              toggle_prop = "cheapest_starting"
              toggle_catagory = {this.state.cheapest_starting}
              toggle_func = {this.ToggleCatagory}
              />

            <FoodtruckRow
              title = "Vegan Options"
              catagory={this.state.vegan_trucks}
              toggle_prop = "vegan_starting"
              toggle_catagory = {this.state.vegan_starting}
              toggle_func = {this.ToggleCatagory}
             />


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
          <div className="container-fluid pb5" key = {this.props.address}>

            <Navbar
              url = {this.props.url}
              orders = {this.props.orders}
              account = {this.props.account}
              ChangeCurrentAddress = {this.ChangeCurrentAddress}
              address = {this.props.address}
              ChangeURL = {this.props.ChangeURL}
              />

              {this.renderFoodtruckSection()}

            </div>
        );

  }

}

export default HomePage;
