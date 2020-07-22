import React, { Component } from "react";
import axios from "axios";
import AddToRestopForm from "./AddToRestopForm.jsx";
import EditRestopForm from "./EditRestopForm.jsx";

export default class Restop extends Component {
  state = {
    restop: [],
    header: "Restop Inventory",
    formVisible: false,
  };
  style = {
    deleteButton: {
      fontSize: "12px",
      padding: "1px 1 1 1",
      borderRadius: "5rem",
      margin: "10px",
      fontWeight: "900",
      backgroundColor: "#bc0102",
    },
    padding: "20px 0 0 30px",
    container: { padding: "30px" },
    input: { marginLeft: "30px" },
    ulStyle: { paddingLeft: "30px", margin: "5px" },
  };

  toggleForm = () => {
    this.setState({
      formVisible: !this.state.formVisible,
    });
  };
  //get restops in db
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/restop"
      )
      .then((res) => {
        this.setState({
          restop: res.data,
        });
      });
  }

  editRestop = (_id) => {
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/restop/${_id}`,
        {
          item: this.state.item,
          alias: this.state.alias,
          cost: this.state.cost,
          qtyOnHand: this.state.qtyOnHand,
          par: this.state.par,
          orderQty: this.state.orderQty,
          vendor: this.state.vendor,
          notes: this.state.notes,
          img: this.state.img,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          restop: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteRestopItem = (_id, e) => {
    axios
      .delete(
        `https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/restop/${_id}`
      )
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
              <div style={this.liStyle}>
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
                {this.state.formVisible ? (
                  <EditRestopForm
                    restops={restops}
                    toggleForm={this.toggleForm}
                  />
                ) : (
                  <input onClick={this.toggleForm} type="submit" value="edit" />
                )}
              </div>
            </ul>
          );
        })}
      </div>
    );
  }
}
