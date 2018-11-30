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
    this.componentDidMount();
  }

  componentDidMount() {
    this.updateCars();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div>
            <Table dark>
              <thead>
                <tr>
                  <th scope="col">Brand</th>
                  <th scope="col">Model</th>
                  <th scope="col">Category</th>
                  <th scope="col">Num. Doors</th>
                  <th scope="col">Price</th>

                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cars.map(car => (
                  <FilaCar
                    key={car._id}
                    car={car}
                    onBorrar={() => this.onBorrar(car)}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }

  onBorrar(auto) {
    api
      .deleteCar(auto._id)
      .then(() => {
        this.updateCars();
      })
      .catch(err => console.log(err));
  }

  updateCars() {
    api
      .getCars()
      .then(cars => this.setState({ cars }))
      .catch(err => console.log(err));
  }
}

export default CarBrowse;
