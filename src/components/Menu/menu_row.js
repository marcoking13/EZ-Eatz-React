import React from "react";

import DesktopBox from "./desktop_menu_box_component.js";

class  MenuRow extends React.Component {


  RenderRow = () =>{

    const rows = this.props.truck.menu.catagories.map((catagory)=>{
      console.log(catagory);
      const catagory_name = <p className="menu_row_title" key = {catagory.catagory} id = {catagory.catagory}> {catagory.catagory} </p>

      const food_items = catagory.menu.map((food_item,index)=>{
        console.log(food_item,index);
        var col_size = window.innerWidth >=  844 ? 4 : 6;
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

    return(
      <div className="container-fluid">
        {this.RenderRow()}
    </div>
    )

  }

}

export default MenuRow;
