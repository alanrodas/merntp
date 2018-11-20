import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderNav from './components/HeaderNav/HeaderNav';
import './App.css';
import Routing from './Routing/routing';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        listaDeAutos: []
    }
  }

  render() {
    return (
      <Router>
        <div className="Main-App">
          <HeaderNav />
          <Routing />
        </div>
      </Router>
    );
  }
}

export default App;
