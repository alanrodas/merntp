import React, { Component } from "react";
import "./CarNew.css";
import { Link } from "react-router-dom";

class CarNew extends Component {
  constructor(props) {
    super(props);
    this.idAutoAEditar = ""; //this.props.location.state.idAuto || "";

    this.state = {
      brand: "",
      model: "",
      categorys: ["A", "B", "C", "D", "E"],
      category: "",
      price: "",
      numerDoors: ""
    };
  }

  componentDidMount() {
    if (this.idAutoAEditar) {
      this.requestAuto();
    }
  }

  manejarSeleccion(event) {
    this.setState({
      category: event.target.value
    });
  }

  desplegarCategorias() {
    return this.state.categorys.map(c => (
      <option key={c} value={c}>
        {c}
      </option>
    ));
  }

  limpiar() {
    this.setState = {
      brand: "",
      model: "",
      category: "A",
      price: 0,
      numerDoors: ""
    };
  }

  cancelar() {}
  guardar() {}

  render() {
    return (
      <div className="container">
        <form>
          <h3 className="mt-4 mb-4"> Nuevo Auto </h3>{" "}
          <div className="form-group">
            <label htmlFor="marca"> Marca </label>{" "}
            <input
              type="text"
              className="form-control col-md-6 "
              id="marca"
              placeholder="introduzca la Marca"
              value={this.state.brand}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label htmlFor="modelo"> Modelo </label>{" "}
            <input
              type="text"
              className="form-control col-md-6 "
              id="modelo"
              placeholder="introduzca el Modelo"
              value={this.state.model}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label htmlFor="categoria"> Categoria </label>{" "}
            <select
              className="form-control"
              value={this.state.category}
              onChange={this.manejarSeleccion.bind(this)}
              id="category"
            >
              {this.desplegarCategorias()}{" "}
            </select>{" "}
          </div>{" "}
          <div className="form-group">
            <label htmlFor="precio"> Precio </label>{" "}
            <input
              type="number"
              min="000000"
              max="99999999"
              className="form-control"
              id="precio"
              placeholder="000000"
              value={this.state.price}
              onChange={event =>
                this.setState({
                  price: event.target.value
                })
              }
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label htmlFor="puertas"> Cantidad De Puertas </label>{" "}
            <input
              type="number"
              min="2"
              max="5"
              className="form-control"
              id="precio"
              placeholder="2"
              value={this.state.numerDoors}
              onChange={event =>
                this.setState({
                  numerDoors: event.target.value
                })
              }
            />{" "}
          </div>{" "}
        </form>
        <div className="col">
          <Link
            className="btn btn-danger mr-1 mb-1 "
            to={{
              pathname: "/CarBrowse"
            }}
          >
            <span className="fa fa-danger"> Cancelar </span>
          </Link>
          <button
            type="button"
            className="btn btn-success mr-1 mb-1"
            //disabled="true"
            onClick={() => this.guardar()}
          >
            <span className="fa fa-plus"> Guardar Auto</span>{" "}
          </button>{" "}
        </div>
      </div>
    );
  }
}

export default CarNew;
