import React from "react";

import GoogleLogo from "./../../../images/googleLogo.png";

class ShowcaseAdmin extends React.Component {

  render(){
    return (

        <div className="row">

            <div className="col-12">
                <h2 className="sub_slogan_landing margin-top-5 new_sub_slogan_landing"> Restaurants and more, <br />delivered to your door <br /></h2>
            </div>

            <div className="col-4"/>

            <div className="col-4">
                <button className="width-100 btn white-background white margin-top-15 cb" type="submit" onClick = {(e)=>{
                  this.props.ChangeURL("landing");
                  e.preventDefault();
                 }}>See Foodtrucks</button>
                <button className="width-90 margin-left-5 btn white-background white margin-top-5 cb" type="submit" onSubmit = {(e)=>{e.preventDefault()}}>

                <img style={{width:"30px",height:"30px",float:"left"}} src={GoogleLogo}/>
                  Sign with Google
                </button>

            </div>

        </div>
    )
  }
}


export default ShowcaseAdmin;
