import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import bootbox from "bootbox";

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
    let self = this;
    bootbox.confirm({
      message:
        "This is a confirm with custom button text and color! Do you like it?",
      buttons: {
        confirm: {
          label: "Yes",
          className: "btn-success"
        },
        cancel: {
          label: "No",
          className: "btn-danger"
        }
      },
      callback: function(result) {
        axios
          .delete(`/api/cars/${self.state.car._id}`)
          .then(response => bootbox.alert("Se ha borrado correctamente"))
          .catch(e => console.log(e));
      }
    });
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
