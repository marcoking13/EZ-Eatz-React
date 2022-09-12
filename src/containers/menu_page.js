import React from "react";

import cookie from "react-cookies";
import axios from "axios";

import HomePageNav from "./../components/Navbar/home_nav_bar";
import ShowBox from "./../components/Menu/show_box";
import CatagoryListings from "./../components/Menu/catagory_listings";
import MenuRows from "./../components/Menu/menu_row";
import MenuBoxes from "./../components/Menu/menu_boxes_component";
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
    // Save foodtruck in cookie to variable
    var foodtruckID  = cookie.load("foodtruckCurrent",{path:"/"});
    //------------------------------Axios Foodtruck Inialization-----------------------------
      // Find all foodtrucks in database and save into variable

    axios.get("/api/trucks").then((response)=>{
      var trucks = response.data;
        // Loop through each truck object
      for(var i = 0; i<trucks.length;i++){
        // If the selected truck's id matches the looped trucks
          //Save the currently looped truck into the state
        if(foodtruckID === trucks[i].objectID){
          this.setState({foodtruck:trucks[i]});
          this.props.SetTruck(trucks[i]);
          break;
        }
      }
    });
    //----------------------Binders---------------------------------------------------------------------------------

     this.SetItem = this.SetItem.bind(this);
     window.scrollTo(0,0);

  }
//-----------------------------------------Saved Selected Item to Cookie and State--------------------------------------
  SetItem = (item) =>{
    this.setState({item:item})
  }


//------------------------------------------------Renderer----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
  render(){

    return(
      <div>

        <HomePageNav
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

        <ShowBox
          SetAddress = {this.props.SetAddress}
          ChangeURL = {this.props.ChangeURL}
          truck = {this.props.truck}
        />

        <div className="container-fluid menu_container">

        <div className="row">
          <div style={{marginLeft:"3.5%"}}/>
          <div clasName="col-3 catagory_listings">
            <CatagoryListings truck = {this.props.truck}/>
          </div>
          <div style={{marginLeft:"10%"}}/>
          <div className="menux col-8 margin-left-5">
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
