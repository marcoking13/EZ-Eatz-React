import React from "react";
import Logo from "./../images/logo.png";

class LoginSignupMobile extends React.Component{
  //JSX for the login and signup page mobile
  render(){
    return(
      <div className="container-fluid bb">

        <div className="row blackNav2">
            <img className="mobileLoginLogo"src={Logo}/>
            <button className="btn btn-danger mobileFTLogin">Own a Foodtruck?</button>
          </div>

        <div className="row loginBox">
          <div className="col-2"></div>

          <div className="col-10 jumbotron"style={{marginLeft:"8%"}}>
            <h6 className="ezTitle">Sign In</h6>
            <p className="ezTitle">To your EZ account</p>

          <div className="inputBox">
              <input className="redLineInput"  style={{borderBottomColor:this.props.className}} onChange = {(event)=>{this.props.changeUsername(event)}} value = {this.props.username}placeholder = "Type Username" />
              <input className="redLineInput"  style={{borderBottomColor:this.props.className2}} onChange = {(event)=>{this.props.changePassword(event)}} value = {this.props.password} type="password" placeholder = " Type  Password" />
              <p className="accountMaker" onClick = {(e)=>{this.props.changeURL("usersign")}}>Create account here</p>
          </div>

          <button className="btn loginMobileS btn-danger"onClick  = {(event)=>{this.props.handleSubmit(event)}}>Sign In</button>

          <div className="otherLoginContainer">
            <button className="btn btn-danger googleLoginMobile ">Login With Google</button>
          </div>

        </div>
        <div className="col-2"></div>
      </div>
    </div>
    );
  }
}

export default LoginSignupMobile;
