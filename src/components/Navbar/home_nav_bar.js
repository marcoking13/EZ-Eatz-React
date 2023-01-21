import React from "react";

import axios from "axios";

import "./../../css/home_page.css";

import ProfileIcon from "./../../images/profile_icon.png";
import Search from "./../../images/search_icon.png";
import GoogleMap from "./../../images/map_icon.svg";
import Cart from "./../../images/cart_icon.svg";
import Truck from "./../../images/truck_icon.png";
import MapIcon2 from "./../../images/map_icon_2.svg";

import NewMobileNavBar from './new_mobile_nav_bar.js';
import DesktopNavBar from './desktop_nav_bar.js';


class NavBarHome extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggle_map:false,
    }

  }

//---------------------------------------------------------------------------
  render(){

    if(window.innerWidth <= 844){
      return(
        <NewMobileNavBar
         url = {this.props.url}
         data = {this.props}
         address = {this.props.address}
         toggle_map = {this.state.toggle_map}
         ChangeCurrentAddress = {this.props.ChangeCurrentAddress}
         ChangeURL = {this.props.ChangeURL}
         orders = {this.props.orders}
         account = {this.props.account}
         />
      )
    }else{
    return(
      <DesktopNavBar
       url = {this.props.url}
       data = {this.props}
       address = {this.props.address}
       toggle_map = {this.state.toggle_map}
       ChangeCurrentAddress = {this.props.ChangeCurrentAddress}
       ChangeURL = {this.props.ChangeURL}
       orders = {this.props.orders}
       account = {this.props.account}
       />
    )

  }
}
}


export default NavBarHome;
