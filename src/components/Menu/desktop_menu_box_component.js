import React from "react";


class DesktopBox extends React.Component {
  render(){
      var fixedPrice = this.props.menu.food[this.props.i].price.toFixed(2);
    // Returns the Box for the menu
    // Shows item name,image, and price
    // Whe clicked SetItem will set that item to the state and save it cookie
    return(

      <div className="fl turnF4  mt2_5 moveUpDown bw br10px ml5 BB2  w25" key ={this.props._id} onClick = {()=>{this.props.SetItem(this.props.menu.food[this.props.i])}}>
        <div className="row">
          <div className="textBoxMenu col-5 fl">
            <p className="detailMenu w100 ml10 fl ml5 mt5">{this.props.menu.food[this.props.i].item}</p>
            <p className="detailMenu w100 ml10 fl ml5 mt5">{"$ "+fixedPrice}</p>
          </div>

          <div className="col-5">
            <img alt="foodImage" className="menuItemImage mt2_5 w100 fr"src={this.props.menu.food[this.props.i].image}/>
          </div>
        </div>
      </div>

    );

  }
}

export default DesktopBox
