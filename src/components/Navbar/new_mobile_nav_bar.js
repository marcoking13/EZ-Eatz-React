import React from "react";

import "./../../css/new_mobile_nav.css";
import "./../../css/home_page.css";
import "./../../css/navbar.css";

import AddressInput from "./address_input";

class NewMobileNavBar extends React.Component {
  constructor(props){
    super(props);
  }

  renderProfilePicture = () => {
      var profile_color = [0,0,0];

      profile_color = this.props.data.account.profile_color;

      if(profile_color.length > 0){

          profile_color = this.props.data.account.profile_color;
          var rgb = `rgb(${profile_color[0]},${profile_color[1]},${profile_color[2]})`;
          var letter = this.props.data.account.name.charAt(0).toUpperCase();

          return <span className="profile_image_mobile"style={{background:rgb}}>{letter}</span>

      }else{
        return null
      }

  }

  render(){

    var is_input_visible = this.props.url == "home" || this.props.url == "maps" ? "visible" : "hidden";

      return(
        <div>

        <div className="pos-f-t">

          <div className="collapse bg-dark" id="navbarToggleExternalContent">

            <div className="bg-dark p-4 nav_container_mobile">
              <span className="mobile_nav_text"onClick = {()=>{this.props.data.ChangeURL("home")}}>Home</span>
              <span className="mobile_nav_text"onClick = {()=>{this.props.data.ChangeURL("map")}}>Maps</span>
              <span className="mobile_nav_text ml2_5"onClick = {()=>{this.props.data.ChangeURL("checkout")}}>Checkout</span>
              {this.renderProfilePicture()}
            </div>

          </div>

          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <p className="title_mobile red">EZ-Eatz</p>
          </nav>

      </div>

      <div style={{visibility:is_input_visible}}>

        <div className="width-100">
          <AddressInput
            url = {this.props.url}
            address = {this.props.address}
            ChangeCurrentAddress = {this.props.ChangeCurrentAddress}
          />
          </div>

        </div>

     </div>

    )

  }

}


export default NewMobileNavBar;
