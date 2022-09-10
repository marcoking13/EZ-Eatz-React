import React from "react";
import Background from "./../images/no_results.png";

import "./../css/utility.css";
import "./../css/home_page.css";

const NoResults = (props)=>{

  return(
    <div className="no_results_container width-100 screen-height"style={{background:`url(${Background})`}}>
      <p className="width-100 text-center padding-top-15 roboto no_results_text">{props.text}</p>
    </div>
  )

}

export default NoResults;
