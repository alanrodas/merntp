import React, { Component } from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav';
import CarBrowse from './components/CarBrowse/CarBrowse';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { mainWindow: <CarBrowse owner={this} /> };
  }

  setMainWindow(component) {
    this.setState({ mainWindow: component });
  }

  render() {
    return (
      <div className="Main-App">
        <HeaderNav owner={this} />
        {this.state.mainWindow}
      </div>
    );
  }
}

export default App;
