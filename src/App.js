import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Liquor from "./components/Liquor.jsx";
import Restop from "./components/Restop.jsx";
import RestopCatalog from "./components/RestopCatalog.jsx";
import Food from "./components/Food.jsx";
import "./index.css";
import Contacts from "./components/Contacts.jsx";
import Invoices from "./components/Invoices.jsx";
import Todos from "./components/Todos.jsx";
import Recipes from "./components/Recipes.jsx";
import Footer from "./components/Footer.jsx";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Navigation />
          <Route path="/home" exact component={Home} />
          <Route path="/liquor" exact component={Liquor} />
          <Route path="/food" exact component={Food} />{" "}
          <Route path="/restop" exact component={Restop} />
          <Route path="/restop_id" exact component={RestopCatalog} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/invoices" exact component={Invoices} />
          <Route path="/todos" exact component={Todos} />
          <Route path="/recipes" exact component={Recipes} />
          <Footer />
        </div>
      </Router>
    );
  }
}
