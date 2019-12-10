import React from "react";

import cookies from "react-cookies";

import MobileNav from "./../Navbar/mobile_nav_bar.js";
import AddressInput from "./../Navbar/address_input";

import "./../../css/home_page.css";

import ProfilePicture from "./../../images/profileIcon.png";
import Search from "./../../images/userChoice.png";
import GoogleMap from "./../../images/googleMap.png";
import Cart from "./../../images/cart.png";
import Logo from "./../../images/logo.png";



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
    return(
      <div className="container-fluid">
        <MobileNav  changeURL = {this.props.changeURL} />
        <div className="row ">
          <div className="col-3"/>
          <div className="col-6 moveUpIn ">
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

          <div className="col-3"/>

        </div>
      </div>

    )
  }



  renderDesktopJSX(){
      return(
        <div className="row">

          <div className='col-4'>
            <div className="row">
              <div className="col-2"/>
              <div className="col-4">
                <img alt="logoNav"className="w100" src={Logo}/>
              </div>
            </div>
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
          <div className="row">

            <div className="col-2">
              <br />
              <img  alt="profile"src={ProfilePicture}  className="w100 mt2_5"/>
            </div>

            <div className="col-2">
              <br />
              <img alt="search"  src={Search}
                onClick = {()=>{

                  if(this.props.changeFlag){
                      this.props.changeFlag(false);

                    }else{
                      this.props.changeURL("home")
                    }}}
                      className="w100 mt2_5"
                      />
                  </div>



                    <div className="col-2">
                        <br />
                        {this.renderCheckoutIcon()}
                    </div>

                    <div className="col-2">
                        <br />
                        {this.renderMapIcon()}
                    </div>

                    <div className="col-3">
                      <br />
                      <button className="btn mt2_5 w100 btn-danger"
                        onClick = {()=>{
                          cookies.remove("account",{path:"/"});
                          cookies.remove("address",{path:"/"});
                          this.props.changeURL("login");
                        }}
                        >Logout</button>
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
          <div className={"container-fluid navbarEZ " + this.props.navStyle}>
            {this.renderMobileJSX()}
          </div>

        );
    }else{

      return(
        <div className={"container-fluid navbarEZ " + this.props.navStyle}>
          {this.renderDesktopJSX()}
        </div>
      );
    }
  }
}


export default NavBarHome;
