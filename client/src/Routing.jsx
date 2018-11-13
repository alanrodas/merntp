import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CarBrowse from "./components/CarBrowse/CarBrowse";
import NewCar from "./components/FormCar/NewCar/NewCar";
import EditCar from "./components/FormCar/EditCar/EditCar";

class Routing extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={CarBrowse} />
        <Route path="/newCar" component={NewCar} />
        <Route path="/editCar" component={EditCar} />
      </Switch>
    );
  }
}
export default Routing;
