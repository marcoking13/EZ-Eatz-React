import React from "react";

class Remover extends React.Component {


  renderRemovers(){

    var color = "modBlue";

    return this.props.item.ingredients.map((ing)=>{

      for(var i = 0; i<this.props.remove.length;i++){
        if(ing === this.props.remove[i]){
          color = "modBlue blues";
          break;
        }else{
          color = "modBlue";
        }
    }

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


  render(){
      return <div className="row rowMod">{this.renderRemovers()}</div>
  }

}


export default Remover;
