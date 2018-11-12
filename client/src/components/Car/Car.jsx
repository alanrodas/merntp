import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: props.car
    };
  }
  edit() {
    console.log("edit");
  }

  delete() {
    console.log("delete");
  }

  render() {
    let car = this.state.car;
    return (
      <tr>
        <th scope="row"> {car.brand} </th>
        <th scope="row"> {car.model} </th>
        <td> {car.category} </td>
        <td> {`$${car.price}`} </td>
        <td className="Action-Buttons">
          <Button
            onClick={() => this.edit()}
            className="Edit-Button"
            color="info"
          >
            Edit Car
          </Button>
          <Button
            onClick={() => this.delete()}
            className="Delete-Button"
            color="danger"
          >
            Delete Car
          </Button>
        </td>
      </tr>
    );
  }
}
export default Car;
