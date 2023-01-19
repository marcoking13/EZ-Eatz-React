import React from "react";
import axios from "axios";

import Form from "./../components/Authentication/form_component";


class AuthenticationPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      key:this.props.config.key,
      data:this.props.config.data,
      counter:0,
      limit:this.props.config.data.length,
      name:"",
      address:"",
      username:"",
      password:"",
      finished:false
    }

  }

  CheckIfUserFinishedFormsThenSubmit(){
    if(this.state.counter >= this.state.limit){
        var info = {
             username:this.state.username,
             password:this.state.password,
             address:this.state.address,
             image:"",
             verified:false,
             name:this.state.name
           }
        this.SubmitAuthentication(info);
     }
  }

  ChangeInput = (info,key) =>{


        if(key == "username"){
          this.setState({username:info,counter:this.state.counter + 1});
        }
         if(key == "address"){
            this.setState({address:info,counter:this.state.counter + 1});
        }
         if(key == "password"){
           this.setState({password:info,counter:this.state.counter + 1});
        }
         if(key == "name"){
            this.setState({name:info,counter:this.state.counter + 1});
        }
        console.log(this.state.counter,this.state.limit);

        this.CheckIfUserFinishedFormsThenSubmit();



 }

  Reset = () =>{
    this.setState({address:"",username:"",password:"",name:"",counter:0,finished:false});
  }

  CheckInputs = (data,alertValue)=>{
    console.log(data);

    if(data){
      this.setState({finished:true});
      this.props.LetUserInside(data);
    }else{
      alert(alertValue);
      this.Reset();
    }

  }

  Verify = async(info,url,alertValue)=>{
    const {data} = await axios.post(url,info);
    this.CheckInputs(data,alertValue);
  }

  GoogleAuthentication = (info)=>{
    this.Verify(info,"/api/google_login","Error Has Occured with Google!");
  }

  SubmitAuthentication = (info) =>{

     if(this.state.key == "login"){

       info = {
        username:this.state.username,
        password:this.state.password
      }

      this.Verify(info,"api/login","Wrong Username or Password!");

     }else{

      this.Verify(info,"api/signup","Username Already Taken!");

    }

  }

  render(){

    var dataItem = this.state.data[this.state.counter];

    if(this.state.counter < this.state.limit){

      return(
        <Form
          finished = {this.state.finished}
          ChangeInput = {this.ChangeInput}
          ChangeURL = {this.props.ChangeURL}
          dataKey = {dataItem.key}
          GoogleAuthentication={this.GoogleAuthentication}
          type = {this.state.key}
          placeholder={dataItem.placeholder}
          title = {dataItem.title}
          directions = {dataItem.directions}
        />
      )

    }
    else{

        return <div />

      }

  }

}


export default AuthenticationPage;
