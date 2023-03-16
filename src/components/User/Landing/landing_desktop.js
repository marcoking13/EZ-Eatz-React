import React from "react";

import "./../../../css/landing_page.css";

import Config from "./../../../config/frontend/admin_landing_graphics.js";
import BoxConfig from "./../../../config/frontend/admin_landing_box.js";
import MobileBackground from "./../../../images/mobile_l.png";
import DesktopBackground from "./../../../images/2.png";

import LoginBar from "./../../Landing/login_bar.js";
import ShowboxUser from "./../../Landing/showbox_user.js";
import GraphicsAndText from "./../../Landing/graphics_and_text.js";
import GraphicBox from "./../../Landing/graphic_box.js";

class LandingDesktop extends React.Component{


  render(){
    var Background  =  window.innerWidth <= 844 ? MobileBackground : DesktopBackground;

    return(
      <div className="container-fluid">

        <div className="background_landing_container width-100"style={{height:"700px",background:`url(${Background})`}}>
          <LoginBar
            ChangeURL = {this.props.ChangeURL}
            login_url = "/api/login"
            signup_url = "/api/signup"
            isAdmin = {false}
          />
          <ShowboxUser GuestEntrance = {this.props.GuestEntrance} ChangeURL = {this.props.ChangeURL} />
       </div>
          <GraphicsAndText config = {Config} />
          <GraphicBox config = {BoxConfig} />
      </div>

    )

  }

}

export default LandingDesktop;
