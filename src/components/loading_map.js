import React from "react";

import "./../css/loadingMap.css";


export default class LoadingMap extends React.Component {
  // Loading map animation
  render(){
    return <div> <img  alt="loader"className="loaderMap" src="assets/images/loader.gif" /> </div>
  }

}
