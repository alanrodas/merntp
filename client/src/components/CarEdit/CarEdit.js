import React, { Component } from 'react';
import api from '../../api/cars';
import Selector from './Selector';
import { Link } from 'react-router-dom';

export default class CarEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      car: {
        brand: '',
        model: '',
        category: 'A',
        numDoors: 4,
        price: 0
      }
    };

    if (this.state.id) {
      api.getCar(this.state.id).then(car => this.setState({ car }));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">
            {this.state.id ? 'Modifying car' : 'Adding a car'}
          </h1>

          <div className="input-group mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text width-10-em">Brand:</span>
            </div>
            <input
              className="form-control"
              type="string"
              placeholder="Ford, Chevrolet, ..."
              value={this.state.car.brand}
              onChange={e => this.updateCar('brand', e.target.value)}
            />
          </div>

          <div className="input-group mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text width-10-em">Model:</span>
            </div>
            <input
              className="form-control"
              type="string"
              placeholder="Focus, Gol, Sandero, ..."
              value={this.state.car.model}
              onChange={e => this.updateCar('model', e.target.value)}
            />
          </div>

          <Selector
            caption="Category:"
            valor={this.state.car.category}
            valores={['A', 'B', 'C', 'D', 'E']}
            onChange={value => this.updateCar('category', value)}
          />

          <div className="input-group mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text width-10-em">Doors:</span>
            </div>
            <input
              className="form-control"
              type="number"
              min={1}
              max={8}
              value={this.state.car.numDoors}
              onChange={e =>
                this.updateCar('numDoors', parseInt(e.target.value))
              }
            />
          </div>

          <div className="input-group mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text width-10-em">Price:</span>
            </div>
            <input
              className="form-control"
              type="number"
              min={0}
              value={this.state.car.price}
              onChange={e => this.updateCar('price', parseInt(e.target.value))}
            />
          </div>

          <div className="btn-group float-right btn-group-sm m-1" role="group">
            <button
              type="button"
              className="btn btn-success ml-2"
              onClick={() => this.onAccept()}
            >
              Accept
            </button>

            <Link className="btn btn-cancel btn-outline-danger" to="/">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    );
  }

  updateCar(property, value) {
    let newCar = { ...this.state.car };
    newCar[property] = value;
    this.setState({ id: this.state.id, car: newCar });
  }

  onAccept() {
    if (this.state.id) {
      return api
        .editCar(this.state.id, this.state.car)
        .then(() => this.props.history.push('/'))
        .catch(err => console.error(err));
    } else {
      return api
        .createCar(this.state.car)
        .then(() => this.props.history.push('/'))
        .catch(err => console.error(err));
    }
  }
}
