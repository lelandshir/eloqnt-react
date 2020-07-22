import React, { Component } from "react";

export default class Todos extends Component {
  style = {
    marginTop: "100px",
    fontWeight: "bold",
    input: {
      marginTop: "2px",
      borderRadius: ".3rem",
    },
  };
  render() {
    return (
      <div align="center" style={this.style}>
        <h3>Todos Are Coming Soon!</h3>
      </div>
    );
  }
}
