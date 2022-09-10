import React from "react";

import "./../../css/landing_page.css";
import LandingBackground from "./../../images/landing_background.png";
import ProfileIcon from "./../../images/profile_icon.png";

class LoginSignupDesktop extends React.Component{

  renderErrorMessage(err){

    if(err){
      return <p className="text-center cr">Wrong Username or Password </p>
    }else {
      return null
    }

  }

  render(){


    return(
    <div className="container-fluid landing_page" style = {{background:`url(${LandingBackground})`,height:"1080px",paddingBottom:"100%"}}>

      <div className="row navbar_landing width-90 margin-left-5" >

        <div className="col-7 margin-top-5">
          <p className="ez_title ">EZ<strong className="ez_title_end">Eatz</strong></p>
        </div>
        <div className="col-1"/>

        <div className="col-2 margin-top-5">
          <button className="width-100  btn btn_landing white-background" onClick={()=>{this.props.changeURL("userlogin")}}>Login</button>
        </div>

        <div className="col-2 margin-top-5">
          <button onClick={()=>{this.props.changeURL("usersign")}} className="width-100  btn signup_button_landing btn_landing black-background white"><img className="icon" src={ProfileIcon}/> Signup</button>
        </div>
      </div>

      <div className="row margin-top-5 width-90 margin-5">

        <div className="col-1"/>

        <div className="col-10">
          <p className="sub_slogan_landing margin-top-5"> Track and Order from Foodtrucks Near You!  </p>
          <p className="reward_slogan nuniko margin-top-5">Start an Account Today and Recieve 20% Off On Your First Meal! </p>

          <div className="row">
            <div className="col-6">
                <input className="form-control width-100" placeholder = "Enter you address"/>
            </div>

            <div className="col-2">
              <button className="width-100 btn black-background white">Submit</button>
            </div>

          </div>

        </div>

      </div>

    </div>
    );

  }
}

export default LoginSignupDesktop;
