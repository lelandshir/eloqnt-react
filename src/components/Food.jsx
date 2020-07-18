import React, { Component } from "react";
import axios from "axios";

export default class food extends Component {
  state = {
    food: [],
    header: "food Inventory",
    // search: "",
  };
  style = {
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px", listStyleType: "none" },
  };
  //get foods in db
  componentDidMount() {
    axios.get("http://localhost:8008/food").then((res) => {
      this.setState({
        food: res.data,
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
        {/*mapping food data from db*/}
        {this.state.food.map((foods, i) => {
          return (
            <ul style={this.style.ulStyle} key={i}>
              <p style={this.liStyle}>
                <b>{foods.item}</b> | <b> Category: </b>
                {foods.category} |<b> Vendor: </b>
                {foods.vendor} | <b>Cost:</b> ${foods.cost} | <b>OH: </b>
                {foods.qtyOnHand} | <b>PAR:</b> {foods.par} |<b> Order Qty: </b>{" "}
                {foods.orderQty}
              </p>
            </ul>
          );
        })}
      </div>
    );
  }
}
