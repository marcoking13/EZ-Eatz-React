import React from "react";

class Addon extends React.Component {

  // Function will see if currentAddition and the the looped addition  match
  // If they match then it means the user has selected the item and color will be blue
  decideColor(add,currentAdd){
    // default it false ie white
    var flag = false;

    for(var i = 0; i<add.length;i++){

      // if they match then make the mod box blue
      if(currentAdd === add[i]){
          flag = true;
          break;
        }

      }
      // if true then box is blue else it is white
      if(flag){
        // blue
        return "modBlue blues";
      }else{
        // white
        return "modBlue";
      }
  }

  renderAddOn(){
    var key = 0;

    return this.props.item.add.map((addOn)=>{
        key ++;
        var color = this.decideColor(this.props.add,addOn);
        var fixedPrice = addOn.price.toFixed(2);
      
          return(

            <div key = {key} className="col-2 modCont">

              <div className ="modBox" onClick = {(e)=>{  this.props.addIngredient(addOn) }}>

                <div className={color}>  <img alt="mod" className="checkser" src="assets/images/check.png"/></div>
                  <p className="modName modNamer">{addOn.name}</p>
                  <p className="modName modPrice">{"$ "+fixedPrice}</p>
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
