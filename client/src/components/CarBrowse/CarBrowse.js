import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import './CarBrowse.css';
import api from '../../api/cars';
import CarEdit from '../CarEdit/CarEdit';

class CarBrowse extends Component {
  constructor(props) {
    super(props);
    api.init();
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
            <th scope="col">Doors</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.cars.map((car, idx) => this.renderCarRow(car, idx))}
        </tbody>
      </Table>
    );
  }

  renderCarRow(car, idx) {
    return (
      <tr key={idx}>
        <th scope="row">{car.brand}</th>
        <th scope="row">{car.model}</th>
        <td>{car.category}</td>
        <td>{car.numDoors}</td>
        <td>{'$' + car.price}</td>
        <td className="Action-Buttons">
          <Button
            className="Edit-Button"
            color="info"
            onClick={() =>
              this.props.owner.setMainWindow(<CarEdit car={car} />)
            }
          >
            Edit Car
          </Button>
          <Button
            className="Delete-Button"
            color="danger"
            onClick={() => this.deleteCar(car)}
          >
            Delete Car
          </Button>
        </td>
      </tr>
    );
  }

  updateCars() {
    return api
      .getCars()
      .then(cars => this.setState({ cars }))
      .catch(err => console.log(err));
  }

  deleteCar(car) {
    return api
      .deleteCar(car._id)
      .then(() => this.updateCars())
      .catch(err => console.log(err));
  }
}

export default CarBrowse;
