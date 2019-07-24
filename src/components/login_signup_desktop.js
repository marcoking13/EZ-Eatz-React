import React from "react";
import Logo from "./../images/logo.png";
import GoogleLogo from "./../images/googleLogo.png";

class LoginSignupDesktop extends React.Component{

  render(){

    //JSX for Login Sign up Page for desktop
    return(
      <div className="container-fluid loginAndSignupContainer">

          <div className="row navBarLoginSignup"style={{background:"#262626"}}>

            <div className="col-4">
              <h4 className="loginSignupTitle">EZ-Eatz</h4>
            </div>

            <div className="col-4"/>
            <div className="col-4"/>

          </div>

          <div className="row bodySignupLogin">

            <div className="col-7 ">
            <img className="galleryImage" src="assets/images/pestopizza.png"/>
            <h5 className="detailsLoginSignup">Find any food truck near you! </h5>

          </div>

          <div className="col-4 jumbotron jumboSignupLogin">
            <h2 className="jumboTitleSignupLogin">Sign in</h2>
            <p className="jumboTitleSignupLogin">Your EZ account</p>

            <div>
              
              <div className="inputGroupSignupLogin">
                <input className="inputLoginSignupLogin"  style={{borderBottomColor:this.props.className}}  onChange = {(event)=>{this.props.changeUsername(event)}} value = {this.props.username}/>
                <input className="inputLoginSignupLogin"  style={{borderBottomColor:this.props.className2}} type="password"onChange = {(event)=>{this.props.changePassword(event)}} value = {this.props.password}/>
              </div>

                <button className="LoginButtonSignupLogin btn btn-info" onClick  = {(event)=>{this.props.handleSubmit(event)}}>Login</button>
                <p className="signupSignupLoginText" onClick = {(e)=>{this.props.changeURL("usersign")}}>Create account here</p>

              </div>

              <div className="otherLogins">
                <button className="btn googleLogin"><img className="logoGoogleLoginSignupLogin"src={GoogleLogo}/>Login with Google</button>
              </div>

          </div>

           <div className="row blackCreds"/>

        </div>

    </div>
    );

  }
}

export default LoginSignupDesktop;
