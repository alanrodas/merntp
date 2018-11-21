import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditionCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
      brand: this.props.brand,
      model: this.props.model,
      category: this.props.category,
      price: this.props.price,
      numDoors: this.props.numDoors
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({
        car: this.props.car
      });
    }
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
            type="numbers"
            value={this.state.numDoors}
            onChange={event => this.setState({ numDoors: event.target.value })}
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
            onChange={event => this.setState({ price: event.target.value })}
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
    const car = {
      _id: this.state._id,
      brand: this.state.brand,
      model: this.state.model,
      category: this.state.category,
      price: this.state.price,
      numDoors: this.state.numDoors
    };

    if (this.props._id) {
      this.props.onAceptarModificar(car);
    } else {
      this.props.onAceptarAgregar(car);
    }
  }
}

export default EditionCar;
