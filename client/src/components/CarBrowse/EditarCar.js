import AgregarCar from './AgregarCar';
import api from '../../api/api';

class EditarCar extends AgregarCar {
  constructor(props) {
    super(props);

    this.state = {
      _id: this.props.location.state.carEdit._id,
      brand: this.props.location.state.carEdit.brand,
      model: this.props.location.state.carEdit.model,
      category: this.props.location.state.carEdit.category,
      price: this.props.location.state.carEdit.price,
      numDoors: this.props.location.state.carEdit.numDoors
    };
  }

  onAceptar() {
    const car = {
      _id: this.state._id,
      brand: this.state.brand,
      model: this.state.model,
      category: this.state.category,
      price: this.state.price,
      numDoors: this.state.numDoors
    };

    this.onAceptarModificar(car);
  }

  onAceptarModificar(car) {
    return api
      .modifyCar(car._id, car)
      .then(() => this.props.history.push('/carBrowse'))
      .catch(err => {
        console.log(err);
      });
  }
}

export default EditarCar;
