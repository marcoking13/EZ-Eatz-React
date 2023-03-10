import React from "react";



class GraphicsAndText extends React.Component {



  RenderGraphics(){


    const graphics = this.props.config.map( (graphic) =>{
        if(window.innerWidth > 844){
        return (
              <div className="col-4">
                <div className="width-100">
                  <img className="width-100" src = {graphic.img}/>
                  <p className="admin_show_title">{graphic.title}</p>
                  <p className="admin_show_description">
                  {graphic.description}
                  </p>
                  <p className="admin_show_link">  Start Now  </p>
                </div>
              </div>
            )
          }else{
            return(
              <div className="row row_border">
                <div className="col-6">
                  <img className="width-100 logo_m" src = {graphic.img}/>
                </div>
                <div className="col-6">
                  <p className="admin_show_title">{graphic.title}</p>
                  <p className="admin_show_description">
                    {graphic.description}
                  </p>

                </div>
              </div>
            )
          }
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
