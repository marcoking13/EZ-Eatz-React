import React from "react";
// import FoodTruck from "./../../../config/foodtruck_contructor.js";
import "./../../../css/utility.css";
import "./../../../css/navbar_admin.css";



class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          navData: [
            {
              url:"/admin/location",
              name:"Location"
            },
            {
              url:"/admin/menu",
              name:"Menu"
            },
            {
              url:"/admin/orders",
              name:"Orders"
            },
            {
              url:"/admin/account",
              name:"Account"
            }
          ]
        }
    }

    renderLinks(){
        return this.state.navData.map((data)=>{
          return (
            <div className="col-3" onClick = {()=>{this.props.ChangeURL(data.url)}}>
              <p className="nav_admin_name">{data.name}</p>
            </div>
          )
        })
    }



    render(){
        return(
          <div className="container-fluid navbar_admin">
            <div className="row">
              <div className="col-4">
                <p className="nav_admin_name">EZ-Eatz</p>
              </div>
              <div className="col-8">
                <div className="row">
                  {this.renderLinks()}
                </div>
              </div>
            </div>
        </div>
      )
    }

}


export default Navbar;
