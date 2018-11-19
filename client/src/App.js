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
          <Route exact path="/edit/:id" component={CarEdit} />
          <Route exact path="/new/" component={CarEdit} />
          <Route exact path="/" component={CarBrowse} />
          {/* <Route
            exact
            path="/new"
            render={props => <CarEdit id={null} {...props} />}
          /> */}
          <Route render={() => <h1>The requested page does not exists</h1>} />"
        </Switch>
      </div>
    );
  }
}

export default App;
