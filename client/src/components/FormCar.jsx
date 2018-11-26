import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ('../components/NewCar/NewCar.css');

const bootbox = require("bootbox");

class FormCar extends Component {
    // constructor(props) {
    //     super(props);
    //     // const stateForm = props.location.state;
    
    // //   this.state = {
    // //     titulo: stateForm ? stateForm.titulo : "",
    // //     brand: '',
    // //     model: '',
    // //     category:'',
    // //     nroDoors:'',
    // //     price:'',
    // //     // titulo: props.state.titulo
    // //   }

    // }

  

    render() {
      return (
        <div className="container">
          <div className="card border=2 card border=2 shadow p-4 mb-4 bg-dark">
            <div className="card bg-dark text-white">
              <h3 className="card-title">
                {this.state.titulo}
              </h3>
            </div>
            <div className="container recuadroPantalla card bg-dark text-white">
              <React.Fragment>
                <div className="form-group">
                  <label htmlFor="marca"> Marca </label>
                  <input type="text" className="form-control" id="marca"
                    placeholder="ingrese la Marca del Auto"
                    value= { this.state.brand }
                    onChange = {(event) => this.setState({ brand: event.target.value })}
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="modelo"> Modelo </label>
                  <input type="text" className="form-control" id="modelo"
                    placeholder="ingrese el modelo"
                    value= { this.state.model }
                    onChange = {(event) => this.setState({ model: event.target.value })}
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="categoria"> Categoria </label>
                  <input type="text" className="form-control" id="categoria"
                    placeholder="ingrese la categoría"
                    value= { this.state.category }
                    onChange = {(event) => this.setState({ category: event.target.value })}
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="ctdadPtas"> Ctdad Puertas </label>
                  <input type="text" className="form-control" id="ctdadPtas"
                    placeholder="ingrese la ctdad de puertas"
                    value= { this.state.nroDoors }
                    onChange = {(event) => this.setState({ nroDoors: event.target.value })}
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="price"> Precio </label>
                  <input type="text" className="form-control" id="price"
                    placeholder="ingrese el precio"
                    value= { this.state.price }
                    onChange = {(event) => this.setState({ price: event.target.value })}
                    />
                </div>
              </React.Fragment>
            </div>
            <div className="Action-Buttons bg-dark rounded-2">
            <Button className="btn btn-danger" 
                style={{ marginRight: "12px", marginTop: "8px", marginBottom: "10px"}} 
                onClick={ () => this.props.history.push("/CarBrowse")}
                >
                <span className="fa fa-close"> Volver </span>
              </Button>
              <Button className="btn btn-danger" 
                style={{ marginRight: "12px", marginTop: "8px", marginBottom: "10px"}} 
                onClick = {() => this.limpiar()}
                >
                <span className="fa fa-close"> Cancelar </span>
              </Button>
              <Button className="btn btn-success" 
                style={{ marginRight: "12px", marginTop: "8px", marginBottom: "10px"}} 
                onClick = {() => this.confirmar()}
                >
                <span className="fa fa-check-circle"> Aceptar </span> 
              </Button>
            </div>  
          </div>
        </div>
      )
    }
  
    confirmar(){
        
      let self = this;
      bootbox.dialog({
        message: "confirma el ingreso del auto ",
        buttons: {
          cancel: {
            label: 'No',
            className: 'btn-danger',
            callback: result => {}
          },
          confirm: {
            label: 'Si',
            className: 'btn-success',
            callback: result => self.procesaAuto(this)
          }
        }
      });
    }  
  
    limpiar(){
      this.setState({
        brand: '',
        model: '',
        category:'',
        nroDoors:'',
        price:''
      });
    }
  }

export default FormCar;