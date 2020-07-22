import React, { Component } from "react";
import axios from "axios";

export default class EditRestopForm extends Component {
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
    axios.get("/restop").then((res) => {
      this.setState({
        restop: res.data,
      });
    });
  }

  editRestop = (_id) => {
    console.log(_id);
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://infinite-cliffs-04410.herokuapp.com/restop/` +
          _id,
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
          restop: res.data,
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
      alias: this.state.alias,
      cost: this.state.cost,
      qtyOnHand: this.state.qtyOnHand,
      par: this.state.par,
      orderQty: this.state.orderQty,
      vendor: this.state.vendor,
      notes: this.state.notes,
      img: this.state.img,
    });
    this.props.toggleForm();
  };

  render() {
    // console.log(this.props.restop);
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
            id={"item"}
            type="text"
            placeholder="item"
            defaultValue={this.props.restops.item}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"alias"}
            type="text"
            placeholder="alias"
            defaultValue={this.props.restops.alias}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"cost"}
            type="number"
            placeholder="cost"
            defaultValue={this.props.restops.cost}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"orderQty"}
            type="number"
            placeholder="order quantity"
            defaultValue={this.props.restops.orderQty}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"vendor"}
            type="text"
            placeholder="vendor"
            defaultValue={this.props.restops.vendor}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"notes"}
            type="text"
            defaultValue={this.props.restops.notes}
          />
          <input
            className="form-control form-control-sm"
            onChange={this.handleChange}
            id={"img"}
            type="text"
            placeholder="image url"
            defaultValue={this.props.restops.img}
          />
          <br />
          <input
            className="form-control form-control-sm"
            style={this.style.submit}
            type="submit"
            value="submit edits"
            onClick={() => this.editRestop(this.props.restops._id)}
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
