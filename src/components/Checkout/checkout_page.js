import React from "react";

import Navbar from "./../Navbar/home_nav_bar.js";
import Footer from "./../Footer/footnote.js";

import Visa from "./../../images/cards.png";

class Checkout extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      tip:0
    }

  }


  modifyLoop(array,prefix,render_mod){


      if(render_mod && array.length > 0){

        return array.map((modify)=>{
          var price = modify.price ? "+"+modify.price.toFixed(2) : "";
          return <li className={"ml10 none f13px removers "}>{"-"+prefix+" "+modify.name + price}</li>
        });

      }
      else{
        return <div />
      }

  }

  ordersLoop(render_mod){

    var dash =  render_mod ? "" : " ------";

    if(this.props.orders){
      var html = [];

      for(var i = 0; i<=this.props.orders.length - 1;i++){
          var order = this.props.orders[i];
          var item = this.props.orders[i].item;
          var mod = order.mod;
          console.log(mod);
          var fixedPrice =  render_mod ? item.price.toFixed(2) : (item.price +this.props.CalculateMods(item,mod)).toFixed(2);
          console.log(fixedPrice);

          html.push(
            <div className="w100 mt5 orderBox">
              <p className="text-left orderName font-size-18 roboto normal">{item.name +" " +dash + " $ "+fixedPrice}</p>
              <ul >
                {this.modifyLoop(mod.type,"",render_mod)}
                {this.modifyLoop(mod.add,"Add",render_mod)}
                {this.modifyLoop(mod.remove,"-No",render_mod)}
              </ul>
            </div>
            )

          }
          return html;
    }else{

      return null

    }

  }

  renderCheckoutTitle = () => {

    if(this.props.orders.length > 0){
      return   <p className="checkout_truck_name bold roboto font-size-25">{this.props.truck.name} ({this.props.truck.address.city +","+this.props.truck.address.state})</p>
    }else{
       return <p className="checkout_truck_name bold roboto font-size-25"> You Have no Orders Yet! </p>
     }

  }

    render(){

      var checkout_available = this.props.orders.length > 0 ? "" : "not_checkout_available"

      var checkout_col_size = window.innerWidth >= 844 ? 4 : 12;

      var margin_top_view = window.innerWidth >= 844 ? 0 : 5;

      var margin_style = {
        marginTop:margin_top_view.toString() + "%"
      }

      return(
        <div className="container-fluid" onClick = {()=>{
          if(this.props.modal){
              this.props.toggleModal(false);
            }
        }}>

          <Navbar
            url = {this.props.url}
            toggle_map = {false}
            orders = {this.props.orders}
            account = {this.props.account}
            ChangeCurrentAddress = {this.props.ChangeCurrentAddress}
            address = {this.props.address}
            ChangeURL = {this.props.ChangeURL}
            navStyle ="white"
          />

          <div className="container-fluid mt5">

          <div className="row w90 ml5">

            <br />

            <div className={"col-"+checkout_col_size}style={margin_style}>
              {this.renderCheckoutTitle()}

              <div className="row">

                <div className="col-9">
                    {this.ordersLoop(true)}
                </div>

              </div>

            </div>

            <div className={"col-"+checkout_col_size}style={margin_style}>

                <div className="row">
                  <div className="col-2">  <h5>Tip</h5> </div>

                  <div className="col-10">

                  <form
                      onSubmit = {(e)=>{
                          e.preventDefault();
                          this.props.CalculateTip(parseInt(this.state.tip));
                      }}
                    >
                    <input
                     className="fl w80 form-control tip_box_height width-70"
                       onChange = {(e)=>{
                         this.setState({tip:e.target.value})
                       }}
                       type="number"
                       placeholder="Enter Tip Amount"
                       value = {this.state.tip}
                      />

                    </form>

                    <div className="fl w20 text-center bbe6 percent_box tip_box_height">%</div>
                  </div>

                  <div className="col-12">

                      <img src = {Visa} className="w100 mt10"/>

                 </div>

               </div>

              </div>

              <div className="col-1"/>

            <div className={"col-"+checkout_col_size +" padding-bottom-5 background-white border-e6"}style={margin_style}>

              <p className="text-center font-size-22 margin-top-5">Order Summary</p>

              <br />

              {this.ordersLoop(false)}

              <p className="roboto font-size-22 mt10">
                Total: ------------------ ${this.props.total}
              </p>

              <button className={"btn btn-danger w90 ml5 mt10 border-radius-20px "+checkout_available}onClick = {()=>{


                if(this.props.orders.length > 0 && this.props.modal == false){
                  this.props.toggleModal(true);
                }
              }}>Place Order</button>

            </div>

          </div>


        </div>

    <Footer />

</div>


      );
    }
}

export default Checkout;
