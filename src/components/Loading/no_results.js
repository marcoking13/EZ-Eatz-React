import React from "react";
import Background from "./../../images/no_results.png";

import "./../../css/utility.css";
import "./../../css/home_page.css";

class NoResults extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      input:""
    }
  }

  render(){
      return(
        <div className="no_results_container width-100 screen-height container-fluid" key = {this.state.key} style={{background:`url(${Background})`}}>

          <div className="row w100">

            <p className="width-100 text-center roboto"style={{fontSize:"24px",color:"black",marginTop:"5%",fontWeight:"bold"}}>{this.props.text}</p>

            <div className="col-3"/>

            <div className="col-6 mt5">

              <form onSubmit = {(e)=>{
                e.preventDefault();
                this.props.changeRadius(parseInt(this.state.input));
              }}>
                <input className="form-control" value = {this.state.input} placeholder = "Enter a new radius" type="number" onChange = {(e)=>{
                  this.setState({input:e.target.value});
                }} />
              </form>

            </div>

              <div className="col-3"/>

            </div>


        </div>
      )

    }
}

export default NoResults;
