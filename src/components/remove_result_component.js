import React from "react";


class RemoveResult extends React.Component{

  renderRemoveMods(){
    return this.props.remove.map((mod)=>{
      return(
        <li  key={mod.name} className="modListR">{"- No "+mod.name}</li>
      )
    });
  }
  
  render(){
    return this.renderRemoveMods()
  }
}


export default RemoveResult;
