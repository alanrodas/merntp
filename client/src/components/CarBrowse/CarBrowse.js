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
  }

  componentDidMount() {
    this.updateCars();
  }

  // carEnBlanco() {
  //   return;
  //   const auto = { brand: '', model: '', category: '', price: 0, numDoors: 0 };
  // }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
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
                    car={car}
                    onBorrar={() => this.onBorrar(car)}
                    onModificar={() => this.onModificar(car)}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div className="col-md-3">
          {this.state.itemAEditar ? (
            <EditarCar
              _id={this.state.itemAEditar._id}
              brand={this.state.itemAEditar.brand}
              model={this.state.itemAEditar.model}
              category={this.state.itemAEditar.category}
              price={this.state.itemAEditar.price}
              numDoors={this.state.itemAEditar.numDoors}
              onAceptarAgregar={car => this.onAceptarAgregar(car)}
              onAceptarModificar={car => this.onAceptarModificar(car)}
            />
          ) : null}
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

  onModificar(auto) {
    this.setState({ itemAEditar: auto });
  }

  updateCars() {
    api
      .getCars()
      .then(cars => this.setState({ cars }))
      .catch(err => console.log(err));
  }

  onAceptarAgregar(car) {
    return api
      .addCar(car)
      .then(() => {
        this.updateCars();
        this.componentDidMount();
      })
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

  //la usaba desde esta pantalla creo la misma en editar auto
  // onAceptar() {
  //   const car = {
  //     brand: this.state.brand,
  //     model: this.state.model,
  //     category: this.state.category,
  //     price: this.state.price,
  //     numDoors: this.state.numDoors
  //   };
  //   this.props.onAceptarAgregar(car);
  // }
}

export default CarBrowse;
