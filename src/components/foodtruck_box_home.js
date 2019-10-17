import React from "react";
import cookie from "react-cookies";
import "./../css/home_page.css";
import Star from "./../images/star.png";

var distance;

class FoodBox extends React.Component {

  renderStar(){
    var stars;
    var html = [];
    if(!this.props.foodtruck.stars){
      stars = 3;
    }else{
      stars = this.props.foodtruck.stars;
    }

    var k =0;

    for(var i = 0; i<stars;i++){
        k++;
        html.push(<img alt="star"key = {k} src={Star} className="starIcon"/>);
    }
    return html;
  }


  render(){
    // Renders the Foodtruck Box for the home page;
    if(window.innerWidth >= 600){
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
            <p className="details">{this.props.foodtruck.address.street + "," + this.props.foodtruck.address.state+","+this.props.foodtruck.address.zip}</p>
            <p className=" details miles">{this.props.distance}</p>

            <div className="starGroup">
              {this.renderStar()}
              </div>

              </div>

            </div>
          );
        }else{
          return(
            <li className="list-group-item pb60" key ={this.props.id} onClick = {(e)=>{
              var foodtruckID = this.props.foodtruck.objectID;

              cookie.remove("foodtruckCurrent",{path:"/"});
              cookie.remove("orders",{path:"/"});
              cookie.save("foodtruckCurrent",foodtruckID,{path:"/"});

              this.props.ClearOrder();
              this.props.changeURL("menu");

            }}>
              <img src={this.props.foodtruck.logo} className="listLogoH"/>
                <p className="detailB">{this.props.foodtruck.address.street + "," + this.props.foodtruck.address.state+","+this.props.foodtruck.address.zip}</p>
              <div className="paraGroup">
                <p className="details foodtruckName"><strong>{this.props.foodtruck.name}</strong></p>


                <div className="starGroup">
                  {this.renderStar()}
                  </div>
                    <p className="  milesH">{(Math.floor(Math.random() * 10) + 1)+" miles"}</p>
                  </div>

                </li>
              );
        }
      }
}

export default  FoodBox;
