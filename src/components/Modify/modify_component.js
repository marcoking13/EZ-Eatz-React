import React from "react";

class Modify extends React.Component {

  // Function will see if currentAddition and the the looped addition  match
  // If they match then it means the user has selected the item and color will be blue
  decideColor(new_modifier){
    // default it false ie white
    var flag = false;


    var current_modifiers = this.props.current_modifiers;

    for(var i = 0; i<current_modifiers.length;i++){

      // if they match then make the mod box blue
      if(new_modifier === current_modifiers[i]){
        
          flag = true;
          break;
        }

      }
      // if true then box is blue else it is white
      var color = flag ? "bd44" : "bw";

      return color;

  }

  renderContainer(){


    return this.props.modifiers.map((modifier,index)=>{

        var color = this.decideColor(modifier);
        var fixedPrice = modifier.price ? modifier.price.toFixed(2) : null;
        var price_text = fixedPrice ? `+$${fixedPrice}` : "";

          return(

            <div key = {index} className="col-12 modCont">

              <div className ="mt5 modBox" onClick = {(e)=>{ console.log(modifier); this.props.modifyIngredient(modifier)}}>

                <div className={"bw br10px fl ml5 mr5 BBd4 turnd4 w20px h20px "+color}>  <img alt="mod" className="checkser ml15 posRel" src="assets/images/check.png"/></div>
                  <p className=" ml5 f15px modNamer modName">{this.props.prefix} {modifier.name} {price_text}</p>
                </div>

              </div>
            );

          });

        }

  render(){

    if(this.props.modifiers.length > 0){
      return <div className="border-right-light-2px "style={{height:"500px"}}>{this.renderContainer()}</div>
    }else{
      return null;
    }

  }
}


export default Modify;
