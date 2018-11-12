import React, { Component } from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import "./App.css";
import Routing from "./Routing";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderNav />
          <Routing />
        </div>
      </Router>
    );
  }
}

export default App;
