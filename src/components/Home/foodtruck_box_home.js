import React from "react";
import cookie from "react-cookies";
import "./../../css/home_page.css";
import FullStar from "./../../images/full_star.png";
import EmptyStar from "./../../images/empty_star.png";


var distance;

class FoodBox extends React.Component {

  renderStar(){

    var stars = 3;
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

  render(){
    var city = this.props.foodtruck.address.city;

    if(window.innerWidth >= 600){

         return (
           <div className="col-3" key ={this.props.id}  data = {this.props.foodtruck}onClick = {(e)=>{
             return this.SelectTruck(this.props.foodtruck);
           }}>
            <div className="w90 ml5">
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
                     {this.renderStar()}
                   </div>
               </div>
               <div className="col-2">
                <p className="foodtruck_box_price color-green bolder monospace">$$$$</p>
               </div>
               <div className="col-4">
                <p className="medium-font">{this.props.foodtruck.distance}</p>
               </div>
             </div>
            </div>

         </div>
         )
        }else{
          return(
            <li className="list-group-item container-fluid" key ={this.props.id} onClick = {(e)=>{
              var foodtruckID = this.props.foodtruck.objectID;
              this.props.ClearOrder();
              this.props.ChangeURL("menu");

            }}>
              <div classNameaName="row">
                <div className="col-2">
                  <img src={this.props.foodtruck.logo} className="fl listLogoH"/>
                </div>

                <div className="col-5 fl">
                    <span> <p className="text-center bold"><strong>{this.props.foodtruck.name}</strong></p></span>
                    <span> <p className="text-center ">{this.props.foodtruck.address.city + "," + this.props.foodtruck.address.state+","+this.props.foodtruck.address.zip}</p></span>
                </div>

                <div className="col-5 fl">
                  <span><p className="text-center ">Wait: 20-30 min</p></span>
                  <span><p className="text-center color-green ">$$</p></span>
                </div>
              </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="row">
                        <div className="col-3"/>
                        {this.renderStar()}
                      </div>
                    </div>
                    <div className="col-6">
                        <p className="text-center">{(Math.floor(Math.random() * 10) + 1)+" miles"}</p>
                    </div>
                  </div>

                </li>
          )
        }
      }
}

export default  FoodBox;
