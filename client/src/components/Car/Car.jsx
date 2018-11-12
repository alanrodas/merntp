import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

class Car extends Component {
  edit() {
    console.log("edit");
  }

  delete() {
    console.log("delete");
  }

  render() {
    return (
      <tr>
        <th scope="row"> {this.props.brand} </th>{" "}
        <th scope="row"> {this.props.model} </th>
        <td> {this.props.category} </td> <td> {`$${this.props.price}`} </td>
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
