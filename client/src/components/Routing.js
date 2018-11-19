import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CarBrowse from "./CarBrowse";
import CarNew from "./CarNew";
import CarEdit from "./CarEdit";

class Routing extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/CarBrowse/" />} />
        <Route exact path="/CarBrowse/" component={CarBrowse} />
        <Route exact path="/CarNew/" component={CarNew} />
        <Route exact path="/CarEdit/" component={CarEdit} />
      </Switch>
    );
  }
}
export default Routing;
