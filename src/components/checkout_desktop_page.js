import React from "react";

import TipBoxes from "./tip_boxes_component.js";
import Navbar from "./home_nav_bar.js";
import Dropdown from "./drop_down_component.js";

class MobileCheckout extends React.Component {

    renderFoodtruckData(){
      if(this.props.orders){
        return(
          <div className="fl ml10 w40 truckConCheckout">
            <img className="w30 truckCheckoutImg" src = {this.props.truck.logo} />
            <p className="fr mr5 f13px mt5 bold truckNameCheckout"> {this.props.truck.name}</p>
          </div>
        )
      }else{
        return null;
      }
    }

  addLoop(counter){
    return this.props.orders[counter].mod.add.map((add)=>{
      return <li className="ml15 f13px list-circle adders">{add.name}</li>
    })
  }

  removeLoop(counter){
    return this.props.orders[counter].mod.remove.map((remove)=>{
      return <li className="ml25 none f13px removers">{"-No "+remove.name}</li>
    });
  }

  ordersLoop(){
    if(this.props.orders){
      var html = [];

      for(var i = 0; i<=this.props.orders.length - 1;i++){
          var fixedPrice = this.props.orders[i].price.toFixed(2);
          html.push(
            <div className="col-4 mt5 orderBox">
              <img className="ml35 orderImage" src={this.props.orders[i].item.image}/>
              <p className="text-center italic orderName">{this.props.orders[i].name}</p>
              <p className="text-center italic orderName">{"$ "+fixedPrice}</p>
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
            <div className="col-4 bw borderR pt2_5 jumbotron">

              <div className="w50 ml25 pickupContainer">
                <h6 className="text-center">Pick Up Time</h6>

                <div className="pickupInputContainer">
                      <Dropdown drops = {12}/>
                      <Dropdown drops = {60}/>
                      </div>

                      </div>

                      <div className="mt25 tipContainer">
                        <h6 className="text-center ml5 ">Choose Tip Amount</h6>
                        <div className="tipBoxContainer">
                          <TipBoxes changeTip = {this.props.changeTip} tip = {this.props.tip} />
                        </div>
                      </div>

                      <div className="mt10 ml7_5 B4pxf4f4 totalContainerCheckout">
                        <h4 className="totalNN text-center mt10 ">Total</h4>
                        <p className=" text-center mt10 f15px">{"$ "+this.props.totalTip.toFixed(2)}</p>
                      </div>

                      <div className="mt15 intructionContainer">
                        <button className="w100 paypalButton"><img className="w50 paypal" src="assets/images/paypal.png"/></button>
                      </div>

                    </div>

                    <div className="col-6 bw jumbotron">
                      {this.renderFoodtruckData()}
                    <div className="container-fluid">

                    <div className="row mt15 orderRow">
                      {this.ordersLoop()}
                    </div>

                    </div>

                  </div>

                </div>

            </div>
      );
    }
}

export default MobileCheckout;
