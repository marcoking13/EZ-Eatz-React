import React from "react";
// import FoodTruck from "./../../../config/foodtruck_contructor.js";
import "./../../css/utility.css";
import "./../../css/admin_add_menu.css";


class AddFoodTruckPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      types:[""],
      name:"",
      address:null,
      background:null,
      mapLogo:null,
      routes:[],
      logo:null,
      typeMax:3,
      menu:{
        catagories:[],
      },


    }


  }

  AddCatagory = () => {
     var config = {
       name:"",
       id:Math.round(Math.random() * 9999999),
       items:[]
     }
     var new_menu = {...this.state.menu};
     var new_catagories = [...new_menu.catagories,config];
     new_menu.catagories = new_catagories;
     this.setState({menu:new_menu});

  }

  AddIngredient = (catagory_index,item_index) => {

     var config = {
       name:"",
     }

     var new_menu = {...this.state.menu};
     var new_catagories = [...new_menu.catagories];
     var catagory = new_catagories[catagory_index];
     var new_items = [...catagory.items];
     var item = new_items[item_index];
     var new_ingredients = [...item.ingredients,config];

     item.ingredients = new_ingredients;
     new_items[item_index] = item;
     catagory.items = new_items;
     new_catagories[catagory_index] = catagory;
     new_menu.catagories = new_catagories;
     console.log(new_menu);
     this.setState({menu:new_menu})

  }

  AddSize = (catagory_index,item_index) => {

     var config = {
       name:"",
       price:""
     }

     var new_menu = {...this.state.menu};
     var new_catagories = [...new_menu.catagories];
     var catagory = new_catagories[catagory_index];
     var new_items = [...catagory.items];
     var item = new_items[item_index];
     var new_size = [...item.sizes,config];

     item.sizes = new_size;
     new_items[item_index] = item;
     catagory.items = new_items;
     new_catagories[catagory_index] = catagory;
     new_menu.catagories = new_catagories;
     console.log(new_menu);
     this.setState({menu:new_menu})

  }

  AddAddon = (catagory_index,item_index) => {

     var config = {
       name:"",
       price:""
     }

     var new_menu = {...this.state.menu};
     var new_catagories = [...new_menu.catagories];
     var catagory = new_catagories[catagory_index];
     var new_items = [...catagory.items];
     var item = new_items[item_index];
     var new_addons = [...item.addons,config];

     item.addons = new_addons;
     new_items[item_index] = item;
     catagory.items = new_items;
     new_catagories[catagory_index] = catagory;
     new_menu.catagories = new_catagories;
     console.log(new_menu);
     this.setState({menu:new_menu})

  }



  HandleCatagoryChange = (value,index) => {
    var menu = {...this.state.menu};
    var catagories = [...menu.catagories];
    catagories[index].name = value;
    menu.catagories = catagories;
    this.setState({menu:menu})
  }

  HandleItemNameChange = (value,catagory_index,item_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    items[item_index].name = value;
    catagory.items = items;
    catagories[catagory_index] = catagory;
    console.log(catagories);
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});


  }

  HandleItemPriceChange = (value,catagory_index,item_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    items[item_index].price = value;
    catagory.items = items;
    catagories[catagory_index] = catagory;
    console.log(catagories);
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});


  }

  HandleItemImageChange = (value,catagory_index,item_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    items[item_index].image = value;
    catagory.items = items;
    catagories[catagory_index] = catagory;
    console.log(catagories);
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});


  }


  HandleItemDescriptionChange = (value,catagory_index,item_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    items[item_index].description = value;
    catagory.items = items;
    catagories[catagory_index] = catagory;
    console.log(catagories);
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});


  }

  HandleIngredientChange = (value,catagory_index,item_index,ingredient_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    var item = items[item_index];
    var ingredients = [...item.ingredients];
    var ingredient = ingredients[ingredient_index];
    ingredient.name = value;
    ingredients[ingredient_index] = ingredient;
    item.ingredients = ingredients;
    items[item_index] = item;
    catagories[catagory_index].items =  items;
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});


  }

  HandleAddonNameChange = (value,catagory_index,item_index,addon_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    var item = items[item_index];
    var addons = [...item.addons];
    var addon = addons[addon_index];
    addon.name = value;
    addons[addon_index] = addon;
    item.addons = addons;
    items[item_index] = item;
    catagories[catagory_index].items =  items;
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});


  }

  HandleAddonPriceChange = (value,catagory_index,item_index,addon_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    var item = items[item_index];
    var addons = [...item.addons];
    var addon = addons[addon_index];
    addon.price = value;
    addons[addon_index] = addon;
    item.addons = addons;
    items[item_index] = item;
    catagories[catagory_index].items =  items;
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});


  }

  HandleSizeNameChange = (value,catagory_index,item_index,size_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    var item = items[item_index];
    var sizes = [...item.sizes];
    var size = sizes[size_index];

    size.name = value;
    sizes[size_index] = size;
    item.sizes = sizes;
    items[item_index] = item;
    catagories[catagory_index].items =  items;
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});

  }

  HandleSizePriceChange = (value,catagory_index,item_index,size_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    var item = items[item_index];
    var sizes = [...item.sizes];
    var size = sizes[size_index];
    size.price = value;
    sizes[size_index] = size;
    item.sizes = sizes;
    items[item_index] = item;
    catagories[catagory_index].items =  items;
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});

  }

  HandleItemCaloriesChange = (value,catagory_index,item_index) =>{
    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;
    items[item_index].calories = value;
    catagory.items = items;
    catagories[catagory_index] = catagory;
    console.log(catagories);
    menu.catagories = catagories;
    console.log(menu);
    this.setState({menu:menu});


  }

  AddItem = (index) =>{
    var config = {
      name:"",
      description:"",
      price:"",
      image:"",
      calories:"",
      ingredients:[],
      sizes:[],
      addons:[],
      id:Math.round(Math.random() * 9999999),
    }

    var new_menu = {...this.state.menu};
    var new_catagory = [...new_menu.catagories];
    var catagory_item = new_catagory[index];
    var new_items = [...catagory_item.items,config];

    catagory_item.items = new_items;
    new_catagory[index] = catagory_item;
    new_menu.catagories = new_catagory;
    this.setState({menu:new_menu});

  }

  RenderItems = (index) => {

      if(this.state.menu.catagories[index].items.length > 0){
        var jsx =  this.state.menu.catagories[index].items.map((item,item_index)=>{

            return(
              <div style={{marginLeft:"15%",marginTop:"15%"}}>
                <div class="add-form">
                  <input className="form-control input_add_truck" placeholder="Enter Item Name" value = {item.name} onChange = {(e)=>{
                      this.HandleItemNameChange(e.target.value,index,item_index);
                  }}/>
                  <input className="form-control input_add_truck" placeholder="Enter Item Price" value = {item.price}
                  onChange = {(e)=>{
                      this.HandleItemPriceChange(e.target.value,index,item_index);
                  }}
                  />
                  <input className="form-control input_add_truck" placeholder="Enter Item Description" value = {item.description}
                  onChange = {(e)=>{
                      this.HandleItemDescriptionChange(e.target.value,index,item_index);
                  }}
                  />
                  <input className="form-control input_add_truck" placeholder="Enter Item Image Url" value = {item.image}
                  onChange = {(e)=>{
                      this.HandleItemImageChange(e.target.value,index,item_index);
                  }}
                  />
                  <input className="form-control input_add_truck" placeholder="Enter Item Calories" value = {item.calories}
                  onChange = {(e)=>{
                      this.HandleItemCaloriesChange(e.target.value,index,item_index);
                  }}
                  />
                </div>
                <div>


                <div className="margin-left-15" style={{width:"90%",float:"left"}} >
                    <p className="add_foodtruck_subtitle">Add Ingredients</p>
                      {this.renderIngredients(index,item_index)}
                    <div className="add_symbol" onClick = {()=>{
                        this.AddIngredient(index,item_index);
                    }}>Add Ingredients
                    </div>
                  </div>

                  <div className="margin-left-15" style={{width:"90%",float:"left"}} >
                      <p className="add_foodtruck_subtitle">Add Extras</p>
                        {this.renderSizes(index,item_index)}
                      <div className="add_symbol" onClick = {()=>{
                          this.AddSize(index,item_index);
                      }}>Add Sizes
                      </div>
                    </div>

                    <div className="margin-left-15" style={{width:"90%",float:"left"}} >
                        <p className="add_foodtruck_subtitle">Add Size</p>
                          {this.renderAddons(index,item_index)}
                        <div className="add_symbol" onClick = {()=>{
                            this.AddAddon(index,item_index);
                        }}>Add Addons
                        </div>
                      </div>
              </div>

          </div>

        )
      })

      return(
        <div>
          {jsx}

        </div>
      )
    }else{
      return <div />
    }
  }

  renderIngredients = (catagory_index,item_index) => {
    if(this.state.menu.catagories.length > 0 ){
      var jsx = this.state.menu.catagories[catagory_index].items[item_index].ingredients.map((ingredient,index)=>{
        return (
          <div>
            <input placeholder =  "Enter Ingredient"  className="input_add_truck form-control"
              onChange = {(e)=>{
                  this.HandleIngredientChange(e.target.value,catagory_index,item_index,index);
              }} value = {ingredient.name}
            />

          </div>
        )
      });
      return jsx;
    }else{
      return <div />
    }

  }

  renderAddons = (catagory_index,item_index) => {
    if(this.state.menu.catagories.length > 0 ){
      var jsx = this.state.menu.catagories[catagory_index].items[item_index].addons.map((addon,index)=>{
        return (
          <div>
            <input placeholder =  "Enter Addon Name"  className="input_add_truck form-control"
              onChange = {(e)=>{
                this.HandleAddonNameChange(e.target.value,catagory_index,item_index,index);
              }}
              value = {addon.name}
            />
            <input placeholder =  "Enter Price"  className="input_add_truck form-control"
              onChange = {(e)=>{
                this.HandleAddonPriceChange(e.target.value,catagory_index,item_index,index);
              }}
              value = {addon.price}
            />
          </div>
        )
      });
      return jsx;
    }else{
      return <div />
    }

  }

  renderSizes = (catagory_index,item_index) => {
    if(this.state.menu.catagories.length > 0 ){
      var jsx = this.state.menu.catagories[catagory_index].items[item_index].sizes.map((size,index)=>{
        return (
          <div>
            <input placeholder =  "Enter Size Name"  className="input_add_truck form-control"
            onChange = {(e)=>{
              this.HandleSizeNameChange(e.target.value,catagory_index,item_index,index);
            }}
            value = {size.name}
            />
            <input placeholder =  "Enter Price"  className="input_add_truck form-control"
            onChange = {(e)=>{
              this.HandleSizePriceChange(e.target.value,catagory_index,item_index,index);
            }}
            value = {size.price}
            />
          </div>
        )
      });
      return jsx;
    }else{
      return <div />
    }

  }

  RenderCatagory = () =>{
    if(this.state.menu.catagories.length > 0){
      var jsx =  this.state.menu.catagories.map((catagory,index)=>{

          return(
            <div>
              <div class="add-form">
                <input className="form-control input_add_truck" placeholder="Enter Catagory Name" key = {index} value = {catagory.name}
                  onChange = {(e)=>{
                      this.HandleCatagoryChange(e.target.value,index)
                  }}
                />

              </div>
              <div style={{marginLeft:"20%"}}>
              <p className="add_foodtruck_subtitle">Add Food Item</p>
              {this.RenderItems(index)}
              <div className="add_symbol" style={{marginLeft:"35%"}} onClick = {()=>{
                  this.AddItem(index);
              }}>Add Food Item </div>
            </div>
            </div>

      )
    })

    return(
      <div>
        {jsx}

      </div>
    )
  }else{
    return <div />
  }
  }

  AddType = () =>{
    if(this.state.types.length <= this.state.typeMax){
      var new_types = [...this.state.types,""];
      this.setState({types:new_types});
    }else{
      alert("Type Max Exceeded");
    }
  }

  renderTypeInputs = () => {
    return this.state.types.map((type,index)=>{
    return(
      <div>
        <div class="add-form">
          <input className="form-control input_add_truck" placeholder="Enter Foodtruck Type" key = {index} value = {type}
            onChange = {(e)=>{
              this.handleTypeInputs(index,e.target.value);
            }}
          />

        </div>
      </div>

    )
    })

  }

  handleTypeInputs = (i,value) =>{
    var types = [...this.state.types];
    types[i] = value;
    this.setState({types:types});
  }


  handleAddressChange = (value) => {
    this.setState({address:value});
  }

  handleLogoChange = (value) => {
    this.setState({logo:value});
  }

  handleMapLogoChange = (value) => {
    this.setState({mapLogo:value});
  }

  handleNameChange = (value) => {
    this.setState({name:value});
  }

  handleBackgroundLogoChange = (value) => {
    this.setState({background:value});
  }

  renderCatagories = () => {
    if(this.state.menu.catagories.length >0){
      var jsx = this.state.menu.catagories.map((catagory)=>{
          return (
            <div className="col-4 catagory_text_list">
              {catagory.name}
            </div>
          )
      })
      return(
        <div className="row">
          {jsx}
        </div>
      )
    }
  }

  renderMenu = ()=>{

        var menu = this.state.menu.catagories.map((catagory,catagory_index)=>{
          const catagory_jsx = <p className="catagory_row_title" key = {catagory_index} id = {catagory.name}> {catagory.name} </p>
          const item_jsx = catagory.items.map((item,item_index)=>{
               return (
                 <div className="row margin-top-2_5">
                    <div className="col-12">
                      <p className="item_name_result" key = {item.name}>{item.name}</p>
                    </div>
                    <div className="col-12">
                      <p className="item_name_result" key = {item.price}>${item.price}</p>
                    </div>
                    <div className="col-12">
                      <p className="item_name_result" key = {item.description}>{item.description}</p>
                    </div>
                 </div>
               )

            });

            return (
              <div className="menu_row_container width-100">
                {catagory_jsx}
                <div className="row menu_row width-100">
                {item_jsx}
                </div>
              </div>
            )

        });

      return menu;

  }

  render(){

    return(

      <div className="container-fluid ">

        <div className="row ">

          <div className="add_foodtruck_page col-6">

            <div className="col-12">
              <input className="form-control input_add_truck" placeholder="Enter Foodtruck Name" value = {this.state.name}
                onChange = {(e)=>{
                  this.handleNameChange(e.target.value);
                }}
            />
            </div>

            <div className="col-10">
              <input className="form-control input_add_truck" placeholder="Enter Foodtruck Address" value = {this.state.address}
                onChange = {(e)=>{
                  this.handleAddressChange(e.target.value);
                }}
              />
            </div>

            <div className="col-4">
              <input className="form-control input_add_truck" placeholder="Enter Logo Url" value = {this.state.logo}
                onChange = {(e)=>{
                  this.handleLogoChange(e.target.value);
                }}
              />
            </div>

            <div className="col-4">
              <input className="form-control input_add_truck" placeholder="Enter Map Logo Url" value = {this.state.mapLogo}
                onChange = {(e)=>{
                  this.handleMapLogoChange(e.target.value);
                }}
              />
            </div>

            <div className="col-4">
              <input className="form-control input_add_truck" placeholder="Enter Background Logo Url" value = {this.state.background}
                onChange = {(e)=>{
                  this.handleBackgroundLogoChange(e.target.value);
                }}
              />
            </div>

            <div className="col-7">
              {this.renderTypeInputs()}
              <div className="add_symbol" onClick = {()=>{
                  this.AddType();
              }}>Add Cuisine Food</div>
            </div>

            <br />
            <br />

            <div className="col-3"/>

            <div className="col-7">

              {this.RenderCatagory()}

              <div className="add_symbol" style={{marginTop:"15%"}} onClick = {()=>{
                  this.AddCatagory();
              }}>
                Add Catagory
              </div>

            </div>

          </div>

            <div className="col-1"/>

            <div className="col-4 admin_menu_container relative">

                  <div className="title_container_result">
                      <div className="background_container_result">
                        <img src = {this.state.background} className="width-100 background_result"/>
                      </div>

                    <div className="text_result">
                      <img className="width-50 logo_result" src={this.state.logo} />
                      <p className="title_result">{this.state.name} </p>
                      <p className="address_result">{this.state.address} </p>
                    </div>

                  </div>

                <div className="catagory_container_result">
                  {this.renderCatagories()}
                </div>

                <div className="menu_container_result">
                  {this.renderMenu()}
                </div>

              </div>

            </div>

          </div>

      )

   }

}

export default AddFoodTruckPage;
