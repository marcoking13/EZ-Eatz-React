import React from "react";


class DropDown extends React.Component {


    renderDropdowns(drops){
      var dropArray = [];

      for(var i = 0; i <= drops; i++){
          dropArray.push(<option value = {i}>{i}</option>);
      }

        return(
          <select className="selecter">
            {dropArray}
          </select>
        )
    }

    render(){
      return <div>{this.renderDropdowns(this.props.drops)}</div>
    }

}

export default DropDown;
