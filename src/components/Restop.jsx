import React, { Component } from "react";
import axios from "axios";

export default class restop extends Component {
  state = {
    restop: [],
    header: "restop Inventory",
    // search: "",
  };
  style = {
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px", listStyleType: "none" },
  };
  //get restops in db
  componentDidMount() {
    axios.get("http://localhost:8008/restop").then((res) => {
      this.setState({
        restop: res.data,
      });
    });
  }

  render() {
    return (
      <div style={this.style.container}>
        <h3 style={this.style}>{this.state.header}</h3>
        <hr />
        {/*search*/}
        <input
          type="text"
          placeholder="smart search"
          style={this.style.input}
        />
        {/*mapping restop data from db*/}
        {this.state.restop.map((restops, i) => {
          return (
            <ul style={this.style.ulStyle} key={i}>
              <p style={this.liStyle}>
                <b>{restops.item}</b> |<b> Vendor: </b>
                {restops.vendor} | <b>Cost:</b> ${restops.cost} | <b>OH: </b>
                {restops.qtyOnHand} (units) | <b>PAR:</b> {restops.par} |
                <b> Order Qty: </b> {restops.orderQty} |<b> aka: </b> t{" "}
                {restops.alias}
              </p>
            </ul>
          );
        })}
      </div>
    );
  }
}
