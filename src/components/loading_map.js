import React from "react";

import "./../css/loadingMap.css";

export default class LoadingMap extends React.Component {
  // Loading map animation
  render(){
    return (
        <div>
          <img
            alt="loader"
            className="bw w100 loaderMap"
            src="assets/images/loader.gif"
          />
        </div>
      );
    }

}
