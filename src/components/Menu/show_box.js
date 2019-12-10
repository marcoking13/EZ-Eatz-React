import React from "react";

import "./../../css/home_page.css";

import Star from "./../../images/star.png"

class ShowBox extends React.Component {
    // JSX for the menu showcase
    // Shows the background image, name, rating, and checkout button
    renderStars(){
      var html = [];
      var stars;
      if(!this.props.foodtruck.stars){
        stars = 3;
      }else{
        stars = this.props.foodtruck.stars;
      }
      for(var i =0; i < stars; i++){
        html.push(
          <div className="col-1 p0">
            <img alt="star" className="w100" src={Star}/>
          </div>
        );
      }
      return html;
    }
  render(){
    // background of foodtruck
    var background = this.props.foodtruck.background;

    return(
      <div className="container-fluid moveUpMobileShowBox">

        <img alt="banner" className="banner w100 cover"src={background}/>

          <div className="row posAb w100 menuBoxB">
            <div className="col-3"/>

            <div className="col-6 jumbotron bw pt5">
                <img alt="logo" src={this.props.foodtruck.logo} className="w10 posAb logoMenu"/>
                <h4 className="text-center">{this.props.foodtruck.name}</h4>

                <div className="row">
                  <div className="col-4"/>
                  <div className="col-4">
                    <div className="row">
                      <div className="col-4"/>
                      {this.renderStars()}
                    </div>
                  </div>
                  <div className="col-4"/>
                </div>

                <p className="text-center bw w50 cb ml25 br10px cg">All American</p>

                <div className="buttonContainer ml25">
                  <button className="menuOP bw fl cb ml10 mt2_5 fl br10px BWW ml10 w50 btn-secondary btn"
                    onClick = {()=>{
                      var formattedAddress = this.props.truck.address.street + "," + this.props.truck.address.state + "," + this.props.truck.address.zip
                      this.props.SetAddress(formattedAddress);
                      this.props.changeURL("map");
                    }}

                  >View in Maps</button>

                </div>

            </div>

            <div className="col-3"/>

          </div>

    </div>
  );
  }
}

export default ShowBox;
