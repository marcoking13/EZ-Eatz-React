import React from "react";
import cookies from "react-cookies";

import "./../css/loading.css";

//---------------------------Component-------------------------------

class LoadingPage extends React.Component{

  //---------------------Constructor-------------------------------
  constructor(props){
    super(props);

    this.state = {
      delay:3
    }

  }

  //--------------------------When Components Mount Functions---------------------------------
    // If user is logged in skip the mount and direct user
  componentWillMount(){
    this.CookieCheck();
  }
    // If loading page mounted, start the countdown then direct user
  componentDidMount(){
      this.Countdown();
  }

  //-----------------------Timer Functions---------------------------

  Countdown(){

    this.interval = setInterval(()=>{
      // When delay value is at 0 and animation is finished, direct the user depending on cookie data
      if(this.state.delay <= 0){
        // Stops the countdown
        clearInterval(this.interval);
        // Checks to see what cookies the user has to see what page user needs to go to
        this.CookieCheck();
      }
      // Countdown by 1 for the delay value
      this.setState({delay:this.state.delay-1});
    },400);

  }

  //-----------------------------Checks Cookies-------------------
  // If cookie with user account true then log them in
  // If User has item in cart take them to the modify page
  CookieCheck(){
    // If user has account: Send them to Home page
    // If user has account and was ordering: Send them to Modify page
    // If user does not have account: Send them to Login page
    // If countdown is still in progress: Do Nothing
    if(cookies.load("account",{path:"/"}) && !cookies.load("currentItem",{path:"/"})){
        this.props.changeURL("home");
    }else if(cookies.load("account",{path:"/"}) && cookies.load("currentItem",{path:"/"})){
        this.props.changeURL("modify");
    }else if(this.state.delay <=0 ){
        this.props.changeURL("login");
    }else{
      console.log("Loading");
    }

  }
//-------------------------------------Renderer---------------------------------------------
//-------------------------------------------------------------------------------------------
    render(){
      return(
        <div className="container-fluid loadingPage lighten" style={{background:"black",height:"1000px"}}>

          <div className="row">
          <div className="col-4"></div>

          <div className="col-4">
              <img alt="logo"src="./../logo.png" className="logo"  />
          </div>

          <div className="col-4"></div>

        </div>
      </div>
      )
    }
  }



export default LoadingPage;
