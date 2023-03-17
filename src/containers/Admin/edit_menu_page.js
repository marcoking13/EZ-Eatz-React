import React from "react";
import axios from "axios";

import NavbarDesktop from "./../../components/Admin/Navbar/desktop_navbar.js";

import AddFoodTruckPage from "./../../components/Admin/add_food_truck_page.js";
import Showcase from "./../../components/Menu/show_box.js";
import CatagoryListings from "./../../components/Menu/catagory_listings.js";
import MenuRows from "./../../components/Menu/menu_row.js";



class EditMenuPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing:false,
      item:null,
      truck:null
    }
  }

  GetAdmin = async ()=>{

    const {data} = await axios.post("/admin/find_one",{username:this.props.account.username});
    const tc = await axios.post("/admin/find_one_truck",{_id:data._id});
    var truck_data = tc.data;

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
        truck:truck_data
      })

    }

  }

  componentDidMount(){
      this.GetAdmin();
  }

  EditTruck = async(truck) =>{
    const {data} = await axios.post("/admin/edit_truck",truck);

    if(data){
      alert("Menu Change Successful");
      this.setState({truck:truck})
    }

  }

  SetItem = (item)=>{
    this.setState({item:item});
  }

  conditionalRendering= ()=>{

    var menu_col_size = window.innerWidth  >= 844 ? 7 : 12
    var listing_col_size = window.innerWidth  >= 844 ? 3 : 12
    var spacer_col_size = window.innerWidth  >= 844 ? 2 : 0

    if(this.state.isEditing == true){
        return <AddFoodTruckPage account = {this.props.account} editTruck = {this.EditTruck} isEdit = {true}/>
    }else{
      return(
        <div>
          <Showcase
            ChangeURL = {this.props.ChangeURL}
            truck = {this.state.truck}
          />

          <div className="container-fluid menu_container mt5">

            <div className="row">

                <div clasName={"col-"+ listing_col_size+ " catagory_listings"}>
                  <CatagoryListings truck = {this.state.truck}/>
                </div>

                <div className={spacer_col_size}/>

                <div className={"menux col-"+menu_col_size}>
                   <MenuRows truck = {this.state.truck} SetItem = {this.state.SetItem}/>
                </div>

            </div>

          </div>

      </div>

      )

    }

  }


  render(){
    console.log(this.state.truck);
    if(this.state.truck){
      var text = this.state.isEditing ? "View" : "Edit";
      return(
        <div className="container-fluid">

          <NavbarDesktop ChangeURL ={this.props.ChangeURL} />

            <div className="row">

              <div className="col-4">
                <button onClick = {()=>{
                  if(this.state.isEditing){
                    this.setState({isEditing:false})
                  }else{
                    this.setState({isEditing:true})
                  }
                }} className="btn width-100" style={{background:"black",color:"white",fontFamily:"Roboto"}}>{text}
              </button>

            </div>

        </div>
        {this.conditionalRendering()}

      </div>

      )

    }else{
      return <div>...Loading</div>
    }
  }

}


export default EditMenuPage;
