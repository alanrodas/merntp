import React, { Component } from 'react';
import api from '../../api/cars';
import { Link } from 'react-router-dom';

class NewCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      model: '',
      category: '',
      price: '',
      numDoors: ''
    };
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Brand: </span>
          </div>
          <input
            className="form-control"
            type="string"
            value={this.state.brand}
            onChange={event => this.setState({ brand: event.target.value })}
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Model: </span>
          </div>
          <input
            className="form-control"
            type="string"
            value={this.state.model}
            onChange={event => this.setState({ model: event.target.value })}
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Category: </span>
          </div>
          <input
            className="form-control"
            type="string"
            value={this.state.category}
            onChange={event => this.setState({ category: event.target.value })}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Cantidad puertas: </span>
          </div>
          <input
            className="form-control"
            type="number"
            value={this.state.numDoors}
            onChange={event =>
              this.setState({ numDoors: parseInt(event.target.value, 10) })
            }
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Price: </span>
          </div>
          <input
            className="form-control"
            type="number"
            value={this.state.price}
            onChange={event =>
              this.setState({ price: parseInt(event.target.value, 10) })
            }
          />
        </div>
        <button className="btn btn-success" onClick={() => this.onAceptar()}>
          Aceptar
        </button>

        <Link className="btn btn-danger" to="/">
          Cancelar
        </Link>
      </div>
    );
  }

  onAceptar() {
    api.addCar(this.state, () => this.props.history.push('/'));
  }
}
export default NewCar;
