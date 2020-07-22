import React, { Component } from "react";

export default class Home extends Component {
  style = {
    marginTop: "100px",
    fontWeight: "bold",
    input: {
      marginTop: "2px",
      borderRadius: ".3rem",
    },
  };
  render() {
    const btn = "border border-white rounded btn-primary m-1";
    return (
      <div className="welcome" align="center" style={this.style}>
        <h3 align="center">Welcome</h3>
        <form>
          <input style={this.style.input} type="text" placeholder="username" />
          <br />
          <input
            style={this.style.input}
            type="password"
            placeholder="password"
          />
          <br />
          <input
            style={this.style.links}
            className={btn}
            type="submit"
            value="log in"
          />
          <input
            style={this.style.links}
            className={btn}
            type="submit"
            value="register"
          />
        </form>
      </div>
    );
  }
}
