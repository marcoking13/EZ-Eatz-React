import React from "react";

import "./../../css/landing_page.css";
import LandingBackground from "./../../images/2.png";
import Logo1 from "./../../images/logo_1.png";
import Logo2 from "./../../images/logos_2.png";
import Show1 from "./../../images/show_2.png";
import Show2 from "./../../images/show_1.png";
import Logo3 from "./../../images/logos_3.png";
import ProfileIcon from "./../../images/profile_icon.png";
import GoogleLogo from "./../../images/googleLogo.png";


class LandingDesktop extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      address : ""
    }
  }

  renderErrorMessage(err){

    if(err){
      return <p className="text-center cr">Wrong Username or Password </p>
    }else {
      return null
    }

  }

  renderNavbar(){
    return(
      <div className="row" >

        <div className="col-5"></div>

        <div className="col-2 margin-top-2_5">
          <p className="ez_title text-center cw ">EZ-Eatz</p>
        </div>

        <div className="col-1"/>

        <div className="col-4 margin-top-2_5">
          <div className="row">
            <div className="col-6">
              <button className="width-100  btn btn_landing " onClick={()=>{this.props.ChangeURL("userlogin")}}>Login</button>
            </div>

            <div className="col-5">
              <button onClick={()=>{this.props.ChangeURL("usersignup")}} className="width-100  btn signup_button_landing btn_landing black-background white">Create Account</button>
            </div>

          </div>

        </div>

      </div>


    )
  }

  renderBox(){
    return(
      <div className="row padding-top-10">
        <div className="col-1"/>
        <div className="col-10">
          <div className="row">
            <div className="col-4">
                <p className="admin_info_title">All in one app.</p>
                <p className="admin_info_description">
                Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
                </p>

            </div>
            <div className="col-8">
                <img className=" show_image_admin" style={{position:"relative",top:"50px"}} src = {Show1} />
            </div>

          </div>
        </div>
      </div>
    )
  }

  renderBox2(){
    return(
      <div className="row padding-top-10" style={{background:"rgb(255, 240, 237"}}>
        <div className="col-1"/>
        <div className="col-10">
          <div className="row">

            <div className="col-8">
                <img className=" show_image_admin" src = {Show2} />
            </div>
            <div className="col-4">
                <p className="admin_info_title text_right">Every Flavor Welcome</p>
                <p className="admin_info_description text_right">
                From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S., Canada and Australia.
                </p>

            </div>

          </div>
        </div>
      </div>
    )
  }

  render(){

    return(
      <div className="container-fluid">

        <div className="background_landing_container width-100"style={{height:"700px",background:`url(${LandingBackground})`}}>
          {this.renderNavbar()}


          <div className="row">

              <div className="col-12">
                <h2 className="sub_slogan_landing margin-top-5 new_sub_slogan_landing"> Restaurants and more, <br />delivered to your door <br />
              </h2>
              </div>


                <div className="col-3"/>

                <div className="col-6 margin-top-5">

                    <input className="form-control width-100" placeholder = "Enter you address" value = {this.state.address} onChange = {(e)=>{
                      this.setState({address:e.target.value})
                    }}/>

                </div>

                <div className="col-2 margin-top-5">
                  <button className="width-100 btn black-background white "  onClick = {(e)=>{

                    this.props.GuestEntrance(this.state.address);
                  }}>Submit</button>
                  <button  className="width-100 margin-top-5 btn btn-danger black-background cw"onClick={()=>{this.props.ChangeURL("/admin/")}}> I Own a Foodtruck</button>

                </div>

              </div>




          </div>


          <div className="row">
            <div className="col-2"/>
            <div className="col-8">
              <div className="row">
                <div className="col-4">
                  <img className="width-100" src = {Logo1}/>
                  <p className="admin_show_title">Become an Owner</p>
                  <p className="admin_show_description">
                  As a delivery driver, you'll make reliable money—working anytime, anywhere.
                  </p>
                  <p className="admin_show_link">
                    Start Now
                  </p>
                </div>
                <div className="col-4">
                    <img className="width-100" src = {Logo2}/>
                    <p className="admin_show_title">Become a Partner</p>
                    <p className="admin_show_description">
                    Grow your business and reach new customers by partnering with us.
                    </p>
                    <p className="admin_show_link">
                      Start Now
                    </p>
                </div>
                <div className="col-4">
                      <img className="width-100" src = {Logo3}/>
                      <p className="admin_show_title">Showcase Your Menu</p>
                      <p className="admin_show_description">
                      Experience the best your neighborhood has to offer, all in one app.
                      </p>
                      <p className="admin_show_link">
                        Start Now
                      </p>
                </div>
              </div>
            </div>
          </div>

          {this.renderBox()}
          {this.renderBox2()}


      </div>

    )




  }
}

export default LandingDesktop;
