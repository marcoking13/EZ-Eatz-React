import React from "react";


class MobileBox extends React.Component {

  render(){

    return(
      <li className="list-group-item" onClick = {()=>{this.props.SetItem(this.props.menu.food[this.props.i])}}>
        <div className="textBoxMenu">
          <p>{this.props.menu.food[this.props.i].item}</p>
          <p>{"$"+this.props.menu.food[this.props.i].price}</p>
        </div>
        <img className="menuItemImage"src={this.props.menu.food[this.props.i].image}/>
      </li>
    )

  }
}

export default MobileBox
