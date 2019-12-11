import React from "react";

import TipBoxes from "./tip_boxes_component.js";
import Dropdown from "./drop_down_component.js";
import Navbar from "./../Navbar/home_nav_bar.js";
import Footer from "./../Footer/footnote_mobile.js";

class MobileCheckout extends React.Component {

  addLoop(counter){
    return this.props.orders[counter].mod.add.map((add)=>{
      return <li className="adders">{add.name}</li>
    })
  }
  removeLoop(counter){
    return this.props.orders[counter].mod.remove.map((remove)=>{
      return <li className="removers">{"-No "+remove.name}</li>
    })
  }

  ordersLoop(){
    if(this.props.orders){
      var html = [];

      for(var i = 0; i<=this.props.orders.length - 1;i++){
          var fixedPrice = this.props.orders[i].price.toFixed(2);
          html.push(
            <li className="list-group-item">
              <img className="fl orderImage" src={this.props.orders[i].item.image}/>
              <p className="text-center italic fl ml5 orderName">{this.props.orders[i].name}</p>
              <p className="text-center italic fl ml5 orderName ppr">{"$ "+fixedPrice}</p>

              <ul className="mt2_5 fl mr25 orderList">
                {this.addLoop(i)}

                {this.removeLoop(i)}
                </ul>
                </li>
              )

            }
    return html;
  }else{
    return null
  }
  }


    render(){
      return(
        <div className="container-fluid checkoutPageMobile">
          <Navbar changeURL = {this.props.changeURL} orders= {this.props.orders}/>
          <br />
          <br />
          <div className="ml35 mt5 pickupContainerMobile">
              <h6 className="ml10 pickupTitleMobile"> Pickup Time </h6>
              <input type="number" placeholder = "Hours" className="w25 fl mt5 text-center pickupTimeMobile"/>
              <input type="number" placeholder = "Minutes" className="w25 fl mt5 text-center pickupTimeMobile"/>
          </div>
          <br />
          <div className="mt5 tipBoxMobile">
              <h6 className="mt15 text-center tipBoxMobileTitle"> Tip Amount </h6>
              <TipBoxes changeTip = {this.props.changeTip} tip = {this.props.tip} />
          </div>
          <br />
          <div className="mt2_5 orderMobileContainer ">

            <ul className="list-group">
                <h6 className="mt5 text-center orderListTitle"> Your Order </h6>
                {this.ordersLoop()}
            </ul>


          </div>
              <br />
          <div className="mt5 BBB payContainerMobile">
            <h6 className="mt5 text-center payTotalTitle">Total</h6>
            <p className="text-center totalMobile">{"$"+this.props.totalTip.toFixed(2)}</p>
            <button className="w50 ml25 mt5 bw br10px paypalButton"><img className="w50 paypal" src="assets/images/paypal.png"/></button>
          </div>
          <br/>
          <br />
          <Footer />
        </div>
      )
    }
}


export default MobileCheckout;
