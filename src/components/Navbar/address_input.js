import {useState} from "react";
import React from "react";

class AddressInput extends React.Component{


  constructor(props){
      super(props);
      this.state = {
        address:this.props.address
      }
  }

   handleInputChange = (input) => {
     this.setState({address:input})
  }


  render(){

    var form_size = window.innerWidth >= 844 ? 6 : 10;
    var divider_size = window.innerWidth >= 844 ? 3 : 1;

    if(this.props.url == "maps" || this.props.url == "home"){
      return(
        <div className="row">
          <div className={"col-"+divider_size}/>
          <div className={"col-"+form_size}>
            <form onSubmit = { (e)=>{
              e.preventDefault();
              this.props.submitLocation(this.state.address)
            }}>
            <input className="form-control ez_home_input"  onChange = {(e)=>{
              this.handleInputChange(e.target.value);
            }}  value = {this.state.address} placeholder="Enter Address"/>
            </form>
          </div>

        </div>
    )

  }
}


}
export default AddressInput;
