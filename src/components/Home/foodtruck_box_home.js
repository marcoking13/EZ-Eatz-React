import React from "react";
import cookie from "react-cookies";
import "./../../css/home_page.css";
import FullStar from "./../../images/full_star.png";
import EmptyStar from "./../../images/empty_star.png";

var distance;

class FoodBox extends React.Component {

  renderStar(stars){


    var starLimit = 5;
    var html = [];

    for(var i = 0; i<starLimit;i++){

      if(stars > i){

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

  SelectTruck = (truck) =>{

     this.props.ChangeURL("menu");
     return this.props.SetTruck(truck);

  }


  renderExpensive = () =>{
    var expensive = "";
    for(var i = 0; i < this.props.foodtruck.expensive; i++){
      expensive += "$";
    }
    return expensive;
  }

  render(){

        var city = this.props.foodtruck.address.city;
        var col_size = window.innerWidth >= 844 ? 3 : 12

        return (
           <div className={"col-"+col_size + " foodtruck_col"} key ={this.props.id}  data = {this.props.foodtruck}onClick = {(e)=>{
             return this.SelectTruck(this.props.foodtruck);
           }}>
            <div className="w90 ml5 foodtruck_wrapper">
               <img alt="showcase" className="w100 relative moveUpDown foodtruck_image"  src={this.props.foodtruck.background}/>

               <div className="row foodtruck_info_row">

                 <div className="col-12 fl foodtruck_info">
                   <br />
                   <p className="bold text-left foodtruck_box_title"><strong>{this.props.foodtruck.name}</strong></p>
                   <div className="foodtruck_line_box" />
                   <p className="text-left ml1">{city + "," + this.props.foodtruck.address.state+","+this.props.foodtruck.address.zip}</p>
                   <p className=" text-left  ml1 text-left">{this.props.distance}</p>
                 </div>

                 <div className="col-5 margin-left-5">
                   <div className="row">
                     {this.renderStar(this.props.foodtruck.stars)}
                   </div>
               </div>

               <div className="col-2"style={{position:"relative",right:'20px'}}>
                <p className="foodtruck_box_price color-green bolder monospace">{this.renderExpensive()}</p>
               </div>

               <div className="col-4">
                <p className="medium-font">{this.props.foodtruck.distance}</p>
               </div>

             </div>

            </div>

         </div>

         )

      }
 }

export default  FoodBox;
