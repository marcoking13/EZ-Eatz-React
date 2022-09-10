import React from "react";


class AddResult extends React.Component{

  // function loops through all additions to item and return jsx with their data
  renderAddMods(){
    return this.props.add.map((mod)=>{
      return(
        <li  key={mod.name} className="modListR circle mt2_5">{mod.name}</li>
      )
    });
  }
  // renders the JSX
  render(){

    return (
      <div>
        Add:
      <ul>

      {this.renderAddMods()}
      </ul>
      </div>
    )
  }

}


export default AddResult;
