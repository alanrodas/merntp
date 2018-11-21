import React, { Component } from 'react';
import { Table } from 'reactstrap';
import FilaCar from '../CarBrowse/FilaCar';
import EditarCar from '../CarBrowse/EditarCar';
import './CarBrowse.css';
import api from '../../api/api';

class CarBrowse extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      _id: null,
      brand: '',
      model: '',
      category: '',
      price: 0,
      numDoors: 0,
      itemAEditar: null
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
                    onModificar={() => this.onModificar(car)}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {this.state.itemAEditar ? (
          <EditarCar
            _id={this.state.itemAEditar._id}
            brand={this.state.itemAEditar.brand}
            model={this.state.itemAEditar.model}
            category={this.state.itemAEditar.category}
            price={this.state.itemAEditar.price}
            numDoors={this.state.itemAEditar.numDoors}
            onAceptarModificar={car => this.onAceptarModificar(car)}
            onCancelar={car => this.onCancelar()}
          />
        ) : null}
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

  onModificar(auto) {
    this.setState({ itemAEditar: auto });
  }

  updateCars() {
    api
      .getCars()
      .then(cars => this.setState({ cars }))
      .catch(err => console.log(err));
  }

  onAceptarModificar(car) {
    this.setState({
      itemAEditar: null
    });
    return api
      .modifyCar(car._id, car)
      .then(() => {
        this.updateCars();
      })
      .catch(err => {
        console.log(err);
      });
  }

  onCancelar() {
    this.setState({ itemAEditar: null });
    this.componentDidMount();
  }
}

export default CarBrowse;
