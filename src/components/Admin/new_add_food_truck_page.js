import React from "react";
// import FoodTruck from "./../../../config/foodtruck_contructor.js";
import "./../../css/utility.css";
import "./../../css/admin_add_menu.css";
import CatagoryListings from "./../Menu/catagory_listings.js";
import MenuRows from "./../Menu/menu_row.js";
import Showcase from "./../Menu/show_box.js";


// import mongodb from "mongodb";

import MenuDisplay from "./Authentication/menu_display";

import axios from "axios";


class AddFoodTruckPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      types:[""],
      name:"",
      address:"",
      truck:"",
      background:"",
      isLoading:true,
      mapLogo:null,
      routes:[],
      ownerID:null,
      id:null,
      _id:null,
      logo:"",
      modal_type:"truck",
      isEdit:this.props.isEdit,
      typeMax:3,
      menu:{
        catagories:[],
      }

    }

  }

  GetAdmin = async ()=>{

    if(this.state.isEdit){

      const {data} = await axios.post("/admin/find_one",{username:this.props.account.username});
      const truck_data = await axios.post("/admin/find_one_truck",{_id:data._id});
      var foodtruckData = truck_data.data;

      if(data){

        var address = foodtruckData.address;
        var name = foodtruckData.name;
        var menu = foodtruckData.menu;
        var logo = foodtruckData.logo;
        var ownerID = foodtruckData.ownerID;
        var id = foodtruckData.objectID;
        var mapLogo = foodtruckData.mapLogo;
        var types = foodtruckData.type;
        var background = foodtruckData.background;

        this.setState({
          types:types,
          name:name,
          isLoading:false,
          id:id,
          truck:data.truck,
          address:address,
          ownerID:ownerID,
          background:background,
          mapLogo:mapLogo,
          logo:logo,
          menu:menu

        })

      }

    }else{
      this.setState({
        isLoading:false
      })
    }

  }

 componentDidMount(){
   this.GetAdmin();
 }

  // Submit To Props
  SubmitTruck = () => {
    var s = this.state;

    if(this.props.isEdit){
      var edit_truck = {
        types:s.types,
        objectID:s.id,
        ownerID:s.ownerID,
        lat:null,
        lng:null,
        name:s.name,
        address:s.address,
        mapLogo:s.mapLogo,
        background:s.background,
        logo:s.logo,
        menu:s.menu,
        priceAverage: 0,
        vegan_friendly: false,
        stars: 3,
        distance: null,
        distance_int: 0,
        mapLogo: null
      }
      console.log(edit_truck);
      this.props.editTruck(edit_truck);
    }else{


      var truck = {
        ownerID: null,
        objectID: Math.floor(Math.random() * 99999999),
        ownerName:this.props.ownerName,
        types:s.types,
        lat:null,
        lng:null,
        route:[],
        name:s.name,
        address:s.address,
        mapLogo:s.mapLogo,
        background:s.background,
        logo:s.logo,
        menu:s.menu
      }
      this.props.SubmitInput(truck,this.props.dataKey);
    }

  }

  // Adders
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

     this.setState({menu:new_menu})

  }

  AddType = () =>{

    if(this.state.types.length <= this.state.typeMax){
      var new_types = [...this.state.types,""];
      this.setState({types:new_types});
    }else{
      alert("Type Max Exceeded");
    }

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

     this.setState({menu:new_menu})

  }

  // Handlers

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
    menu.catagories = catagories;

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
    menu.catagories = catagories;

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
    menu.catagories = catagories;

    this.setState({menu:menu});

  }


  HandleItemDescriptionChange = (value,catagory_index,item_index) =>{

    value = this.limit(value,30);

    var menu = {...this.state.menu}
    var catagories = [...menu.catagories];
    var catagory = catagories[catagory_index];
    var items = catagory.items;

    items[item_index].description = value;
    catagory.items = items;
    catagories[catagory_index] = catagory;
    menu.catagories = catagories;

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

    this.setState({menu:menu});

  }

  HandleTypeInputs = (i,value) =>{
    var types = [...this.state.types];
    types[i] = value;
    this.setState({types:types});
  }

  HandleAddressChange = (value) => {
    this.setState({address:value});
  }

  HandleLogoChange = (value) => {
    this.setState({logo:value});
  }

  HandleMapLogoChange = (value) => {
    this.setState({mapLogo:value});
  }

  HandleNameChange = (value) => {
    this.setState({name:value});
  }

  HandleBackgroundLogoChange = (value) => {
    this.setState({background:value});
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
    menu.catagories = catagories;

    this.setState({menu:menu});

  }

  // Renderers

  renderItems = (index) => {

      if(this.state.menu.catagories[index].items.length > 0){

          var jsx =  this.state.menu.catagories[index].items.map((item,item_index)=>{

            return(

              <div className="margin-left-20 padding-bottom-20 margin-top-10 ">
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


                <div className="margin-left-15 width-90 float-left"  >
                    <p className="add_foodtruck_subtitle">Add Ingredients</p>
                      {this.renderIngredients(index,item_index)}
                    <div className="add_symbol" onClick = {()=>{
                        this.AddIngredient(index,item_index);
                    }}>Add Ingredients
                    </div>
                  </div>

                  <div className="margin-left-15 width-90 float-left" >
                      <p className="add_foodtruck_subtitle">Add Extras</p>
                        {this.renderSizes(index,item_index)}
                      <div className="add_symbol" onClick = {()=>{
                          this.AddSize(index,item_index);
                      }}>Add Sizes
                      </div>
                    </div>

                    <div className="margin-left-15 width-90 float-left" >
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
          <div className="margin-top-10 padding-bottom-15">
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
          <div className="margin-top-10 padding-bottom-15">
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
          <div className="margin-top-10 padding-bottom-20" >
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

  renderCatagory = () =>{

    if(this.state.menu.catagories.length > 0){

        var jsx =  this.state.menu.catagories.map((catagory,index)=>{

            return(
              <div className="padding-bottom-20 margin-top-10" >
                <div class="add-form">
                  <input className="form-control input_add_truck" placeholder="Enter Catagory Name" key = {index} value = {catagory.name}
                    onChange = {(e)=>{
                        this.HandleCatagoryChange(e.target.value,index)
                    }}
                  />

                </div>
                <div className="margin-left-20 margin-top-10">
                  <p className="add_foodtruck_subtitle">Food Items</p>
                  {this.renderItems(index)}
                  <div className="add_symbol margin-left-35" onClick = {()=>{
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

  renderTypeInputs = () => {
    if(this.state.types.length > 0){
    return this.state.types.map((type,index)=>{

      return(
        <div className="margin-top-5">
          <div class="add-form">
            <input className="form-control input_add_truck" placeholder="Enter Foodtruck Type" key = {index} value = {type}
              onChange = {(e)=>{
                this.HandleTypeInputs(index,e.target.value);
              }}
            />

          </div>
        </div>

      )

    })
  }else{
    return <div />
  }

  }

  limit = (input,value) => {

    if(input.length > value) {

      return input.substr(0, value) + " ...";
    }else{
      return input;
    }

  }

  renderModal = () => {
        if(this.state.modal_type == "truck"){
            return (
              <div>
                {this.renderTruckModal()}
              </div>
            )
        }
  }

  renderTruckModal(){
    var truck = {
        types:this.state.types,
        name:this.state.name,
        address:this.state.address,
        background:this.state.background,
        mapLogo:this.state.mapLogo,
        logo:this.state.logo,
        menu:this.state.menu
      }

      return (
        <div className="container-fluid" style={{position:"absolute",top:0,left:0,width:"100%",background:"black",opacity:.7,height:"1080px"}}>
          <div class="row">
            <div class="col-3"/>
            <div class="col-6"style={{background:"white"}}>
              <div class="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-12">
                      <input className="form-control input_add_truck" placeholder="Enter Foodtruck Name" value = {this.state.name}
                        onChange = {(e)=>{
                          this.HandleNameChange(e.target.value);
                        }}
                    />
                    </div>

                    <div className="col-12">
                      <input className="form-control input_add_truck" placeholder="Enter Foodtruck Address" value = {this.state.address}
                        onChange = {(e)=>{
                          this.HandleAddressChange(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-12">
                      <input className="form-control input_add_truck" placeholder="Enter Logo Url" value = {this.state.logo}
                        onChange = {(e)=>{
                          this.HandleLogoChange(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-12">
                      <input className="form-control input_add_truck" placeholder="Enter Map Logo Url" value = {this.state.mapLogo}
                        onChange = {(e)=>{
                          this.HandleMapLogoChange(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-12">
                      <input className="form-control input_add_truck" placeholder="Enter Background Logo Url" value = {this.state.background}
                        onChange = {(e)=>{
                          this.HandleBackgroundLogoChange(e.target.value);
                        }}
                      />
                    </div>

                  <div className="col-7">
                    {this.renderTypeInputs()}
                    <div className="add_symbol" onClick = {()=>{
                        this.AddType();
                    }}>Add Cuisine Food</div>
                  </div>

                </div>

             </div>
               <div className="col-6">
                 <MenuDisplay truck = {truck} account = {this.props.account} />
               </div>
           </div>
        </div>


          </div>
        </div>
      )

  }

  renderView = () => {
    var menu_col_size = window.innerWidth  >= 844 ? 7 : 12
    var listing_col_size = window.innerWidth  >= 844 ? 3 : 12
    var spacer_col_size = window.innerWidth  >= 844 ? 2 : 0
    var truck = {
        types:this.state.types,
        name:this.state.name,
        address:this.state.address,
        background:this.state.background,
        mapLogo:this.state.mapLogo,
        logo:this.state.logo,
        menu:this.state.menu
      }

    return(
      <div className="width-100">
      <p className="add_foodtruck_title"> Create Your Menu </p>

      <Showcase
        ChangeURL = {console.log("No")}
        truck = {truck}
      />

      <div className="container-fluid menu_container mt5">

      <div className="row">

          <div clasName={"col-"+ listing_col_size+ " catagory_listings"}>
          <CatagoryListings truck = {truck}/>
          </div>

          <div className={spacer_col_size}/>

          <div className={"menux col-"+menu_col_size}>
             <MenuRows truck = {truck} SetItem = {console.log("No")}/>
          </div>

        </div>

        </div>
      </div>
    )

  }

  render(){




    var account = {
      address:this.state.address,
      name:this.state.name,
      background:this.state.background,
      logo:this.state.logo
    }

    if(this.state.isLoading){
      return <div> ....Loading</div>
    }

    return(

      <div className="container-fluid ">
        {this.renderModal()}
        {this.renderView()}
      </div>



      )

   }

}

export default AddFoodTruckPage;
