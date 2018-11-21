import React, { Component } from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav';
import CarBrowse from './components/CarBrowse/CarBrowse';
import './App.css';
import NewCar from './components/NewCar/NewCar';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import EditionCar from './components/CarBrowse/EditionCar';
class App extends Component {
  render() {
    return (
      <div className="Main-App">
        <BrowserRouter>
          <div>
            <HeaderNav />
            <div>
              <Switch>
                <Route exact={true} path="/" component={CarBrowse} />
                <Route exact={true} path="/NewCar" component={NewCar} />
                <Route
                  exact={true}
                  path="/EditionCar/:id"
                  component={EditionCar}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
