import React from "react";
import FormIcon from "./../../images/form_icon.svg";
import LandingBackground from "./../../images/landing_background.png";



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

  EnterInformation = (event) =>{

      if(!this.state.input){
        this.errorRef.current.innerHTML = "*Must Enter a Value!";
        return;
      }

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

  render(){

    return(
      <div className="container-fluid form_component padding-top-5"style = {{background:`url(${LandingBackground})`,height:"1080px",paddingBottom:"100%"}}>
        <p className="ez_title margin-left-5">EZ<strong className="ez_title_end">Eatz</strong></p>
        <div className="row add_form  " ref ={this.formRef}>
          <div className="col-4"/>
          <div className="col-4 form_container jumbotron "style={{background:"white",borderRadius:"5px"}}>
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
