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

  renderMobileShowbox(){
    return(
      <div className="row">
        <div className="col-2"/>

        <div className="col-8 moveDownShowMenu jumbotron bw">

          <div className="row">
            <div className="col-5">
                <img className="w100" src = {this.props.foodtruck.logo} />
            </div>
            <div className="col-1"/>
            <div className="col-6">
              <h5 className="">{this.props.foodtruck.name}</h5>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-3"/>
            <div classNAme="col-6">
                <div className="row">

                  <div className="col-5"/>
                  {this.renderStars()}
                </div>
            </div>
            <div className="col-2"/>
          </div>
          <br />
          <div className="row">
              <div className="col-3"/>
              <div className="col-6">
                <button className="button w100 ui inverted blue">Current Location</button>
              </div>
          </div>

        </div>

        <div className="col-2"/>
        <br />
        <br />
        <br />
      </div>
    )
  }

  renderDesktopShowbox(){
    return(
      <div className="row">
        <div className="col-3"/>

        <div className="col-6 jumbotron bw">

          <div className="row">
            <div className="col-2">
                <img className="w100" src = {this.props.foodtruck.logo} />
            </div>
            <div className="col-2"/>
            <div className="col-8">
              <h5>{this.props.foodtruck.name}</h5>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4"/>
            <div classNAme="col-3">
                <div className="row">

                  <div className="col-5"/>
                  {this.renderStars()}
                </div>
            </div>
            <div className="col-4"/>
          </div>
          <br />
          <div className="row">
              <div className="col-3"/>
              <div className="col-6">
                <button className="button w100 ui inverted blue">Current Location</button>
              </div>
          </div>

        </div>

        <div className="col-3"/>
      </div>
    )
  }

  render(){
    // background of foodtruck
    var background = this.props.foodtruck.background;

    if(window.innerWidth > 580){
        return(
          <div className="container-fluid">
            <img className="imageSheet" src={this.props.foodtruck.background}/>
            {this.renderDesktopShowbox()}
          </div>
        );
    }else{
      return(
        <div className="container-fluid">
          <img className="imageSheet" src={this.props.foodtruck.background}/>
          {this.renderMobileShowbox()}
        </div>
      );
    }
}
}
export default ShowBox
