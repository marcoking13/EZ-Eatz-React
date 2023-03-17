import React from "react";



class InputModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:""


    }
  }


  render(){
    return(

      <input className="form-control " placeholder = {this.props.placeholder} value = {this.state.value} onChange = {(e)=>{
        this.setState({value:e.target.value})
      }}/>
    )
  }
}


export default InputModal;
