import React from "react";

export default class Footnote extends React.Component {

  render(){

    return(
      <div className="container-fluid bb">
        <div>
          <br />
          <div className="row">
              <div className="col-2">
                <br />

              </div>
            </div>

            <br />

          <div className="row">

            <div className="col-2">
                <ul>
                    <li className="bold gr none">Career</li>
                    <li className="none cw ">Resume</li>
                    <li className="none cw">Jobs</li>
                    <li className="none cw">Linkden</li>
                </ul>
              </div>
            </div>

            <div className="row">

              <div className="col-2">
                <ul>
                    <li className="bold gr none">Projects</li>
                    <li className="none cw">Games</li>
                    <li className="none cw">Apps</li>
                    <li className="none cw">Other</li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <ul>
                    <li className="bold gr none">Credits</li>
                    <li className="none cw ">Showcase</li>
                    <li className="none cw">Credit Doc</li>
                    <li className="none cw">Disclaimer</li>
                </ul>
              </div>
            <div className="col-2"/>
          </div>

              <div className="row">
                <div className="col-12">

                    <div className="row">
                        <div className="col-3"/>
                        <div className="col-3 ">
                          <img src= "./assets/images/insta.png" className="w50 ml25"/>
                        </div>
                        <div className="col-3">
                          <img src= "./assets/images/linked.png" className="w50 ml25"/>
                        </div>
                        <div className="col-3">
                          <img src= "./assets/images/face.png" className="w50 ml25"/>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>

              <br/>

              <div>
                <p className="gr text-center mono">I do not own any of the images or backgrounds. this website is purely used for personal use nothing else </p>
              </div>

              <br />

              <div className="row pb50px">
                <div className="col-1"/>
                <div className="col-2 turnW gr">Legal</div>
                <div className="col-2 turnW gr">Credits</div>
                <div className="col-2 turnW gr">Cookies</div>
                <div className="col-2 turnW gr">Policy</div>
                <div className="col-2 turnW gr">Disclaimer</div>
              </div>

            </div>

    )
  }
}
