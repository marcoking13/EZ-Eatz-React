import React from "react";

import GoogleLogo from "./../images/googleLogo.png";

import Footer from "./Footer/footnote.js";

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
    <div>
      <div className="container-fluid bw p0">

          <div className="row BBBff4 pb10px b26">

            <div className="col-4">
              <h4 className="mt2 ml5 cr fl">EZ-Eatz</h4>
            </div>

            <div className="col-4"/>
            <div className="col-4"/>

          </div>

          <div className="row">

            <div className="col-7 ">

              <div className="row">
                <div className="col-3"/>

                <div className="col-6">
                  <br />
                  <img alt ="gallery"className="w100 " src={this.state.showcase[this.state.counter].image}/>
                  <h5 className="nunito normal-font text-center ml25 mt5 f40px w50">{this.state.showcase[this.state.counter].name} </h5>
                </div>

                <div className="col-3"/>
                </div>
            </div>

            <div className="col-4 jumbotron p1 br10px mt2_5 BBf220">
              <h2 className="text-center">Sign in</h2>
              <p className="text-center">Your EZ account</p>

              <div>
                <div>
                  <input className="bottomLine ml5 mt10 bNone w90"  style={{borderBottomColor:this.props.className}}  onChange = {(event)=>{this.props.changeUsername(event)}} value = {this.props.username}/>
                  <input className="bottomLine ml5 mt10 bNone w90"  style={{borderBottomColor:this.props.className2}} type="password"onChange = {(event)=>{this.props.changePassword(event)}} value = {this.props.password}/>
                </div>
                <button className="w50 ml25 mt10 btn btn-info" onClick  = {(event)=>{this.props.handleSubmit(event)}}>Login</button>
                <p className="mt1 bold f15px text-center hoverBlue" onClick = {(e)=>{this.props.changeURL("usersign")}}>Create account here</p>
              </div>

              <div className="mt15">
                <button className="btn w50">
                  <img alt ="googleLogo" className="googleLogoButton fl"src={GoogleLogo}/>
                    Login with Google
                  </button>
              </div>

          </div>



        </div>


    </div>
      <Footer />
    </div>
    );

  }
}

export default LoginSignupDesktop;
