import React, { Component } from 'react';
import EditionCar from '../CarBrowse/EditionCar';
import api from '../../api/api';

const emptyCar = {
  brand: '',
  model: '',
  category: 'A',
  numDoors: 4,
  price: 0
};
class NewCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      car: emptyCar
    };
    this.updateComponent();
    this.onAceptarAgregar = this.onAceptarAgregar.bind(this);
  }
  updateComponent() {
    if (this.props.match.params.id) {
      api
        .getCar(this.props.match.params.id)
        .then(car => this.setState({ id: this.props.match.params.id, car }));
    } else {
      this.setState({ id: null, car: emptyCar });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.updateComponent();
    }
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
          onAceptarModificar={car => this.onAceptarModificar(car)}
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
