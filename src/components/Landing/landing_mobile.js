import React from "react";

import "./../../css/landing_page.css";
import LandingBackground from "./../../images/5.png";
import Logo from "./../../images/logo.png";
import ProfileIcon from "./../../images/profile_icon.png";

class LandingMobile extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      address : ""
    }
  }

  renderErrorMessage(err){

    if(err){
      return <p className="text-center cr">Wrong Username or Password </p>
    }else {
      return null
    }

  }

  render(){


    return(
    <div className="container-fluid landing_page" style = {{background:`url(${LandingBackground})`,height:"900px",paddingBottom:"100%"}}>
      <div className="row">
        <div className="col-6"/>
        <div className="col-3 margin-top-5">
          <button className="width-100  btn btn_landing white-background" onClick={()=>{this.props.ChangeURL("userlogin")}}>Login</button>
        </div>

        <div className="col-3 margin-top-5">
          <button onClick={()=>{this.props.ChangeURL("usersign")}} className="width-100  btn signup_button_landing btn_landing black-background white">
            <img className="icon landing_icon" src={ProfileIcon}/>
            Signup
          </button>
        </div>
      </div>
      <div className="row navbar_landing" >

        <div className="col-1"/>
        <div className="col-10 margin-top-5">
          <p className="ez_title text-center mobile_landing_size ">EZ<strong className=" mobile_landing_size ez_title_end">Eatz</strong></p>
          <img className="ez_logo_mobile" src = {Logo}/>
        </div>

      </div>

      <form onSubmit = {(e)=>{
        e.preventDefault();
        this.props.GuestEntrance(this.state.address);
      }}>
      <div className="row">



        <div className="col-12">
          <h2 className="sub_slogan_landing white text-center margin-top-5 w90 ml5"> Track and Order from Foodtrucks Near You!  </h2>
          <p className="reward_slogan nuniko white text-center margin-top-5 w90 ml5">Start an Account Today and Recieve 20% Off On Your First Meal! </p>

          <div className="row">
            <div className="col-2"/>
            <div className="col-8 mt5">

                <input className="form-control width-100" placeholder = "Enter you address" value = {this.state.address} onChange = {(e)=>{
                  this.setState({address:e.target.value})
                }}/>

            </div>
            <div className="col-2"/>
            <div className="col-3"/>
            <br />
            <div className="col-6 mt5">
              <button className="width-100 btn black-background white " type="submit" onSubmit = {(e)=>{
                e.preventDefault();
                this.props.GuestEntrance(this.state.address);
              }}>Submit</button>
            </div>

          </div>

        </div>

      </div>
      </form>
      <button className="admin_button admin_button_mobile btn black-background white" onClick = {(e)=>{
        this.props.ChangeURL("/admin/");
      }}>I Own a Foodtruck</button>
    </div>
    );

  }
}

export default LandingMobile;
