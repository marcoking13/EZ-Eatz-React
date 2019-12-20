import React from "react";
import axios from "axios";
import BackArrow from "./../../images/backArrow.png"

class Form1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      errUser:false,
      errPassword:false
    }
  }
  renderPassword(err){
    if(err){
      return(

        <input className="form-control brr2" value={this.props.account.password} onChange={(event)=>{this.props.changers.changePassword(event.target.value)}} type="email"/>

      );
    }else{
      return(
          <input className="form-control " value={this.props.account.password} onChange={(event)=>{this.props.changers.changePassword(event.target.value)}} type="password"/>
      )
    }
  }

  renderConfirm(err){
    if(err){
      return(
        <div>
          <p className="text-center cr">Passwords Do Not Match</p>
          <input className="form-control brr2" value={this.props.account.confirm} onChange={(event)=>{this.props.changers.changeConfirm(event.target.value)}} type="password"/>
        </div>
        );
    }else{
      return(
          <input className="form-control " value={this.props.account.confirm} onChange={(event)=>{this.props.changers.changeConfirm(event.target.value)}} type="password"/>
      )
    }
  }

  renderUsername(err){
    if(err){
      return(
        <div>
          <p className="text-center cr">Please Enter Another Username</p>
          <input className="form-control brr2" value={this.props.account.username} onChange={(event)=>{this.props.changers.changeUsername(event.target.value)}} type="password"/>
        </div>
      );
    }else{
      return(
          <input className="form-control " value={this.props.account.username} onChange={(event)=>{this.props.changers.changeUsername(event.target.value)}} type="password"/>
      )
    }
  }



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
                  {this.renderUsername(this.state.errUser)}
                </div>

                <div className="co1-1"/>
              </div>

              <div className="row mr6">
                <div className="col-1"/>

                <div className="col-10">
                  <p className="formTitleSignup">Enter Password</p>
                    {this.renderPassword(this.state.errPassword)}
                </div>

                <div className="co1-1"/>
              </div>

              <div className="row mr6">
                <div className="col-1"/>

                <div className="col-10">
                  <p className="formTitleSignup">Confirm Password</p>
                  {this.renderConfirm(this.state.errPassword)}

                <div className="co1-1"/>
              </div>


              <div className="row mr6">
                  <div className="col-1"/>
                  <div className="col-10">
                      <button className="userButtonSign w100 btn-secondary btn"onClick ={()=>{
                        axios.get("/api/users").then((resp)=>{
                          if(resp){
                            var flag = true;
                            resp.data.map((user)=>{
                              if(user.account.username === this.props.account.username || this.props.account.username === ""){
                                  this.setState({errUser:true});
                                  flag = false;
                              }else if(this.props.account.confirm !== this.props.account.password || this.props.account.password === "" && this.props.account.confirm === ""){
                                  this.setState({errPassword:true})
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

      </div>

      </div>


    )
  }
}
export default Form1;
