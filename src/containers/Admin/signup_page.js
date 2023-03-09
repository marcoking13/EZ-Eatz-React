import React from "react";
import axios from "axios";

import Form from "./../../components/Admin/Authentication/form_component";
import AddFoodTruckPage from "./../../components/Admin/add_food_truck_page.js";


class AuthenticationPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      key:this.props.config.key,
      data:this.props.config.data,
      counter:0,
      limit:this.props.config.data.length + 1,
      name:"",
      address:"",
      username:"",
      password:"",
      truck:null,
      finished:false

    }

  }

  CheckIfUserFinishedFormsThenSubmit = ()=>{
    if(this.state.counter >= this.state.limit){
        var info = {
             username:this.state.username,
             password:this.state.password,
             address:this.state.address,
             image:"",
             verified:false,
             name:this.state.name,
             truck:this.state.truck
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
    this.setState({address:"",username:"",password:"",name:"",counter:0,truck:null,finished:false});
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
    console.log(data);
    this.CheckInputs(data,alertValue);
  }

  GoogleAuthentication = async (info) =>{
    console.log(info);
    const {data} = await axios.post("/admin/find_one",info);
    console.log(data);
    if(data){
      alert("User Already Exists!");
    }else{
      this.setState({
        counter: 3,
        username:info.username,
        name:info.name,
        address:"",
        password:info.password,
      })
    }
  }

  SubmitAuthentication = (info) =>{

     if(this.state.key == "admin_login"){

       info = {
        username:this.state.username,
        password:this.state.password
      }

      this.Verify(info,"admin/login","Wrong Username or Password!");

     }
     else if(this.state.key == "admin_signup"){

       this.Verify(info,"admin/signup","Wrong Username or Password!");

      }


  }

  submitTruck = (truck) =>{
    console.log(truck);
    this.setState({truck:truck,counter:this.state.counter +  1});
    this.CheckIfUserFinishedFormsThenSubmit();
  }



  render(){

    var dataItem = this.state.data[this.state.counter];
    console.log(this.state.counter,this.state.limit);
    if(this.state.counter >= this.state.limit){
      return(
          <AddFoodTruckPage
            submitTruck = {this.submitTruck}
            ChangeURL = {this.props.ChangeURL}
          />
      )
    }

    if(this.state.counter < this.state.limit - 1){

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

      return(
          <AddFoodTruckPage
            submitTruck = {this.submitTruck}
            isEdit = {false}
            ChangeURL = {this.props.ChangeURL}
          />
      )

      }

  }

}


export default AuthenticationPage;
