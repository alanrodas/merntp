import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "./Form.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiRar";

class CarFormR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      model: "",
      category: "",
      price: "",
      numDoors: ""
    };
  }

  accept() {
    api.createCar(this.state, () => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="w-25 p-3">
          <InputGroup>
            <div>
              <InputGroupAddon>Brand</InputGroupAddon>
              <Input
                type="string"
                value={this.state.brand}
                onChange={event => this.setState({ brand: event.target.value })}
              />
            </div>

            <div>
              <InputGroupAddon>Model</InputGroupAddon>
              <Input
                type="string"
                value={this.state.model}
                onChange={event => this.setState({ model: event.target.value })}
              />
            </div>
            <div>
              <InputGroupAddon>Category</InputGroupAddon>
              <Input
                type="string"
                value={this.state.category}
                onChange={event =>
                  this.setState({ category: event.target.value })
                }
              />

              <div style={{ fontSize: 20, color: "red" }}>
                {this.state.categoryError}
              </div>
            </div>
            <div>
              <InputGroupAddon>Price</InputGroupAddon>
              <Input
                type="number"
                value={this.state.price}
                onChange={event =>
                  this.setState({ price: parseInt(event.target.value) })
                }
              />
            </div>

            <div>
              <InputGroupAddon>NumDoors</InputGroupAddon>
              <Input
                type="number"
                value={this.state.numDoors}
                onChange={event =>
                  this.setState({ numDoors: parseInt(event.target.value) })
                }
              />
            </div>
          </InputGroup>

          <Button
            className="Edit-Button"
            color="info"
            onClick={() => this.accept()}
          >
            Ok
          </Button>

          <Link to="/">
            <Button className="Cancell-Button" color="danger">
              Cancell
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CarFormR;
