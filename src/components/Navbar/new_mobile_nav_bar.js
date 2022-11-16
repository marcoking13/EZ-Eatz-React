import React from "react";
import "./../../css/new_mobile_nav.css";
import "./../../css/home_page.css";

class NewMobileNavBar extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props,this.props.data);
  }


  renderProfilePicture = () => {
    var profile_color = [0,0,0];

    profile_color = this.props.data.account.profile_color;

      if(profile_color.length > 0){
          profile_color = this.props.data.account.profile_color;

          var rgb = `rgb(${profile_color[0]},${profile_color[1]},${profile_color[2]})`;

          var letter = this.props.data.account.name.charAt(0).toUpperCase();

          return <span className="profile_image"style={{background:rgb,padding:"2.5%",color:"white",textAlign:"center",fontSize:"30px",marginLeft:"15%"}}>{letter}</span>

      }else{
        return null
      }

  }

  render(){
      return(
        <div class="pos-f-t">
          <div class="collapse bg-dark" id="navbarToggleExternalContent">
            <div class="bg-dark p-4 nav_container_mobile">
              <span class="mobile_nav_text"onClick = {()=>{this.props.data.ChangeURL("home")}}>Home</span>
              <span class="mobile_nav_text"onClick = {()=>{this.props.data.ChangeURL("map")}}>Maps</span>
              <span class="mobile_nav_text ml2_5"onClick = {()=>{this.props.data.ChangeURL("checkout")}}>Checkout</span>
              {this.renderProfilePicture()}
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
      </div>
      )
  }

}


export default NewMobileNavBar;
