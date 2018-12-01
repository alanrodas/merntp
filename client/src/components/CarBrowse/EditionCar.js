import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/cars';

class EditionCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      brand: '',
      model: '',
      category: '',
      price: '',
      numDoors: ''
    };
  }

  componentDidMount() {
    api.getCar(this.props.match.params.id).then(res => {
      this.setState(res.data);
    });
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
    api.modifyCar(this.state._id, this.state, () =>
      this.props.history.push('/')
    );
  }
}

export default EditionCar;
