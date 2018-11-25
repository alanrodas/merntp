// import React, { Component } from 'react';
// import { Button } from 'reactstrap';

import FormCar from '../FormCar';

// const FormCar = require('../FormCar');

// const bootbox = require("bootbox");
const axios = require('axios');

class EditCar extends FormCar {
  constructor(props) {
    super(props);

    this.state = props.location.state
    // this.state = {
    //   brand: '',
    //   model: '',
    //   category:'',
    //   nroDoors:'',
    //   price:'',
    //   titulo: 'Modifica Auto'
    // }
    // this.ingresaAuto=this.ingresaAuto.bind(this);
  }

  procesaAuto(auto) {

    // let self = this;
    this.setState = {
      brand: this.state.brand,
      model: this.state.model,
      category: this.state.category,
      nroDoors: this.state.nroDoors,
      price: this.state.price
    };

    let self = this;

    return axios
      .put('/api/cars/' + auto.state._id, {
        brand: this.state.brand,
        model: this.state.model,
        category: this.state.category,
        nroDoors: this.state.nroDoors,
        price: this.state.price
      })
      .then(function (response) {
        console.log("Se modifico el Auto");
        self.props.history.push("/CarBrowse");
      })
      .catch(Error)

  }

} 

export default EditCar;