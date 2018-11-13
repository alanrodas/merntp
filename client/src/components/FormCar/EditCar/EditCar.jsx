import Axios from "axios";
import FormCar from "../FormCar";

class EditCar extends FormCar {
  constructor(props) {
    super(props);
    this.state = this.props.location.state.car;
  }

  doOperationToServer() {
    let car = this.makeCar();
    Axios.put(`/api/cars/${this.state._id}`, car)
      .then(r => this.goHome())
      .catch(e => console.log(e));
  }

  makeCar() {
    return {
      brand: this.state.brand,
      model: this.state.model,
      category: this.state.category,
      price: this.state.price,
      numDoors: this.state.numDoors
    };
  }
}

export default EditCar;
