import React from "react";

import "./../../css/home_page.css";
import "./../../css/navbar.css";

import ProfileIcon from "./../../images/profile_icon.png";
import Search from "./../../images/search_icon.png";
import GoogleMap from "./../../images/map_icon.svg";
import Cart from "./../../images/cart_icon.svg";
import Truck from "./../../images/truck_icon.png";
import MapIcon2 from "./../../images/map_icon_2.svg";
import NewMobileNavBar from './new_mobile_nav_bar.js';

import AddressInput from "./address_input.js";


class NavBarHome extends React.Component {
  constructor(props){
    super(props);
  }

  renderProfilePicture = (hasProfilePic)=>{

    var profile_color = [0,0,0];
    profile_color = this.props.account.profile_color;

    if(profile_color.length > 0){
        profile_color = this.props.account.profile_color;
    }

    var rgb = `rgb(${profile_color[0]},${profile_color[1]},${profile_color[2]})`;
    var letter = this.props.account.name.charAt(0).toUpperCase();

    return <div className="profile_image" style={{background:rgb}}>{letter}</div>

  }

  renderToggle = (url) =>{

    if(url !== "map"){
      return this.renderButton(MapIcon2,"See Map","map")
    }else{
      return this.renderButton(Truck,"See Trucks","home")
    }

  }

  renderNotification = (notifications) =>{

    if(notifications > 0){
      return <div className="notify_icon">{notifications}</div>;
    }else{
      return null;
    }

  }

  renderButton = (img,text,url,notifications) =>{

    return(
      <button className="new_ez_button relative " onClick = {()=>{
        console.log(url);
        this.props.ChangeURL(url);

      }}>
        <img className="new_ez_button_icon_small invert_svg" src={img}/>
          <p className="new_ez_button_text">{text}</p>
          {this.renderNotification(notifications)}
       </button>
    )

  }

  //JSX//
//---------------------------------------------------------------------------
  render(){

  return(
    <div className="container-fluid navbar_home background-white">

      <div className="row width-90 margin-left-5">

        <div className="col-2">
          <p className="ez_title margin-top-0 relative adjust_up">EZ<strong className="ez_title">Eatz</strong></p>
        </div>

        <div className="col-10">
          <div className="row">

            <div className="col-2">
              {this.renderToggle(this.props.url)}
            </div>

            <div className="col-5">
                <AddressInput
                    url = {this.props.url}
                    address = {this.props.address}
                    ChangeCurrentAddress = {this.props.ChangeCurrentAddress}
                />
            </div>

            <div className="col-2">
              {this.renderButton(Cart,"Checkout","checkout",this.props.orders.length)}
            </div>

            <div className="col-2">
                {this.renderButton(Search,"Search All","home",0)}
            </div>

            <div className="col-1">
                {this.renderProfilePicture()}
            </div>

            </div>

          </div>

        </div>

      </div>

    );

  }
}


export default NavBarHome;
