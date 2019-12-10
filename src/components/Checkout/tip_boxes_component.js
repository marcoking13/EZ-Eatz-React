import React from "react";


class TipBoxes extends React.Component {

    renderTipBoxes(){

      var tipBoxes = [];
      var tipVal = 10;

       for(var i = 0; i<3; i++){

        if(tipVal === parseInt(this.props.tip)){
          tipBoxes.push(
            <div
            onClick = {(e)=>{
              this.props.changeTip(e.target.attributes.num.value);
            }}
            num = {tipVal}
            className="bw br10px text-center mt5 ml5 w100 cw B4pxf4f4 tipBox selectedTip">{tipVal+"%"}</div>);
        }else{
          tipBoxes.push(
            <div
            num = {tipVal}
            onClick = {(e)=>{
              this.props.changeTip(e.target.attributes.num.value);
            }}
            className="bw br10px text-center mt5 ml5 w100 cgg B4pxf4f4 tipBox">{tipVal+"%"}</div>
          );
        }
          tipVal += 10;
      }

      return tipBoxes;

    }

    render(){
      return <div>{this.renderTipBoxes()}</div>
    }

}

export default TipBoxes;
