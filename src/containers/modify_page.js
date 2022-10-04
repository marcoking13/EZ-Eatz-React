import React from "react";
import cookie from "react-cookies";

import "./../css/modify.css";

import Navbar from "./../components/Navbar/home_nav_bar.js";
import Modify from "./../components/Modify/modify_component.js";
import Footer from "./../components/Footer/footnote.js";
import BackArrow from  "./../images/back_arrow.png";

//-------------------------------Constructor-------------------------------------
class ModifyPage extends React.Component {
  //----------------------------Constructor--------------------------------
  constructor(props){
    super(props);

    var options = this.props.item.options.length > 0 ? this.props.item.options[0] :  [];

    this.state = {
      item:this.props.item,
      add:[],
      remove:[],
      type:options,
      price:this.props.item.price
    }

    window.scrollTo(0,0);

  }


  RemoveOrAddIngredient = (ingredient,state,no_concat) =>{

    if(no_concat){

      return { state:ingredient}

    }
    else{
       if(state.length <= 0){

        return { state: state.concat(ingredient)}

      }else {

          for(var i = 0; i < state.length; i++){

            if(state[i] === ingredient){

                delete state[i];

                return { state:state};

              }

            }

            return {state:state.concat(ingredient)}

        }

      }

  }



  CalculateTotal = (price)=>{

    var total = price;

    if(this.state.type.length > 0){
      total += this.state.type[0].price;
    }

    for(var i = 0; i < this.state.add.length;i++){
      if(this.state.add[i]){
        total += this.state.add[i].price;
      }
    }

    return total;

  }


  AddIngredient = (ingredient) => {

    var state = this.state.add;
    var new_state = this.RemoveOrAddIngredient(ingredient,state,false);

    this.setState({add:new_state.state});

  }

  ChangeType = (ingredient) => {

    var state = this.state.type;
    var new_state = this.RemoveOrAddIngredient(ingredient,state,true);

    this.setState({type:[new_state.state]});

  }

  RemoveIngredient = (ingredient) => {

    var state = this.state.remove;

    var new_state = this.RemoveOrAddIngredient(ingredient,state,false);

    this.setState({remove:new_state.state});

  }

    renderJumbotron(){

        return (
          <div className="container-fluid mt5">

              <div className="row">

                <div className="col-4">
                  <div className="row">
                    <div className="col-2"/>
                    <div className="col-9">
                      <img className="w100 " src = {this.props.item.image} />
                      <br />
                    </div>
                    <br />
                  </div>
                    <br />
                    <p className="itemName " style={{fontSize:"22px",marginLeft:"25%"}}>{this.state.item.name}</p>
                    <p className="modify_description mt2_5 ml25">{this.props.item.description}</p>
                  <p className="modify_total mt5 ml25"style={{fontSize:"22px",marginLeft:"25%"}}>Total: --------------------- ${this.CalculateTotal(this.state.price)} </p>

                  <div className="row">

                    <div className="col-3"/>

                        <div className="col-6 mt2_5">

                          <button
                              className="btn add-to-cart ui cb f13px w100"
                              onClick={()=>{
                                this.addItem("menu")
                                }}>
                              Add To Cart
                              </button>

                            </div>



                    </div>

                </div>
                <div className="col-1"/>

                <div className="col-7">
                  <div className="row">
                  <div className="col-4">
                    <p className="modTitle mt5 text-center mono f18px">Options</p>
                    <Modify
                      prefix = ""
                      current_modifiers = {this.state.type}
                      modifiers = {this.state.item.options}
                      modifyIngredient = {this.ChangeType}
                      price = {this.state.price.toFixed(2)}
                     />
                  </div>

                  <div className="col-4">
                    <p className="modTitle mt5 text-center mono f18px">Add</p>
                    <Modify
                      prefix = ""
                      current_modifiers = {this.state.add}
                      modifiers = {this.state.item.addons}
                      modifyIngredient = {this.AddIngredient}
                      price = {this.state.price.toFixed(2)}
                     />
                  </div>

                  <div className="col-4">
                  <p className="modTitle mt5 text-center mono f18px">Remove</p>
                      <Modify
                          prefix = "No"
                          current_modifiers = {this.state.remove}
                          modifiers = {this.state.item.ingredients}
                          modifyIngredient = {this.RemoveIngredient}
                          price = {this.state.price.toFixed(2)}
                        />
                  </div>
                  </div>

                <div className="col-12"></div>

              </div>
              </div>

            <br />

        </div>
      );

    }
    addItem(url){

      var order = {
        name:this.state.item.item,
        price:this.state.price,
        item:this.state.item,
        mod:{
          add:this.state.add,
          remove:this.state.remove,
          type:this.state.type
        }
      }

      var comfirm_order = this.props.ClearOrder(order,this.props.truck);


      if(comfirm_order){
        this.props.ChangeURL(url);
      }

    }


    //----------------------------------------------Renderer---------------------------------------
  render(){

    return (
      <div>
        <Navbar
          orders = {this.props.orders}
          account = {this.props.account}
          ChangeAddress = {this.props.ChangeAddress}
          address = {this.props.address}
          ChangeURL = {this.props.ChangeURL}
          navStyle ="white"
        />

        <div className="back_arrow_container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-1">
                    <img className="back_arrow_to_menu" src = {BackArrow} onClick = {()=>{
                      this.props.ChangeURL("menu");
                    }}/>
                  </div>
                  <div className="col-9 w100">
                    <p className="back_arrow_text">Go Back to Menu</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="pb20px">
          {this.renderJumbotron()}
        </div>

        <Footer />

      </div>
    )

  }

}

export default ModifyPage;
