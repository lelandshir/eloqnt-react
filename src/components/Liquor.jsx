import React, { Component } from "react";
import axios from "axios";
import Form from "./Form.jsx";

export default class Liquor extends Component {
  state = {
    liquor: [],
    header: "Liquor Inventory",
    // search: "",
  };
  style = {
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px", listStyleType: "none" },
  };

  componentDidMount() {
    axios.get("http://localhost:8008/liquor").then((res) => {
      this.setState({
        liquor: res.data,
      });
    });
  }

  render() {
    return (
      <div style={this.style.container}>
        <Form />
        <h3 style={this.style}>{this.state.header}</h3>
        <hr />
        {/*search*/}
        <input
          type="text"
          placeholder="smart search"
          style={this.style.input}
        />
        {/*mapping liquor data from db*/}
        {this.state.liquor.map((liquors, i) => {
          return (
            <ul style={this.style.ulStyle} key={i}>
              <p style={this.liStyle}>
                <b>{liquors.brand}</b> | <b>Type:</b> {liquors.type} |
                <b> Vendor: </b>
                {liquors.vendor} | <b>Cost:</b> ${liquors.cost} | <b>OH: </b>
                {liquors.qtyOnHand} (btls) | <b>PAR:</b> {liquors.par} |
                <b> Order Qty: </b> {liquors.orderQty}
              </p>
            </ul>
          );
        })}
      </div>
    );
  }
}

// //search function
// onChange = (event) => {
//   this.setState({ search: event.target.value.substr(0, 25) });
// };

// let filter = this.state.liquor.filter((liq) => {
//   return (
//     liq.brand.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
//   );
// }); //end filter
// console.log(filter);
