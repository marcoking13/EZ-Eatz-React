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
            className="tipBox selectedTip">{tipVal+"%"}</div>);
        }else{
          tipBoxes.push(
            <div
            num = {tipVal}
            onClick = {(e)=>{
              this.props.changeTip(e.target.attributes.num.value);
            }}
            className="tipBox">{tipVal+"%"}</div>
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
