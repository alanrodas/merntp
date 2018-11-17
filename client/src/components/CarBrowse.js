import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import "./CarBrowse.css";
const axios = require("axios");

class CarBrowse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDeAutos: [],
      car: {}
    };
  }

  componentDidMount() {
    this.getAutos();
  }

  getAutos() {
    let self = this;
    return axios
      .get("/api/cars")
      .then(function(response) {
        const json = response.data;

        const cars = new Array();

        for (let index = 0; index < json.length; index++) {
          cars.push(json[index]);
        }
        self.setAutos(cars);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  setAutos(json) {
    this.setState({
      listaDeAutos: json
    });
  }

  encabezadoDeTabla(titulos) {
    return titulos.map((titulo, ix) => <th key={ix}>{titulo}</th>);
  }

  infoCars(car) {
    const rowDatosAlumno = (
      <tr id="infoAlum" key={car._dni}>
        <td>{car.brand}</td>
        <td>{car.model}</td>
        <td>{car.category}</td>
        <td>{car.price}</td>
        <td>{car.numDoors}</td>
        <td>
          {this.botonEditar(car)}
          {this.botonEliminar(car)}
        </td>
      </tr>
    );
    return rowDatosAlumno;
  }

  botonEditar(car) {
    return this.botonStandard(
      "Editar Auto",
      () => this.EditarAuto(car),
      "btn-info btn-xs",
      "fa-info"
    );
  }

  botonEliminar(car) {
    return this.botonStandard(
      "Eliminar",
      () => this.eliminarAuto(car),
      "btn-danger btn-xs",
      "fa-close"
    );
  }

  botonStandard(label, accion, clasesAdicionales = "btn-info", glypIcon) {
    return (
      <button
        className={"btn " + clasesAdicionales}
        style={{ marginRight: "12px" }}
        onClick={c => accion(c)}
      >
        <span className={"fa " + glypIcon}> {label} </span>
      </button>
    );
  }

  EditarAuto(car) {}

  eliminarAuto(car) {}

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            {this.encabezadoDeTabla([
              "Brand",
              "Model",
              "Category",
              "Price",
              "Doors",
              "Action"
            ])}
          </tr>
        </thead>
        <tbody>{this.state.listaDeAutos.map(car => this.infoCars(car))}</tbody>
      </table>
    );
  }
}

export default CarBrowse;
