import React from "react";
import axios from "axios";

import NavbarDesktop from "./../../components/Admin/Navbar/desktop_navbar.js";

import AddFoodTruckPage from "./../../components/Admin/add_food_truck_page.js";


class EditMenuPage extends React.Component {

  EditTruck = async(truck) =>{
    console.log(truck);
    const {data} = await axios.post("/admin/edit_truck",truck);
    if(data){
      alert("Menu Change Successful");
      console.log(data);
    }
  }

  render(){
    return(
      <div>
        <NavbarDesktop ChangeURL ={this.props.ChangeURL} />
        <AddFoodTruckPage account = {this.props.account} editTruck = {this.EditTruck} isEdit = {true}/>

      </div>
    )
  }

}


export default EditMenuPage;
