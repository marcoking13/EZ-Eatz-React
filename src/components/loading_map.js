import React from "react";

import "./../css/loadingMap.css";


export default class LoadingMap extends React.Component {

  render(){
    return <div style={{background:"white",width:"100%",height:"1000px"}}> <img className="loaderMap" src="assets/images/loader.gif" /> </div>
  }
  
}
