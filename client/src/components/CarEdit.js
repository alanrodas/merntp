import CarNew from "./CarNew";
import "./CarNew.css";
const axios = require("axios");

class CarEdit extends CarNew {
  constructor(props) {
    super(props);

    this.autoAEditar = this.props.location.state.carEdit;

    this.state = {
      brand: this.autoAEditar.brand,
      model: this.autoAEditar.model,
      categorys: ["A", "B", "C", "D", "E"],
      category: this.autoAEditar.category,
      price: this.autoAEditar.price,
      numDoors: this.autoAEditar.numDoors
    };
  }

  guardar() {
    const car = {
      brand: this.state.brand,
      model: this.state.model,
      category: this.state.category,
      price: this.state.price,
      numDoors: this.state.numDoors
    };

    // CONFIGURAR PARA QUE ACTUALICE Y NO GUARDE UNO NUEVO
    axios
      .put(`/api/cars/${this.autoAEditar._id}`, car)
      .then(function(res) {
        console.log("Se Edito correctamente un AUTO");
      })
      .then(() => this.cancelar())
      .catch(function(error) {
        console.log(error);
        alert.error("ERROR - " + error.response.data.message);
      });
  }
}

export default CarEdit;
