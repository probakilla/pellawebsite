import React, { Component } from "react";

class PellaImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(    
      <div className="container">
        <div className="row">
          <div className="col-12 center-text">
              <img id="pella-logo" src="../resources/pella_logo.png" className="rounded mx-auto d-block"/>
          </div>
        </div>
      </div>
    );
  }
}

export default PellaImage;