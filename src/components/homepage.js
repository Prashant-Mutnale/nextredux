import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class HomePage extends Component {
  eventCategoty = () => {
    return (
      <div className="eventCategoryHolder">
        <div className="container pad-0">
          <h3>Events Category In Bangalore</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 pad-0">
              <div className="card-holder">
                <img src="../../static/images/cardimage.jpg" alt />
              </div>
              <div className="card-text">
                <h4>Night Trek</h4>
              </div>
            </div>
            <div className="col-lg-3 pad-0">
              <div className="card-holder">
                <img src="../../static/images/cardimage.jpg" alt />
              </div>
              <div className="card-text">
                <h4>Night Trek</h4>
              </div>
            </div>
            <div className="col-lg-3 pad-0">
              <div className="card-holder">
                <img src="../../static/images/cardimage.jpg" alt />
              </div>
              <div className="card-text">
                <h4>Night Trek</h4>
              </div>
            </div>
            <div className="col-lg-3 pad-0">
              <div className="card-holder">
                <img src="../../static/images/cardimage.jpg" alt />
              </div>
              <div className="card-text">
                <h4>Night Trek</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="banner">
          <img src="../../static/images/banner.jpg" alt="" />
        </div>
        {this.eventCategoty()}
      </div>
    );
  }
}

export default HomePage;
