
import React from "react";

import ProfileIcon from "./../../images/profileIcon.png";

import "./../../css/signup_page.css";

import Form1 from "./customer_form1";
import Form2 from "./customer_form2";


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

      this.addCount = this.addCount.bind(this);
      this.changeFirst = this.changeFirst.bind(this);
      this.changeConfirm = this.changeConfirm.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.changeLast = this.changeLast.bind(this);
      this.changeUsername = this.changeUsername.bind(this);
  }
//--------------------------------All will change state data--------------------
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
//----------------------------------------------------------------------------------------
  render(){
    // Fist form
    if(this.state.count === 1 ){
      // If on first form then render first form with data passed down
      return(
        <Form1
          addCount = {this.addCount}
          name= {
          {
            last:this.state.last,
            first:this.state.first
          }}
         account = {
          {
            confirm:this.state.confirm,
            password:this.state.password,
            username:this.state.username
          }}
          changers = {
            {
              changeFirst: this.changeFirst,
              changeLast: this.changeLast,
              changeUsername: this.changeUsername,
              changePassword: this.changePassword,
              changeConfirm: this.changeConfirm,

            }}
          />
      )
      // Else render form 2 with same data
    }else if (this.state.count === 2){
        return(
          <Form2
            addCount = {this.addCount}
            name= {
            {
              last:this.state.last,
              first:this.state.first
            }}
           account = {
            {
              confirm:this.state.confirm,
              photo:this.state.photo,
              password:this.state.password,
              username:this.state.username
            }}
            changeURL = {this.props.changeURL}
            changers = {
              {
                changeFirst: this.changeFirst,
                changeLast: this.changeLast,
                changeUsername: this.changeUsername,
                changePassword: this.changePassword,
                changeConfirm: this.changeConfirm,

              }}
            />
      );

    }
  }
}
