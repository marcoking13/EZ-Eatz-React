import React from "react";


class MenuDisplay extends React.Component {
  constructor(props){
    super(props);
  }

  renderCatagories = () => {
    if(this.props.truck.menu.catagories.length >0){

      var jsx = this.props.truck.menu.catagories.map((catagory)=>{
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

        var menu = this.props.truck.menu.catagories.map((catagory,catagory_index)=>{

          const catagory_jsx = <p className="catagory_row_title" key = {catagory_index} id = {catagory.name}> {catagory.name} </p>

          const item_jsx = catagory.items.map((item,item_index)=>{
               return (
                 <div className="row light_border margin-top-2_5 padding-left-2_5 width-100">
                    <div className="width-100 ">
                      <p className="item_name_result" key = {item.name}>{item.name}</p>
                    </div>
                    <div className="width-100 ">
                      <p className="item_name_result f16px" key = {item.price}>${item.price}</p>
                    </div>
                    <div className="width-100">
                      <p className="item_name_result f16px" key = {item.description}>{item.description}</p>
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
      <div className="width-100">

            <div className="title_container_result">
                <div className="background_container_result">
                  <img src = {this.props.truck.background} className="width-100 background_result"/>
                </div>

              <div className="text_result">
                <img className="width-50 logo_result" src={this.props.truck.logo} />
                <p className="title_result">{this.props.truck.name} </p>
                <p className="address_result">{this.props.truck.address} </p>
              </div>

            </div>

          <div className="catagory_container_result margin-top-10 ">
            {this.renderCatagories()}
          </div>

          <div className="menu_container_result">
            {this.renderMenu()}
          </div>

        </div>


    )
  }
}


export default MenuDisplay;
