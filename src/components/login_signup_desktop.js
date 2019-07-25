import React from "react";

import GoogleLogo from "./../images/googleLogo.png";

class LoginSignupDesktop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter:0,
      showcase:[
        {
          name:"Find Foodtruck Near You!",
          image:"assets/images/pestopizza.png"
        },
        {
          name:"Order Food from the App!",
          image:"assets/images/greeksalad.png"
        },
        {
          name:"Search Anywhere in the World!",
          image:"assets/images/chickenmeal.png"
        },
    ]
    }
  }

  componentDidMount(){
    this.interval = setInterval(()=>{

      if(this.state.counter >= this.state.showcase.length -1){
        this.setState({counter:0});
      }else{
        this.setState({counter:this.state.counter + 1})
      }
    },2000);
  }

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
              <img alt ="gallery"className="galleryImage" src={this.state.showcase[this.state.counter].image}/>
              <h5 className="detailsLoginSignup">{this.state.showcase[this.state.counter].name} </h5>

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
                <button className="btn googleLogin"><img alt ="googleLogo" className="logoGoogleLoginSignupLogin"src={GoogleLogo}/>Login with Google</button>
              </div>

          </div>

           <div className="row blackCreds"/>

        </div>

    </div>
    );

  }
}

export default LoginSignupDesktop;
