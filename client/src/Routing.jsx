import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CarBrowse from "./components/CarBrowse/CarBrowse";
import NewCar from "./components/FormCar/NewCar/NewCar";

class Routing extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={CarBrowse} />
        <Route exact path="/newCar" component={NewCar} />
      </Switch>
    );
  }
}
export default Routing;
