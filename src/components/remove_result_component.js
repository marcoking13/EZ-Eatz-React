import React from "react";


class RemoveResult extends React.Component{


  // Showed all the removed items
  // Loops through all removed items and renders them as list
  renderRemoveMods(){
    return this.props.remove.map((mod)=>{
      return(
        <li  key={mod.name} className="modListR">{"- No "+mod.name}</li>
      )
    });
  }
  //renderer
  render(){
    return this.renderRemoveMods()
  }
}


export default RemoveResult;
