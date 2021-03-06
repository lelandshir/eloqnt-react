import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  state = {
    alias: "",
    cost: "",
    qtyOnHand: "",
    par: "",
    orderQty: "",
    item: "",
    vendor: "",
    notes: "",
    img: "",
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
      img: this.state.img,
    });
  };

  addRestopItem = (event) => {
    event.preventDefault();
    axios
      .post("/restop", {
        alias: this.state.alias,
        cost: this.state.cost,
        qtyOnHand: this.state.qtyOnHand,
        par: this.state.par,
        orderQty: this.state.orderQty,
        item: this.state.item,
        vendor: this.state.vendor,
        notes: this.state.notes,
        img: this.state.img,
      })
      .then((res) => {
        this.setState({
          restop: res,
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
      alias: "",
      cost: "",
      qtyOnHand: "",
      par: "",
      orderQty: "",
      item: "",
      vendor: "",
      notes: "",
      img: "",
    });
  };

  render() {
    return (
      <div className="form-check form-check-inline" style={this.style.div}>
        <h3 style={this.style.formHeader}>Add Item to Restop Master</h3>
        <form onSubmit={this.addRestopItem}>
          <input
            onChange={this.handleChange}
            id={"item"}
            type="text"
            placeholder="item"
            value={this.state.item}
            name="resItem"
          />
          <input
            onChange={this.handleChange}
            id={"alias"}
            type="text"
            placeholder="what we call it"
            value={this.state.alias}
          />
          <input
            onChange={this.handleChange}
            id={"cost"}
            type="number"
            step=".01"
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
            id={"vendor"}
            type="text"
            placeholder="vendor"
            value={this.state.vendor}
          />
          <input
            onChange={this.handleChange}
            id={"notes"}
            type="text"
            placeholder="notes"
            value={this.state.notes}
          />
          <input
            onChange={this.handleChange}
            id={"img"}
            type="text"
            placeholder="image url"
            value={this.state.img}
          />
          <br />
          <input
            style={this.style.submit}
            type="submit"
            value="add restop item"
          />
        </form>
      </div>
    );
  }
}
