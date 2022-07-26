import React from "react";

import "./../../css/filter.css";


class Filter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      rating:false,
      nearby:false,
      deals:false,
      priceRange:1
    }
  }

  renderPriceTags = () => {
    var dollar = "$";
    var html = [];
    for ( var i = 0; i < 4; i++){

      html.push(
        <div className="col-6 price_tag">
            {dollar}
        </div>
      );
      dollar += "$";
    }
    return html;
  }


  renderToggleDeals =()=>{
    console.log(this.state);
    var text = this.state.deals ? "On" : "Off";
    var toggleclassName = this.state.deals ? "on_toggle" : "off_toggle";
    var toggleSwitch = this.state.deals ? "on_switch" : "off_switch";
    return(
      <div className={toggleclassName + " toggle_deals"} onClick = {(e)=>{
        if(this.state.deals){
          this.setState({deals:false})
        }else{
          this.setState({deals:true})
        }
      }}>
      <div className={"switch "+toggleSwitch}/>
          {text}

      </div>
    )
  }
  render(){

      return (
        <div className="container-fluid filter">
            <p className="filter_heading">Filter Trucks</p>
          <div className="sort_container margin-top-25">
            <p className="filter_text">Sort</p>
            <div className="margin-left-10">
              <div className="filter_list">
                <div className="filter_bubble"><div className="filter_center"/></div>
                <p className="filter_item">
                For You (Default)
                </p>
              </div>

              <div className="filter_list">
                <div className="filter_bubble"><div className="filter_center"/></div>
                  <p className="filter_item">
                Best Ratings
                </p>
              </div>

              <div className="filter_list">
                <div className="filter_bubble">
                  <div className="filter_center"/>
                </div>
                  <p className="filter_item">
                Closest
                </p>
              </div>

            </div>
          </div>

          <br />

          <div className="deals_container width-100 margin-top-10">
            <p className="filter_text">Deals</p>
            {this.renderToggleDeals()}
          </div>
          <br />

          <div className="prices_container width-100 margin-top-10">
            <p className="filter_text">Prices</p>
            <div className="row">
            <div className="col-1"/>
            <div className="col-10">
            <div className="row width-90">
              {this.renderPriceTags()}
            </div>
            </div>
            </div>
          </div>

        </div>
      )
  }
}

export default  Filter;
