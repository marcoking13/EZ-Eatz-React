import React from "react";
import "./../css/modify.css";
import cookie from "react-cookies";

import HomePageNav from "./../components/home_nav_bar.js";
import Addon from "./../components/addon_component.js";
import Remover from "./../components/remover_component.js";
import RemoveResult from "./../components/remove_result_component.js";
import AddResult from "./../components/add_result_component.js";

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
    if(this.state.add.length == 0){
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
        if(this.state.remove.length == 0){
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
      if(this.state.item.add.length >= 1){
        return   <p className="modTitle ">Add</p>
      }else{
        return null
      }
    }
    // Renders "Remove" text if item has items to remove
    renderRemoveText(){
      if(this.state.item.ingredients.length >= 1){
        return   <p className="modTitle rTM">Remove</p>
      }else{
        return null
      }
    }
    //Renders the item image and changes the size depending on the pixel width
    renderLabel(){
      if(this.state.remove.length <= 0 || this.state.add.length <=0){
        return  <img className="itemCornerBig" src = {this.state.item.image} />
      }else{
          return <img className="itemCorner" src = {this.state.item.image} />
      }
    }
    //----------------------------------------------Renderer---------------------------------------
    //---------------------------------------------------------------------------------------------
  render(){
    return (
      <div>
          <HomePageNav  PostAddress = {this.props.PostAddress} changeZip = {this.props.zip} changeAddress = {this.props.changeAddress} SetAddress = {this.props.SetAddress} address = {this.props.address}  changeURL = {this.props.changeURL}  navStyle ="white"/>
        <div className="row">
          {this.renderLabel()}
          <br />
        </div>
        <div className="modContainer">
            {this.renderAddText()}
          <div>
              <Addon add = {this.state.add} addIngredient = {this.addIngredient} item = {this.state.item} />
          </div>
        </div>
        <div className="modContainer">
              {this.renderRemoveText()}
          <div>
              <Remover remove = {this.state.remove} removeIngredient = {this.removeIngredient} item = {this.state.item} />
          </div>
        </div>
        <div className="payContainer bbLL">
            <p className="modTitle rTM">Add Order</p>
            <div className="row ">
              <div className="col-3"/>
              <div className="col-5">
                  <h6 className="itemName">{this.state.item.item}</h6>
                  <ul>
                      <AddResult  add = {this.state.add} />
                      <RemoveResult remove = {this.state.remove}/>
                  </ul>
              </div>
            </div>
          <div className="row">
            <h5 className="totalM">{"Total= $"+ this.state.price}</h5>
          </div>
          <div className="row">
          <div className="col-12 ">
            <button className="btn bl btn-danger adder">Add To Cart</button>
            <button className="btn bll btn-warning startC adder">Add To Cart and Checkout</button>
          </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ModifyPage;
