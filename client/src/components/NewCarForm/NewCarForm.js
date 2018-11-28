import React, { Component } from "react";
import "./NewCarForm.css";
import { Link } from "react-router-dom";

class NewCarForm extends Component {
  render() {
    return (
      <div className="Poronga">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="pedro">Brand: </span>
          </div>
          <input className="form-control" type="string" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="pedro">Model: </span>
          </div>
          <input className="form-control" type="string" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="pedro">Category: </span>
          </div>
          <input className="form-control" type="string" />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="pedro">Cantidad puertas: </span>
          </div>
          <input className="cacho" type="numbers" />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="pedro">Price: </span>
          </div>
          <input className="form-control" type="number" />
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
}

export default NewCarForm;
