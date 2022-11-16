// import React from "react";
//
//
// import Box from "./desktop_menu_box_component.js";
//
// class  MenuBoxes extends React.Component {
//
//   renderMenuBoxes(){
//     // Will Render Boxes
//       if(this.props.trucks.menu){
//
//           //Loop through all truck in menu
//           // If user is on desktop then render Desktop Boxes if mobile then will render mobile Boxes
//
//         return this.props.truck.menu.map((menu)=>{
//
//           var html = [];
//
//           for(var i=0;i<menu.food.length;i++){
//
//             html.push(  <Box _id = {i} SetItem = {this.props.SetItem} menu = {menu} i = {i} />  )
//
//           }
//           // This will determine what heading will be rendered
//           // If mobile set a unlited grop and the menu catagory
//         if(window.innerWidth <=800){
//           return(
//           <div>
//             <h5 className="menuTitleC ml5 mb2_5 mt2_5">{menu.catagory}</h5>
//             <ul className="list-group">
//               {html}
//             </ul>
//           </div>
//           )
//         }
//         // This will determine what heading will be rendered
//         // If Desktop set a row for the container to be rendered
//         else{
//           return(
//           <div>
//             <h5 className="menuTitleC  ml5 mb2_5 mt2_5">{menu.catagory}</h5>
//             <div className="row">
//               {html}
//             </div>
//           </div>
//           )
//         }
//         })
//
//       }
//     }
//
//   render(){
//     return <div> {this.renderMenuBoxes()} </div>
//   }
//
// }
//
// export default MenuBoxes;
