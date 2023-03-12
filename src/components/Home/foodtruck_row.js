import React from "react";

import FoodtruckBox from "./foodtruck_box_home.js";
import NoResults from "./home_no_results";

import ToggleIcon from "./../../images/arrow_row_icon.svg";


class FoodtruckRow extends React.Component {

  constructor(props){
    super(props);
  }

  CreateFoodtruckBoxes = (truck_catagory,starting) => {

    var limit = 4;
    var html = [];

      for (var i = 0 ; i < limit; i ++){

        var index = starting + i;

        if(truck_catagory[index]){
          html.push(
            <FoodtruckBox
              address = {truck_catagory[index].address}
              key = {index}
              id = {i}
              ClearOrder = {this.props.ClearOrder}
              SetTruck = {this.props.SetTruck}
              foodtruck = {truck_catagory[index]}
              ChangeURL = {this.props.ChangeURL}
            />
          )

        }

    }

    return html;

  }

  CreateFoodtruckRow = (title,foodtruck_catagory,toggle_catagory,toggle_func) => {

    var title_class = window.innnerWidth >= 844 ? "col-5" : "col-12 text-center";
    var see_all_class = window.innnerWidth >= 844 ? "col-12" : "col-12 text-center";
    var divider_class = window.innnerWidth >= 844 ? "col-3" : "col-4";

    if(foodtruck_catagory.length > 0){

     return (
       <div className="container-fluid row margin-top-5">

            <div className={title_class}>
              <p className="truck_row_title">{title}</p>
            </div>

            <div className={divider_class}/>

            <div className={see_all_class}>
              <p className="hyperlink" onClick = {()=>{
                this.toggleSeeAll(foodtruck_catagory,title)
              }}>See All</p>
            </div>

            <div className="col-10"/>

            <div className="col-1">

              <div className="row">

                <div className="col-6">
                  <img src ={ToggleIcon} onClick = {()=>{this.props.toggle_func(-1,toggle_catagory,foodtruck_catagory.length,this.props.toggle_prop)}} className="w100 truck_row_toggle_icon rotate-180" />
                </div>

                <div className="col-6">
                  <img src ={ToggleIcon} onClick = {()=>{this.props.toggle_func(1,toggle_catagory,foodtruck_catagory.length,this.props.toggle_prop)}} className="w100 truck_row_toggle_icon" />
                </div>

              </div>

            </div>

            <div className="row">
              {this.CreateFoodtruckBoxes(foodtruck_catagory,toggle_catagory)}
            </div>

       </div>
     )

   }else{
     return <NoResults title = {title}/>
   }

  }
  render(){
    return(
      <div>
        {this.CreateFoodtruckRow(this.props.title,this.props.catagory,this.props.toggle_catagory,this.props.toggle_func)}
      </div>
    )
  }
}


export default FoodtruckRow;
