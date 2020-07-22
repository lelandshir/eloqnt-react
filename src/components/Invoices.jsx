import React, { Component } from "react";

export default class Invoices extends Component {
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
        <h3>Invoice Tracking is Coming Soon!</h3>
      </div>
    );
  }
}
