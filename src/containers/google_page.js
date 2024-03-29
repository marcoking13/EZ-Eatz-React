import React from "react";
import {GoogleMap, withScriptjs,withGoogleMap,Marker,InfoWindow} from "react-google-maps";
import { compose, withProps } from "recompose"
import axios from 'axios';
import cookies from "react-cookies";

import Loading from "./../components/Loading/loading_map";
import NoResults from "./../components/Loading/no_results_map";
import Navbar from "./../components/Navbar/home_nav_bar";
import Modal from "./../components/Maps/modal.js";

import Ringer from "./../images/ringer.gif";

import "./../css/google.css"

import "./../css/utility.css";


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

     <GoogleMap  zoom={12} center = {{lat:props.lat,lng:props.lng}} key = {props.address} onClick = {()=>{
       if(props.modal){
         props.setModal(null);
       }
     }}>

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
            icon = {{url:marker.url, scaledSize: new window.google.maps.Size(60,60)}}
            style={{borderRadius:"50%"}}

            onClick = {()=>{
              props.setModal({modal:marker.truck});
              props.SetCenter(marker.lat,marker.lng);
            }}>

          </Marker>

        ))}

     </GoogleMap>
)
//--------------------------------------Map Component----------------------------------------------------------//
export default class Maps extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      lat:this.props.lat,
      address:this.props.address,
      lng:this.props.lng,
      place:"",
      markers:[],
      is_loading:true,
      modal:null
    }

  }

  componentWillMount(){
    this.SetCenter(this.props.address,this.props.lat,this.props.lng);
    this.SetMarkersOnMap();

  }

  SetCenter = (address,lat,lng) =>{

    this.setState({
      lat:lat,
      is_loading:false,
      lng:lng,
      address:address
    });

    this.props.ChangeAddress(address,lat,lng);

  }

  setModal = (truck)=>{
    this.setState({modal:truck})
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
        markers.push({lat:lat,lng:lng,url:trucks[i].mapLogo,id:trucks[i].objectID,truck:trucks[i]});
      }

      this.setState({markers:markers});

  }

  renderMap(){

    if(this.state.is_loading){
      return <Loading />
    }

    if(this.state.lat && this.state.lng){

      return(
        <div style={{width:"100vw",height:"100vh"}}>
          <MyMapComponent
            address = {this.props.address}
            ChangeURL = {this.props.ChangeURL}
            ClearOrder = {this.props.ClearOrder}
            markers = {this.state.markers}
            lat = {this.props.lat}
            SetCenter = {this.SetCenter}
            center_lat = {this.state.center_lat}
            center_lng = {this.state.center_lng}
            modal =  {this.state.modal}
            setModal = {this.setModal}
            RenderModal = {this.RenderModal}
            SetTruck = {this.props.SetTruck}
            lng = {this.props.lng}
          />
        </div>
      )

   }
   else{
     return <NoResults text = "Enter a Valid Address to View Map!"/>
   }

}

  render(){

      return (
        <div className="container-fluid">
          <Navbar
            url = {this.props.url}
            place = {this.state.place}
            account = {this.props.account}
            ChangeCurrentAddress = {this.SetCenter}
            address = {this.state.address}
            toggle_map = {false}
            orders = {this.props.orders}
            ChangeURL = {this.props.ChangeURL}
          />
            {this.renderMap()}
          <Modal
            ChangeURL = {this.props.ChangeURL}
            modal = {this.state.modal}
            SetTruck = {this.props.SetTruck}
          />
          </div>
      );

    }

  }
