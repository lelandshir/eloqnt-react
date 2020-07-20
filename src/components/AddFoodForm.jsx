import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  state = {
    item: "",
    category: "",
    cost: "",
    qtyOnHand: "",
    par: "",
    vendor: "",
    orderQty: "",
    notes: "",
  };

  style = {
    div: {
      backgroundColor: "whitesmoke",
      border: "1px solid black",
      borderRadius: ".3rem",
      padding: "20px",
    },
    formHeader: { marginRight: "10px" },
    submit: {
      width: "inherit",
      backgroundColor: "#037bfe",
      color: "#fff",
      fontWeight: "600",
      borderRadius: ".3rem",
      marginTop: "0px",
      position: "center",
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
      alias: this.state.alias,
      cost: this.state.cost,
      qtyOnHand: this.state.qtyOnHand,
      par: this.state.par,
      orderQty: this.state.orderQty,
      item: this.state.item,
      vendor: this.state.vendor,
      notes: this.state.notes,
    });
  };

  addFoodItem = (event) => {
    event.preventDefault();
    axios
      .post("/food", {
        alias: this.state.alias,
        cost: this.state.cost,
        qtyOnHand: this.state.qtyOnHand,
        par: this.state.par,
        orderQty: this.state.orderQty,
        item: this.state.item,
        vendor: this.state.vendor,
        notes: this.state.notes,
      })
      .then((res) => {
        this.setState({
          food: res,
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
      item: "",
      category: "",
      cost: "",
      qtyOnHand: "",
      par: "",
      vendor: "",
      orderQty: "",
      notes: "",
    });
  };

  render() {
    return (
      <div className="form-check form-check-inline" style={this.style.div}>
        <h3 style={this.style.formHeader}>Add Food Item to Master</h3>
        <form onSubmit={this.addFoodItem}>
          <input
            onChange={this.handleChange}
            id={"item"}
            type="text"
            placeholder="item"
            value={this.state.item}
          />
          <input
            onChange={this.handleChange}
            id={"category"}
            type="text"
            placeholder='category (ie: "meat")'
            value={this.state.category}
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
            id={"vendor"}
            type="text"
            placeholder="vendor"
            value={this.state.vendor}
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
          <br />
          <input
            style={this.style.submit}
            type="submit"
            value="add food item"
          />
        </form>
      </div>
    );
  }
}
