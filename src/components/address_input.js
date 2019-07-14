import React from "react";
import cookies from "react-cookies";

class AddressInput extends React.Component{

  render(){

    if(!this.props.addressAvailable){
      var address = cookies.load("address",{path:"/"});

      if(!address || address === undefined){
        address = "Enter Address";
      }

      return (
        <div style={this.props.classer}>
          <div className="unAciveInput" style= {this.props.width} onClick = {()=>{
            this.props.changeAddressInput(true);
          }}>{address}</div>
        </div>
        );


      }else{

        return(
          <div style={this.props.classer2}>
            <input type="text" onChange={(e)=>{this.props.changeAddress(e)}}  className="form-control halfControl " value = {this.props.address}placeholder="Enter street, state and city" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <button className={"btn enterAddress btn-primary "} onClick = {()=>{
                cookies.remove("address",{path:"/"});
                cookies.save("address",this.props.address,{path:"/"});
                this.props.changeAddressInput(false);
                this.props.PostAddress(this.props.address,JSON.parse(cookies.load("account",{path:"/"})));
                this.props.SetAddress(this.props.address);
              }}
              >Search</button>
            
            </div>
      );

    }

  }
}


export default AddressInput;
