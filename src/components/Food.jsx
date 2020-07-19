import React, { Component } from "react";
import axios from "axios";
import AddFoodForm from "./AddFoodForm.jsx";

export default class food extends Component {
  state = {
    food: [],
    header: "Food Inventory",
    // search: "",
  };
  style = {
    deleteButton: {
      fontSize: "12px",
      padding: "1px 1 1 1",
      borderRadius: "5rem",
      marginLeft: "20px",
      fontWeight: "900",
      backgroundColor: "#bc0102",
    },
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px" },
  };
  //get foods in db
  componentDidMount() {
    axios.get("http://localhost:8008/food").then((res) => {
      this.setState({
        food: res.data,
      });
    });
  }

  deleteFoodItem = (_id, e) => {
    axios
      .delete(`/food/${_id}`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        const food = this.state.food.filter((foods) => foods._id !== _id);
        this.setState({ food });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={this.style.container}>
        <AddFoodForm />
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
              <li>
                <p style={this.liStyle}>
                  <b>{foods.item}</b> | <b> Category: </b>
                  {foods.category} |<b> Vendor: </b>
                  {foods.vendor} | <b>Cost:</b> ${foods.cost} | <b>OH: </b>
                  {foods.qtyOnHand} | <b>PAR:</b> {foods.par} |
                  <b> Order Qty: </b> {foods.orderQty}
                  <button
                    title="delete item"
                    className="btn-xs btn-danger"
                    style={this.style.deleteButton}
                    onClick={(e) => this.deleteFoodItem(foods._id, e)}
                  >
                    x
                  </button>
                </p>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}
