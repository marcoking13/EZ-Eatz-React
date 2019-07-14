
import React from "react";
import Background from "./../images/searchBackground.jpg";

import BackArrow from "./../images/backArrow.png";
import cookie from 'react-cookies';
import axios from "axios";
import User from "./../images/userChoice.png";
import Owner from "./../images/ownerChoice.png";
import "./../css/signup_page.css";
import ProfileIcon from "./../images/profileIcon.png";


export default  class CustomerForms extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        count:1,
        photo:ProfileIcon,
        max:2,
        first:"",
        last:"",
        username:"",
        confirm:"",
        password:"",
      }

  }

  changeUsername(data){
    this.setState({username:data})
  }

  changeConfirm(data){
    this.setState({confirm:data})
  }

  changePassword(data){
    this.setState({password:data})
  }

  changeFirst(data){
    this.setState({first:data})
  }

  changeLast(data){
    this.setState({last:data})
  }

  addCount(){
    this.setState({count:this.state.count + 1});
  }

  render(){
    if(this.state.count == 1 ){

      return(
        <div className="container-fluid loginpage" style={{background:`#f4f4f4`}}>

            <div className="row">
              <div className="col-1"/>
                <div className="col-10 jumbotron loginModal m650 juju" style={{background:`white`}}>
                  <div  className="sheet"/>
                  <div className="bubbles">
                    <div className="bubble"/>
                    <div className="bubble"style={{background:"#689bed"}}/>
                  </div>
                  <img src={BackArrow}  className="backArrowLoginPage" />
                  <h2 className="titleFormSignup">Please Answer the Following</h2>

                  <div className="row mr6">
                    <div className="col-1"/>
                    <div className="col-10">
                      <p className="formTitleSignup">Enter Name</p>
                      <input className="form-control namer" value={this.state.first} onChange={(event)=>{this.changeFirst(event.target.value)}}/>
                      <input className="form-control namer" value={this.state.last} onChange={(event)=>{this.changeLast(event.target.value)}}/>
                    </div>
                    <div className="co1-1"/>
                  </div>



                <div className="row mr6">
                  <div className="col-1"/>
                  <div className="col-10">
                    <p className="formTitleSignup">Enter Username</p>
                    <input className="form-control " value={this.state.username} onChange={(event)=>{this.changeUsername(event.target.value)}}/>
                  </div>
                  <div className="co1-1"/>
                </div>



                <div className="row mr6">
                  <div className="col-1"/>
                  <div className="col-10">
                    <p className="formTitleSignup">Enter Password</p>
                    <input className="form-control " value={this.state.password} onChange={(event)=>{this.changePassword(event.target.value)}} type="password"/>
                  </div>
                  <div className="co1-1"/>
                </div>


                <div className="row mr6">
                  <div className="col-1"/>
                  <div className="col-10">
                    <p className="formTitleSignup">Confirm Password</p>
                    <input className="form-control " value={this.state.confirm} onChange={(event)=>{this.changeConfirm(event.target.value)}} type="password"/>
                  </div>
                  <div className="co1-1"/>
                </div>


                <div className="row mr6">
                      <div className="col-1"/>
                      <div className="col-10">
                          <button className="userButtonSign btn-secondary btn"onClick ={()=>{
                            axios.get("/api/users").then((resp)=>{
                              var flag = true;
                              resp.data.map((user)=>{
                                if(user.account.username == this.state.username || this.state.confirm !== this.state.password){
                                  console.log("Error either password doesnt confirm or the user")
                                  flag = false;
                                }

                              });
                              if(flag){
                                  this.addCount()
                              }
                            });
                          }}>Submit</button>
                      </div>
                      <div className="co1-1"/>
                 </div>



              </div>

          </div>
            <div className="col-1"/>
        </div>

      )
    }else if (this.state.count == 2){
        return(

          <div className="appear">
            <div className="bubbles">
              <div className="bubble"style={{background:"#689bed"}}/>
              <div className="bubble"style={{background:"#689bed"}}/>
            </div>
            <img src={BackArrow}  className="backArrowLoginPage" />
            <h1 className="profilePicSignupTitle">Upload a Profile Photo</h1>

            <div className="profileBubbleSignup"><img src={ProfileIcon} style={{width:"100%"}}/></div>
            <button className="uploadButton">Upload</button>

            <button className="userButtonSign btn-primary btn"onClick ={()=>{


              axios.post("/api/signupUser",{
                username:this.state.username,
                password:this.state.password,
                photo:this.state.photo,
                address:"",
                name:`${this.state.first + " "+ this.state.last}`
              })
              var userID ={
                username:this.state.username,
                password:this.state.password,
              };

            cookie.remove('account',{ path: '/' });
            cookie.save('account',userID, { path: '/' });
            this.props.changeURL("home");

          }}>Submit</button>



        </div>
      );

    }
  }
}
