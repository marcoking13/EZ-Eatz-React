import React from "react";



class GraphicsAndText extends React.Component {



  RenderGraphics(){

    var start_button = window.innerWidth > 844 ? <p className="admin_show_link">  Start Now  </p> : <span />

    const graphics = this.props.config.map( (graphic) =>{
        return (
            <div className="col-4">
              <div className="width-100">
                <img className="width-100" src = {graphic.img}/>
                <p className="admin_show_title">{graphic.title}</p>
                <p className="admin_show_description">
                {graphic.description}
                </p>
                {start_button}
              </div>
            </div>
        )

    })

    return graphics;

  }

  render(){

    return(
      <div className="row">
          <div className="col-1"/>
          <div className="col-10">
            <div className="row">
              {this.RenderGraphics()}
          </div>
        </div>
      </div>
    )

  }

}

export default GraphicsAndText;
