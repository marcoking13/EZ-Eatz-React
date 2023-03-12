import React from "react";

import "./../../../css/landing_page.css";
import "./../../../css/utility.css";

import BoxConfig from "./../../../config/admin_landing_box.js";
import Config from "./../../../config/admin_landing_graphics.js";
import MobileBackground from "./../../../images/mobile_l.png";
import DesktopBackground from "./../../../images/2.png";
import LoginBar from "./../../Landing/login_bar.js";
import ShowcaseAdmin from "./../../Landing/showcase_admin.js";
import GraphicsAndText from "./../../Landing/graphics_and_text.js";
import Graphic_Box from "./../../Landing/graphic_box.js";

class AdminLandingDesktop extends React.Component{

  render(){

    var Background  =  window.innerWidth <= 844 ? MobileBackground : DesktopBackground;

    return(
      <div className="container-fluid">

        <div className="background_landing_container width-100" style={{height:"700px",background:`url(${Background})`}}>

          <LoginBar
            login_url = "/admin/login"
            signup_url = "/admin/signup"
            ChangeURL = {this.props.ChangeURL}
            isAdmin = {true}
          />

          <ShowcaseAdmin ChangeURL = {this.props.ChangeURL} />

        </div>

          <GraphicsAndText config = {Config}  isAdmin = {true} />

          <Graphic_Box config = {BoxConfig} />

      </div>

    );

  }

}

export default AdminLandingDesktop;
