import React from "react";
import axios from "axios";

import Form from "./../components/Authentication/form_component";
import AddFoodTruckPage from "./../components/Admin/new_add_food_truck_page.js";

class AuthenticationPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      key:this.props.config.key,
      config:this.props.config,
      counter:0,
      limit:this.props.config.data.length,
      name:"",
      address:"",
      username:"",
      password:"",
      finished:false,
      truck:null
    }

  }

  SubmitForm = () => {

        var info = {
             username:this.state.username,
             password:this.state.password,
             address:this.state.address,
             image:"",
             truck:this.state.truck,
             verified:false,
             name:this.state.name,
           }

           this.Verify(info);

  }

  SubmitInput = (info,key) =>{

      var state;
        if(key == "truck") {
          state = {truck:info,counter:this.state.counter + 1}
        }
        if(key == "username"){
          state = {username:info,counter:this.state.counter + 1};
        }
         if(key == "address"){
          state = {address:info,counter:this.state.counter + 1};
        }
         if(key == "password"){
          state = {password:info,counter:this.state.counter + 1};
        }
         if(key == "name"){
          state = {name:info,counter:this.state.counter + 1};
        }

        console.log(state);

        this.setState(state,()=>{

          if(this.state.counter >= this.state.limit){
            this.SubmitForm();
          }

        });

 }

  Reset = () =>{
    this.setState({address:"",username:"",password:"",name:"",counter:0,truck:null,finished:false});
  }

  Verify = async(info)=>{
    const {data} = await axios.post(this.props.config.url,info);
    this.DirectUser(data);
  }

  GoogleAuthentication = async (info)=>{
    const {data} = await axios.post("/admin/google_login",info);
    this.DirectUser(data);
  }

  DirectUser = (data) => {

    if(data){
      this.setState({finished:true});
      this.props.LetUserInside(data.address,data,this.props.isAdmin);
    }else{
      alert("Authenication Error");
      this.Reset();
    }

  }

  render(){

    var dataItem = this.state.config.data[this.state.counter];
    console.log(dataItem);
    if(!dataItem){
      return  <div />
    }
    if(dataItem.key == "truck"){

        return(
            <AddFoodTruckPage
              SubmitInput = {this.SubmitInput}
              ChangeURL = {this.props.ChangeURL}
              dataKey = {dataItem.key}
              isEdit = {false}
            />
        )

    }
    else if(this.state.counter <= this.state.limit){

      return(
        <Form
          finished = {this.state.finished}
          ChangeInput = {this.SubmitInput}
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
