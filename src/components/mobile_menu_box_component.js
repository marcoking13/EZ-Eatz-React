import React from "react";

class MobileBox extends React.Component {

  render(){
    var fixedPrice = this.props.menu.food[this.props.i].price.toFixed(2);
      // Renders Mobile Item boxes to menu page
    return(
      <li className="list-group-item turnF4" key ={this.props._id} onClick = {()=>{this.props.SetItem(this.props.menu.food[this.props.i])}}>

        <div className="textBoxMenu fl">
          <p>{this.props.menu.food[this.props.i].item}</p>
          <p>{"$"+fixedPrice}</p>
        </div>

        <img alt ="Item"className="menuItemImage fr w10"src={this.props.menu.food[this.props.i].image}/>
      </li>
    )

  }
}

export default MobileBox
