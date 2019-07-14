import React from "react";

import AddressInput from "./address_input";
import Logo from "./../images/logo.png";
import "./../css/home_page.css";
import cookies from "react-cookies";
import axios from "axios";
import ProfilePicture from "./../images/profileIcon.png";
import GoogleMap from "./../images/googleMap.png";
import Cart from "./../images/cart.png";

import MobileNav from "./mobile_nav_bar.js";

class NavBarHome extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      formatted_address:"Enter Address",
      addressAvailable:false,
      address:"",
      zip:""

    }


    this.changeAddressInput = this.changeAddressInput.bind(this);

  }

  //State Changers//
//---------------------------------------------------------------------
  changeAddressInput(bool){
    this.setState({addressAvailable:bool})
  }



  //JSX functions//
  //--------------------------------------------------------------------------


  renderMapIcon(){
    if(this.props.changeFlag){

      return(
        <img src={GoogleMap} onClick = {()=>{

            this.props.changeURL("map");

        }} className="navIcon"/>
      );
      }else{
        return null;
      }
  }
  //JSX//
//---------------------------------------------------------------------------
  render(){
    var innerWidth = window.innerWidth;
    if(innerWidth <= 600){
      return (
          <div className={"container-fluid navbarEZ " + this.props.navStyle}>

            <div className="row" style={{paddingBottom:"10px"}}>

              <MobileNav  changeURL = {this.props.changeURL} />


              <AddressInput
                  zip = {this.state.zip}
                  addressAvailable = {this.state.addressAvailable}
                  address = {this.props.address}
                  changeAddressInput = {this.changeAddressInput}
                  changeZip = {this.props.changeZip}
                  changeAddress = {this.props.changeAddress}
                  SetAddress = {this.props.SetAddress}
                  width = {{width:"200px"}}
                  classer={{position:"absolute",top:"-2.5%",left:"35%"}}
                  classer2={{position:"absolute",top:"1%",left:"30%"}}
                  PostAddress = {this.props.PostAddress}
                  formatted_address = {this.state.formatted_address}
                  />


                  </div>
                  <br />
          </div>

        );
    }else{
    return(
      <div className={"container-fluid navbarEZ " + this.props.navStyle}>
        <div className="row">
          <div className='col-4'>
            <img className="logoNavBar" src={Logo}/>
          </div>
          <div className='col-4'>
            <AddressInput
                zip = {this.state.zip}
                addressAvailable = {this.state.addressAvailable}
                address = {this.props.address}
                changeAddressInput = {this.changeAddressInput}
                changeZip = {this.props.changeZip}
                changeAddress = {this.props.changeAddress}
                SetAddress = {this.props.SetAddress}
                width = {null}
                classer={{opacity:1}}
                PostAddress = {this.props.PostAddress}
                formatted_address = {this.state.formatted_address}
                />
          </div>
          <div className='col-4'>
            <div className="iconGroup">
              <img src={ProfilePicture}  className="navIcon"/>
              <img src="assets/images/search.png"
                onClick = {()=>{
                  if(this.props.changeFlag){
                      this.props.changeFlag(false);
                    }else{
                      this.props.changeURL("home")
                    }}}
                      className="navIcon"/>
                      {this.renderMapIcon()}
                      <img src={Cart}  className="navIcon"/>
                    </div>
                      <button className="btn logoutNav btn-danger"
                        onClick = {()=>{
                          cookies.remove("account",{path:"/"});
                          cookies.remove("address",{path:"/"});
                          this.props.changeURL("login");
                        }}
            >Logout</button>
          </div>
        </div>
      </div>
      );
    }
  }
}


export default NavBarHome;
