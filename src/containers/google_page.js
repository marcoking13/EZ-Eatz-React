import React from "react";
import {GoogleMap, withScriptjs,withGoogleMap,Marker} from "react-google-maps";
import { compose, withProps } from "recompose"
import Geocode from "react-geocode";
import axios from 'axios';
import cookies from "react-cookies";

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
      <Marker position = {{
        lat:props.lat,
        lng:props.lng
      }}
      key = {props.id}
      icon= {{
        url:Ringer,
        scaledSize: new window.google.maps.Size(25,25)
      }}
      />
      {props.markers.map(marker => (
          <Marker

            position={{ lat: marker.lat, lng: marker.lng }}
            icon = {{url:marker.url, scaledSize: new window.google.maps.Size(25,25)}}

            onClick = {()=>{
              console.log(marker);
              var foodtruckID = marker.id;
              cookies.remove("foodtruckCurrent",{path:"/"});
              cookies.remove("orders",{path:"/"});
              cookies.save("foodtruckCurrent",foodtruckID,{path:"/"});
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
      lng:150.644,
      place:"",
      markers:[]
    }

    this.changePlace = this.changePlace.bind(this);
    this.ConvertToCoords = this.ConvertToCoords.bind(this);


    axios.get("/api/users").then((response)=>{
      var accounts = response.data;
      var accountCookie = JSON.parse(cookies.load("account",{path:"/"}));
      for(var i = 0; i <= accounts.length; i++){
        console.log(accounts[i].account);
        if(accounts[i].account.username == accountCookie.username){
          console.log("found");
          this.setState({place:accounts[i].address});
          this.ConvertToCoords(this.state.place);
        }
      }
    });


  }


  componentWillMount(){

      axios.get("/api/trucks").then((response)=>{
          var markers = [];
          var trucks = response.data;
          var i = 0;

          for(var i = 0 ; i <trucks.length; i ++){
              var address = trucks[i].address.street +  "," + trucks[i].address.city + "," +trucks[i].address.state;
              console.log(trucks[i]);
              var lat = trucks[i].lat;
              var lng = trucks[i].lng;

              markers.push({lat:lat,lng:lng,url:trucks[i].mapLogo,id:trucks[i].objectID});
            }
            console.log(markers);
            this.setState({markers:markers})
          });

  }

  componentDidMount(){
    console.log(this.state.markers);
  }

  ConvertToCoords(address){

    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        var accountCookie = JSON.parse(cookies.load("account",{path:"/"}));
        axios.post("/api/address",{address:address,account:accountCookie});
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

  renderCheckoutIcon(){

    if(this.props.orders.length > 0){
      return  <img alt="cart"src={Cart}  onClick = {()=>{this.props.changeURL("checkout")}}className="w100 mt2_5 " style = {{width:"50px",height:"50px",marginTop:"2.5%"}}/>
    }else{
      return  <img alt="cart"src={Cart} className="w100 o_5 mt2_5" style = {{width:"50px",height:"50px",marginTop:"2.5%"}}/>
    }

  }

  render(){

    console.log(this.state.markers);
      return (
        <div className="container-fluid">
          <div className="row">
              <br />
              <div className="col-3"/>

              <div className="col-3">
                <br />
                <input  value = {this.state.place} className="form-control bb text-center cw "
                  onChange = {(e)=>{
                    e.preventDefault();
                    var value = e.target.value;
                    this.changePlace(value);
                  }}
                    placeholder = " Enter Address"/>
                </div>

                  <div className="col-1 p0">
                    <br />
                    <button className="ui button inverted w100 blue" onClick = {
                      ()=>{
                        this.ConvertToCoords(this.state.place);
                      }
                    }>Search</button>
                  </div>

                <div className="col-1"/>

                <div className="col-1">
                  <br />
                  <img alt="search"  src={Search}
                    onClick = {()=>{
                        this.props.changeURL("home")
                      }}
                      className="w100 mt2_5"
                      style = {{width:"50px",height:"50px"}}
                    />
                </div>


                <div className="col-1">
                    <br />
                    <img alt="search"  src={ProfilePicture} className="w100 mt2_5"   style = {{width:"50px",height:"50px"}}/>
                </div>

                <div className="col-1">
                  <br />
                    {this.renderCheckoutIcon()}
                </div>

              </div>

              <br />

              <div style={{width:"100vw",height:"100vh"}}>
                <MyMapComponent  changeURL = {this.props.changeURL} ClearOrder = {this.props.ClearOrder} markers = {this.state.markers} lat = {this.state.lat} lng = {this.state.lng}/>
              </div>

            </div>
      );
    }
  }
