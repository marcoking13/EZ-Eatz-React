import React from "react";
import Background from "./../images/no_results.png";

import "./../css/utility.css";
import "./../css/home_page.css";

import LoadingImg from "./../images/loading_box.gif";

const LoadingBox = (props)=>{

  const LoadingLoop = () => {
    var html = [];
    for (var i =0; i <= 20; i++){
      html.push(<img src ={LoadingImg} className="col-3 loading_box"/>)
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
