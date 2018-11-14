import React, { Component } from "react";
import { Table } from "reactstrap";
import "./CarBrowse.css";
import ListCars from "./ListCars/ListCars";
import OrderButton from "./OrderButton";
import Context from "../../Context";

import axios from "axios";

class CarBrowse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  componentDidMount() {
    this.requestCars();
  }

  requestCars() {
    let gState = this.context;
    gState.setState({ cars: null });
    return axios
      .get("/api/cars")
      .then(res => gState.setState({ cars: res.data }))
      .catch(e => console.log("ERROR", e));
  }

  select(i) {
    this.setState({ selected: i });
  }

  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th scope="col">
              <OrderButton
                name="brand"
                select={() => this.select("brand")}
                selected={this.state.selected}
              />
            </th>
            <th scope="col"> Model </th>
            <th scope="col">
              <OrderButton
                name="category"
                select={() => this.select("category")}
                selected={this.state.selected}
              />
            </th>
            <th scope="col">
              <OrderButton
                name="price"
                select={() => this.select("price")}
                selected={this.state.selected}
              />
            </th>
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
