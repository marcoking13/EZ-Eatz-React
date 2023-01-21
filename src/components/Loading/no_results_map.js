import React from "react";
import Background from "./../../images/no_results.png";

import "./../../css/utility.css";
import "./../../css/home_page.css";

class NoResults extends React.Component{

  render(){

      return(
        <div className="no_results_container width-100 screen-height container-fluid" style={{position:"absolute",top:"15%",background:`url(${Background})`}}>
            <p className="width-100 text-center roboto"style={{fontSize:"30px",color:"black",marginTop:"20%",fontWeight:"bold"}}>{this.props.text}</p>
        </div>
      )

    }

}

export default NoResults;
