import React, { Component } from "react";
import Car from "../../Car/Car";

class ListCars extends Component {
  render() {
    console.log("LISTCARS", this.props.cars);
    if (this.props.cars) {
      return this.props.cars.map(c => <Car key={c._id} car={c} />);
    } else {
      return null;
    }
  }
}

export default ListCars;
