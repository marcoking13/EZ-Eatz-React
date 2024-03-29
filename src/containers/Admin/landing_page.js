import React from "react";

import "./../../css/signup_and_login.css";
import "./../../css/landing_page.css";

import axios from "axios";
import cookie from "react-cookies";

import Page from "./../../components/Admin/Landing/landing_desktop.js";

//-----------------------------------Component----------------------------------
class LandingPage extends React.Component {

  //-------------------------------Constructor--------------------------------
  constructor(props){
    super(props);

    this.state ={
      className:"black",
      err:false,
      className2:"black",
      username : "",
      password: "",
      account:{}

    }

  }

  //---------------------------Account State Changers----------------------
  changeUsername = (event) =>{
    this.setState({username:event.target.value,className:"red"});
  }

  changePassword = (event) =>{
    this.setState({password:event.target.value,className2:"red"});
  }
//-------------------------------------When User Tried To Login-------------------------------------------

  handleSubmit =(event) =>{
      // Stop form from submitting to api
      event.preventDefault();
        // Save and parse account object
      var account = {username:this.state.username,password:this.state.password};

        // Create a server to use axios
        // Gets all the users in database
      axios.get("/api/users").then((response)=>{
          // Looping through each user
          console.log(response);
        for(var i =0; i<response.data.length;i++){
          //If the user info matches with the info submitted
            // Log user in
          if(account.username === response.data[i].account.username && account.password === response.data[i].account.password){
              cookie.remove("account",{path:"/"});
              cookie.save("account",account,{path:"/"});
              var address = response.data[i].address;
              cookie.remove("address",{path:"/"});
              cookie.save("address",address,{path:"/"});
              this.props.changeURL("home");
            break;
          }

            // User will stay in same page and nothing will submit
          if(i >= response.data.length -1){
              this.setState({err:true});
          }

        }
      });
    }
//---------------------------------------Renderer---------------------------------------------
//-------------------------------------------------------------------------------------------
  render(){

    return(
      <div>
      <Page
          err = {this.state.err}
          ChangeURL= {this.props.ChangeURL}
          username={this.state.username}
          password = {this.state.password}
          changeUsername= {this.changeUsername}
          changePassword={this.changePassword}
          handleSubmit  = {this.handleSubmit}
        />
      </div>
    )
    }

}

export default LandingPage;
