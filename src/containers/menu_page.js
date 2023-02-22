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

    var menu_col_size = window.innerWidth  >= 844 ? 7 : 12
    var listing_col_size = window.innerWidth  >= 844 ? 3 : 12
    var spacer_col_size = window.innerWidth  >= 844 ? 2 : 0

    return(
      <div>

        <Navbar
          url = {this.props.url}
          orders = {this.props.orders}
          toggle_map = {false}
          account = {this.props.account}
          address = {this.props.address}
          ChangeURL = {this.props.ChangeURL}
        />

        <Showcase
          SetAddress = {this.props.SetAddress}
          renderExpensive = {this.renderExpensive}
          ChangeURL = {this.props.ChangeURL}
          truck = {this.props.truck}
        />

        <div className="container-fluid menu_container mt5">

        <div className="row">

          <div clasName={"col-"+ listing_col_size+ " catagory_listings"}>
          <CatagoryListings truck = {this.props.truck}/>
          </div>

          <div className={spacer_col_size}/>

          <div className={"menux col-"+menu_col_size}>
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
