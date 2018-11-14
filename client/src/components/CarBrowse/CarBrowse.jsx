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

  select(property) {
    this.setState({ selected: property });
    this.orderCarsBy(property);
  }

  orderCarsBy(property) {
    let gState = this.context;
    switch (property) {
      case "brand":
        gState.setState({
          cars: gState.cars.sort((a, b) =>
            a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0
          )
        });
        break;
      case "category":
        gState.setState({
          cars: gState.cars.sort((a, b) =>
            a.category > b.category ? 1 : b.category > a.category ? -1 : 0
          )
        });
        break;
      case "price":
        gState.setState({
          cars: gState.cars.sort(
            (a, b) => parseInt(a.price) - parseInt(b.price)
          )
        });
        break;
      default:
        console.log(`WARNING: property ${property} not order defined`);
        break;
    }
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
            <th scope="col"> Doors </th>
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
