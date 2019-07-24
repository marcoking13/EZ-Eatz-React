import React from "react";


class DesktopBox extends React.Component {
  render(){
    // Returns the Box for the menu
    // Shows item name,image, and price
    // Whe clicked SetItem will set that item to the state and save it cookie
    return(

      <div className="boxItem"onClick = {()=>{this.props.SetItem(this.props.menu.food[this.props.i])}}>
        <div className="textBoxMenu">
          <p className="detailMenu">{this.props.menu.food[this.props.i].item}</p>
          <p className="detailMenu">{"$"+this.props.menu.food[this.props.i].price}</p>
        </div>
        <img className="menuItemImage"src={this.props.menu.food[this.props.i].image}/>
      </div>

    );

  }
}

export default DesktopBox
