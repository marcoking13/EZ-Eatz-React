import React from "react";

import "./../../css/landing_page.css";
import LandingBackground from "./../../images/2.png";

import Config from "./../../config/admin_landing_graphics.js";
import BoxConfig from "./../../config/admin_landing_box.js";

import LoginBar from "./login_bar.js";
import ShowboxUser from "./showbox_user.js";
import GraphicsAndText from "./graphics_and_text.js";
import GraphicBox from "./graphic_box.js";

class LandingDesktop extends React.Component{

  render(){

    return(
      <div className="container-fluid">

        <div className="background_landing_container width-100"style={{height:"700px",background:`url(${LandingBackground})`}}>
          <LoginBar ChangeURL = {this.props.ChangeURL} />
          <ShowboxUser GuestEntrance = {this.props.GuestEntrance} ChangeURL = {this.props.ChangeURL} />
       </div>
          <GraphicsAndText config = {Config} />
          <GraphicBox config = {BoxConfig} />
      </div>

    )

  }

}

export default LandingDesktop;
