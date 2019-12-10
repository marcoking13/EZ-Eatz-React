import React from "react";


class DropDown extends React.Component {


    renderDropdowns(drops){
      var dropArray = [];

      for(var i = 0; i <= drops; i++){
          dropArray.push(<option value = {i}>{i}</option>);
      }

        return(
          <select className="fl w35 ml10 mt5 text-center br10px selecter">
            {dropArray}
          </select>
        )
    }

    render(){
      return <div>{this.renderDropdowns(this.props.drops)}</div>
    }

}

export default DropDown;
