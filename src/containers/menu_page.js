import React from "react";

import cookie from "react-cookies";
import axios from "axios";

import Navbar from "./../components/Navbar/home_nav_bar";
import Showcase from "./../components/Menu/show_box";
import CatagoryListings from "./../components/Menu/catagory_listings";
import MenuRows from "./../components/Menu/menu_row";
import Footer from "./../components/Footer/footnote.js";

import "./../css/menuPage.css";
import "./../css/new_menu.css";

//--------------------------Component -----------------------------------------
class MenuPage extends React.Component {
  //--------------------------Constructor-------------------------------------------
  constructor(props){
    super(props);

    this.state = {
      foodtruck:{},
      currentItem:{},
      item:null
    }


     window.scrollTo(0,0);

  }
//-----------------------------------------Saved Selected Item to Cookie and State--------------------------------------
  SetItem = (item) =>{
    this.setState({item:item})
  }

  renderExpensive = () =>{
    var expensive = "";
    for(var i = 0; i < this.props.truck.expensive; i++){
      expensive += "$";
    }
    return expensive;
  }

//------------------------------------------------Renderer----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
  render(){

    console.log(this.props.truck);

    return(
      <div>

        <Navbar
          orders = {this.props.orders}
          account = {this.props.account}
          ChangeAddress = {this.props.ChangeAddress}
          SetAddress = {this.props.SetAddress}
          address = {this.props.address}
          ChangeURL = {this.props.ChangeURL}
          googleMap={this.state.flag}
          navStyle ="white"
        />

        <br />
        <br />

        <Showcase
          SetAddress = {this.props.SetAddress}
          renderExpensive = {this.renderExpensive}
          ChangeURL = {this.props.ChangeURL}
          truck = {this.props.truck}
        />

        <div className="container-fluid menu_container mt5">

        <div className="row">
          <div clasName="col-4 catagory_listings">
            <CatagoryListings truck = {this.props.truck}/>
          </div>
          <div className="col-2"/>
          <div className="menux col-7">
            <MenuRows truck = {this.props.truck} SetItem = {this.props.SetItem}/>
          </div>

        </div>

        </div>

        <Footer />

    </div>

    )

  }

}


export default MenuPage;
