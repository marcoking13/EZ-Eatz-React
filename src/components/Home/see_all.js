import React from "react";
import cookie from "react-cookies";

import "./../../../css/home_page.css";
import "./../../../css/see_all.css";

import FoodtruckBox from "./foodtruck_box_home.js";


class SeeAll extends React.Component {

  constructor(props){
    super(props);
    window.scrollTo(0,0);
  }

  renderAll = () =>{
    console.log(this.props.see_all);
    return this.props.see_all.map((truck,index)=>{

      return (
        <FoodtruckBox
          address = {truck.address}
          key = {index}
          id = {index}
          ClearOrder = {this.props.ClearOrder}
          SetTruck = {this.props.SetTruck}
          foodtruck = {truck}
          ChangeURL = {this.props.ChangeURL}
        />
      )
    })
  }

  renderModal = () =>{
    if(!this.props.see_all){
      return <div />
    }else{
      return (
        <div className="see_all_container container-fluid">

          <div className="row">

            <div className="col-1"/>

            <div className="col-2">
              <p className="exit_button" onClick = {()=>{
                this.props.toggleSeeAll(false);
              }}>X</p>
            </div>

          </div>

          <p className="catagory_see_all">{this.props.title}</p>

          <div className="row ml5 w90 mt5 pb5">
            {this.renderAll()}
          </div>


        </div>
      )
    }
  }
  render(){
    return(
      <React.Fragment>

        {this.renderModal()}

      </React.Fragment>
    )
  }


}


export default SeeAll;
