import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Liquor from "./components/Liquor.jsx";
import Restop from "./components/Restop.jsx";
import Food from "./components/Food.jsx";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Navigation />
          <Route path="/liquor" exact component={Liquor} />
          <Route path="/food" exact component={Food} />{" "}
          <Route path="/restop" exact component={Restop} />
        </div>
      </Router>
    );
  }
}
