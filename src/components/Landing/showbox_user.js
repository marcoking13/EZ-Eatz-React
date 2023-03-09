import React from "react";

class ShowboxUser extends React.Component {

constructor(props){
  super(props);
  this.state = {
    address:""
  }
}

render(){
  return(
    <div className="row">

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

              this.props.GuestEntrance(this.state.address);
            }}>Submit</button>
            <button  className="width-100 margin-top-5 btn btn-danger black-background cw"onClick={()=>{this.props.ChangeURL("/admin/")}}> I Own a Foodtruck</button>

          </div>

        </div>





  )
}

}


export default ShowboxUser;
