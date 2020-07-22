import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  state = {
    liquor: [],
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
    div: {
      backgroundColor: "whitesmoke",
      border: "1px solid black",
      borderRadius: ".3rem",
      padding: "20px",
    },
    formHeader: { margin: "15px" },
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
      <div className="form-check form-check-inline" style={this.style.div}>
        <h3 style={this.style.formHeader}>Add Item to Liquor Master</h3>
        <form onSubmit={this.addLiquor}>
          <input
            onChange={this.handleChange}
            id={"brand"}
            type="text"
            placeholder="brand"
            value={this.state.brand}
            name="liqCost"
          />
          <input
            onChange={this.handleChange}
            id={"type"}
            type="text"
            placeholder="type"
            value={this.state.type}
            name="liqType"
          />
          <input
            onChange={this.handleChange}
            id={"vendor"}
            type="text"
            placeholder="vendor"
            value={this.state.vendor}
            name="liqVendor"
          />
          <input
            onChange={this.handleChange}
            id={"cost"}
            type="number"
            step=".01"
            placeholder="cost"
            value={this.state.cost}
            name="liqCost"
          />
          <input
            onChange={this.handleChange}
            id={"qtyOnHand"}
            type="number"
            step=".01"
            placeholder="on-hand"
            value={this.state.qtyOnHand}
            name="liqOH"
          />
          <input
            onChange={this.handleChange}
            id={"par"}
            type="number"
            placeholder="PAR"
            value={this.state.par}
            name="liqPAR"
          />
          <input
            onChange={this.handleChange}
            id={"orderQty"}
            type="number"
            placeholder="order quantity"
            value={this.state.orderQty}
            name="liqOQ"
          />
          <input
            onChange={this.handleChange}
            id={"notes"}
            type="text"
            placeholder="notes"
            value={this.state.notes}
            name="liqNotes"
          />
          <br />
          <input style={this.style.submit} type="submit" value="add liquor" />
        </form>
      </div>
    );
  }
}
