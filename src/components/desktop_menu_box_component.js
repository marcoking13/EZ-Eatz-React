import React from "react";


class DesktopBox extends React.Component {
  render(){
      var fixedPrice = this.props.menu.food[this.props.i].price.toFixed(2);
    // Returns the Box for the menu
    // Shows item name,image, and price
    // Whe clicked SetItem will set that item to the state and save it cookie
    return(

      <div className="boxItem" key ={this.props._id} onClick = {()=>{this.props.SetItem(this.props.menu.food[this.props.i])}}>

        <div className="textBoxMenu">
          <p className="detailMenu">{this.props.menu.food[this.props.i].item}</p>
          <p className="detailMenu">{"$ "+fixedPrice}</p>
        </div>

        <img alt="foodImage" className="menuItemImage"src={this.props.menu.food[this.props.i].image}/>
      </div>

    );

  }
}

export default DesktopBox
