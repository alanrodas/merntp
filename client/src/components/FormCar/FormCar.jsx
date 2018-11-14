import React, { Component } from "react";
import { Container, Button, Form } from "reactstrap";
import InputGroup from "./InputGroup";
import SimpleReactValidator from "simple-react-validator";

//Validation personals rules
const personalRule = {
  emptyOrInteger: {
    message: "The :attribute must be a integer",
    rule: function(val, options) {
      return this._testRegex(val, /^$|^\d+$/i);
    }
  }
};

/**
 * doOperationToServer: se debe escribir este metodo para poder utilizar el form
 */
class FormCar extends Component {
  static categoryOptions = ["A", "B", "C", "D", "E"];
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator(personalRule);
  }

  onFormSubmit() {
    if (this.validator.allValid()) {
      this.doOperationToServer();
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleNum(e) {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    });
  }

  goHome() {
    this.props.history.push("/");
  }

  render() {
    return (
      <Form className="p-3 pl-5 pr-5 bg-dark text-light">
        <InputGroup
          label="Brand"
          name="brand"
          value={this.state.brand}
          placeholder="type brand name"
          onChange={e => this.handleChange(e)}
          validator={this.validator.message(
            "brand",
            this.state.brand,
            "required|alpha_num_dash|max:30"
          )}
        />
        <InputGroup
          label="Model"
          name="model"
          value={this.state.model}
          placeholder="type model name"
          onChange={e => this.handleChange(e)}
          validator={this.validator.message(
            "carModel",
            this.state.model,
            "required|alpha_num_dash|max:30"
          )}
        />
        <InputGroup
          label="Category"
          name="category"
          value={this.state.category}
          onChange={e => this.handleChange(e)}
          type="select"
        >
          {FormCar.categoryOptions.map(c => (
            <option key={c}>{c}</option>
          ))}
        </InputGroup>
        <InputGroup
          label="Price"
          name="price"
          value={this.state.price}
          placeholder="price here"
          onChange={e => this.handleChange(e)}
          type="string"
          validator={this.validator.message(
            "price",
            this.state.price,
            "emptyOrInteger"
          )}
        />
        <InputGroup
          label="Number of Doors"
          name="numDoors"
          value={this.state.numDoors}
          onChange={e => this.handleNum(e)}
          type="number"
          min="0"
          max="10"
          validator={this.validator.message(
            "model",
            this.state.numDoors,
            "required|integer|gte:0|lte:10"
          )}
        />
        <div className="clearfix">
          <Button
            className=" float-right btn-success"
            onClick={() => this.onFormSubmit()}
          >
            Submit
          </Button>
          <Button
            className=" float-right btn-danger"
            onClick={this.props.history.goBack}
          >
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
}

export default FormCar;
