import React from "react";

import DesktopBox from "./desktop_menu_box_component.js";
import axios from "axios";
import Placeholder from "./../../images/placeholder_menu_item.png";

class  MenuRow extends React.Component {


  RenderRow = () =>{
    var food_items = <p> No Items </p>

    if(this.props.truck.menu.catagories.length > 0){
        const rows = this.props.truck.menu.catagories.map((catagory)=>{
        const catagory_name = <p className="menu_row_title" key = {catagory.catagory} id = {catagory.catagory}> {catagory.catagory} </p>

        if(catagory.menu.length<=0){
          return food_items
        }else{

          food_items = catagory.menu.map((food_item,index)=>{
          var col_size = window.innerWidth >=  844 ? 4 : 6;
          var data = true;

          return (
            <div className={"col-" + col_size + " menu_item"} onClick = {()=>{console.log(food_item);this.props.SetItem(food_item)}}>
              <img className="menu_item_image" src = {food_item.image}/>
              <div className="row">
                <p className="col-6 menu_item_description"> {food_item.name}</p>
                <p className="col-6 menu_item_description"> $ {food_item.price.toString()}</p>
                <p className="col-12 menu_item_description"> {food_item.description}</p>
              </div>

            </div>
          )

        });

    }

      return (
        <div className="menu_row_container">
          {catagory_name}
          <div className="row menu_row">
            {food_items}
          </div>
        </div>
      )

    });

    return rows;
  }else{
    return <p>No Catagories</p>
  }
  }
    // Renderer
  render(){

    return(
      <div className="container-fluid">
        {this.RenderRow()}
    </div>
    )

  }

}

export default MenuRow;
