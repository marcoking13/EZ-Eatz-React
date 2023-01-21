import {useState} from "react";
import React from "react";
import axios from "axios";

import "./../../css/navbar.css";

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

  submitLocation =  async(input_address) =>{

      const location = await axios.post(`/api/geocode`,{address:input_address});
      console.log(location);
      if(location.data){
        const {address,lat,lng} = location.data;
        this.setState({address:address});
        this.props.ChangeCurrentAddress(address,lat,lng);
    }else{
      this.setState({address:input_address});
      this.props.ChangeCurrentAddress(input_address,null,null);
    }

}

  render(){

    var form_size = window.innerWidth >= 844 ? 6 : 10;
    var divider_size = window.innerWidth >= 844 ? 3 : 1;

    if(this.props.url == "map" || this.props.url == "home"){

      return(
        <div className="width-100 input_container">

            <form onSubmit = { (e)=>{
              e.preventDefault();
              this.submitLocation(this.state.address)
            }}>
            <input className="form-control ez_home_input nav_input" onChange = {(e)=>{
              this.handleInputChange(e.target.value);
            }} value = {this.state.address} placeholder="Enter Address"/>
            </form>

        </div>
    )

  }else{
    return <div />
  }
}


}
export default AddressInput;
