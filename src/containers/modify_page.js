import React from "react";
import cookie from "react-cookies";

import "./../css/modify.css";

import HomePageNav from "./../components/Navbar/home_nav_bar.js";
import Addon from "./../components/Modify/addon_component.js";
import Remover from "./../components/Modify/remover_component.js";
import RemoveResult from "./../components/Modify/remove_result_component.js";
import AddResult from "./../components/Modify/add_result_component.js";
import Footer from "./../components/Footer/footnote.js";
//-------------------------------Constructor-------------------------------------
class ModifyPage extends React.Component {
  //----------------------------Constructor--------------------------------
  constructor(props){
    super(props);
    var item = JSON.parse(cookie.load("currentItem",{path:"/"}));

    this.state = {
      item:item,
      add:[],
      remove:[],
      price:item.price
    }
    //---------------------Binders----------------------------------
      this.returnPrice = this.returnPrice.bind(this);
      this.addIngredient = this.addIngredient.bind(this);
      this.removeIngredient = this.removeIngredient.bind(this);

      window.scrollTo(0,0);

  }
  //------------------------------------Returns Price of Item----------------------------------
  // Gets the price of item and turns into a two place decimal number
  returnPrice(modPrice){
    var newPrice =  (this.state.price + modPrice);
    newPrice = Math.round(newPrice * 100) / 100;
    return newPrice;
  }
  //-------------------------------------Add and Remove Items from State-------------------------------
  addIngredient(mod){
      // If there are no items added then its ok to add items without looping to verify
    if(this.state.add.length === 0){
      this.setState({ add: this.state.add.concat(mod),price:this.returnPrice(mod.price)});
    }else if(this.state.add.length >= 1){
      // if more than one mods are selected then loop the added mods allow toggling between it being selected
      for(var i = 0; i<= this.state.add.length;i++){
          // If the  user clicked a mod that was already clicked, toggle mod off and remove it from state
        if(this.state.add[i] === mod){
          var priceReduction = (this.state.price - mod.price);
          priceReduction = Math.round(priceReduction * 100) / 100;
          delete this.state.add[i];
            this.setState({ add: this.state.add,price:priceReduction});
            break;
        }
          // If the  user clicked a mod that was already clicked, toggle mod on and add it to the state
        if(i>=this.state.add.length){
            this.setState({ add: this.state.add.concat(mod),price:this.returnPrice(mod.price)});
            break;
          }
        }
      }
   }
    removeIngredient(mod){
        // If there are no items removed then its ok to remove items without looping to verify
        if(this.state.remove.length === 0){
          this.setState({ remove: this.state.remove.concat(mod)});
        }else if(this.state.remove.length >= 1){
            // if more than one mods are selected then loop the removed mods allow toggling between it being selected
          for(var i = 0; i<= this.state.remove.length;i++){
            // If the  user clicked a mod that was already clicked, toggle mod off and remove it from state
            if(this.state.remove[i] === mod){
              delete this.state.remove[i];
                this.setState({ remove: this.state.remove});
                break;
            }
            // If the  user clicked a mod that was not clicked, toggle mod on and add to state
            if(i>=this.state.remove.length){
              this.setState({ remove: this.state.remove.concat(mod)});
              break;
            }

          }
        }
    }
    //---------------------------------------Render Labels and Titles-------------------------------------------
    // Renders "Add" text if item has items to add
    renderAddText(){
      if(this.state.item.add){
        return <p className="modTitle text-center mt5 mono f18px ">Add</p>
      }else{
        return null
      }
    }
    // Renders "Remove" text if item has items to remove
    renderRemoveText(){
        if(this.state.item.ingredients.length > 0){
          return   <p className="modTitle mt2_5 text-center mono f18px">Remove</p>
        }else{
          return null
        }
      }
    //Renders the item image and changes the size depending on the pixel width
    renderJumbotron(){

        return (
          <div className="container-fluid">
              <p className="modTitle text-center mono f18px mt2_5">Add Order</p>

              <div className="row">
                <div className="col-10"/>
                <div className="col-1">
                  <img className="w100" src = {this.state.item.image} />
                </div>
              </div>

              <div className="row">
                <div className="col-4"/>
                <div className="col-6">
                    <h6 className="itemName">{this.state.item.item}</h6>
                    <ul>
                        <AddResult  add = {this.state.add} />
                        <RemoveResult remove = {this.state.remove}/>
                    </ul>
                </div>
              </div>

            <div className="row">
              <div className="col-2"/>
              <div className="col-6">
                <h5 className="totalM w100 mt5 text-center fl">{"Total= $"+ this.state.price.toFixed(2)}</h5>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-4"/>
              <div className="col-4 ">

                <div className="row">

                  <div className="col-6">
                    <button
                        className="button ui red f13px inverted w100"
                        onClick={()=>{
                          this.addItem("menu")
                          }}>
                          Add To Cart
                        </button>
                      </div>

                    <div className="col-6">
                      <button
                        onClick={()=>{
                          this.addItem("checkout")
                          }}
                          className="button ui green f13px inverted w100">
                          Order and Checkout
                        </button>
                      </div>

                    </div>

                  </div>

                </div>

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
        }
      }

      this.props.addToOrder(order);
      this.props.changeURL(url);
    }

    //----------------------------------------------Renderer---------------------------------------
    //---------------------------------------------------------------------------------------------
  render(){

    return (
      <div>
        <HomePageNav
          orders = {this.props.orders}
          PostAddress = {this.props.PostAddress}
          changeZip = {this.props.zip}
          changeAddress = {this.props.changeAddress}
          SetAddress = {this.props.SetAddress}
          address = {this.props.address}
          changeURL = {this.props.changeURL}
          navStyle ="white"/>

        <div className="row pb20px">
          {this.renderJumbotron()}

        </div>
          <br />
        <div className="modContainer BTR">

            {this.renderAddText()}

          <div>
            <Addon
              add = {this.state.add}
              addIngredient = {this.addIngredient}
              price = {this.state.price.toFixed(2)}
              item = {this.state.item} />
          </div>

        </div>
        <div className="modContainer BTR">

            {this.renderRemoveText()}

          <div>
              <Remover
                  remove = {this.state.remove}
                  removeIngredient = {this.removeIngredient}
                  item = {this.state.item} />
          </div>

        </div>
          <Footer />
      </div>
    )
  }
}

export default ModifyPage;
