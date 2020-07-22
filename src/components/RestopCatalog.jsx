import React, { Component } from "react";
import axios from "axios";

export default class RestopCatalog extends Component {
  state = {
    restop: [],
    header: "Restop Catalog",
  };
  style = {
    deleteButton: {
      fontSize: "12px",
      padding: "1px 1 1 1",
      borderRadius: "5rem",
      margin: "10px",
      fontWeight: "900",
      backgroundColor: "#bc0102",
    },
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px" },
  };

  //get restops in db
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/restop"
      )
      .then((res) => {
        this.setState({
          restop: res.data,
        });
      });
  }

  render() {
    return (
      <div style={this.style}>
        <h3 style={this.style}>{this.state.header}</h3>
        <hr />

        <input
          type="text"
          placeholder="smart search"
          style={this.style.input}
        />
        {/*mapping restop data from db*/}
        {this.state.restop.map((restops, i) => {
          return (
            <div align="center" style={this.liStyle}>
              <b>{restops.item}</b>
              <br />
              <img src={restops.img} alt={restops.item} />
              <br />
              <b> Vendor: </b>
              {restops.vendor} | <b>Cost:</b> ${restops.cost} |<b> Alias: </b>
              {restops.alias}
              <br />
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
