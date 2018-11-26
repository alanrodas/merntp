import FormCar from '../FormCar';

const axios = require('axios');

class EditCar extends FormCar {
  constructor(props) {
    super(props);
    // this.state = props.location.state
    this.state = {
      brand: this.props.location.state.brand,
      model: this.props.location.state.model,
      category: this.props.location.state.category,
      nroDoors: this.props.location.state.nroDoors,
      price: this.props.location.state.price,
      titulo: 'Modificar Auto'
    }
  }

  procesaAuto() {
    let self = this;
    let autoId = self.props.location.state._id;
 
    return axios
    .put('/api/cars/' + autoId, {
        brand: self.state.brand,
        model: self.state.model,
        category: self.state.category,
        nroDoors: self.state.nroDoors,
        price: self.state.price
      })
      .then(function (response) {
        console.log("Se modifico el Auto");
        self.props.history.push("/CarBrowse");
      })
      .catch(Error)
  }
} 

export default EditCar;