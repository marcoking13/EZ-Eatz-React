import React from "react";

import DesktopBox from "./desktop_menu_box_component.js";

class  CatagoryListings extends React.Component {


  renderCatagories = ()=>{

    return this.props.truck.menu.catagories.map((catagory)=>{

      return(
        <a href = {"#"+catagory.catagory} className="normal-anchor" ><li className="menu_catagory_list">
          <p className="menu_catagory_list_text ml40 w100">{catagory.catagory}</p>
          <div className="underline ml40"/>
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
