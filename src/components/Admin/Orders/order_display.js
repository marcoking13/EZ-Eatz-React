import React from "react";
import NoResults from "./../Loading/no_results_map.js";


class OrdersDisplay extends React.Component {
  constructor(props){
    super(props);
  }

  renderOrder = () =>{
    this.props.orders.map((order)=>{
      console.log(order);
    })
  }



render(){
  if(this.props.orders.length <= 0){
      return(
        <div>
          <NoResults title = "No Orders Yet" />
        </div>
      )
  }else{
  return <div ></div>
}


}

}
export default OrdersDisplay;
