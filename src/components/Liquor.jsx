import React, { Component } from "react";
import axios from "axios";
import AddLiquorForm from "./AddLiquorForm.jsx";
import EditLiquorForm from "./EditLiquorForm.jsx";

export default class Liquor extends Component {
  state = {
    liquor: [],
    header: "Liquor Inventory",
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

  componentDidMount() {
    axios.get("/liquor").then((res) => {
      this.setState({
        liquor: res.data,
      });
    });
  }

  editLiquor = (_id) => {
    // e.preventDefault();
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //pass the id as seen in Mongo and an event, filter() takes a rule from a callback -> return array with id's that are not the equal to the one I want to delete
  deleteLiquor = (_id, e) => {
    console.log(_id);
    axios
      .delete(`/liquor/${_id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const liquor = this.state.liquor.filter(
          (liquors) => liquors._id !== _id
        );
        this.setState({ liquor });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={this.style.container}>
        <AddLiquorForm />
        <h3 style={this.style}>{this.state.header}</h3>
        <hr />
        {/*search*/}
        <input type="text" placeholder="search" style={this.style.input} />
        {/*map over array of objects from db*/}
        {this.state.liquor.map((liquors, i) => {
          return (
            <ul style={this.style.ulStyle} key={i}>
              <div style={this.liStyle}>
                <b>{liquors.brand}</b> | <b>Type:</b> {liquors.type} |
                <b> Vendor: </b>
                {liquors.vendor} | <b>Cost:</b> ${liquors.cost} | <b>OH: </b>
                {liquors.qtyOnHand} (btls) | <b>PAR:</b> {liquors.par} |
                <b> Order Qty: </b> {liquors.orderQty} | <b>Notes: </b>
                {liquors.notes}
                <button
                  title="delete item"
                  className="btn-xs btn-danger"
                  style={this.style.deleteButton}
                  onClick={(e) => this.deleteLiquor(liquors._id, e)}
                >
                  x
                </button>
                {this.state.formVisible ? (
                  <EditLiquorForm
                    liquors={liquors}
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
