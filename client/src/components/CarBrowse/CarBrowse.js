import React, { Component } from "react";
import { Table } from "reactstrap";
import BodyTable from "../BodyTable/BodyTable";

class CarBrowse extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/cars")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <Table dark>
        <thead>
          <tr>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Car Doors</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        {data.map(car => (
          <BodyTable
            brand={car.brand}
            model={car.model}
            category={car.category}
            price={car.price}
            numDoors={car.numDoors}
          />
        ))}
      </Table>
    );
  }
}
export default CarBrowse;
