import React, { Component } from "react";
import { Table } from "reactstrap";
import TableRow from "../TableRow/TableRow";
const axios = require("axios");

class CarBrowse extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  del(id) {
    //  const elId = "5bfdb9a1b8daba077c5546c3";
    axios.delete(`http://localhost:3001/api/cars/${id}`).then(() => {
      console.log("Voy a hacer un fetch");
      axios.get("http://localhost:3001/api/cars").then(res => {
        console.log("Voy a setear el estado");
        console.log(res.data);
        this.setState({ data: res.data });
      });
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/cars")
      .then(res => this.setState({ data: res.data }));
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
