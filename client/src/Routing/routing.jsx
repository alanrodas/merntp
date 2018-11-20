import React, { Component } from "react";
 import { Route, Switch, Redirect } from "react-router-dom";
//import { Route, Switch } from "react-router-dom";

import CarBrowse from '../components/CarBrowse/CarBrowse';
import EditCar from '../components/EditCar/EditCar';
import NewCar  from "../components/NewCar/NewCar";

class Routing extends Component {
  render() {
    return (
      <Switch>
       <Route exact path = "/" render={() => <Redirect to = "/CarBrowse" />} /> 
        <Route path = "/CarBrowse" component = { CarBrowse } />
        <Route path = "/EditCar" component = { EditCar } />
        <Route path = "/NewCar" component = { NewCar } />

      </Switch>
    );
  }
}

export default Routing;
