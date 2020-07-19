import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  state = {
    brand: "",
    type: "",
    vendor: "",
    cost: "",
    qtyOnHand: "",
    par: "",
    orderQty: "",
    notes: "",
  };

  style = {
    submit: {
      width: "175px",
      backgroundColor: "#037bfe",
      color: "#fff",
      fontWeight: "600",
    },
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px", listStyleType: "none" },
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(event, {
      brand: this.state.brand,
      type: this.state.type,
      vendor: this.state.vendor,
      cost: this.state.cost,
      qtyOnHand: this.state.qtyOnHand,
      par: this.state.par,
      orderQty: this.state.orderQty,
      notes: this.state.notes,
    });
  };

  addLiquor = (event) => {
    event.preventDefault();
    axios
      .post("/liquor", {
        brand: this.state.brand,
        type: this.state.type,
        vendor: this.state.vendor,
        cost: this.state.cost,
        qtyOnHand: this.state.qtyOnHand,
        par: this.state.par,
        orderQty: this.state.orderQty,
        notes: this.state.notes,
      })
      .then((res) => {
        this.setState({
          liquor: res,
        });
        this.clearForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ id: event.target.value });
    console.log(event.target.value);
  };

  clearForm = () => {
    this.setState({
      brand: "",
      type: "",
      vendor: "",
      cost: "",
      qtyOnHand: "",
      par: "",
      orderQty: "",
      notes: "",
    });
  };

  render() {
    return (
      <div style={this.style}>
        <h3>Add New Liquor Master:</h3>
        <form onSubmit={this.addLiquor}>
          <input
            onChange={this.handleChange}
            id={"brand"}
            type="text"
            placeholder="brand"
            value={this.state.brand}
          />
          <input
            onChange={this.handleChange}
            id={"type"}
            type="text"
            placeholder="type"
            value={this.state.type}
          />
          <input
            onChange={this.handleChange}
            id={"vendor"}
            type="text"
            placeholder="vendor"
            value={this.state.vendor}
          />
          <input
            onChange={this.handleChange}
            id={"cost"}
            type="number"
            placeholder="cost"
            value={this.state.cost}
          />
          <input
            onChange={this.handleChange}
            id={"qtyOnHand"}
            type="number"
            placeholder="on-hand"
            value={this.state.qtyOnHand}
          />
          <input
            onChange={this.handleChange}
            id={"par"}
            type="number"
            placeholder="PAR"
            value={this.state.par}
          />
          <input
            onChange={this.handleChange}
            id={"orderQty"}
            type="number"
            placeholder="order quantity"
            value={this.state.orderQty}
          />
          <input
            onChange={this.handleChange}
            id={"notes"}
            type="text"
            placeholder="notes"
            value={this.state.notes}
          />
          <input style={this.style.submit} type="submit" value="add liquor" />
        </form>
      </div>
    );
  }
}
