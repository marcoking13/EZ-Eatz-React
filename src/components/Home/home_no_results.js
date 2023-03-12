import React from "react";
import Background from "./../../../images/home_no_results.png";
import MobileBackground from "./../../../images/no_results_mobile.png";
import "./../../../css/utility.css";
import "./../../../css/home_page.css";

class HomeNoResults extends React.Component{


  render(){

      var background = window.innerWidth >= 844 ? Background : MobileBackground;

      return(

        <div className="no_results_container width-100 container-fluid mt5">

          <div className="row">
            <div className="col-5">
              <p className="truck_row_title">{this.props.title}</p>
            </div>
          </div>

          <img className="w100" style={{height:"300px"}} src = {background} />


        </div>

      )

    }

}

export default HomeNoResults;
