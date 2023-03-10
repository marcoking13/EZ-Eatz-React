import React from "react";

import "./../../css/landing_page.css";
import LandingBackground from "./../../images/5.png";
import Logo from "./../../images/logo.png";
import ProfileIcon from "./../../images/profile_icon.png";

class LoginBar extends React.Component{

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

  renderDesktop = () => {
    var admin_text = this.props.isAdmin ? <p className="ez_title text-center medium-font margin-top-2_5 cw bottom-30px">Admin</p> : <span />

      return(
        <div className="row" >

          <div className="col-5"></div>

          <div className="col-2">
            <p className="ez_title text-center cw">EZ-Eatz</p>
            {admin_text}
          </div>

          <div className="col-1"/>

          <div className="col-4 margin-top-2_5">
            <div className="row">
              <div className="col-6">
                <button className="width-100  btn btn_landing " onClick={()=>{this.props.ChangeURL(this.props.login_url)}}>Login</button>
              </div>

              <div className="col-5">
                <button onClick={()=>{this.props.ChangeURL(this.props.signup_url)}} className="width-100  btn signup_button_landing btn_landing black-background white">Create Account</button>
              </div>

            </div>

          </div>

        </div>
      )
  }

  renderMobile = ()=>{
    var admin_text = this.props.isAdmin ? <p className="ez_title text-center medium-font margin-top-2_5 cw bottom-30px">Admin</p> : <span />

      return(
        <div className="row" >

          <div className="col-3"/>
          <div className="col-9 margin-top-2_5">
            <div className="row">
              <div className="col-5">
                <button className="width-100  btn btn_landing " onClick={()=>{this.props.ChangeURL(this.props.signup_url)}} style={{fontSize:"14px"}}>Login</button>
              </div>

              <div className="col-5">
                <button onClick={()=>{this.props.ChangeURL(this.props.login_url)}} className="width-100  btn signup_button_landing btn_landing black-background white"style={{fontSize:"14px"}}>Signup</button>
              </div>

            </div>

          </div>

        </div>
      )
  }

  render(){

    if(window.innerWidth <= 844){
      return(
        <div>
          {this.renderMobile()}
        </div>
      )
    }else{
      return(
        <div>
          {this.renderDesktop()}
        </div>
      )
    }

  }
}


export default LoginBar;
