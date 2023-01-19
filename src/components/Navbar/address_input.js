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

  submitLocation =  async(address) =>{

      var location = {
        address:"Enter Address",lat:null,lng:null
      }

      const response = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM`);

      if(response && response.data.results.length > 0){

        const { lat, lng } = response.data.results[0].geometry.location;
        location = {address:response.data.results[0].formatted_address,lat:lat, lng:lng };
        this.setState({address:location.address});
        this.props.ChangeCurrentAddress(location.address);

      }else{

          this.setState({address:address})
          this.props.ChangeCurrentAddress(location.address);

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
