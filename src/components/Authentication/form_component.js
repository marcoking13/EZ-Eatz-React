import React from "react";
import JWT_Decode from "jwt-decode";

import FormIcon from "./../../images/form_icon.svg";
import LandingBackground from "./../../images/5.png";
import LandingBackgroundMobile from "./../../images/mobile_l.png";

class FormComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input : "",
      key: this.props.key,
    }

    this.formRef = React.createRef();
    this.errorRef = React.createRef();

  }

  handleGoogleLogin = (response)=>{

    const credential = response.credential;
    var userObject = JWT_Decode(credential);

    const new_account = {
      address:null,
      image:userObject.picture,
      name:userObject.name,
      username:userObject.email,
      password:userObject.sub,
      orders:[]
    }

    this.props.GoogleAuthentication(new_account);

  }

  componentDidMount(){

      /* global google */
      if(google){
        var timer = setTimeout(()=>{google.accounts.id.initialize({
          client_id:"701475510454-pv8nu2r7pcbipkp1eihv93r9s2u435nu.apps.googleusercontent.com",
          callback:this.handleGoogleLogin
        });

        google.accounts.id.renderButton(
          document.getElementById("google_login"),
          {theme:"outline",size:"large"}
        )

      },500);

    }

  }

  EnterInformation = (event) =>{

      if(!this.state.input){

        this.errorRef.current.innerHTML = "*Must Enter a Value!";
        return;

      }
      else if(this.props.type == "signup" && this.props.dataKey == "password" && this.state.input.length < 10){

        this.errorRef.current.innerHTML = "*Password must be 10 characters or longer";
        return;

      }
      else if(this.props.type == "signup" && this.props.dataKey == "username" && this.state.input.length < 7){

        this.errorRef.current.innerHTML = "*Username must be 7 characters or longer";
        return;

      }else{

        this.errorRef.current.innerHTML = "";

        if(this.formRef){
          this.formRef.current.classList.remove("add_form");
          this.formRef.current.classList.add("remove_form");
        }

      if(this.props.finished == false){

       var timer = setTimeout(()=>{

          this.props.ChangeInput(this.state.input,this.props.dataKey);

          if(this.props.finished || !this.formRef.current){
            clearInterval(timer);
            return;
          }else{
            this.formRef.current.classList.add("add_form");
            this.formRef.current.classList.remove("remove_form");
           }

          this.setState({input:"",key:""});

        },500);

      }

    }

  }

 CapitalizeFirstLetter = (word) => {

   return word.charAt(0).toUpperCase() + word.slice(1);

 }

  render(){

    var width = window.innerWidth;

    var background = width >= 844 ? LandingBackground : LandingBackgroundMobile;
    var height = width >= 844 ? 1080 : 900;
    var col_spacer = width >= 844 ? 4 : 2;
    var col_container = width >=844 ? 4 : 8;

    return(
      <div className="container-fluid form_component padding-top-5 padding-bottom-100"style = {{background:`url(${background})`,height:height + "px"}}>

        <p className="ez_title margin-left-5">EZ-Eatz</p>
        <button class="back_button"onClick={()=>{this.props.ChangeURL("landing")}}> Go Back </button>
        <div id="google_login"></div>

        <div className="row add_form  " ref ={this.formRef}>

          <div className={"col-"+col_spacer + " form_spacer"}/>

          <div className={"col-"+col_container+" form_container jumbotron background-white border-radius-5px"}>
          <form onSubmit= {(e)=>{e.preventDefault();this.props.EnterInformation(e)}}>
            <div className=" form-group">
              <p className="form_text "> {this.props.title} </p>
              <input type = {this.props.dataKey} className="form-control form_input" placeholder = {this.props.placeholder} onChange = {(e)=>{this.setState({input:e.target.value})}} value = {this.state.input}/>
              <p className="form_text_small ">
                  By proceeding you agree to our private policy and consent to recieve calls or text messages
                  through phone call, WhatsApp or email regarding your account status.
                  When you do not want to recieve any notifactions
                  regarding your status then please text
                  Stop in reply to any messages from us!
              </p>

              <button className="width-50 float-right btn btn-primary form_button" type="submit" onClick = {(e)=>{e.preventDefault();this.EnterInformation(e)}}>
                  <img className="form_icon " src = {FormIcon} />
                  Submit
              </button>

            </div>
            </form>

            <p className="error_text text-center" ref={this.errorRef}></p>

          </div>

          <div className="col-4"/>

        </div>

      </div>
    )

  }

}


export default FormComponent
