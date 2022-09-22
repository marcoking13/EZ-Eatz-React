import React from "react";
import Background from "./../images/no_results.png";

import "./../css/utility.css";
import "./../css/home_page.css";

import LoadingImg from "./../images/loading_map.gif";

const Loading = (props)=>{

  return(
    <div className="no_results_container container-fluid screen-height">
    <img className=" width-100" src = {LoadingImg} />
    </div>
  )

}

export default Loading;
