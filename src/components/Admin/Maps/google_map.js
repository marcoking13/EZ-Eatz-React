import React from "react";
import {GoogleMap, withScriptjs,withGoogleMap,Marker,InfoWindow} from "react-google-maps";
import { compose, withProps } from "recompose"
import axios from 'axios';

import Loading from "./../../Loading/loading_map";
import NoResults from "./../Loading/no_results_map.js";
import Ringer from "./../../../images/ringer.gif";

import "./../../../css/google.css";

import "./../../../css/utility.css";


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

     </GoogleMap>
)
//--------------------------------------Map Component----------------------------------------------------------//
export default class Map extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      lat:this.props.location.lat,
      address:this.props.location.address,
      lng:this.props.location.lng,
      is_loading:true,
    }

  }


  componentDidMount(){
    console.log(this.props);
    this.SetCenter(this.props.location.address,this.props.location.lat,this.props.location.lng);
  }

  SetCenter = (address,lat,lng) =>{

    this.setState({
      lat:lat,
      is_loading:false,
      lng:lng,
      address:address
    });

  }


  renderMap(){

    if(this.state.is_loading){
      return <Loading />
    }

    if(this.state.lat && this.state.lng && this.state.address.length >= 0){

      return(
        <div className="width-100">
          <MyMapComponent
            address = {this.state.address}
            lat = {this.state.lat}
            lng = {this.state.lng}
          />
        </div>
      )

   }
   else{
     return <NoResults title = "Enter Valid Address"/>
   }

}

  render(){
    console.log(this.props);
      return (
        <div className="container-fluid">

           {this.renderMap()}

          </div>
      );

    }

  }
