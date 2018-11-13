import Axios from "axios";
import FormCar from "../FormCar";

class NewCar extends FormCar {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      model: "",
      category: "A",
      price: 500000,
      numDoors: 3
    };
  }

  doOperationToServer() {
    let car = this.makeCar();
    Axios.post("/api/cars", car)
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

export default NewCar;
