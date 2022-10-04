import React from "react";
import SuccessImg from "./../../images/success.gif";


class Modal extends React.Component {
  constructor(props){
    super(props);
    window.scrollTo(0,0);
  }


  render(){
    return (
      <div className="checkout_modal container-fluid">
        <img className="success_img" src ={SuccessImg} />
        <p className="exit_success" onClick = {()=>{this.props.toggleModal()}}>X</p>
        <p className="success_message">Payment Successful!</p>
        <p className="success_title text-center big_text">{this.props.title} Has Recieved Your Order!</p>
        <p className="success_title mt5">Total: ${this.props.total}</p>
        <p className="success_title pb5">
          Pickup Order At: {this.props.address.city}, {this.props.address.state}
        </p>

      </div>
    )
  }
}


export default Modal;
