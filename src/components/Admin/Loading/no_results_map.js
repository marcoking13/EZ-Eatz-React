import React from "react";
import Background from "./../../../images/admin_map_no_results_map.png";
import MobileBackground from "./../../../images/admin_map_no_results_map.png";
import "./../../../css/utility.css";
import "./../../../css/home_page.css";

class MapNoResults extends React.Component{


  render(){

      var background = window.innerWidth >= 844 ? Background : MobileBackground;

      return(
        <div className="no_results_container width-100 container-fluid mt5">
            <p className="truck_row_title text-center">{this.props.title}</p>
        </div>
      )

    }

}

export default MapNoResults;
