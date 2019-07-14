import React from "react";

import "./../css/signup_and_login.css";
import Foodtruck1 from "./../images/foodtruck1.png";
import Logo from "./../images/logo.png";
import axios from "axios";
import cookie from "react-cookies";
import GoogleLogo from "./../images/googleLogo.png";

import LoginSignupMobile from "./../components/login_signup_mobile.js";
import LoginSignupDesktop from "./../components/login_signup_desktop.js";


//-----------------------------------Component----------------------------------
class SignupAndLoginPage extends React.Component {

  //-------------------------------Constructor--------------------------------
  constructor(props){
    super(props);
    this.state ={
      className:"black",
      className2:"black",
      username : "",
      password: "",
      account:{}
    }
      //------------------------Binders--------------------------------------
     this.handleSubmit = this.handleSubmit.bind(this);
     this.changeUsername = this.changeUsername.bind(this);
     this.changePassword = this.changePassword.bind(this);

  }

  //---------------------------Account State Changers----------------------
  changeUsername(event){
    this.setState({username:event.target.value,className:"red"});
  }

  changePassword(event){
    this.setState({password:event.target.value,className2:"red"});
  }
//-------------------------------------When User Tried To Login-------------------------------------------

  handleSubmit(event){
      // Stop form from submitting to api
      event.preventDefault();
        // Save and parse account object
      var account = {username:this.state.username,password:this.state.password};
      let ata = JSON.stringify(account);
        // Create a server to use axios
      const api = axios.create({baseURL: 'http://localhost:4001'});
        // Gets all the users in database
      axios.get("/api/users").then((response)=>{
          // Looping through each user
        for(var i =0; i<response.data.length;i++){
          //If the user info matches with the info submitted
            // Log user in
          if(account.username === response.data[i].account.username && account.password === response.data[i].account.password){
              cookie.remove("account",{path:"/"});
              cookie.save("account",account,{path:"/"});
              this.props.changeURL("home");
            break;
          }
            // If there is no user
            // User will stay in same page and nothing will submit
          if(i >= response.data.length -1){
            console.log("cannot find user");
          }

        }
      });
    }
//---------------------------------------Renderer---------------------------------------------
//-------------------------------------------------------------------------------------------
  render(){

    if (window.innerWidth >= 590 ) {
        return  <LoginSignupDesktop  changeURL= {this.props.changeURL} username={this.state.username} password = {this.state.password} changeUsername= {this.changeUsername} changePassword={this.changePassword} handleSubmit  = {this.handleSubmit}/>
      }else{
        return  <LoginSignupMobile changeURL= {this.props.changeURL} username={this.state.username} password = {this.state.password} changeUsername= {this.changeUsername} changePassword={this.changePassword} handleSubmit  = {this.handleSubmit}/>
    }

  }

}

export default SignupAndLoginPage;
