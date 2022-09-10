import React from "react";

import TipBoxes from "./tip_boxes_component.js";
import Navbar from "./../Navbar/home_nav_bar.js";
import Dropdown from "./drop_down_component.js";
import Footer from "./../Footer/footnote.js";

import Visa from "./../images/visa.png";
import Paypal from "./../images/paypal.png"


class Checkout extends React.Component {

    // renderFoodtruckData(){
    //   if(this.props.orders){
    //     return(
    //       <div className="fl ml10 w40 truckConCheckout">
    //         <img className="w30 truckCheckoutImg" src = {this.props.truck.logo} />
    //         <p className="fr mr5 f13px mt5 bold truckNameCheckout"> {this.props.truck.name}</p>
    //       </div>
    //     )
    //   }else{
    //     return null;
    //   }
    // }

  addLoop(counter,render_mod){
    if(render_mod){
    return this.props.orders[counter].mod.add.map((add)=>{
      return <li className="ml5 f13px list-circle adders">{"Add "+add.name}</li>
    })
  }else{
    return <div />
  }
  }

  removeLoop(counter,render_mod){
    if(render_mod){
      return this.props.orders[counter].mod.remove.map((remove)=>{
        return <li className="ml10 none f13px removers">{"-No "+remove.name}</li>
      });
  }else{
    return <div />
  }
  }

  ordersLoop(render_mod){
    console.log(this.props.orders);
    if(this.props.orders){
      var html = [];

      for(var i = 0; i<=this.props.orders.length - 1;i++){
          var fixedPrice = this.props.orders[i].item.price.toFixed(2);
          html.push(
            <div className="w100 mt5 orderBox">
              <p className="text-left orderName"style={{fontFamily:"Roboto",fontSize:"18px",fontWeight:"normal"}}>{this.props.orders[i].item.name + " $ "+fixedPrice}</p>
              <ul >
                {this.addLoop(i,render_mod)}
                {this.removeLoop(i,render_mod)}
              </ul>
            </div>
              )

            }
            return html;
    }else{
      return null
    }
  }

    render(){
      return(
        <div className="container-fluid">
          <Navbar
            orders = {this.props.orders}
            account = {this.props.account}
            changeAddress = {this.props.changeAddress}
            address = {this.props.address}
            changeURL = {this.props.changeURL}
            navStyle ="white"
          />
          <div className="container-fluid mt5">
          <div className="row ">
            <br />
            <div className="col-1" />

            <div className="col-4">
              <p className="checkout_truck_name"style={{fontSize:"25px",fontWeight:"bold",fontFamily:"Roboto"}}>{this.props.truck.name} ({this.props.truck.address.city +","+this.props.truck.address.state})</p>
              <div className="row">

                <div className="col-12">
                    {this.ordersLoop(true)}
                </div>

              </div>

            </div>
            <div className="col-2"style={{position:"fixed",top:"25%",right:"10%",border:"2px solid #e6e6e6"}}>
              {this.ordersLoop(false)}
              <p style={{fontWeight:"bold",fontSize:"16px",fontFamily:"Roboto",marginTop:"5%"}}>
                Total: ${this.props.total.toFixed(2)}
              </p>
            </div>
          </div>
            <div className="row">
              <div className="col-1"/>

              <div className="col-7 mt5">

                  <div className="row">
                    <div className="col-1"><p>Tip</p></div>
                    <div className="col-5">
                      <input className="fl w80 form-control" type="number" placeholder="Enter Tip Amount"style={{width:"70%",float:'left',height:"30px"}}/>
                      <div className="fl w20 text-center bbe6"style={{float:"left",width:"15%",background:"#e6e6e6",height:"30px"}}>%</div>
                    </div>
                    <div className="col-5">
                      <div className="row">
                      <div className="col-6">
                        <img src = {Paypal} className="w100"/>
                      </div>
                      <div className="col-6">
                        <img src = {Visa} className="w100"/>
                      </div>
                    </div>
                    <p className="checkout_title">Total: ${this.props.total.toFixed(2)}</p>
                    </div>
              </div>

            </div>


            </div>

</div>
                <Footer />

            </div>
      );
    }
}

export default Checkout;
