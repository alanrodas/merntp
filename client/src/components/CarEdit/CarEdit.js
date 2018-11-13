import React, { Component } from 'react';

export default class CarEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: this.props.car
    };
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Clave nuevo usuario</h1>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Marca"
              name="username"
              value={this.state.car.brand}
            />
          </div>

          <button
            className="btn btn-warning btn-block mt-4"
            onClick={() => this.doSetPassword()}
          >
            Aceptar
          </button>

          <button
            className="btn btn-warning btn-block mt-4"
            onClick={() => this.doSetPassword()}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}
