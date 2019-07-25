import React from "react";
import "./../css/mobileNav.css";
import cookies from "react-cookies";
import Stock from "./../images/profileIcon.png";
class MobileNavBar extends React.Component{
  constructor(props){
    super(props);

      var profile = JSON.parse(cookies.load("account",{path:"/"}));

      if(profile.profilePhoto === ""){
        profile.profilePhoto = "./../images/profileIcon.png";;
      }

      this.state={
        profile:profile
      }

  }

 openNav() {
     document.getElementById("mySidenav").style.width = "175px";
  }
/* Set the width of the side navigation to 0 */
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  // Navbar JSX
  // Icons will redirect user to the pages
  // When not clicked will show as 3 bars
  // When clicked expand by 500 pixels and menu will show
  render(){

    return(
      <div>
        <div id="mySidenav" className="sidenav">
          <div className="closebtn" onClick={()=>{this.closeNav()}}>&times;</div>

          <div className="profileBox">
            <img alt="profile" className="profileA" src={Stock} />
            <h6 className="profileNM">Welcome Back <br /></h6>
          </div>

          <div className="list">
            <p
            onClick={()=>{
              this.props.changeURL("home");
            }}>Home</p>
            <p href="#">Profile</p>
            <p
              onClick={()=>{
                this.props.changeURL("map");
              }}
              >Locator</p>
            <p href="#">Checkout</p>

            <p className="redA"
             onClick={()=>{
                cookies.remove("account",{path:"/"});
                cookies.remove("address",{path:"/"});
                this.props.changeURL("login");
              }}>Logout</p>

            </div>
          </div>

      <span className="menuIC"onClick={()=>{this.openNav()}}>

        <div className="menuBarI"></div>
        <div className="menuBarI"></div>
        <div className="menuBarI"></div>

      </span>
        <div id="main"></div>
      </div>
    )
  }

}


export default MobileNavBar;
