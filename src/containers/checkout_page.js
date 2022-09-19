import React from "react";
import cookies from "react-cookies";
import axios from "axios";


import Footer from "./../components/Footer/footnote.js";
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
    }


    window.scrollTo(0,0);

  }

  componentDidMount(){

    var total = this.CalculateTotal();
    this.setState({total:total.toFixed(2)});

  }

  CalculateTotal = () =>{
    var total = 0;

    this.props.orders.map((order)=>{
      total += order.price;

      total += this.CalculateMods(order.item,order.mod);

    });

    return total;

  }

CalculateMods = (item,mod)=>{
    if(mod){
      console.log(mod);
      var total = 0;
      var option = mod.type.length > 0 ? mod.type[0].price : 0;
      var addons = mod.add;

      total += option;

      console.log(total);

      if(addons.length > 0){
        addons.forEach((addon) => {
          total += addon.price;
        });

        console.log(total);

      }
      return total;
  }else{
    return 0
  }
}


  CalculateTip = (tip)=>{

      var new_total = parseFloat(this.CalculateTotal());
      var tip = parseFloat(tip / 100);

      tip = tip.toFixed(2);

      new_total = new_total;

      var total_tip = (tip * new_total);

      new_total = (new_total+total_tip);

      new_total = new_total.toFixed(2);

      this.setState({total:new_total});

  }

  render(){

        return(
          <CheckoutDesktop
             orders = {this.props.orders}
             truck = {this.props.truck}
             tip = {this.state.tip}
             account = {this.props.account}
             CalculateTip = {this.CalculateTip}
             CalculateMods = {this.CalculateMods}
             address = {this.props.address}
             total = {this.state.total}
             ChangeURL = {this.props.ChangeURL}
           />
         )

    }

  }



export default CheckoutPage;
