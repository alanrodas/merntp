import React, { Component } from 'react';
import api from '../../api/cars';
import Selector from './Selector';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

const emptyCar = {
  brand: '',
  model: '',
  category: 'A',
  numDoors: 4,
  price: 0
};

export default class CarEdit extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      element: message => (
        <div className="input-group-text text-danger">{message}</div>
      )
    });

    this.state = {
      id: null,
      car: emptyCar
    };
    this.updateComponent();
  }

  updateComponent() {
    if (this.props.match.params.id) {
      api
        .getCar(this.props.match.params.id)
        .then(car => this.setState({ id: this.props.match.params.id, car }));
    } else {
      this.setState({ id: null, car: emptyCar });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.updateComponent();
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
              required
              value={this.state.car.brand}
              onChange={e => this.updateCar('brand', e.target.value)}
            />
            {this.validator.message(
              'brand',
              this.state.car.brand,
              'required|alpha'
            )}
          </div>

          <div className="input-group mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text width-10-em">Model:</span>
            </div>
            <input
              className="form-control"
              type="string"
              required
              value={this.state.car.model}
              onChange={e => this.updateCar('model', e.target.value)}
            />
            {this.validator.message(
              'car model',
              this.state.car.model,
              'required|alpha'
            )}
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
            {this.validator.message(
              'doors',
              this.state.car.model,
              'required|integer|min:1'
            )}
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
    if (this.validator.allValid()) {
      this.doEditOrCreate();
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  doEditOrCreate() {
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
