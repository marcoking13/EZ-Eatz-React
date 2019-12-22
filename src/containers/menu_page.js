import React from "react";

import cookie from "react-cookies";
import axios from "axios";

import HomePageNav from "./../components/Navbar/home_nav_bar";
import ShowBox from "./../components/Menu/show_box";
import MenuBoxes from "./../components/Menu/menu_boxes_component";
import Footer from "./../components/Footer/footnote.js";
import FooterMobile from "./../components/Footer/footnote_mobile.js";


import "./../css/menuPage.css";

//--------------------------Component -----------------------------------------
class MenuPage extends React.Component {
  //--------------------------Constructor-------------------------------------------
  constructor(props){
    super(props);

    this.state = {
      foodtruck:{},
      currentItem:{}
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
  SetItem(item){
    this.setState({item:item});
    cookie.save("currentItem",item);
    this.props.changeURL("modify");
  }

  renderFooter(width){
    if(width <= 580){
      return <FooterMobile />
    }else{
      return <Footer />
    }
  }

//------------------------------------------------Renderer----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
  render(){
    return(
      <div>

        <HomePageNav
          orders = {this.props.orders}
          PostAddress = {this.props.PostAddress}
          changeZip = {this.props.zip}
          changeAddress = {this.props.changeAddress}
          SetAddress = {this.props.SetAddress}
          address = {this.props.address}
          changeFlag = {this.changeFlag}
          changeURL = {this.props.changeURL}
          googleMap={this.state.flag}
          navStyle ="white"
        />
        <br />
        <br />
        <ShowBox
          truck = {this.props.truck}
          SetAddress = {this.props.SetAddress}
          changeURL = {this.props.changeURL}
          foodtruck = {this.state.foodtruck}
          />
        <div className="menux">
          <MenuBoxes
            SetItem={this.SetItem}
            foodtruck = {this.state.foodtruck}
          />
        </div>
      
        {this.renderFooter(window.innerWidth)}
    </div>
    )
  }
}


export default MenuPage;
