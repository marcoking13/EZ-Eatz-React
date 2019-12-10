import React from "react";

class Remover extends React.Component {

  // Renders the color of the RemoveResult
  // if selected box will be blue else it will be white
  // Same as addon_component
  renderRemovers(){

    var color = "bw br10px fl ml5 mr5 BBd4 turnd4 w20px h20px";
    var key = 0;
    // Loop through all the ingredients
    // then set class based on if user clicked them or not
    return this.props.item.ingredients.map((ing)=>{
      key++;
      for(var i = 0; i<this.props.remove.length;i++){
        if(ing === this.props.remove[i]){
          color = "bw br10px fl ml5 mr5 BBd4 turnd4 w20px h20px bd44";
          break;
        }else{
          color = "bw br10px fl ml5 mr5 BBd4 turnd4 w20px h20px";
        }
    }
    // if there are ingredients then render the jsx
    if(ing.display){
      return(
        <div key = {key} className="col-2 ml5 modCont">

          <div className ="mt5 modBox" onClick = {()=>{
            this.props.removeIngredient(ing);
          }}>

            <div className={color}>
              <img alt="check"className="ml15 posRel checkser" src="assets/images/check.png"/>
            </div>

              <p className="ml5 f15px modName modNamer">{"No "+ing.name}</p>

            </div>
          </div>
          );
        }
  });

  }

  // renderer for jsx
  render(){
      return <div className="row pb2_5 pl7_5 BBbf4 pt2_5 rowMod pr5">{this.renderRemovers()}</div>
  }

}


export default Remover;
