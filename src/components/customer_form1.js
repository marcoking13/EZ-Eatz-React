import React from "react";
import axios from "axios";
import BackArrow from "./../images/backArrow.png"

class Form1 extends React.Component{
  render(){
    return(
      <div className="container-fluid loginpage" style={{background:`#f4f4f4`}}>

          <div className="row">
            <div className="col-1"/>

              <div className="col-10 jumbotron loginModal m650 juju" style={{background:`white`}}>
                <div  className="sheet"/>

                <div className="bubbles">
                  <div className="bubble"style={{background:"#689bed"}}/>
                  <div className="bubble"/>
                </div>

                <img alt="arrow" src={BackArrow}  className="backArrowLoginPage" />
                <h2 className="titleFormSignup">Please Answer the Following</h2>

                <div className="row mr6">
                  <div className="col-1"/>

                  <div className="col-10">
                    <p className="formTitleSignup">Enter Name</p>
                    <input className="form-control namer" value={this.props.name.first} onChange={(event)=>{this.props.changers.changeFirst(event.target.value)}}/>
                    <input className="form-control namer" value={this.props.name.last} onChange={(event)=>{this.props.changers.changeLast(event.target.value)}}/>
                  </div>

                  <div className="co1-1"/>
                </div>

              <div className="row mr6">
                <div className="col-1"/>

                <div className="col-10">
                  <p className="formTitleSignup">Enter Username</p>
                  <input className="form-control " value={this.props.account.username} onChange={(event)=>{this.props.changers.changeUsername(event.target.value)}}/>
                </div>

                <div className="co1-1"/>
              </div>

              <div className="row mr6">
                <div className="col-1"/>

                <div className="col-10">
                  <p className="formTitleSignup">Enter Password</p>
                  <input className="form-control " value={this.props.account.password} onChange={(event)=>{this.props.changers.changePassword(event.target.value)}} type="password"/>
                </div>

                <div className="co1-1"/>
              </div>

              <div className="row mr6">
                <div className="col-1"/>

                <div className="col-10">
                  <p className="formTitleSignup">Confirm Password</p>
                  <input className="form-control " value={this.props.account.confirm} onChange={(event)=>{this.props.changers.changeConfirm(event.target.value)}} type="password"/>
                </div>

                <div className="co1-1"/>
              </div>


              <div className="row mr6">
                  <div className="col-1"/>
                  <div className="col-10">
                      <button className="userButtonSign btn-secondary btn"onClick ={()=>{
                        axios.get("/api/users").then((resp)=>{
                          if(resp){
                            var flag = true;
                            resp.data.map((user)=>{
                              if(user.account.username === this.props.account.username || this.props.account.confirm !== this.props.account.password){
                                  console.log("Error either password doesnt confirm or the user");
                                  flag = false;
                                }
                              });

                              if(flag){
                                  this.props.addCount()
                              }
                            }
                          });

                        }}>Submit</button>
                    </div>
                    <div className="co1-1"/>
               </div>
            </div>
        </div>
          <div className="col-1"/>
      </div>

    )
  }
}
export default Form1;
