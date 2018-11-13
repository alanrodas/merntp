import React, { Component } from "react";
import HeaderNav from "./components/HeaderNav";
import Routing from "./components/Routing";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <HeaderNav />
            <Routing />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
