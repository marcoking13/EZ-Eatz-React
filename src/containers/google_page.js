import React from "react";
import {GoogleMap, withScriptjs,withGoogleMap,Marker} from "react-google-maps";
import { compose, withProps } from "recompose"
import Geocode from "react-geocode";
import axios from 'axios';
import cookies from "react-cookies";

import MobileBar from "./../components/Maps/mobile_bar";
import DesktopBar from "./../components/Navbar/home_nav_bar";

import ProfilePicture from "./../images/profileIcon.png";
import Search from "./../images/userChoice.png";
import Cart from "./../images/cart.png";
import Ringer from "./../images/ringer.gif";
import Logo from "./../images/logo.png";

import "./../css/utility.css";

Geocode.setApiKey("AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE");
Geocode.enableDebug();

//----------------------------------------Wrapper Component--------------------------------------------------------//
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE",
    loadingElement: <div style={{ height: `50%` }} />,
    containerElement: <div style={{ height: `650px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
     <GoogleMap  zoom={12} center = {{lat:props.lat,lng:props.lng}} >

      <Marker
        position = {{
          lat:props.lat,
          lng:props.lng
        }}
        key = {props.id}
        icon= {{
          url:Ringer,
          scaledSize: new window.google.maps.Size(35,35)
        }}

      />

      {props.markers.map(marker => (

          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
            icon = {{url:marker.url, scaledSize: new window.google.maps.Size(40,40)}}

            onClick = {()=>{

              var foodtruckID = marker.id;
              props.ClearOrder();
              props.changeURL("menu");

            }}

          />

        ))}

     </GoogleMap>
)
//--------------------------------------Map Component----------------------------------------------------------//
export default class Maps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lat:-34.397,
      address:this.props.address,
      lng:150.644,
      place:"",
      markers:[]
    }

    this.changePlace = this.changePlace.bind(this);
    this.ConvertToCoords = this.ConvertToCoords.bind(this);

    // axios.get("/api/users").then((response)=>{
    //   var accounts = response.data;
    //   // var accountCookie = JSON.parse(cookies.load("account",{path:"/"}));
    // //   if(accounts.length > 0){
    // //     for(var i = 0; i <= accounts.length; i++){
    // //
    // //       if(accounts[i].account.username == accountCookie.username){
    // //
    // //         this.setState({place:accounts[i].address});
    // //         this.ConvertToCoords(this.state.place);
    // //
    // //       }
    // //     }
    // // }
    // });

  }

  componentWillMount(){
    console.log(this.state.address);
    this.ConvertToCoords(this.state.address);
    this.SetMarkersOnMap();

  }


  SetMarkersOnMap = async() =>{
    const foodtrucks =  await axios.post("/api/trucks",null);

    var markers = [];
    var trucks = foodtrucks.data;

    var i = 0;

    for(var i = 0 ; i <trucks.length; i ++){

        var address = trucks[i].address.street +  "," + trucks[i].address.city + "," +trucks[i].address.state;

        var lat = trucks[i].lat;
        var lng = trucks[i].lng;

        markers.push({lat:lat,lng:lng,url:trucks[i].mapLogo,id:trucks[i].objectID});

      }
      console.log(markers);
      this.setState({markers:markers});

  }

  ConvertToCoords(address){

    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        //var accountCookie = JSON.parse(cookies.load("account",{path:"/"}));
        //axios.post("/api/address",{address:address,account:accountCookie});
        this.setState({lat:lat,lng:lng,place:address});
      },
      error => {
        console.error(error);
      }
    );

  }

  changePlace(place){
    this.setState({
      place:place
    });
  }


  renderBar(){

    if(window.innerWidth <= 590){
      return (
          <MobileBar
            place = {this.state.place}
            ConvertToCoords = {this.ConvertToCoords}
            orders = {this.props.orders}
            changePlace = {this.changePlace }
            changeURL = {this.props.changeURL}
          />
        )
    }else{
      return (
        <DesktopBar
          place = {this.state.place}
          ChangeAddress = {this.props.ChangeAddress}
          address = {this.props.address}
          ConvertToCoords = {this.ConvertToCoords}
          orders = {this.props.orders}
          changePlace = {this.changePlace }
          changeURL = {this.props.changeURL}
        />
      )
    }

  }

  render(){
      return (
        <div className="container-fluid bb">
            {this.renderBar()}
            <br />
            <div style={{width:"100vw",height:"100vh"}}>
              <MyMapComponent
                changeURL = {this.props.changeURL}
                ClearOrder = {this.props.ClearOrder}
                markers = {this.state.markers}
                lat = {this.state.lat}
                lng = {this.state.lng}
              />
            </div>
          </div>
      );
    }
  }
