import React from "react";
import axios from "axios";

import FormComponent from "./../components/signup/form_component";


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

    }

  }

  ChangeInput = (info,key) =>{

      if(this.state.counter < this.state.limit){

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

    }

 }

  Reset = () =>{

    this.setState({address:"",username:"",password:"",name:"",counter:0});

  }

  CheckInputs = (data,alertValue)=>{

    if(data){

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

    var url = "";
    var alertValue = "";

     if(this.state.key == "login"){

       info = {
        username:this.state.username,
        password:this.state.password
      }

      url = "/api/login";
      alertValue = "Wrong Username or Password!";

     }else{

        url = "/api/signup";
        alertValue = "Username Already Taken!";

    }

    this.Verify(info,url,alertValue);

  }

  render(){

    var dataItem = this.state.data[this.state.counter];

    if(this.state.counter < this.state.limit){

      return(
        <FormComponent
          ChangeInput = {this.ChangeInput}
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

      var info = {
           username:this.state.username,
           password:this.state.password,
           address:this.state.address,
           image:"",
           verified:false,
           name:this.state.name
         }

        this.SubmitAuthentication(info);

        return <div />

      }

  }

}


export default AuthenticationPage;
