import React, { Component } from "react";
import axios from "axios";

export default class EditLiquorForm extends Component {
  state = {
    brand: "",
    type: "",
    vendor: "",
    cost: "",
    qtyOnHand: "",
    par: "",
    orderQty: "",
    notes: "",
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({
      formVisible: !this.state.formVisible,
    });
  };

  style = {
    div: {
      backgroundColor: "whitesmoke",
      // border: "1px solid black",
      borderRadius: ".3rem",
      padding: "20px",
    },
    formHeader: { marginRight: "5px" },
    submit: {
      width: "175px",
      backgroundColor: "#037bfe",
      color: "#fff",
      fontWeight: "600",
      borderRadius: ".3rem",
      marginTop: "0px",
      width: "inherit",
    },
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px", listStyleType: "none" },
  };

  editLiquor = (_id, e) => {
    e.preventDefault();
    axios
      .put(`/liquor/${_id}`, {
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
        console.log(res);
        console.log(res.data);
        this.setState({
          liquor: res,
        });
        this.clearForm();
      })
      .catch((err) => {
        console.log(err);
      });
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

  render() {
    return (
      <div
        align="center"
        className="form-check form-check-inline"
        style={this.style.div}
        width="200px"
      >
        {/*<h3 style={this.style.formHeader}>Edit Liquor</h3>*/}
        <form onSubmit={this.editLiquor} className="form-inline">
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"cost"}
            type="number"
            placeholder="cost"
            value={this.state.cost}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"qtyOnHand"}
            type="number"
            placeholder="on-hand"
            value={this.state.qtyOnHand}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"par"}
            type="number"
            placeholder="PAR"
            value={this.state.par}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"orderQty"}
            type="number"
            placeholder="order quantity"
            value={this.state.orderQty}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"notes"}
            type="text"
            placeholder="notes"
            value={this.state.notes}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            width="21px"
            id={"brand"}
            type="text"
            placeholder="brand"
            value={this.state.brand}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"type"}
            type="text"
            placeholder="type"
            value={this.state.type}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"vendor"}
            type="text"
            placeholder="vendor"
            value={this.state.vendor}
          />
          <br />
          <input
            className="form-control form-control-sm"
            style={this.style.submit}
            type="submit"
            value="submit edits"
          />
          <input
            className="form-control form-control-sm"
            type="submit"
            onClick={this.toggleForm}
            value="cancel"
            style={this.style.submit}
          />
        </form>
      </div>
    );
  }
}
