// import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import FormCar from '../FormCar';

import ('../FormCar');

// const bootbox = require("bootbox");
const axios = require('axios');

class NewCar extends FormCar {
  constructor(props) {
    super(props);

    // this.state = props.location.state,
    this.state = {
      brand: '',
      model: '',
      category:'',
      nroDoors:'',
      price:'',
      titulo: 'Ingresa Auto'
    }
    // this.ingresaAuto=this.ingresaAuto.bind(this);
  }

  procesaAuto(){
    // let self = this;
    const auto = {
      brand: this.state.brand,
      model: this.state.model,
      category: this.state.category,
      nroDoors: this.state.nroDoors,
      price: this.state.price
    };

    let self = this;

    return axios
      .post('/api/cars', auto)
      .then (function(response){
        console.log("Se agrego un Nuevo Auto");
        self.props.history.push("/CarBrowse");

      })
      .catch(Error)
      
  }
}

export default NewCar;