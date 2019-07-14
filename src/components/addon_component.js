import React from "react";

class Addon extends React.Component {

  decideColor(add,currentAdd){
    var flag = false;
    for(var i = 0; i<add.length;i++){
      if(currentAdd === add[i]){
          flag = true;
          break;
        }
      }
      if(flag){
        return "modBlue blues";
      }else{
        return "modBlue";
      }
  }

  renderAddOn(){

    return this.props.item.add.map((addOn)=>{
        var color = this.decideColor(this.props.add,addOn);

          return(
            
            <div className="col-2 modCont">
              <div className ="modBox" onClick = {(e)=>{  this.props.addIngredient(addOn) }}>
                <div className={color}>  <img className="checkser" src="assets/images/check.png"/></div>
                  <p className="modName modNamer">{addOn.name}</p>
                  <p className="modName modPrice">{"$ "+addOn.price}</p>
                </div>
              </div>
            );
          });
        }

  render(){
    if(this.props.item.add){
      return <div className="row rowMod">{this.renderAddOn()}</div>
    }else{
      return null;
    }

  }
}


export default Addon;
