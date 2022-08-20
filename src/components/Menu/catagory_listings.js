import React from "react";

import MobileBox from "./mobile_menu_box_component.js";
import DesktopBox from "./desktop_menu_box_component.js";

class  CatagoryListings extends React.Component {




  renderCatagories = ()=>{
    return this.props.truck.menu.map((catagory)=>{
      return(
        <a href = {"#"+catagory.catagory} className="normal-anchor" ><li className="menu_catagory_list">
          <p className="menu_catagory_list_text"style={{marginLeft:"3.5%"}}>{catagory.catagory}</p>
          <div className="underline"/>
        </li>
        </a>
      )
    })
  }
  render(){
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
