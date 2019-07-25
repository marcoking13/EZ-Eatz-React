import React from "react";
import Navbar from "./../components/home_nav_bar.js";
import "./../css/checkout.css";

class CheckoutPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      time:{
        hour:12,
        minute:0
      },
      tip:0
    }
  }

  changeTip(tip){
    console.log(tip);
    this.setState({tip:tip})
  }

  renderTipBoxes(){

    var tipBoxes = [];
    var tipVal = 10;

     for(var i = 0; i<3; i++){

      if(tipVal === parseInt(this.state.tip)){
        tipBoxes.push(
          <div
          onClick = {(e)=>{
            this.changeTip(e.target.attributes.num.value);
          }}
          num = {tipVal}
          className="tipBox selectedTip">{tipVal+"%"}</div>);
      }else{
        tipBoxes.push(
          <div
          num = {tipVal}
          onClick = {(e)=>{
            this.changeTip(e.target.attributes.num.value);
          }}
          className="tipBox">{tipVal+"%"}</div>
        );
      }
        tipVal += 10;
    }

    return tipBoxes;

  }

  renderDropdowns(drops){
    var dropArray = [];

    for(var i = 0; i <= drops; i++){
        dropArray.push(<option value = {i}>{i}</option>);
    }

      return(
        <select className="selecter">
          {dropArray}
        </select>
      )
  }

  render(){
    return(
        <div className="container-fluid">
          <Navbar changeURL = {this.props.changeURL}/>
          <div className="row">
            <div className="col-1" />
            <div className="col-4 borderR jumbotron">

              <div className="pickupContainer">
                <h6 className="pTitleC">Pick Up Time</h6>

                <div className="pickupInputContainer">
                      {this.renderDropdowns(12)}
                      {this.renderDropdowns(60)}
                </div>

              </div>

              <div className="tipContainer">
                <h6 className="pTitleC ccs">Choose Tip Amount</h6>
                <div className="tipBoxeContainer">
                  {this.renderTipBoxes()}
                </div>
              </div>

              <div className="intructionContainer">
                <h6 className="intructionTitle">Special Instructions</h6>
                <input className="form-control instructionForm" />
              </div>

            </div>

          </div>

        </div>
    )
  }
}


export default CheckoutPage;
