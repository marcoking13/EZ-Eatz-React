import React from "react";
import cookie from "react-cookies";
import "./../../css/home_page.css";
import Star from "./../../images/star.png";

var distance;

class FoodBox extends React.Component {

  renderStar(){
    var stars;
    var html = [];
    if(!this.props.foodtruck.stars){
      stars = 3;
    }else{
      stars = this.props.foodtruck.stars;
    }
    var k =0;

    for(var i = 0; i<stars;i++){
        k++;
        html.push(
        <div className="col-1 p0">
          <img alt="star"key = {k} src={Star} className="w100"/>
        </div>
        );
      }

    return html;
  }

  render(){
    // Renders the Foodtruck Box for the home page;
    if(window.innerWidth >= 600){
         return (
           <div className="col-3  pb5 ml5" key ={this.props.id} onClick = {(e)=>{
             var foodtruckID = this.props.foodtruck.objectID;

             cookie.remove("foodtruckCurrent",{path:"/"});
             cookie.remove("orders",{path:"/"});
             cookie.save("foodtruckCurrent",foodtruckID,{path:"/"});

             this.props.ClearOrder();
             this.props.changeURL("menu");

           }}>

             <img alt="showcase" className="w100 moveUpDown br10px h100px"  src={this.props.foodtruck.background}/>

             <div className="row">
               <div className="col-12 pb5 fl">
                 <br />
                 <p className="bold text-left "><strong>{this.props.foodtruck.name}</strong></p>
                 <p className="text-left ml1">{this.props.foodtruck.address.street + "," + this.props.foodtruck.address.state+","+this.props.foodtruck.address.zip}</p>
                 <p className=" text-left  ml1 text-left">{this.props.distance}</p>
               </div>
               <div className="col-12 ">
                 <div className="row">
                   {this.renderStar()}
                 </div>
             </div>
           </div>

         </div>
         )
        }else{
          return(
            <li className="list-group-item container-fluid" key ={this.props.id} onClick = {(e)=>{
              var foodtruckID = this.props.foodtruck.objectID;

              cookie.remove("foodtruckCurrent",{path:"/"});
              cookie.remove("orders",{path:"/"});
              cookie.save("foodtruckCurrent",foodtruckID,{path:"/"});

              this.props.ClearOrder();
              this.props.changeURL("menu");

            }}>
              <div classaName="row">
                <div className="col-2">
                  <img src={this.props.foodtruck.logo} className="fl listLogoH"/>
                </div>

                <div className="col-5 fl">
                    <p className="text-center bold"><strong>{this.props.foodtruck.name}</strong></p>
                </div>

                <div className="col-5 fl">
                  <p className="text-center ">{this.props.foodtruck.address.street + "," + this.props.foodtruck.address.state+","+this.props.foodtruck.address.zip}</p>
                </div>
              </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="row">
                        <div className="col-2"/>
                        {this.renderStar()}
                      </div>
                    </div>
                    <div className="col-6">
                        <p className="text-center">{(Math.floor(Math.random() * 10) + 1)+" miles"}</p>
                    </div>
                  </div>

                </li>
          )
        }
      }
}

export default  FoodBox;
