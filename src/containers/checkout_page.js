import React from "react";
import cookies from "react-cookies";
import axios from "axios";

import CheckoutMobile from "./../components/Checkout/checkout_mobile_page";
import Footer from "./../components/Footer/footnote.js";
import FooterMobile from "./../components/Footer/footnote_mobile.js";
import CheckoutDesktop from "./../components/Checkout/checkout_desktop_page";

import "./../css/checkout.css";

class CheckoutPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      time:{
        hour:12,
        minute:0
      },
      tip:0,
      truck:{},
      total:0,
      totalTip:0
    }

    this.changeTip = this.changeTip.bind(this);

    window.scrollTo(0,0);
  }

  changeTip(tip){
    this.setState({
      tip:tip,
      totalTip:this.state.total + this.state.total * tip /100
    });
  }

  render(){
    if(window.innerWidth >= 580){
      return(
          <CheckoutDesktop
             orders = {this.props.orders}
             truck = {this.props.truck}
             tip = {this.state.tip}
             changeTip = {this.changeTip}
             account = {this.props.account}
             totalTip = {this.state.totalTip}
             total = {this.state.total}
             changeURL = {this.props.changeURL}
           />
        )
  }else {

      return (
          <CheckoutMobile
            orders = {this.props.orders}
            truck = {this.state.truck}
            tip = {this.state.tip}
            changeTip = {this.changeTip}
            totalTip = {this.state.totalTip}
            total = {this.state.total}
            changeURL = {this.props.changeURL}
          />
        );
    }
  }
}


export default CheckoutPage;
