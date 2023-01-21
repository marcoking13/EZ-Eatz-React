import React from "react";

import Background from "./../../images/no_results.png";
import LoadingImg from "./../../images/loading_box.gif";

import "./../../css/utility.css";
import "./../../css/home_page.css";


const LoadingBox = (props)=>{

  const LoadingLoop = () => {
    var html = [];
    var size = window.innerWidth >= 844 ? 3 : 10;
    for (var i =0; i <= 20; i++){
      html.push(<img src ={LoadingImg} className={"col-"+size+" loading_box"}/>)
    }
    return html;
  }

  return(
    <div className="no_results_container container-fluid width-100 screen-height"style={{background:`white`,marginTop:"5%"}}>

      <div className="row">

        <div className="col-2"></div>

        <div className="col-10">
          <div className="row">
            {LoadingLoop()}
          </div>
        </div>

        </div>

    </div>
  )

}

export default LoadingBox;
