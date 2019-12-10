import React from "react";
import axios from "axios";
import BackArrow from "./../../images/backArrow.png";
import ProfileIcon from "./../../images/profileIcon.png";
import cookie from 'react-cookies';

class Form2 extends React.Component{
  render(){
    return(
      <div className="appear">

        <div className="bubbles">
          <div className="bubble"style={{background:"#689bed"}}/>
          <div className="bubble"style={{background:"#689bed"}}/>
        </div>

        <img alt = "profileImage" src={BackArrow}  className="backArrowLoginPage" />
        <h1 className="profilePicSignupTitle">Upload a Profile Photo</h1>

        <div className="profileBubbleSignup"><img alt= "profileIcon"src={ProfileIcon} style={{width:"100%"}}/></div>
        <button className="uploadButton">Upload</button>
        <button className="userButtonSign btn-primary btn"onClick ={()=>{

          var name = this.props.name.first + " " + this.props.name.last;

          axios.post("/api/signupUser",{
            username:this.props.account.username,
            password:this.props.account.password,
            photo:this.props.account.photo,
            address:"",
            name:name
          });

          var userID ={
            username:this.props.account.username,
            password:this.props.account.password,
          };

          cookie.remove('account',{ path: '/' });
          cookie.save('account',userID, { path: '/' });
          this.props.changeURL("home");

      }}>Submit</button>



    </div>

    )
  }
}
export default Form2;
