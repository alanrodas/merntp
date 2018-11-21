import React, { Component } from "react";
import { Button } from "reactstrap";
import "./BodyTable.css";

class BodyTable extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td brand>{this.props.brand} </td>
          <td model>{this.props.model}</td>
          <td category>{this.props.category}</td>
          <td price>{this.props.price}</td>
          <td numDoors>{this.props.numDoors}</td>
          <td className="Action-Buttons">
            <Button className="Edit-Button" color="info">
              Edit Car
            </Button>
            <Button className="Delete-Button" color="danger">
              Delete Car
            </Button>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default BodyTable;
