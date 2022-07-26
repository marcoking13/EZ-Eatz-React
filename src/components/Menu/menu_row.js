import React from "react";

import MobileBox from "./mobile_menu_box_component.js";
import DesktopBox from "./desktop_menu_box_component.js";

class  MenuRow extends React.Component {



  RenderRow = () =>{
    const rows = this.props.truck.menu.map((catagory)=>{
      const catagory_name = <p className="menu_row_title"> {catagory.catagory} </p>
      const food_items = catagory.food.map((food_item)=>{
        return (
          <div className="col-3 menu_item">
            <img className="menu_item_image" src = {food_item.image}/>
            <div className="row">
              <p className="col-3 menu_item_description"> {food_item.item}</p>
              <p className="col-3 menu_item_description"> $ {food_item.price.toString()}</p>
              <p className="col-3 menu_item_description"> {food_item.description}</p>
            </div>

          </div>
        )
      });
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
  }
    // Renderer
  render(){
    <div className="container-fluid">
      {this.RenderRow()}

    </div>
  }

}

export default MenuRow;
