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
  // renderMobileShowbox(){
  //   return(
  //     <div className="row">
  //       <div className="col-2"/>
  //
  //       <div className="col-8 moveDownShowMenu BB44 jumbotron bw">
  //
  //         <div className="row">
  //           <div className="col-4">
  //               <img className="w100" src = {this.props.foodtruck.logo} />
  //           </div>
  //           <div className="col-6">
  //             <h5>{this.props.foodtruck.name}</h5>
  //           </div>
  //         </div>
  //
  //
  //
  //       <div className="row">
  //         <div className="col-4"/>
  //           {this.renderStars()}
  //       </div>
  //
  //         <br />
  //
  //
  //         <div className="row">
  //             <div className="col-2"/>
  //             <div className="col-8">
  //               <button className="button w100 ui inverted blue">Current Location</button>
  //             </div>
  //         </div>
  //
  //       </div>
  //     </div>
  //
  //
  //   )
  // }

  renderDesktopShowbox(){
    var address = this.props.truck.address;
    console.log(this.props.truck,address);
    return(

          <div className="container-fluid">
              <div className="menu_page">
                <div className="row">

                  <div className="menu_showcase col-12" style={{background:`url(${process.env.PUBLIC_URL +  this.props.truck.background})`,backgroundSize:"cover"}} ></div>
                </div>
                <br />

                <div className="row">
                  <div className="margin-left-5"/>
                  <div className="col-1">
                    <img src = {process.env.PUBLIC_URL + this.props.truck.logo} className="foodtruck_logo_menu"/>
                  </div>

                  <div className="col-12">
                    <br/>
                    <p className="foodtruck_menu_name">{this.props.truck.name} ({address.street}, {address.city}, { address.state})</p>
                    <p className="foodtruck_menu_details">10-30 min | {this.props.truck.type[0]} | $$</p>
                  </div>
                  <div className="margin-left-5"/>
                  <div className="col-2">
                    <div className="row foodtruck_star_container">
                      {this.renderStars()}
                    </div>
                  </div>
                </div>

                <p className="menu_subheading"> All Day Menu </p>

                <div className="row">
                    <div className="col-3 menu_sections">

                    </div>

                    <div className="col-9 menu_items">


                    </div>

                </div>
              </div>


          </div>
    )
  }

  render(){
        return(
          <div className="container-fluid">
            {this.renderDesktopShowbox()}
          </div>
        );


}

}

export default ShowBox
