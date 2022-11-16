import React from "react";

import cookies from "react-cookies";
import Geocode from "react-geocode";
import axios from "axios";

import "./../../css/home_page.css";

import ProfileIcon from "./../../images/profile_icon.png";
import Search from "./../../images/search_icon.png";
import GoogleMap from "./../../images/map_icon.svg";
import Cart from "./../../images/cart_icon.svg";
import Truck from "./../../images/truck_icon.png";
import MapIcon2 from "./../../images/map_icon_2.svg";
import NewMobileNavBar from './new_mobile_nav_bar.js';

class NavBarHome extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      formatted_address:"Enter Address",
      addressAvailable:false,
      address:this.props.address,
      toggle_map:false,
      zip:""
    }

    this.changeAddressInput = this.changeAddressInput.bind(this);

  }

//---------------------------------  //State Changers//------------------------------------
  changeAddressInput(bool){
    this.setState({addressAvailable:bool})
  }

  GetProfileData = async()=>{
    const {data} = await axios.get("/api/current_user",this.props.username);

    if(!data){
      return false;
    }else{
      return true;
    }

  }

//--------------------------------Render JSX function------------------------------------


  submitLocation =  async(e) =>{

      e.preventDefault();

      var location = {
        address:"Enter Address",lat:null,lng:null
      }

      const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

      if(response){

        const { lat, lng } = response.data.results[0].geometry.location;

        location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng };

        this.props.ChangeAddress(location.address,location.lat,location.lng);
        this.setState({address:location.address});

      }else{

        this.props.ChangeAddress(location.address,location.lat,location.lng);

      }

      if(this.props.FoodtrucksNearMe){
        this.props.FoodtrucksNearMe(location.lat,location.lng);
      }

  }

  renderProfilePicture = (hasProfilePic)=>{

    var profile_color = [0,0,0];

    profile_color = this.props.account.profile_color;

    if(profile_color.length > 0){
        profile_color = this.props.account.profile_color;
    }

    var rgb = `rgb(${profile_color[0]},${profile_color[1]},${profile_color[2]})`;

    var letter = this.props.account.name.charAt(0).toUpperCase();


    return <div className="profile_image"style={{background:rgb,width:"50px",height:"50px",borderRadius:"50%",color:"white",textAlign:"center",fontSize:"30px",position:"relative",bottom:"10px",left:"30px"}}>{letter}</div>

  }

  renderToggle = (toggle) =>{

    if(!toggle){
      return this.renderButton(MapIcon2,"See Map","map")
    }else{
      return this.renderButton(Truck,"See Trucks","home")
    }

  }

  renderNotification = (notifications) =>{

    if(notifications > 0){
      return <div className="notify_icon" style={{width:"25px",height:"25px",background:"black",position:"absolute",top:"-25%",right:"0%",borderRadius:"50%"}}>{notifications}</div>;
    }else{
      return null;
    }

  }

  renderButton = (img,text,url,notifications) =>{

    return(
      <button className="new_ez_button " style={{position:"relative"}} onClick = {()=>{
        this.props.ChangeURL(url)

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

    if(window.innerWidth <= 844){
      return(
        <NewMobileNavBar data = {this.props}/>
      )
    }
  return(
    <div className="container-fluid navbar_home"style={{background:"white"}}>
      <div className="row width-90 margin-left-5">
        <div className="col-2">
          <p className="ez_title margin-top-0  relative adjust_up">EZ<strong className="ez_title">Eatz</strong></p>
        </div>

        <div className="col-10">
          <div className="row">
            <div className="col-2">
              {this.renderToggle(this.props.isMap)}
            </div>

            <div className="col-5">
              <form onSubmit = { (e)=>{this.submitLocation(e)}}>
              <input className="form-control ez_home_input"  onChange = {(e)=>{
                this.setState({address:e.target.value});
              }}  value = {this.state.address} placeholder="Enter Address"/>
              </form>
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
