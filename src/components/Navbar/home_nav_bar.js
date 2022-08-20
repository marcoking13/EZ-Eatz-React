import React from "react";

import cookies from "react-cookies";
import Geocode from "react-geocode";


import axios from "axios";

import MobileNav from "./../Navbar/mobile_nav_bar.js";
import AddressInput from "./../Navbar/address_input";

import "./../../css/home_page.css";

import ProfileIcon from "./../../images/profile_icon.png";
import Search from "./../../images/search_icon.png";
import GoogleMap from "./../../images/map_icon.svg";
import Cart from "./../../images/cart_icon.svg";
import Truck from "./../../images/truck_icon.png";
import MapIcon2 from "./../../images/map_icon_2.svg";
import Logo from "./../../images/logo.png";

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


  //---------------------------------Rendering Icons---------------------------------//
  renderCheckoutIcon(){

    if(this.props.orders.length > 0){
      return  <img alt="cart"src={Cart}  onClick = {()=>{this.props.changeURL("checkout")}}className="w100 mt2_5"/>
    }else{
      return  <img alt="cart"src={Cart} className="w100 o_5 mt2_5"/>
    }

  }

  renderMapIcon(){
    if(this.props.changeFlag){
        // Renders Map icon if user is not on map page
        // changeFlag = true or false is user is on google maps
        if(window.innerWidth > 500){
          return(
            <img alt="google"src={GoogleMap} onClick = {()=>{
              this.props.changeURL("map");
            }} className="w100 mt2_5"/>
          );
        }else{
          return(
            <img alt="google"src={GoogleMap} onClick = {()=>{
              this.props.changeURL("map");
            }} className="w10 posAb posRight fr"/>
          );
        }
      }else{
        return null;
      }
  }

//--------------------------------Render JSX function------------------------------------

  renderMobileJSX(){
    return (
      <div className="container-fluid bb">
        <MobileNav  changeURL = {this.props.changeURL} />
        <br />
      </div>
    );
  }

  submitLocation =  async(e) =>{

      e.preventDefault();

      var location = {
        address:"Enter Address",lat:null,lng:null
      }

      // if(!e.target.value){
      //   return this.props.changeAddress(location.address,location.lat,location.lng);
      // }

      const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

      if(response){

        const { lat, lng } = response.data.results[0].geometry.location;

        location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng };



        if(this.props.FoodtrucksNearMe){
          this.props.FoodtrucksNearMe();
        }

        this.props.changeAddress(location.address,location.lat,location.lng);
        this.setState({address:location.address});

      }else{

        this.props.changeAddress(location.address,location.lat,location.lng);

      }


  }

  renderProfilePicture = (hasProfilePic)=>{
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    var rgb = `rgb(${r},${g},${b})`;

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

  renderButton = (img,text,url) =>{
    return(
      <button className="new_ez_button"onClick = {()=>{
        this.props.changeURL(url)

      }}>
        <img className="new_ez_button_icon_small invert_svg" src={img}/>
          <p className="new_ez_button_text">{text}</p>
       </button>

    )
  }



  renderDesktopJSX(){

      return(
        <div className="container-fluid navbar_home">
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
                {this.renderButton(Cart,"Checkout")}
              </div>

              <div className="col-2">
                  {this.renderButton(Search,"Search All")}
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


  //JSX//
//---------------------------------------------------------------------------
  render(){
    var innerWidth = window.innerWidth;
    if(innerWidth <= 600){
      return (
          <div className={"container-fluid bb navbarEZ " + this.props.navStyle}>
            {this.renderMobileJSX()}
          </div>

        );
    }else{

      return(
        <div className={"container-fluid bw navbarEZ " + this.props.navStyle}>
          {this.renderDesktopJSX()}
        </div>
      );
    }
  }
}


export default NavBarHome;
