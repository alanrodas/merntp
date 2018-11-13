import React, { Component } from 'react';
import { Table } from 'reactstrap';
import FilaCar from '../CarBrowse/FilaCar';
import './CarBrowse.css';
import api from '../../api/api';

class CarBrowse extends Component {
  constructor() {
    super();
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    this.updateCars();
  }

  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Num. Doors</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.cars.map(car => (
            <FilaCar car={car} />
          ))}
        </tbody>
      </Table>
    );
  }

  updateCars() {
    api
      .getCars()
      .then(cars => this.setState({ cars }))
      .catch(err => console.log(err));
  }
}

export default CarBrowse;
