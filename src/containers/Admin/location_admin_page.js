import React from "react";

import axios from "axios";

import "./../../css/dashboard.css";
import NavbarDesktop from "./../../components/Admin/Navbar/desktop_navbar.js";
import MenuDisplay from "./../../components/Admin/Authentication/menu_display";
import MapDisplay from "./../../components/Admin/Maps/google_map.js";
import OrdersDisplay from "./../../components/Admin/Orders/order_display.js";

import Edit from "./../../images/edit_admin.png";
import Track from "./../../images/track.png";

class LocationAdmin extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      new_address:"",
      truck:null,
      set_address:"",
      tracking:false,
      lat:null,
      lng:null,
      account:null,
      loading:true,
      location:null
    }

  }



  HandleAddressChange = (address) => {
    this.setState({new_address:address});
  }

  ChangeAddress = async() =>{
    var {data} = await axios.post("/util/get_coords",{address:this.state.new_address});
    console.log(data);


    this.setState({
      lat:data.lat,
      lng:data.lng,
      new_address:data.address,
      loading:false
    });
      //
    var response = await axios.post("/admin/change_location",{username:this.state.account.username,lat:data.lat,lng:data.lng,address:data.address});

  }

  GetAdmin = async ()=>{

    const {data} = await axios.post("/admin/find_one",{username:this.props.account.username});

    if(data){
      console.log(data);
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
        lat:location.lat,
        account:this.props.account,
        tracking:data.tracking,
        lng:location.lng,
        new_address:location.address,
        loading:false
      })

    }

  }

  ToggleTracker = async() => {
    let tracking = this.state.tracking;
    if(tracking){
      tracking = false
    }else{
      tracking = true;
    }
    const {data} = await axios("/admin/track_location",this.state.account.username);
    console.log(data);
    if(data){
      this.setState({tracking:tracking})
      var interval = setInterval(()=>{
        this.TrackEveryPerSecond(interval);
      },1000)

    }
  }

  TrackEveryPerSecond = async(interval) =>{

      if(this.state.tracking){
        navigator.geolocation.getCurrentPosition(async(location)=>{
          if(location){
            var {coords} = location;

            var location = {
              latitude:coords.latitude,
              longitude:coords.longitude,
              address:""
            }
            const r = await axios.post("/util/reverse_coords",location);

            if (r) {

                location.address = r.data;
                const updated_account = {...this.state.account};
                updated_account.address = location.address;
                updated_account.latitude = location.latitude;
                updated_account.longitude = location.longitude;
                console.log(updated_account);
                const {data} = axios.post("/admin/change_location",updated_account);
                console.log(data);
                this.setState({
                  lat:coords.latitude,
                  lng:coords.longitude,
                  tracking:true,
                  set_address:location.address,
                  new_address:location.address
                })
              }

      }else{
        clearInterval(interval);
      }
    });
    }
  }

  componentDidMount(){
    this.GetAdmin();
    var interval = setInterval(()=>{
      this.TrackEveryPerSecond(interval);
    },1000)
  }

  render(){
    var active = this.state.tracking ? "active_tracker" : "";
    var switch_on = this.state.tracking ? "Tracking On " : "Tracking Off"
    var location = {
      address:this.state.new_address,
      lat:this.state.lat,
      lng:this.state.lng
    }
    console.log(location);
    if(this.state.loading){
      return <div >...Loading</div>
    }else{

      return(
        <div className="container-fluid ">
          <NavbarDesktop ChangeURL = {this.props.ChangeURL}/>

          <div className="input_container_admin row">
            <div className="col-1"/>
            <div className="col-10">
              <div className="row margin-top-2_5">
                <div className="col-9">
                <form onSubmit = {(e)=>{e.preventDefault(); this.ChangeAddress()}}>
                <input className="input_admin_map form-control width-100 text-center"
                  value = {this.state.new_address}
                  onChange = {(e)=>{this.HandleAddressChange(e.target.value)}}
                />
              </form>
              </div>
              <div className="col-3">
                  <button className={"width-100 tracker_button btn btn-secondary "+active} onClick = {()=>{
                      this.ToggleTracker();
                  }}>{switch_on}</button>
              </div>
              </div>
            </div>

          </div>


          <div className="menu_section" key={location.address}>
            <div className="row width-90 margin-left-5 margin-top-2_5">
                <div className="col-12 relative">
                  <MapDisplay location = {location} lat = {location.lat} lng = {location.lng}/>
                </div>
            </div>


        </div>

     </div>

      )

    }

  }

}

export default LocationAdmin;
