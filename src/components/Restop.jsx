import React, { Component } from "react";
import axios from "axios";
import AddToRestopForm from "./AddToRestopForm.jsx";

export default class restop extends Component {
  state = {
    restop: [],
    header: "Restop Inventory",
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
  //get restops in db
  componentDidMount() {
    axios.get("/restop").then((res) => {
      this.setState({
        restop: res.data,
      });
    });
  }

  deleteRestopItem = (_id, e) => {
    axios
      .delete(`/restop/${_id}`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        const restop = this.state.restop.filter(
          (restops) => restops._id !== _id
        );
        this.setState({ restop });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={this.style.container}>
        <AddToRestopForm />
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
              <li>
                <p style={this.liStyle}>
                  <b>{restops.item}</b> |<b> Vendor: </b>
                  {restops.vendor} | <b>Cost:</b> ${restops.cost} | <b>OH: </b>
                  {restops.qtyOnHand} (units) | <b>PAR:</b> {restops.par} |
                  <b> Order Qty: </b> {restops.orderQty} |<b> Alias: </b>
                  {restops.alias} | <b>Notes: </b> {restops.notes}
                  <button
                    title="delete item"
                    className="btn-xs btn-danger"
                    style={this.style.deleteButton}
                    onClick={(e) => this.deleteRestopItem(restops._id, e)}
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
