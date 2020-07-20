import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  style = {
    divStyle: {
      textAlign: "center",
    },
    submit: {
      width: "inherit",
      backgroundColor: "#037bfe",
      color: "#fff",
      fontWeight: "600",
      borderRadius: ".3rem",
      marginTop: "0px",
      position: "center",
    },
    links: { borderRadius: ".3rem", padding: "4px", fontWeight: "600" },
  };
  render() {
    const btn = "border border-white rounded btn-primary m-1";
    return (
      <nav>
        <div style={this.style.divStyle}>
          {/*<button className={btn} href="#">
              home
            </button>*/}
          <Link style={this.style.links} className={btn} to="/liquor">
            liquor
          </Link>
          <Link style={this.style.links} className={btn} to="/food">
            food
          </Link>
          <Link style={this.style.links} className={btn} to="/restop">
            restop
          </Link>
          <Link style={this.style.links} className={btn} to="/recipes">
            recipes
          </Link>
          <Link style={this.style.links} className={btn} to="/invoices">
            invoices
          </Link>
          <Link style={this.style.links} className={btn} to="/calendar">
            calendar
          </Link>
          <Link style={this.style.links} className={btn} to="/todos">
            todos
          </Link>
          <Link style={this.style.links} className={btn} to="/contacts">
            contacts
          </Link>
        </div>
      </nav>
    );
  }
}
