import React from "react";

import DesktopBox from "./desktop_menu_box_component.js";

class  CatagoryListings extends React.Component {


  renderCatagories = ()=>{

    return this.props.truck.menu.catagories.map((catagory)=>{
      var col_size = window.innerWidth >= 844 ? 12 : 4;

      return(
        <li class={"col-"+col_size + " mt5"} style={{listStyleType:"none"}}>
          <a href = {"#"+catagory.catagory} className="normal-anchor" >
          <div className="menu_catagory_list">
            <p className="menu_catagory_list_text ml10 w100">{catagory.catagory}</p>
            <div className="underline ml10"/>
          </div>
          </a>
        </li>
      )

    })

  }


  render(){

    return (
      <div className="container-fluid with-100 catagory_listings">

        <ul className="width-100 row">
          {this.renderCatagories()}
        </ul>

      </div>
    )

  }

}

export default CatagoryListings;
