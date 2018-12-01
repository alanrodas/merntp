import React, { Component } from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import CarBrowse from "./components/CarBrowse/CarBrowse";
import { BrowserRouter as Router } from "react-router-dom";
import EditCarForm from "./components/Form/EditCarForm";

import Route from "react-router-dom/Route";
import CarFormR from "./components/Form/CarFormR";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Main-App">
          <Route path="/" exact component={HeaderNav} />
          <Route path="/" exact component={CarBrowse} />
          <Route path="/newCar" exact strict component={CarFormR} />
          <Route path="/editCar/:id" exact strict component={EditCarForm} />
        </div>
      </Router>
    );
  }
}

export default App;
