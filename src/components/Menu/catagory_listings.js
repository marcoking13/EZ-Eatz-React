import React from "react";

import MobileBox from "./mobile_menu_box_component.js";
import DesktopBox from "./desktop_menu_box_component.js";

class  CatagoryListings extends React.Component {


  renderCatagories = ()=>{
    return this.props.truck.menu.map((catagory)=>{
      return(
        <li className="menu_catagory_list">
          <p className="menu_catagory_list_text">{catagory.catagory}</p>
          <div className="underline"/>
        </li>
      )
    })
  }
  render(){
    console.log(this.props.truck.menu);
    return (
      <div className="container-fluid with-100 catagory_listings">
        <ul className="width-100">
          {this.renderCatagories()}

        </ul>

      </div>
    )
  }

}

export default CatagoryListings;
