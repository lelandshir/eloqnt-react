import React, { Component } from "react";
import axios from "axios";

export default class EditFoodForm extends Component {
  state = {
    food: [],

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
      border: "1px solid black",
      borderRadius: ".3rem",
      padding: "20px",
    },
    formHeader: { marginRight: "5px" },
    submit: {
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

  componentDidMount() {
    axios.get("/food").then((res) => {
      this.setState({
        food: res.data,
      });
    });
  }

  editFood = (_id) => {
    console.log(_id);
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/food/` +
          _id,
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
          food: res.data,
        });
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
    this.setState({
      item: this.state.item,
      category: this.state.category,
      cost: this.state.cost,
      qtyOnHand: this.state.qtyOnHand,
      par: this.state.par,
      vendor: this.state.vendor,
      orderQty: this.state.orderQty,
      notes: this.state.notes,
    });
    this.props.toggleForm();
  };

  render() {
    // console.log(this.props.foods);
    return (
      <div
        align="center"
        className="form-check form-check-inline"
        style={this.style.div}
        width="200px"
      >
        {/*<h3>Edit Food</h3>*/}
        <form onSubmit={this.handleSubmit} className="form-inline">
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"item"}
            type="text"
            placeholder="item"
            defaultValue={this.props.foods.item}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"category"}
            type="text"
            placeholder="on-hand"
            defaultValue={this.props.foods.category}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"cost"}
            type="number"
            step=".01"
            placeholder="cost"
            defaultValue={this.props.foods.cost}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"qtyOnHand"}
            type="number"
            step=".01"
            placeholder="on-hand"
            defaultValue={this.props.foods.qtyOnHand}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"par"}
            type="number"
            step=".01"
            placeholder="PAR"
            defaultValue={this.props.foods.par}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"vendor"}
            type="text"
            defaultValue={this.props.foods.vendor}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"orderQty"}
            type="number"
            step=".01"
            placeholder="order quantity"
            defaultValue={this.props.foods.orderQty}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"notes"}
            type="text"
            placeholder="notes"
            defaultValue={this.props.foods.notes}
          />
          <br />
          <input
            className="form-control form-control-sm"
            style={this.style.submit}
            type="submit"
            value="submit edits"
            onClick={() => this.editFood(this.props.foods._id)}
          />
          <br />
          <input
            className="form-control form-control-sm"
            type="submit"
            onClick={this.props.toggleForm}
            value="cancel"
            style={this.style.submit}
          />
        </form>
      </div>
    );
  }
}
