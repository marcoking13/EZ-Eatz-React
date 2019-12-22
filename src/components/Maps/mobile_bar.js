import React from "react";

import NavbarMobile from "./../Navbar/mobile_nav_bar";

import Logo from "./../../images/logo.png";

class MobileBar extends React.Component {

  render(){
    return(

        <div className="bb ">
          <img src = {Logo} className="mobileNavHMG" />
          <NavbarMobile changeURL = {this.props.changeURL} />

              <div className="row bb">

                <div className="col-3">

                <div className="col-6">
                  <br />
                  <input  value = {this.props.place} className="form-control bb text-center cw "
                    onChange = {(e)=>{

                      var value = e.target.value;

                      this.props.ConvertToCoords(value);
                    }}
                    placeholder = " Enter Address"/>

                  <div className="p0">
                    <br />
                      <button className="ui button inverted w0 blue" onClick = {
                        (e)=>{

                          this.props.ConvertToCoords(this.props.place);
                          }
                        }>Search
                      </button>
                    </div>
                  </div>
                    <div className="col-3"/>
                </div>

          </div>
    )
  }
}


export default MobileBar;
