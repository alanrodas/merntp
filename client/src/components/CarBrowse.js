import React, { Component } from "react";
import "./CarBrowse.css";
const axios = require("axios");
const bootbox = require("bootbox");
const { Link } = require("react-router-dom");

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
  refrescar() {
    this.getAutos();
    //this.props.history.push("/CarBrowse");
  }

  getAutos() {
    let self = this;
    return axios
      .get("/api/cars")
      .then(function(response) {
        const json = response.data;

        const cars = [];

        for (let index = 0; index < json.length; index++) {
          cars.push(json[index]);
        }
        self.setAutos(cars);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  eliminarAuto(car) {
    let self = this;
    bootbox.dialog({
      title: "Borrado de Auto",
      message:
        "Va a eliminar el Auto" +
        car.brand +
        " " +
        car.model +
        " esta seguro ? ",
      buttons: {
        cancel: {
          label: "Na!",
          className: "btn-danger",
          callback: result => {}
        },
        confirm: {
          label: "Obvio!",
          className: "btn-success",
          callback: result => self.eliminarAutoOK(car)
        }
      }
    });
  }

  eliminarAutoOK(car) {
    return axios
      .delete("/api/cars/" + car._id)
      .then(function(response) {
        console.log("Se elimino correctamente un AUTO marca: " + car.brand);
      })
      .then(() => this.refrescar())
      .catch(function(error) {
        console.log(error.response.data.message);
        console.log("Error, no se pudo eliminar el AUTO : ", error);
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
      <tr id="infoAlum" key={car._id}>
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
    return (
      <Link
        className="btn btn-primary mr-2 mb-1"
        to={{
          pathname: "/CarEdit/",
          state: {
            carEdit: car
          }
        }}
      >
        Editar Auto
      </Link>
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
  botonOrdenar(columna) {
    return this.botonStandard(
      columna,
      () => this.ornenarArray(columna),
      "btn-link",
      "fa-close"
    );
  }

  ornenarArray(orden) {
    let autos = this.state.listaDeAutos.sort(function(a, b) {
      return a[orden] > b[orden];
    });
    this.setState({
      listaDeAutos: autos
    });
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

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            {this.encabezadoDeTabla([
              this.botonOrdenar("brand"),
              this.botonOrdenar("model"),
              this.botonOrdenar("category"),
              this.botonOrdenar("price"),
              this.botonOrdenar("numDoors"),
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
