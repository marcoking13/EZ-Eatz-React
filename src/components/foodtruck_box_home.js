import React from "react";
import cookie from "react-cookies";
import "./../css/home_page.css";
import Star from "./../images/star.png";


class FoodBox extends React.Component {
  render(){
    return(

      <div className="foodTruckContainer"  onClick = {(e)=>{

        var foodtruckID = this.props.foodtruck.objectID;
        cookie.remove("foodtruckCurrent",{path:"/"});
        cookie.save("foodtruckCurrent",foodtruckID,{path:"/"});
        this.props.changeURL("menu");

      }}>
        <img className="foodTruckShowcase"  src={this.props.foodtruck.background}/>
        <div className="paraGroup">
          <p className="details  foodtruckName">{this.props.foodtruck.name}</p>
          <p className=" details miles">3.1 miles</p>
          <div className="starGroup">
             <img src={Star} className="starIcon"/>   <img src={Star} className="starIcon"/>                <img src={Star} className="starIcon"/>                  <img src={Star} className="starIcon"/>                <img src={Star} className="starIcon"/>
          </div>

        </div>
      
      </div>
    );

  }
}

export default FoodBox;
