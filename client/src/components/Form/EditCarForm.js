import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "./Form.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

class EditCarFormR extends Component {
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
    axios
      .put(
        "http://localhost:3001/api/cars/" + this.props.match.params.id,
        this.state
      )
      .then(() => this.props.history.push("/"));
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/cars/" + this.props.match.params.id)
      .then(res => {
        this.setState({ brand: res.data.brand });
        this.setState({ model: res.data.model });
        this.setState({ category: res.data.category });
        this.setState({ price: res.data.price });
        this.setState({ numDoors: res.data.numDoors });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="w-25 p-3">
          <InputGroup>
            <div>
              <InputGroupAddon className="pepe">Brand</InputGroupAddon>
              <Input
                placeholder=""
                type="string"
                value={this.state.brand}
                onChange={event => this.setState({ brand: event.target.value })}
              />
            </div>

            <div>
              <InputGroupAddon>Model</InputGroupAddon>
              <Input
                type="string"
                placeholder=""
                value={this.state.model}
                onChange={event => this.setState({ model: event.target.value })}
              />
            </div>
            <div>
              <InputGroupAddon>Category</InputGroupAddon>
              <Input
                placeholder=""
                type="string"
                value={this.state.category}
                onChange={event =>
                  this.setState({ category: event.target.value })
                }
              />
            </div>
            <div>
              <InputGroupAddon>Price</InputGroupAddon>
              <Input
                placeholder=""
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
                placeholder=""
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

export default EditCarFormR;
