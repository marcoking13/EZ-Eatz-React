
import React from "react";
import {GoogleApiWrapper} from 'google-maps-react';
import HomePageNav from "./../components/home_nav_bar";
import {Map, Marker} from 'google-maps-react';
import Geocode from "react-geocode";
import cookies from "react-cookies";
import axios from 'axios';

import LoadingMap from "./../components/loading_map";

import "./../css/loadingMap.css";

const google = window.google;
//--------------------------- Component ---------------------------//

export  class MapContainer extends React.Component {

  constructor(props){
    super(props);

    Geocode.enableDebug();
    Geocode.setApiKey("AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM");

    this.state  = {
      address:"",
      window:"",
      zip:"",
      trucks:[],
      lat:"",
      lng:"",
    }

    this.FoodtruckInit();

    this.props.SetAddress(cookies.load("address",{path:"/"}));

  }
  //--------------------Axios Inialization---------------------
  // Gets the info from all foodtrucks
  FoodtruckInit(){
    axios.get("/api/trucks").then((response)=>{
      // Save response into variable
      var foodtrucks = response.data;
      // Loop through variable
      foodtrucks.map((foodtruck)=>{
        if(foodtruck){
        // Get the address from foodtruck object
        var address = foodtruck.address.street + " "+  foodtruck.address.city + " "+ foodtruck.address.state + " "+  foodtruck.address.zip;
        // Put address into the geoCoder to turn into Coordinates
          Geocode.fromAddress(address).then(
              response => {
                const { lat, lng } = response.results[0].geometry.location;
                foodtruck.coords = {lat:lat,lng:lng};
              // Set the states for of the foodtruck locations
                this.setState({ trucks: this.state.trucks.concat(foodtruck) });
              },
            // If error log problem
              error => {
                console.error(error,'error');
              }
            );
          }
          });
    });
  }

  //---------------------- Marker Renderers --------------------------//

  // Render Markers for all the Foodtrucks
  markerLoop(){
      //Loops through trucks in state
      return this.state.trucks.map((trucks)=>{
          // Renders Maker
          return (
              <Marker
                    name={trucks.name}
                    onClick = {()=>{
                      // Sets cookie with selected foodtruck
                      cookies.remove("foodtruckCurrent",{path:"/"});
                      cookies.save("foodtruckCurrent",trucks.objectID,{path:"/"});
                      // Changes URL to Menu
                      this.props.changeURL("menu");
                    }}
                    icon = {{url:trucks.mapLogo,scaledSize: new google.maps.Size(45,45)}} position={{lat:trucks.coords.lat, lng: trucks.coords.lng}} />
                  );
                });
              }

    // Renders Marker where user is located
  renderUserMarker(){
    return <Marker icon = {{url:"assets/images/ringer.gif",scaledSize: new google.maps.Size(50,50)}} position={{lat:this.props.lat, lng: this.props.lng}} />
  }

  //---------------------------------Render Map ------------------------//
  // Renders the Google Map interface
  // Markers will then be rendered into map
  renderMap(){

      return (
            <Map google={this.props.google}  center={{lat:this.props.lat,lng:this.props.lng}}zoom={14}>
                {this.markerLoop()}
                {this.renderUserMarker()}
            </Map>
          );
  }

//--------------------------------Renderer---------------------------------------------------
//-------------------------------------------------------------------------------------------
  render(){
    return (
      <div>
        <HomePageNav
          PostAddress = {this.props.PostAddress}
          changeZip = {this.props.zip}
          changeAddress = {this.props.changeAddress} SetAddress = {this.props.SetAddress} address = {this.props.address}changeFlag = {this.changeFlag}  changeURL = {this.props.changeURL}
          navStyle ="white"
          />
          <div style={{width:"1000px",height:"1000px"}}>
          {this.renderMap()}
          </div>
        </div>
   );
 }

}

//----------------------------------Exports-----------------------------------
export default GoogleApiWrapper(
  {
    apiKey: "AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM",
    LoadingContainer: LoadingMap
  })(MapContainer)
