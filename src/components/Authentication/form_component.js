import React from "react";
import JWT_Decode from "jwt-decode";

import FormIcon from "./../../images/form_icon.svg";
import LandingBackground from "./../../images/landing_background.png";
import LandingBackgroundMobile from "./../../images/landing_background_mobile.png";



class FormComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input : "",
      key: this.props.key
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
      setTimeout(()=>{google.accounts.id.initialize({
        client_id:"652597126493-g3kk4nl2pkpua4nd185msth7f2gr0vd9.apps.googleusercontent.com",
        callback:this.handleGoogleLogin
      });

      google.accounts.id.renderButton(
        document.getElementById("google_login"),
        {theme:"outline",size:"large"}
      )

    },500);

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

       setTimeout(()=>{

          this.props.ChangeInput(this.state.input,this.props.dataKey);

          if(this.formRef){
            this.formRef.current.classList.add("add_form");
            this.formRef.current.classList.remove("remove_form");
           }

          this.setState({input:"",key:""});

        },500);

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
      <div className="container-fluid form_component padding-top-5"style = {{background:`url(${background})`,height:height + "px",paddingBottom:"100%"}}>

        <p className="ez_title margin-left-5">EZ<strong className="ez_title_end">Eatz</strong></p>

        <div id="google_login"></div>

        <div className="row add_form  " ref ={this.formRef}>

          <div className={"col-"+col_spacer + " form_spacer"}/>

          <div className={"col-"+col_container+" form_container jumbotron "}style={{background:"white",borderRadius:"5px"}}>

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

              <button className="width-50 float-right btn btn-primary form_button" type="submit" onClick = {(e)=>{this.EnterInformation(e)}}>
                  <img className="form_icon " src = {FormIcon} />
                  Submit
              </button>

            </div>

            <p className="error_text text-center" ref={this.errorRef}></p>

          </div>

          <div className="col-4"/>

        </div>

      </div>
    )

  }

}


export default FormComponent
