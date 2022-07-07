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

  CheckInputs = (data)=>{

    if(data){

      this.props.changeURL("home");

    }else{

      alert("Wrong Username or Password!");
      this.Reset();

    }

  }

  Verify = async(info,url)=>{

    const {data} = await axios.post(url,info);
    this.CheckInputs(data);

  }

  SubmitAuthentication = () =>{

    var info = {};
    var url = "";

    if(this.state.key == "login"){

       info = {
        username:this.state.username,
        password:this.state.password
      }

      url = "/api/login";

    }else{

       info = {
          username:this.state.username,
          password:this.state.password,
          address:this.state.address,
          name:this.state.name
        }

        url = "/api/signup";

    }


    this.Verify(info,url);

  }



  render(){

    var dataItem = this.state.data[this.state.counter];

    if(this.state.counter < this.state.limit){
      return(
        <FormComponent
          ChangeInput = {this.ChangeInput}
          dataKey = {dataItem.key}
          type = {this.state.key}
          placeholder={dataItem.placeholder}
          title = {dataItem.title}
          directions = {dataItem.directions}
        />
      )
    }
    else{
          this.SubmitAuthentication();
          return <div />
      }
  }

}


export default AuthenticationPage;
