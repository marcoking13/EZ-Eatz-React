import React from "react";

import "./../../../css/landing_page.css";
import "./../../../css/utility.css";
import LandingBackground from "./../../../images/Admin_Landing_Background.png";
import ProfileIcon from "./../../../images/profile_icon.png";

class AdminLandingDesktop extends React.Component{

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
    <div className="container-fluid landing_page full_background" style = {{background:`url(${LandingBackground})`}}>

      <div className="row navbar_landing width-90 margin-left-5" >

        <div className="col-7 margin-top-5">
          <p className="ez_title ">EZ<strong className="ez_title_end">Eatz</strong></p>
            <p className="ez_title ">Admin</p>
        </div>
        <div className="col-1"/>

        <div className="col-2 margin-top-5">
          <button className="width-100  btn btn_landing white-background" onClick={()=>{this.props.ChangeURL("/admin/login")}}>Login</button>
        </div>

        <div className="col-2 margin-top-5">
          <button onClick={()=>{this.props.ChangeURL("/admin/signup")}} className="width-100  btn signup_button_landing btn_landing black-background white"><img className="icon" src={ProfileIcon}/> Create Account</button>
        </div>
      </div>

      <form onSubmit = {(e)=>{
        e.preventDefault();

      }}>
      <div className="row margin-top-5 width-90 margin-5">

        <div className="col-1"/>

        <div className="col-5 padding-5 background-white">
          <h2 className="sub_slogan_landing margin-top-5"> Make Your Foodtruck Known to The World!  </h2>
          <p className="reward_slogan nuniko margin-top-5">Do You Own A Foodtruck? Get Started Now!</p>

          <div className="row">
            <div className="col-4">
              <button className="width-100 btn black-background white " type="submit" onSubmit = {(e)=>{
                e.preventDefault();
              }}>Get Started</button>
            </div>

          </div>

        </div>

      </div>
      </form>


    </div>
    );

  }
}

export default AdminLandingDesktop;
