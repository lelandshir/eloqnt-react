import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liquor: [],
      brand: "",
      type: "",
      vendor: "",
      cost: "",
      qtyOnhand: "",
      par: "",
      orderQty: "",
      notes: "",
    };
  }
  style = {
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px", listStyleType: "none" },
  };

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
  event.preventDefault();
  this.props.handleSubmit(event, {
    brand: this.state.brand,
    type: this.state.type,
    vendor: this.state.vendor,
    cost: this.state.cost,
    qtyOnhand: this.state.qtyOnhand,
    par: this.state.par,
    orderQty: this.state.orderQty,
  });

// this.setState({
//   brand: "",
//   type: "",
//   vendor: "",
//   cost: "",
//   qtyOnhand: "",
//   par: "",
//   orderQty: "",
//   notes: "",
// })


  addLiquor = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8008/liquor", {
        brand: event.target.value,
        type: event.target.value,
        vendor: event.target.value,
        cost: event.target.value,
        qtyOnhand: event.target.value,
        par: event.target.value,
        orderQty: event.target.value,
      })
      .then((res) => {
        this.setState({
          liquor: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={this.style}>
        <h3>Add New Liquor to Inventory:</h3>
        <form onSubmit={this.addLiquor}>
          <input type="text" placeholder="brand" value={this.state.brand} />
          <input type="text" placeholder="type" value={this.state.type} />
          <input type="text" placeholder="vendor" />
          <input type="number" placeholder="cost" />
          <input type="number" placeholder="on-hand" />
          <input type="number" placeholder="PAR" />
          <input type="number" placeholder="order quantity" />
          <input onClick={this.addLiquor} type="submit" value="add liquor" />
        </form>
      </div>
    );
  }
}

// handleDelete = (deletedItem) => {
//   axios.delete(`./liquor/${deletedItem.id}`).then(() => {
//     this.setState((state) => {
//       const liquor = state.liquors.filter((liquor) => {
//         return liquor.id !== deletedItem.id;
//       });
//       return { liquor };
//     });
//   });
// };

// handleChange(event) {
//   this.setState({ [event.target.id]: event.target.value });
// }
//
// handleSubmit(event) {
//   event.preventDefault();
//   this.handleSubmit(event, {
//     brand: this.state.brand,
//     type: this.state.type,
//     vendor: this.state.vendor,
//     cost: this.state.cost,
//     qtyOnhand: this.state.qtyOnhand,
//     par: this.state.par,
//     orderQty: this.state.orderQty,
//   });
//
//   // clear form
