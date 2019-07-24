import React from "react";

class Remover extends React.Component {

  // Renders the color of the RemoveResult
  // if selected box will be blue else it will be white
  // Same as addon_component
  renderRemovers(){

    var color = "modBlue";
    // Loop through all the ingredients
    // then set class based on if user clicked them or not
    return this.props.item.ingredients.map((ing)=>{

      for(var i = 0; i<this.props.remove.length;i++){
        if(ing === this.props.remove[i]){
          color = "modBlue blues";
          break;
        }else{
          color = "modBlue";
        }
    }
    // if there are ingredients then render the jsx
    if(ing.display){
      return(
        <div className="col-2 modCont">
          <div className ="modBox" onClick = {()=>{
            this.props.removeIngredient(ing);
          }}>
            <div className={color}>
              <img className="checkser" src="assets/images/check.png"/>
            </div>
                <p className="modName modNamer">{"No "+ing.name}</p>
            </div>
            </div>
          );
        }
  });

  }

  // renderer for jsx
  render(){
      return <div className="row rowMod">{this.renderRemovers()}</div>
  }

}


export default Remover;
