import React, { Component } from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Liquor from "./components/Liquor.jsx";
import Restop from "./components/Restop.jsx";
import Food from "./components/Food.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Liquor />
        <Restop />
        <Food />
      </div>
    );
  }
}

// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import axios from "axios";
