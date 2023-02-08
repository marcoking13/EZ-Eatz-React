import React from "react";

import axios from "axios";

import "./../../css/dashboard.css";
import NavbarDesktop from "./../../components/Admin/Navbar/desktop_navbar.js";
import MenuDisplay from "./../../components/Admin/Authentication/menu_display";
import MapDisplay from "./../../components/Admin/Maps/google_map.js";
import OrdersDisplay from "./../../components/Admin/Orders/order_display.js";

import Edit from "./../../images/edit_admin.png"
class DashboardPage extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      menu:null,
      truck:null,
      orders:[],
      account:null,
      loading:true,
      location:null
    }

  }

   GetAdmin = async ()=>{

     const {data} = await axios.post("/admin/find_one",{username:this.props.account.username});

     if(data){
       const response = await axios.post("/util/get_coords",{address:data.address});

       var location = {
         lat:data.lat,
         lng:data.lng,
         address:data.address
       }
       if(response.data){
         location.lat = response.data.lat;
         response.lng = response.data.lng;
       }
       this.setState({
         menu:data.truck.menu,
         truck:data.truck,
         orders:data.orders,
         account:data,
         loading:false,
         location:location
       })
     }
   }

  componentDidMount(){
    this.GetAdmin();
  }


  render(){
    if(this.state.loading){
      return <div >...Loading</div>
    }else{
      return(
        <div>
          <NavbarDesktop ChangeURL = {this.props.ChangeURL}/>
          <div className="menu_section container-fluid">
            <div className="row width-90 margin-left-5 margin-top-2_5">
                <div className="col-4 borders-gray-left borders-gray-right relative">
                  <img className="edit_icon" src={Edit} />
                  <p className="dashboard_title">{this.state.truck.name+ "'s "} Menu</p>
                  <MenuDisplay truck = {this.state.truck}/>
                </div>
                <div className="col-4 borders-gray-right relative">
                  <p className="dashboard_title">Your Location</p>
                  <img className="edit_icon" src={Edit} onClick = {()=>{this.props.ChangeURL("/admin/location")}}/>
                  <MapDisplay location = {this.state.location} />
                </div>
                <div className="col-4 borders-gray-right relative">
                  <p className="dashboard_title">Your Orders</p>
                    <img className="edit_icon" src={Edit}/>
                  <OrdersDisplay orders = {this.state.orders} />
                </div>
            </div>
          </div>
        </div>
      )
    }
  }

}

export default DashboardPage;
