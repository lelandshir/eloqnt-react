import React, { Component } from "react";
import axios from "axios";

export default class EditLiquorForm extends Component {
  state = {
    liquor: [],

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
      // width: "175px",
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
    axios.get("/liquor").then((res) => {
      this.setState({
        liquor: res.data,
      });
    });
  }

  editLiquor = (_id) => {
    console.log(_id);
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/liquor/` +
          _id,
        {
          brand: this.state.brand,
          type: this.state.type,
          vendor: this.state.vendor,
          cost: this.state.cost,
          qtyOnHand: this.state.qtyOnHand,
          par: this.state.par,
          orderQty: this.state.orderQty,
          notes: this.state.notes,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          liquor: res.data,
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
      brand: this.state.brand,
      type: this.state.type,
      vendor: this.state.vendor,
      cost: this.state.cost,
      qtyOnHand: this.state.qtyOnHand,
      par: this.state.par,
      orderQty: this.state.orderQty,
      notes: this.state.notes,
    });
    this.props.toggleForm();
  };

  render() {
    console.log(this.props.liquors);
    return (
      <div
        align="center"
        className="form-check form-check-inline"
        style={this.style.div}
        width="200px"
      >
        {/*<h3>Edit Liquor</h3>*/}
        <form onSubmit={this.handleSubmit} className="form-inline">
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"cost"}
            type="number"
            placeholder="cost"
            defaultValue={this.props.liquors.cost}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"qtyOnHand"}
            type="number"
            placeholder="on-hand"
            defaultValue={this.props.liquors.qtyOnHand}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"par"}
            type="number"
            placeholder="PAR"
            defaultValue={this.props.liquors.par}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"orderQty"}
            type="number"
            placeholder="order quantity"
            defaultValue={this.props.liquors.orderQty}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"notes"}
            type="text"
            placeholder="notes"
            defaultValue={this.props.liquors.notes}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            width="21px"
            id={"brand"}
            type="text"
            defaultValue={this.props.liquors.brand}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"type"}
            type="text"
            placeholder="type"
            defaultValue={this.props.liquors.type}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"vendor"}
            type="text"
            placeholder="vendor"
            defaultValue={this.props.liquors.vendor}
          />
          <br />
          <input
            className="form-control form-control-sm"
            style={this.style.submit}
            type="submit"
            value="submit edits"
            onClick={() => this.editLiquor(this.props.liquors._id)}
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
