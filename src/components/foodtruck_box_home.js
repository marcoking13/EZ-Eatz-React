import React from "react";
import cookie from "react-cookies";
import "./../css/home_page.css";
import Star from "./../images/star.png";


class FoodBox extends React.Component {

  renderStar(){
    var stars = [];
    var k =0;

    for(var i = 0; i< Math.floor(Math.random() * 2)+3;i++){
        k++;
        stars.push(<img alt="star"key = {k} src={Star} className="starIcon"/>);
    }
    return stars;
  }
  render(){
    // Renders the Foodtruck Box for the home page;

    return(
      <div className="foodTruckContainer" key ={this.props.id} onClick = {(e)=>{
        var foodtruckID = this.props.foodtruck.objectID;

        cookie.remove("foodtruckCurrent",{path:"/"});
        cookie.remove("orders",{path:"/"});
        cookie.save("foodtruckCurrent",foodtruckID,{path:"/"});

        this.props.ClearOrder();
        this.props.changeURL("menu");

      }}>

        <img alt="showcase" className="foodTruckShowcase"  src={this.props.foodtruck.background}/>

        <div className="paraGroup">
          <p className="details foodtruckName"><strong>{this.props.foodtruck.name}</strong></p>
          <p className=" details miles">3.1 miles</p>

          <div className="starGroup">
            {this.renderStar()}
          </div>

        </div>

      </div>
    );

  }
}

export default FoodBox;
