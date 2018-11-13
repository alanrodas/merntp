import React, { Component } from "react";
import Car from "../../Car/Car";
import Context from "../../../Context";

class ListCars extends Component {
  render() {
    let gState = this.context;
    if (gState.cars) {
      return gState.cars.map(c => <Car key={c._id} car={c} />);
    } else {
      return null;
    }
  }
}

ListCars.contextType = Context;
export default ListCars;
