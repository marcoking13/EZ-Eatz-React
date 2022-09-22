import React from "react";
import Background from "./../images/home_no_results.png";

import "./../css/utility.css";
import "./../css/home_page.css";

class HomeNoResults extends React.Component{


render(){
    return(
      <div className="no_results_container width-100 container-fluid mt5">
      <div className="row">
      <div className="col-5">
        <p className="truck_row_title">{this.props.title}</p>
      </div>
      </div>
      <img className="w100" style={{height:"300px"}} src = {Background} />


      </div>



    )

  }
}

export default HomeNoResults;
