import React, { Component } from "react";

export default class Header extends Component {
  title = "ELOQNT";
  style = {
    textAlign: "center",
    padding: "0",
    ptag: {
      marginTop: "40px",
      fontFamily: "Mansalva",
    },
  };
  render() {
    return (
      <div style={this.style}>
        <h1 className="header">{this.title}</h1>
        <p className={"tagline"} style={this.style.ptag}>
          your restaurant management assistant
        </p>
        <hr />
      </div>
    );
  }
}
