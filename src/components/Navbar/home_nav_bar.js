import React from "react";

import cookies from "react-cookies";

import axios from "axios";

import MobileNav from "./../Navbar/mobile_nav_bar.js";
import AddressInput from "./../Navbar/address_input";

import "./../../css/home_page.css";

import ProfilePicture from "./../../images/profileIcon.png";
import Search from "./../../images/userChoice.png";
import GoogleMap from "./../../images/map_icon.svg";
import Cart from "./../../images/cart_icon.svg";
import MapIcon2 from "./../../images/map_icon_2.svg";
import Logo from "./../../images/logo.png";

class NavBarHome extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      formatted_address:"Enter Address",
      addressAvailable:false,
      address:this.props.address,
      zip:""
    }

    this.changeAddressInput = this.changeAddressInput.bind(this);

  }



//---------------------------------  //State Changers//------------------------------------
  changeAddressInput(bool){
    this.setState({addressAvailable:bool})
  }
  //---------------------------------Rendering Icons---------------------------------//
  renderCheckoutIcon(){

    if(this.props.orders.length > 0){
      return  <img alt="cart"src={Cart}  onClick = {()=>{this.props.changeURL("checkout")}}className="w100 mt2_5"/>
    }else{
      return  <img alt="cart"src={Cart} className="w100 o_5 mt2_5"/>
    }

  }

  renderMapIcon(){
    if(this.props.changeFlag){
        // Renders Map icon if user is not on map page
        // changeFlag = true or false is user is on google maps
        if(window.innerWidth > 500){
          return(
            <img alt="google"src={GoogleMap} onClick = {()=>{
              this.props.changeURL("map");
            }} className="w100 mt2_5"/>
          );
        }else{
          return(
            <img alt="google"src={GoogleMap} onClick = {()=>{
              this.props.changeURL("map");
            }} className="w10 posAb posRight fr"/>
          );
        }
      }else{
        return null;
      }
  }

//--------------------------------Render JSX function------------------------------------

  renderMobileJSX(){
    return (
      <div className="container-fluid bb">
        <MobileNav  changeURL = {this.props.changeURL} />
        <br />
      </div>
    );
  }

  renderDesktopJSX(){
      return(
        <div className="container-fluid navbar_home">

          <div className="col-11 margin-left-5">
            <div className="row">
              <div className="col-2">
                <p className="ez_title margin-top-0  relative adjust_up">EZ<strong className="ez_title">Eatz</strong></p>
              </div>
              <div className="col-2">
              <button className="btn ez_button e6-background float-left">
                <img className="ez_button_icon_small invert_svg" src={MapIcon2}/>
                  Address
               </button>
              </div>
              <div className="col-5">
                <form onSubmit = {(e)=>{
                  e.preventDefault();
                  this.props.ChangeAddress(this.state.address);
                }}>
                <input className="form-control ez_home_input" onChange = {(e)=>{
                  this.setState({address:e.target.value});
                }}  value = {this.state.address} placeholder="Enter Address"/>
                </form>
              </div>

              <div className="col-3">
                <div className="row">
                  <div className="col-4">
                    <button className="width-100 btn ez_button black-background white_text">
                      <img className="ez_button_icon" src={Cart}/>
                      Cart
                     </button>
                  </div>
                  <div className="col-4">
                    <button className="width-100 btn ez_button black-background white_text" onClick = {()=>{this.props.changeURL("map")}}>
                      <img className="ez_button_icon " src={GoogleMap}/>
                       Map
                     </button>
                  </div>
                  <div className="col-4">
                    <button className="width-100 btn ez_button black-background white_text">

                      Logout
                     </button>
                  </div>
                </div>
                </div>
            </div>

          </div>
        </div>
      );
  }


  //JSX//
//---------------------------------------------------------------------------
  render(){
    var innerWidth = window.innerWidth;
    if(innerWidth <= 600){
      return (
          <div className={"container-fluid bb navbarEZ " + this.props.navStyle}>
            {this.renderMobileJSX()}
          </div>

        );
    }else{

      return(
        <div className={"container-fluid bw navbarEZ " + this.props.navStyle}>
          {this.renderDesktopJSX()}
        </div>
      );
    }
  }
}


export default NavBarHome;
