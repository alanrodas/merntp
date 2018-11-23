import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './CarBrowse.css';
 
const axios = require('axios');
const bootbox = require('bootbox');

class CarBrowse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listaDeAutos: [],
      ctdadAutos: null
    }

  }

  componentDidMount() {
    this.getDataAuto()
  }

  getDataAuto() {
    let self = this
    return axios.get('/api/cars')
      .then(function (response) {
        const json = response.data
        self.setDataAutos(json)
      })
      .catch(function (error) {
        console.log("algo paso ... ")
      })
  }

  setDataAutos(json){
    this.setState({
      listaDeAutos: json
    })
    // console.log(this.state.listaDeAutos)
  }

  render() {
    return (
      <div id="container" className="m-4 container-fluid recuadroPantalla">
        <div id="recuadro externo" className="col-md-11">
          <div id="titulos" className="align-self-center">
            <h4> Listado de Autos </h4>
          </div>
          <div className="card-body text-dark">
            <div className="row">
              <div className="col-md-12">{this.tablaAutos()}</div>
            </div>
          </div>    
        </div>
      </div>
    );
  }

  // Tabla con info de los Autos
  tablaAutos(){
    return (
      <Table dark >
        <thead>
          <tr>
            {this.encabezadoTabla([
              "Marca",
              "Modelo",
              "Categoria",
              "Ctdad Puertas",
              "Precio"
            ])}
          </tr>  
        </thead>
        <tbody>
         {this.state.listaDeAutos.map(auto => this.infoAuto(auto))}
        </tbody>
      </Table> 
    );
  }

// Encabezado de la tabla 
  encabezadoTabla(titulos){
    return titulos.map((titulo, ix) => <th key={ix}>{titulo}</th>);
    
  }
  
// Información de cada uno de los autos de la tabla
  infoAuto(auto) {
    const rowDatosAuto = (
      <tr id="infoCar" key={auto._id} >
        <td> {auto.brand} </td>
        <td> {auto.model} </td>
        <td> {auto.category} </td>
        <td> {auto.nroDoors} </td>
        <td> {auto.price} </td>
        <td className="Action-Buttons">
          <Link to={{pathname: "/EditCar", state:  auto  }} className="btn btn-outline-primary" color="info"  > Modificar
             {/* <span className={"fa " + glyphIcon}> Modificar </span> */}
          </Link>
          <Button className="Delete-Button" color="danger" onClick={() => this.eliminarAuto(auto)}>Eliminar</Button>
          
        </td>
      </tr>
    )
    return rowDatosAuto
  }

  eliminarAuto(auto){
    let self = this;
    bootbox.dialog({
      message: "Va a eliminar al "+auto.brand+ "  "+auto.model+" esta seguro ? ",
      buttons: {
        cancel: {
          label: "No",
          className: "btn-danger",
          callback: result => {}
        },
        confirm: {
          label: "Si",
          className: "btn-success",
          callback: result => self.confirmaEliminar(auto)
        }
      }
    })
  }

  confirmaEliminar(auto){
    let codigo= this.state.listaDeAutos.filter(
      car => car._id !==auto._id
    );
    this.setState({ listaDeAutos: codigo})
    console.log(auto._id);
    
    this.removeAuto(auto)
  }

  removeAuto(auto) {
    // let self = this;
    return axios
      .delete("/api/cars/" + auto._id)
      .then(function(response) {
        console.log(" Se elimino ");

      })
      .catch(function(error) {
        console.log("Error, no se pudo eliminar el alumno : ", error);
      });
  }

}

export default CarBrowse;