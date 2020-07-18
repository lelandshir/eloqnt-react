import React, { Component } from "react";

export default class Header extends Component {
  title = "ELOQNT";
  style = {
    textAlign: "center",
    padding: "0",
  };
  render() {
    return (
      <div className="header" style={this.style}>
        <h1 style={this.style}>{this.title}</h1>
        <p style={this.style}>your restaurant management assistant</p>
        <hr />
      </div>
    );
  }
}
