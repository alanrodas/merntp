import React, { Component } from 'react';
import EditionCar from '../CarBrowse/EditionCar';
import api from '../../api/api';

class NewCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      brand: '',
      model: '',
      category: '',
      price: 0,
      numDoors: 0,
      agregarCar: false,
      borrarCar: null
    };
    this.onAceptarAgregar = this.onAceptarAgregar.bind(this);
  }
  render() {
    return (
      <div className="col-md-3">
        <EditionCar
          brand={this.state.brand}
          model={this.state.model}
          category={this.state.category}
          price={this.state.price}
          numDoors={this.state.numDoors}
          onAceptarAgregar={car => this.onAceptarAgregar(car)}
        />
      </div>
    );
  }

  onAceptarAgregar(car) {
    let self = this;
    api
      .addCar(car)
      .then(res => {
        self.props.history.push('/');
      })
      .catch(err => this.alertarError(err));
    this.setState({ agregarCar: null });
  }
}

export default NewCar;
