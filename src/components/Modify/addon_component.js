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
        return "bw br10px fl ml5 mr5 BBd4 turnd4 w20px h20px bd44";
      }else{
        // white
        return "bw br10px fl ml5 mr5 BBd4 turnd4 w20px h20px ";
      }
  }

  renderAddOn(){
    var key = 0;

    return this.props.item.add.map((addOn)=>{
        key ++;
        var color = this.decideColor(this.props.add,addOn);
        var fixedPrice = addOn.price.toFixed(2);

          return(

            <div key = {key} className="col-2 modCont ml5">

              <div className ="mt5 modBox" onClick = {(e)=>{  this.props.addIngredient(addOn) }}>

                <div className={color}>  <img alt="mod" className="checkser ml15 posRel" src="assets/images/check.png"/></div>
                  <p className=" ml5 f15px modNamer modName">{addOn.name}</p>
                  <p className="  ml5 f15px modPrice mt5 modName">{"$ "+fixedPrice}</p>
                </div>

              </div>
            );
          });
        }

  render(){

    if(this.props.item.add){
      return <div className="row pb2_5 pl7_5 BBbf4 pt2_5 rowMod pr5">{this.renderAddOn()}</div>
    }else{
      return null;
    }

  }
}


export default Addon;
