import React from "react";

class ShowboxUser extends React.Component {

constructor(props){
  super(props);
  this.state = {
    address:""
  }
}

renderDesktop(){
  return(
    <div className="row ">

        <div className="col-12">
          <h2 className="sub_slogan_landing margin-top-5 new_sub_slogan_landing"> Restaurants and more, <br />delivered to your door <br />
        </h2>
        </div>


          <div className="col-3"/>

          <div className="col-6 margin-top-5">

              <input className="form-control width-100" placeholder = "Enter you address" value = {this.state.address} onChange = {(e)=>{
                this.setState({address:e.target.value})
              }}/>

          </div>

          <div className="col-2 margin-top-5">
            <button className="width-100 btn black-background white "  onClick = {(e)=>{

              this.props.GuestEntrance(this.state.address,null,false);
            }}>Submit</button>
            <button  className="width-100 margin-top-5 btn btn-danger black-background cw"onClick={()=>{this.props.ChangeURL("/admin/")}}> I Own a Foodtruck</button>

          </div>

        </div>





  )
}

renderMobile(){
  return(
      <div className="row margin-top-10">

        <div className="col-12">
          <h2 className="sub_slogan_landing margin-top-5 new_sub_slogan_landing" style="text-align:left;font-size:35px"> Restaurants and more, delivered to your door <br />  </h2>
        </div>

        <div className="col-1"/>

        <div className="col-10 margin-top-10">
          <input className="form-control width-100" style="padding:5%;"placeholder = "Enter you address" value = {this.state.address} onChange = {(e)=>{
            this.setState({address:e.target.value})
          }}/>

          <button className="width-100 btn black-background white margin-top-5 " style="padding:5%" type="submit" onClick = {(e)=>{
            this.props.GuestEntrance(this.state.address,null,false);
          }}>Submit</button>
          <p style="font-size:20px;margin-top:2.5%"><a>Sign In Here </a> if you are a foodtruck owner </p>
        </div>



    </div>



  )
}

render(){
  if(window.innerWidth >= 844){
    return(
      <div>
        {this.renderDesktop()}
      </div>
    )
  }else{
    return(
      <div>
        {this.renderMobile()}
      </div>
    )
  }
}

}


export default ShowboxUser;
