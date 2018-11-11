import React, { Component } from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav'
import CarBrowse from './components/CarBrowse/CarBrowse'
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="Main-App">
            <HeaderNav></HeaderNav>
            <CarBrowse></CarBrowse>
        </div>
    );
  }
}

export default App;
