import React, { Component } from 'react';

class EditarCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
      brand: this.props.brand,
      model: this.props.model,
      category: this.props.category,
      price: this.props.price,
      numDoors: this.props.numDoors,
      itemAEditar: null
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card border-dark ">
            <div className="card-header text-center border-dark">
              <h2 className="mt-1">Ingresar datos del vehiculo</h2>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="input-group mb-2  mt-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Brand: </span>
                    </div>
                    <input
                      className="form-control"
                      type="string"
                      value={this.state.brand}
                      onChange={event =>
                        this.setState({ brand: event.target.value })
                      }
                    />
                  </div>
                  <div className="input-group mb-2 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Model: </span>
                    </div>
                    <input
                      className="form-control"
                      type="string"
                      value={this.state.model}
                      onChange={event =>
                        this.setState({ model: event.target.value })
                      }
                    />
                  </div>
                  <div className="input-group mb-2 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Category: </span>
                    </div>
                    <input
                      className="form-control"
                      type="string"
                      value={this.state.category}
                      onChange={event =>
                        this.setState({ category: event.target.value })
                      }
                    />
                  </div>

                  <div className="input-group mb-2 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Num Doors: </span>
                    </div>
                    <input
                      className="form-control"
                      type="numbers"
                      value={this.state.numDoors}
                      onChange={event =>
                        this.setState({ numDoors: event.target.value })
                      }
                    />
                  </div>

                  <div className="input-group mb-2 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Price: </span>
                    </div>
                    <input
                      className="form-control"
                      type="number"
                      value={this.state.price}
                      onChange={event =>
                        this.setState({ price: event.target.value })
                      }
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => this.onAceptar()}
                  >
                    Aceptar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.onCancel()}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onCancel() {
    this.props.onCancelar();
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

    this.props.onAceptarModificar(car);
  }
}

export default EditarCar;
