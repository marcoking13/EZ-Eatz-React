import React from "react";
import Logo from "./../../images/logo.png";
import Footer "./../Footer/footnote.js";

class LoginSignupMobile extends React.Component{
  //JSX for the login and signup page mobile
  render(){
    return(
      <div className="container-fluid bGeo pb200px">

        <div className="row blackNav2">
            <img alt="logo" className="mobileLoginLogo"src={Logo}/>
            <button className="btn btn-danger mobileFTLogin">Own a Foodtruck?</button>
          </div>

        <div className="row loginBox ">
          <div className="col-2"></div>

          <div className="col-10 ml7_5 bw jumbotron">
            <h6 className="cb text-center">Sign In</h6>
            <p className="cb text-center">To your EZ account</p>

          <div className="inputBox ">
              <input className="redLineInput w100 mt5 mb5 text-center" style={{borderBottomColor:this.props.className}} onChange = {(event)=>{this.props.changeUsername(event)}} value = {this.props.username}placeholder = "Type Username" />
              <input className="redLineInput w100 mt5 mb5 text-center" style={{borderBottomColor:this.props.className2}} onChange = {(event)=>{this.props.changePassword(event)}} value = {this.props.password} type="password" placeholder = " Type  Password" />
              <p className="text-center turnBlue f12px" onClick = {(e)=>{this.props.changeURL("usersign")}}>Create account here</p>
          </div>

          <button className="btn w50 BB cw transparent mt5 ml25 bb btn-danger" onClick  = {(event)=>{this.props.handleSubmit(event)}}>Sign In</button>

          <div className="w100 mt15">
            <button className="btn btn-danger googleLoginMobile ">Login With Google</button>
          </div>

        </div>
        <div className="col-2"></div>
      </div>
      <Footer  />
    </div>
    );
  }
}

export default LoginSignupMobile;
