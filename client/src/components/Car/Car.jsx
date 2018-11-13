import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import bootbox from "bootbox";

import Context from "../../Context";

class Car extends Component {
  static MESSAGE_DELETE = "Confirm DELETE for the car";
  static MSG_SUCCSESS_DELETE = "Success DELETE";
  static MSG_FAIL_DELETE = "DELETE FAIL, see console for more details";
  constructor(props) {
    super(props);
    this.state = {
      car: props.car
    };
  }
  edit() {
    console.log("edit");
  }

  removeCar() {
    const gState = this.context;
    const newCarList = gState.cars;
    const index = gState.cars.indexOf(this.state.car);
    newCarList.splice(index, 1);
    gState.setState({
      cars: newCarList
    });
  }

  delete() {
    let self = this;
    bootbox.dialog({
      message: Car.MESSAGE_DELETE,
      buttons: {
        cancel: {
          label: "No",
          className: "btn-danger"
        },
        confirm: {
          label: "Yes",
          className: "btn-success",
          callback: function(result) {
            axios
              .delete(`/api/cars/${self.state.car._id}`)
              .then(response => {
                self.removeCar();
              })
              .catch(e => {
                console.log(e);
                bootbox.alert(Car.MSG_FAIL_DELETE);
              });
          }
        }
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
Car.contextType = Context;

export default Car;
