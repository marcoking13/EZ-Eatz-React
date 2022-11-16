import React from "react";

import "./../../css/home_page.css";
import "./../../css/menuPage.css";

import BackgroundDummy from "./../../images/menu_background.png";

import FullStar from "./../../images/full_star.png";
import EmptyStar from "./../../images/empty_star.png";


class ShowBox extends React.Component {
    // JSX for the menu showcase
    // Shows the background image, name, rating, and checkout button
    renderStars(){

      var starLimit = 5;
      var html = [];

      for(var i = 0; i<starLimit;i++){

        if(this.props.truck.stars > i){

          html.push(
            <div className={"no-padding-no-margin col-2"}>
              <img alt="star"key = {i} src={FullStar} className="w100"/>
            </div>
            );

          }else{

            html.push(
              <div className={"no-padding-no-margin col-2"}>
                <img alt="star"key = {i} src={EmptyStar} className="w100"/>
              </div>
            );

          }

        }

      return html;

    }



  render(){
    var logo_col = window.innerWidth >= 844 ? 1 : 3;
    var star_col_size = window.innerWidth >= 844 ? 2 : 3;
        return(
            <div className="container-fluid">

              <div className="menu_page">

                <div className="row">
                    <div className="menu_showcase col-12" style={{background:`url(${process.env.PUBLIC_URL +  this.props.truck.banner})`,backgroundSize:"cover"}} ></div>
                </div>

                <div className="row">
                  <div className="margin-left-5"/>
                  <div className={"col-"+logo_col}>
                    <div className="logo_container" style={{border:"none 0px solid",background:"none"}}>
                          <img src = {process.env.PUBLIC_URL + this.props.truck.mapLogo} className="foodtruck_logo_menu" style={{border:"none 0px solid"}}/>
                    </div>
                  </div>

                  <div className="col-12">
                    <p className="foodtruck_menu_name">{this.props.truck.name} ({this.props.truck.address.city}, { this.props.truck.address.state})</p>
                    <p className="foodtruck_menu_details">10-30 min | {this.props.truck.type[0]} | {this.props.renderExpensive()}</p>
                  </div>

                  <div className="margin-left-5"/>

                  <div className={"col-"+star_col_size}>
                      <div className="row foodtruck_star_container">
                        {this.renderStars()}
                      </div>
                  </div>

                </div>

              </div>

          </div>

        );

  }

}

export default ShowBox
