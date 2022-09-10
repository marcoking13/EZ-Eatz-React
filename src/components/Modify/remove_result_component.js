import React from "react";


class RemoveResult extends React.Component{
  // Showed all the removed items
  // Loops through all removed items and renders them as list
  renderRemoveMods(){
    return this.props.remove.map((mod)=>{
      return(
        <li  key={mod.name} className="none mt2_5">{"- No "+mod.name}</li>
      )
    });
  }
  //renderer
  render(){
    return(
    <div>
      Remove:
    <ul>

    {this.renderRemoveMods()}
    </ul>
    </div>
  );
  }
}


export default RemoveResult;
