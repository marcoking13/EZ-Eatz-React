import React from "react";
import Background from "./../images/no_results.png"

const NoResults = (props)=>{
  return(
    <div className="no_results_container width-100"style={{background:`url(${Background})`,height:"1080px"}}>
      <p style={{opacity:"90%",width:"100%",textAlign:"center",paddingTop:"15%",fontSize:"50px",fontFamily:"Roboto"}}>{props.text}</p>

    </div>
  )
}

export default NoResults;
