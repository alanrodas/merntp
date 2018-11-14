import React, { Component } from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav';
import CarBrowse from './components/CarBrowse/CarBrowse';
import CarEdit from './components/CarEdit/CarEdit';

import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main-App">
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={CarBrowse} />
          <Route exact path="/edit" render={props => <CarEdit {...props} />} />
          <Route exact path="/create" component={CarEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
