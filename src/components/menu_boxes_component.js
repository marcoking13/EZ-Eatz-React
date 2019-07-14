import React from "react";
import MobileBox from "./mobile_menu_box_component.js";
import DesktopBox from "./desktop_menu_box_component.js";
class MenuBoxes extends React.Component {

  renderMenuBoxes(){

      if(this.props.foodtruck.menu){
        return this.props.foodtruck.menu.map((menu)=>{
          var html = [];
          for(var i=0;i<menu.food.length;i++){

            if(window.innerWidth <=800){
            html.push(
              <MobileBox  SetItem = {this.props.SetItem} menu = {menu} i = {i} />
            )
          }else if(window.innerWidth >= 800){
            html.push(
              <DesktopBox SetItem = {this.props.SetItem} menu = {menu} i = {i} />
            )
          }

        }if(window.innerWidth <=800){
          return(
          <div>
            <h5 className="menuTitleC">{menu.catagory}</h5>
            <ul className="list-group">
              {html}
            </ul>
          </div>
          )
        }else{
          return(
          <div>
            <h5 className="menuTitleC">{menu.catagory}</h5>
            <div className="row">
              {html}
            </div>
          </div>
          )
        }
        })

      }else{
        console.log("Error");
      }

    }

  render(){
    return <div> {this.renderMenuBoxes()} </div>
  }
}

export default MenuBoxes;
