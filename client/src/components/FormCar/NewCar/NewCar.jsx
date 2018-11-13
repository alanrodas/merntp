import React, { Component } from "react";
import { Container, Button, Form } from "reactstrap";
import InputGroup from "./InputGroup";
import Axios from "axios";

class NewCar extends Component {
  static categoryOptions = ["A", "B", "C", "D", "E", "F", "G", "H"];
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onFormSubmit() {
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

  goHome() {
    this.props.history.push("/");
  }
  render() {
    return (
      <Container>
        <Form>
          <InputGroup
            label="Brand"
            name="brand"
            value={this.state.brand}
            placeholder="type brand name"
            onChange={e => this.handleChange(e)}
          />
          <InputGroup
            label="Model"
            name="model"
            value={this.state.model}
            placeholder="type model name"
            onChange={e => this.handleChange(e)}
          />

          <InputGroup
            label="Category"
            name="category"
            value={this.state.category}
            onChange={e => this.handleChange(e)}
            type="select"
          >
            {NewCar.categoryOptions.map(c => (
              <option key={c}>{c}</option>
            ))}
          </InputGroup>
          <InputGroup
            label="Price"
            name="price"
            value={this.state.price}
            onChange={e => this.handleChange(e)}
            type="number"
          />
          <InputGroup
            label="Number of Doors"
            name="numDoors"
            value={this.state.numDoors}
            onChange={e => this.handleChange(e)}
            type="number"
          />
          <Button className="btn-danger" onClick={this.props.history.goBack}>
            Cancel
          </Button>
          <Button className="btn-success" onClick={() => this.onFormSubmit()}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default NewCar;
