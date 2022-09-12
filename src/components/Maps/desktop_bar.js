import React from "react";

import NavbarMobile from "./../Navbar/mobile_nav_bar";
import cookies from "react-cookies";

import "./../../css/utility.css";

import Logo from "./../../images/logo.png";
import Search from "./../../images/userChoice.png";
import Cart from "./../../images/cart.png";
import ProfilePicture from "./../../images/profileIcon.png";

class Bar extends React.Component {

    renderCheckoutIcon(){

      if(this.props.orders.length > 0){
        return  <img alt="cart"src={Cart}  onClick = {()=>{this.props.ChangeURL("checkout")}} className="w100 mt2_5 iconG" />
      }else{
        return  <img alt="cart"src={Cart} className="w100 o_5 mt2_5 iconG" />
      }


    }

  render(){

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

        <div className="col-4">
          <br />
            <input  value = {this.props.place} className="form-control bb text-center cw "
              onChange = {(e)=>{
                e.preventDefault();
                var value = e.target.value;
                this.props.changePlace(value);
              }}
              placeholder = " Enter Address"/>
              <div className="p0">
                <br />
                <button className="ui button inverted o0  w0 blue" onClick = {
                  (e)=>{
                    e.preventDefault();
                    this.props.ConvertToCoords(this.props.place);
                  }
                }>Search</button>
              </div>

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

                    this.props.ChangeURL("home")
                  }}
                    className="w100 mt2_5"
                    />
                </div>



                  <div className="col-2">
                      <br />
                      {this.renderCheckoutIcon()}
                  </div>



                  <div className="col-3">
                    <br />
                    <button className="btn mt2_5 w100 btn-danger"
                      onClick = {()=>{
                        cookies.remove("account",{path:"/"});
                        cookies.remove("address",{path:"/"});
                        this.props.ChangeURL("login");
                      }}
                      >Logout</button>
                  </div>

                </div>

              </div>
              <br />
              <br />
            </div>

      )
  }
}


export default Bar;
