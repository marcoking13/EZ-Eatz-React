import React from "react";


class AddResult extends React.Component{

  renderAddMods(){
    return this.props.add.map((mod)=>{
      return(
        <li  key={mod.name} style={{listStyleType:"circle"}}className="modListR">{mod.name}</li>
      )
    });
  }

  render(){
    return this.renderAddMods()
  }
  
}


export default AddResult;
