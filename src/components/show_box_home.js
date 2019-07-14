import React from "react";
import cookie from "react-cookies";
import "./../css/home_page.css";
import Star from "./../images/star.png";


class ShowBox extends React.Component {

  render(){
    var background = this.props.foodtruck.background;
    return(
      <div className="showCaseBox">

        <img className="banner"src={background}/>
          <div className="row menuBoxB">
            <div className="col-3"/>
            <div className="col-6 jumbotron">
                <img src={this.props.foodtruck.logo}className="logoMenu"/>
                <h4 className="menuTitle">{this.props.foodtruck.name}</h4>
                <div className="row">
                  <div className="col-4"/>
                  <div className="col-4">
                    <img className="starL" src="assets/images/star.png"/>
                    <img className="starL" src="assets/images/star.png"/>
                    <img className="starL" src="assets/images/star.png"/>
                    <img className="starL" src="assets/images/star.png"/>
                    <img className="starL" src="assets/images/star.png"/>
                  </div>
                  <div className="col-4"/>
                </div>
                <p className="menuTitle mt5 type">All American</p>
                <div className="buttonContainer">
                  <button className="menuOP btn-danger btn">Checkout</button>

                  <button className="menuOP btn-primary btn">Location</button>
                </div>
            </div>
            <div className="col-3"/>
          </div>
    </div>
  );
  }
}

export default ShowBox;
