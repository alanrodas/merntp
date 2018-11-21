import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from './App';
import NewCar from './components/NewCar/NewCar';
import HeaderNav from './components/HeaderNav/HeaderNav';
import CarBrowse from './components/CarBrowse/CarBrowse';
const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/CarBrowse " component={CarBrowse} />
      <Route path="/NewCar " component={NewCar} />
      <Route path="/HeaderNav " component={HeaderNav} />
      <Route path="/ " component={App} />
    </Switch>
  </App>
);
export default AppRoutes;
