import React from "react";

import TipBoxes from "./tip_boxes_component.js";
import Dropdown from "./drop_down_component.js";
import Navbar from "./home_nav_bar.js";

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
              <img className="orderImage" src={this.props.orders[i].item.image}/>
              <p className="orderName">{this.props.orders[i].name}</p>
              <p className="orderName ppr">{"$ "+fixedPrice}</p>

              <ul className="orderList">
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
          <div className="pickupContainerMobile">
              <h6 className="pickupTitleMobile"> Pickup Time </h6>
              <input type="number" placeholder = "Hours" className="pickupTimeMobile"/>
              <input type="number" placeholder = "Minutes" className="pickupTimeMobile"/>
          </div>

          <div className="tipBoxMobile">
              <h6 className="tipBoxMobileTitle"> Tip Amount </h6>
              <TipBoxes changeTip = {this.props.changeTip} tip = {this.props.tip} />
          </div>

          <div className="orderMobileContainer">

            <ul className="list-group">
                <h6 className="orderListTitle"> Your Order </h6>
                {this.ordersLoop()}
            </ul>


          </div>

          <div className="payContainerMobile">
            <h6 className="payTotalTitle">Total</h6>
            <p className="totalMobile">{"$"+this.props.totalTip.toFixed(2)}</p>
            <button className="paypalButton"><img className="paypal" src="assets/images/paypal.png"/></button>
          </div>

        </div>
      )
    }
}


export default MobileCheckout;
