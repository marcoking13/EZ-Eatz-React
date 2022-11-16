import React from "react";

import Star from "./../../images/full_star.png";

class Modal extends React.Component {

  RenderModal =()=>{

    if(this.props.modal){

      var stars = [];
      var expensive = "";

      for(var i =0 ; i < this.props.modal.modal.stars;i++){
        stars.push(<div className="col-2"style={{padding:0}}>
          <img className="w100" src = {Star} />
        </div>);
      }

      for(var i = 0; i < this.props.modal.modal.expensive; i++){
        expensive += "$";
      }

      return (

        <div className="row maps_modal">
          <img className="w100 banner_modal"src ={this.props.modal.modal.banner}/>
          <p className="w100 mt2_5 ml5 font-size-20px roboto google_modal_title" >{this.props.modal.modal.name}, ({this.props.modal.modal.address.city},{this.props.modal.modal.address.state})</p>
          <div className="row google_modal_rating">
              <div className="col-1"/>
              <div className="col-6 relative adjust_bottom">
                <div className="row">
                  {stars}
                </div>
              </div>
          </div>
          <p className="w100 ml5 font-size-13px roboto grey ml5 google_modal_details">{expensive} | {this.props.modal.modal.type[0]} | 20-30 min</p>

          <br />

          <button onClick = {()=>{
            this.props.SetTruck(this.props.modal.modal);
            this.props.ChangeURL("menu");
          }}className="btn add-to-cart ui cb f13px w50 ml5 w50 mt5 grey google_modal_button" >See Menu</button>


        </div>
      )
    }else{
      return <div />
    }
  }


  render(){
    return (
        <div>
          {this.RenderModal()}
        </div>
    )
  }


}

export default Modal
