import React from "react";


export default class GraphicBox extends React.Component {

  RenderRows(){

    var isImgFirst = true;

    const render_row = this.props.config.map((item) => {

      const offset = isImgFirst ?  {position:"relative",top:"50px"} : null;
      const background = !isImgFirst ?  {background:`rgb(255, 240, 237)`} : null;
      const col_img_size = window.innerWidth >= 844 ?   8 : 6;
      const col_text_size = window.innerWidth >= 844 ?   4 : 6;

      const img_col =
      <div className={"col-"+col_img_size}>
          <img className=" show_image_admin" style={offset} src = {item.img} />
      </div>

      const text_col =
       <div className={"col-"+col_text_size}>
            <p className="admin_info_title">{item.title}</p>
            <p className="admin_info_description">
              {item.description}
            </p>
        </div>

      const rendered_col = isImgFirst ?
        [img_col,
        text_col]
        :
        [text_col,
         img_col
       ];

       if(isImgFirst){
         isImgFirst = false;
       }else{
         isImgFirst = true;
       }

        const cols = rendered_col.map((col)=>{
          return col;
        })

        return (
          <div className="row padding-5 padding-top-20 " style={background}>
            {cols}
          </div>
        )

      });

      return render_row;

  }

  render(){
    const spacer = window.innerWidth >= 844 ? <div className="col-1"/> : <span />

    return(
      <div className="row">
        <div className={"col-12"}>

            {this.RenderRows()}

        </div>
      </div>
    )

  }

}
