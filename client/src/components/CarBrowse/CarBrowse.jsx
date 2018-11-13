import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import "./CarBrowse.css";
import ListCars from "./ListCars/ListCars";
import Context from "../../Context";

import axios from "axios";

class CarBrowse extends Component {
  componentDidMount() {
    this.requestCars();
  }

  requestCars() {
    let gState = this.context;
    return axios
      .get("/api/cars")
      .then(res => gState.setState({ cars: res.data }))
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
          <ListCars />
        </tbody>
      </Table>
    );
  }
}

CarBrowse.contextType = Context;
export default CarBrowse;
