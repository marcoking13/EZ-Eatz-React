import React from "react";

import "./../../css/landing_page.css";
import LandingBackground from "./../../images/landing_background.png";
import ProfileIcon from "./../../images/profile_icon.png";

class LandingDesktop extends React.Component{

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
    <div className="container-fluid landing_page" style = {{background:`url(${LandingBackground})`,height:"1080px",paddingBottom:"100%"}}>

      <div className="row navbar_landing width-90 margin-left-5" >

        <div className="col-7 margin-top-5">
          <p className="ez_title ">EZ<strong className="ez_title_end">Eatz</strong></p>
        </div>
        <div className="col-1"/>

        <div className="col-2 margin-top-5">
          <button className="width-100  btn btn_landing white-background" onClick={()=>{this.props.ChangeURL("userlogin")}}>Login</button>
        </div>

        <div className="col-2 margin-top-5">
          <button onClick={()=>{this.props.ChangeURL("usersign")}} className="width-100  btn signup_button_landing btn_landing black-background white"><img className="icon" src={ProfileIcon}/> Signup</button>
        </div>
      </div>

      <form onSubmit = {(e)=>{
        e.preventDefault();
        this.props.GuestEntrance(this.state.address);
      }}>
      <div className="row margin-top-5 width-90 margin-5">

        <div className="col-1"/>

        <div className="col-10">
          <h2 className="sub_slogan_landing margin-top-5"> Track and Order from Foodtrucks Near You!  </h2>
          <p className="reward_slogan nuniko margin-top-5">Start an Account Today and Recieve 20% Off On Your First Meal! </p>

          <div className="row">
            <div className="col-6">

                <input className="form-control width-100" placeholder = "Enter you address" value = {this.state.address} onChange = {(e)=>{
                  this.setState({address:e.target.value})
                }}/>

            </div>

            <div className="col-2">
              <button className="width-100 btn black-background white " type="submit" onSubmit = {(e)=>{
                e.preventDefault();
                this.props.GuestEntrance(this.state.address);
              }}>Submit</button>
            </div>

          </div>

        </div>

      </div>
      </form>
    </div>
    );

  }
}

export default LandingDesktop;
