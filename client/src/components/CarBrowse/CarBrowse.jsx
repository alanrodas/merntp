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
    let self = this;
    return axios
      .get("/api/cars")
      .then(res =>
        self.setState({ cars: res.data }, () => console.log(this.state.cars))
      )
      .catch(e => console.log("ERROR", e));
  }

  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th scope="col"> Brand </th>
            <th scope="col"> Model </th>
            <th scope="col"> Category </th>
            <th scope="col"> Price </th>
            <th scope="col"> Actions </th>
          </tr>
        </thead>
        <tbody>
          <ListCars cars={this.state.cars} />
        </tbody>
      </Table>
    );
  }
}

export default CarBrowse;
