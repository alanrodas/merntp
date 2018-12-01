import React, { Component } from "react";
import { Table } from "reactstrap";
import TableRow from "../TableRow/TableRow";
import api from "../api/apiRar";

class CarBrowse extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  del(id) {
    api.deleteCar(id, () =>
      api.getCars().then(res => this.setState({ data: res.data }))
    );
  }

  componentDidMount() {
    api.getCars().then(res => this.setState({ data: res.data }));
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

        {data.map((car, idx) => (
          <TableRow
            key={idx}
            indice={idx}
            brand={car.brand}
            model={car.model}
            category={car.category}
            price={car.price}
            numDoors={car.numDoors}
            id={car._id}
            cb={id => this.del(id)}
          />
        ))}
      </Table>
    );
  }
}
export default CarBrowse;
