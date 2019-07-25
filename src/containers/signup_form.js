import React from "react";
import CustomerForms from "./../components/customer_signup_form.js";

//--------------------Component-----------------------------------------
class SignupForm extends React.Component {
//--------------------Renderer-----------------------------------------
//----------------------------------------------------------------------
  render(){

    if(this.props.type === "user"){
      return <CustomerForms changeURL={this.props.changeURL} />
    }else{
      return <CustomerForms changeURL={this.props.changeURL}/>
    }

  }
}

export default SignupForm;
