import React, { Component } from "react";

export default class Footer extends Component {
  style = {
    position: "fixed",
    bottom: "0",
    marginLeft: "230px",
    fontSize: "10px",
  };
  render() {
    return (
      <div style={this.style}>
        <p>© 2020 ELOQNT | Restaurant Mgmt Assistant by Leland Shirley</p>
      </div>
    );
  }
}
