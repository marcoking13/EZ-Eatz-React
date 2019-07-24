import React from "react";


class AddResult extends React.Component{

  // function loops through all additions to item and return jsx with their data
  renderAddMods(){
    return this.props.add.map((mod)=>{
      return(
        <li  key={mod.name} style={{listStyleType:"circle"}}className="modListR">{mod.name}</li>
      )
    });
  }
  // renders the JSX
  render(){
    return this.renderAddMods()
  }

}


export default AddResult;
