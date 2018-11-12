import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import "./CarBrowse.css";
import ListCars from "./ListCars/ListCars";

import axios from "axios";

class CarBrowse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    this.requestCars();
  }

  requestCars() {
    axios
      .get("/api/cars")
      .then(cars => {
        console.log(cars);
        this.setState({ cars });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th scope="col"> Brand </th> <th scope="col"> Model </th>
            <th scope="col"> Category </th> <th scope="col"> Price </th>
            <th scope="col"> Actions </th>
          </tr>
        </thead>
        <tbody>
          <ListCars listCars={this.state.cars} />
        </tbody>
      </Table>
    );
  }
}

export default CarBrowse;
