import React from "react";

import "./../../css/filter.css";
import "./../../css/utility.css";


class Filter extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      rating:false,
      nearby:false,
      deals:false,
      priceRange:1,
      radius:this.props.radius
    }

  }

  renderRadius = ()=>{

    return(
      <form onSubmit={(e)=>{
        e.preventDefault();
        this.props.changeRadius(this.state.radius)
      }}>
        <input placeholder="Enter Radius" value = {this.state.radius} type="number" className=" radius_input float-left margin-left-5 form-control" onChange = {(e)=>{
          this.setState({radius:e.target.value})
        }}/>
        <span className="e6-background text-center float-left mile_box" >mi</span>
      </form>
    );

  }

  renderPriceTags = () => {
    var dollar = "$";
    var html = [];

    for ( var i = 0; i < 4; i++){

      html.push(
        <div className="col-6 price_tag text-center e6-background">
            {dollar}
        </div>
      );
      dollar += "$";
    }

    return html

  }

  renderToggleDeals =()=>{

    var text = this.state.deals ? "On" : "Off";
    var toggleclassName = this.state.deals ? "on_toggle black-background white-color" : "off_toggle white-background black-color";
    var toggleSwitch = this.state.deals ? "on_switch white-background float-right " : "off_switch float-left white-background";

    return(
      <div className={toggleclassName + " toggle_deals width-75 margin-left-5 border-e6-2px text-center"} onClick = {(e)=>{

        if(this.state.deals){
          this.setState({deals:false})
        }else{
          this.setState({deals:true})
        }

      }}>

      <div className={"switch zero-index border-radius-50 float-left relative "+toggleSwitch}/>
          {text}
      </div>

    );

  }

  renderFilterBubble = (name,left_margin)=>{
    return(
      <div style={{marginLeft:left_margin}}>
        <div className="filter_list width-100 list-style-none clear-both">
          <div className="filter_bubble float-left no-background border-radius-50 border-e6-2px"></div>
          <p className="filter_item width-50 margin-left-5 float-left">
              {name}
          </p>
      </div>
      </div>
    )
  }

  render(){

      return (
        <div className="container-fluid filter">
          <p className="filter_heading margin-left-5 margin-top-15 bold">Filter Trucks</p>

          <div className="sort_container width-100 margin-top-5">
            <p className="filter_text bold roboto margin-left-10">Sort</p>

            {this.renderFilterBubble("For You (Default)",10)}
            {this.renderFilterBubble("Best Ratings",10)}
            {this.renderFilterBubble("Closest to You",10)}

          </div>

          <br />

          <div className="deals_container width-100 margin-top-10">
            <p className="filter_text bold roboto margin-left-10">Radius</p>
            {this.renderRadius()}
          </div>

          <br />

          <div className="deals_container width-100 margin-top-10">
            <p className="filter_text bold roboto margin-left-10">Deals</p>
            {this.renderToggleDeals()}
          </div>

          <br />

          <div className="prices_container width-100 margin-top-5">
            <p className="filter_text bold roboto margin-left-10">Prices</p>

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

    );

  }

}

export default  Filter;
