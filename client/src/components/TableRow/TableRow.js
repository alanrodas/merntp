import React, { Component } from "react";
import { Button } from "reactstrap";
import "./TableRow.css";
import { Link } from "react-router-dom";

class BodyTable extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <td id="brand">{this.props.brand} </td>
          <td id="model">{this.props.model}</td>
          <td id="category">{this.props.category}</td>
          <td id="price">{this.props.price}</td>
          <td id="numDoors">{this.props.numDoors}</td>

          <td className="Action-Buttons">
            <Link
              to={"/editCar/" + this.props.id}
              className="btn btn-info Edit-Button"
              color="info"
            >
              Edit Car
            </Link>

            <Button
              className="Delete-Button"
              color="danger"
              onClick={() => this.props.cb(this.props.id)}
            >
              Delete Car
            </Button>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default BodyTable;
