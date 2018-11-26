import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';

import ('../components/NewCar/NewCar.css');

const bootbox = require("bootbox");

class FormCar extends Component {
    constructor(props) {
        super(props);
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

      this.validator = new SimpleReactValidator();
      this.setCategory = "A, B, C, D, E"
    }

  

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
                    {this.validator.message('brand', this.state.brand, 'required|string')}
                </div>
                <div className="form-group">
                  <label htmlFor="modelo"> Modelo </label>
                  <input type="text" className="form-control" id="modelo"
                    placeholder="ingrese el modelo"
                    value= { this.state.model }
                    onChange = {(event) => this.setState({ model: event.target.value })}
                    />
                    {this.validator.message('model', this.state.model, 'required|string')}
                </div>
                <div className="form-group">
                  <label htmlFor="categoria"> Categoria </label>
                  <input type="text" className="form-control" id="categoria"
                    placeholder="ingrese la categoría"
                    value= { this.state.category }
                    onChange = {(event) => this.setState({ category: event.target.value })}
                    />
                    {this.validator.message('category', this.state.category, 'required|min:1|max:1|in:A, B, C, D, E')}
                </div>
                <div className="form-group">
                  <label htmlFor="ctdadPtas"> Ctdad Puertas </label>
                  <input type="number" className="form-control" id="ctdadPtas"
                    placeholder="ingrese la ctdad de puertas"
                    value= { this.state.nroDoors }
                    onChange = {(event) => this.setState({ nroDoors: event.target.value })}
                    />
                    {this.validator.message('nroDoors', this.state.nroDoors, 'required|numeric')}
                </div>
                <div className="form-group">
                  <label htmlFor="price"> Precio </label>
                  <input type="number" className="form-control" id="price"
                    placeholder="ingrese el precio"
                    value= { this.state.price }
                    onChange = {(event) => this.setState({ price: event.target.value })}
                    />
                    {this.validator.message('price', this.state.price, 'required|numeric')}
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
                onClick = {() => this.onSubmit()}
                >
                <span className="fa fa-check-circle"> Aceptar </span> 
              </Button>
            </div>  
          </div>
        </div>
      )
    }
    onSubmit(){
      if( this.validator.allValid() ){
        this.confirmar();
      } else {
        this.validator.showMessages();
        // rerender to show messages for the first time
        alert("Verifique los datos ingresados")
      }
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