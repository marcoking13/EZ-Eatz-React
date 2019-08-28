import React from "react";

import TipBoxes from "./tip_boxes_component.js";
import Navbar from "./home_nav_bar.js";
import Dropdown from "./drop_down_component.js";

class MobileCheckout extends React.Component {


    renderFoodtruckData(){
      if(this.props.orders){
        return(

          <div className="truckConCheckout">
            <img className="truckCheckoutImg" src = {this.props.truck.logo} />
            <p className="truckNameCheckout"> {this.props.truck.name}</p>
        </div>

      )
    }else{
        return null;
      }
    }




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
            <div className="col-4 orderBox">
              <img className="orderImage" src={this.props.orders[i].item.image}/>
              <p className="orderName">{this.props.orders[i].name}</p>
              <p className="orderName">{"$ "+fixedPrice}</p>
              <ul >
                {this.addLoop(i)}

                {this.removeLoop(i)}
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
          <Navbar changeURL = {this.props.changeURL} orders= {this.props.orders}/>
          <div className="row">

            <div className="col-1" />
            <div className="col-4 borderR jumbotron">

              <div className="pickupContainer">
                <h6 className="pTitleC">Pick Up Time</h6>

                <div className="pickupInputContainer">
                      <Dropdown drops = {12}/>
                      <Dropdown drops = {60}/>
                      </div>

                      </div>

                      <div className="tipContainer">
                        <h6 className="pTitleC ccs">Choose Tip Amount</h6>
                        <div className="tipBoxeContainer">
                          <TipBoxes changeTip = {this.props.changeTip} tip = {this.props.tip} />
                        </div>
                      </div>

                      <div className="totalContainerCheckout">
                        <h4 className="totalNN cc">Total</h4>
                        <p className=" cc totalTitleCheckout">{"$ "+this.props.totalTip.toFixed(2)}</p>
                      </div>

                      <div className="intructionContainer">
                        <button className="paypalButton"><img className="paypal" src="assets/images/paypal.png"/></button>
                      </div>

                    </div>

                    <div className="col-6 jumbotron">
                      {this.renderFoodtruckData()}
                    <div className="container-fluid">

                    <div className="row orderRow">
                      {this.ordersLoop()}
                    </div>

                  </div>

                </div>
              </div>
            </div>
      )
    }
}


export default MobileCheckout;
