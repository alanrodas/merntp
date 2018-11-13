import React, { Component } from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import "./App.css";
import Routing from "./Routing";
import Context from "./Context";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCars: [],
      setState: this.setState.bind(this)
    };
  }

  render() {
    return (
      <Router>
        <Context.Provider value={this.state}>
          <HeaderNav />
          <Routing />
        </Context.Provider>
      </Router>
    );
  }
}

export default App;
