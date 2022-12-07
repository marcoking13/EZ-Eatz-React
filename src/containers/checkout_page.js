import React from "react";
import cookies from "react-cookies";
import axios from "axios";


import Footer from "./../components/Footer/footnote.js";
import Modal from "./../components/Checkout/modal.js";
import Page from "./../components/Checkout/checkout_page";

import "./../css/checkout.css";

class CheckoutPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      time:{
        hour:12,
        minute:0
      },
      modal:false,
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

  toggleModal = (toggle) =>{

      this.setState({modal:toggle})

  }

CalculateMods = (item,mod)=>{

    if(mod){

      var total = 0;
      var option = mod.type.length > 0 ? mod.type[0].price : 0;
      var addons = mod.add;

      total += option;

      if(addons.length > 0){
        addons.forEach((addon) => {
          total += addon.price;
        });

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


  renderModal = () => {
    if(this.state.modal && this.props.orders.length > 0){
      return (
        <React.Fragment>
          <div className="checkout_modal_cover"/>
          <Modal
            total = {this.state.total}
            title = {this.props.truck.name}
            address = {this.props.address}
            toggleModal = {this.toggleModal}
          />
        </React.Fragment >
      )
    }
  }

  render(){

        return(
          <div>
            {this.renderModal()}
            <Page
               url = {this.props.url}
               orders = {this.props.orders}
               truck = {this.props.truck}
               toggleModal = {this.toggleModal}
               tip = {this.state.tip}
               modal = {this.state.modal}
               account = {this.props.account}
               CalculateTip = {this.CalculateTip}
               CalculateMods = {this.CalculateMods}
               address = {this.props.address}
               total = {this.state.total}
               ChangeURL = {this.props.ChangeURL}
             />

           </div>
         )

    }

  }



export default CheckoutPage;
