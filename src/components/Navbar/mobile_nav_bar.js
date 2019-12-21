import React from "react";
import cookies from "react-cookies";

import "./../../css/mobileNav.css";

import Stock from "./../../images/logo.png";

class MobileNavBar extends React.Component{

 openNav() {
     document.getElementById("mySidenav").style.width = "175px";

  }
/* Set the width of the side navigation to 0 */
 closeNav() {
    document.getElementById("mySidenav").style.width = "0px";

  }

  render(){

    return(
      <div>
        <div id="mySidenav" className="sidenav">
          <div className="closebtn" onClick={()=>{this.closeNav()}}>&times;</div>

          <div className="profileBox">
            <img alt="profile" className="ml25 w50 profileA" src={Stock} />
            <h6 className="mt5 text-center cw profileNM">Welcome Back <br /></h6>
          </div>

          <div className="mt15 list">
            <p
              className="turnG"
              onClick={()=>{
                this.props.changeURL("home");
              }}>Home</p>
            <p   className="turnG" href="#">Profile</p>
            <p
              className="turnG"
              onClick={()=>{
                this.props.changeURL("map");
              }}
              >Locator</p>
            <p className="turnG" href="#">Checkout</p>

            <p className="turnG cr"
             onClick={()=>{
                cookies.remove("account",{path:"/"});
                cookies.remove("address",{path:"/"});
                this.props.changeURL("login");
              }}>Logout</p>

            </div>
          </div>

      <span className="menuIC"onClick={()=>{this.openNav()}}>

        <div className="bb menuBarI"></div>
        <div className="bb menuBarI"></div>
        <div className="bb menuBarI"></div>

      </span>
        <div id="main"></div>
      </div>
    )
  }

}


export default MobileNavBar;
