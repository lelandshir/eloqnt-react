import React, { Component } from "react";
import axios from "axios";
import AddFoodForm from "./AddFoodForm.jsx";
import EditFoodForm from "./EditFoodForm.jsx";

export default class Food extends Component {
  state = {
    food: [],
    header: "Food Inventory",
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
  //get foods in db
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/food"
      )
      .then((res) => {
        this.setState({
          food: res.data,
        });
      });
  }

  editFood = (_id) => {
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/food/${_id}`,
        {
          item: this.state.item,
          category: this.state.category,
          cost: this.state.cost,
          qtyOnHand: this.state.qtyOnHand,
          par: this.state.par,
          vendor: this.state.vendor,
          orderQty: this.state.orderQty,
          notes: this.state.notes,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          food: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteFoodItem = (_id, e) => {
    axios
      .delete(
        `https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/food/${_id}`
      )
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        const food = this.state.food.filter((foods) => foods._id !== _id);
        this.setState({ food });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={this.style.container}>
        <AddFoodForm />
        <h3 style={this.style}>{this.state.header}</h3>
        <hr />
        {/*search*/}
        <input
          type="text"
          placeholder="smart search"
          style={this.style.input}
        />
        {/*mapping food data from db*/}
        {this.state.food.map((foods, i) => {
          return (
            <ul style={this.style.ulStyle} key={i}>
              <div style={this.liStyle}>
                <b>{foods.item}</b> | <b> Category: </b>
                {foods.category} |<b> Vendor: </b>
                {foods.vendor} | <b>Cost:</b> ${foods.cost} | <b>OH: </b>
                {foods.qtyOnHand} | <b>PAR:</b> {foods.par} |<b> Order Qty: </b>
                {foods.orderQty} | <b>Notes:</b> {foods.notes}
                <button
                  title="delete item"
                  className="btn-xs btn-danger"
                  style={this.style.deleteButton}
                  onClick={(e) => this.deleteFoodItem(foods._id, e)}
                >
                  x
                </button>
                {this.state.formVisible ? (
                  <EditFoodForm foods={foods} toggleForm={this.toggleForm} />
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
