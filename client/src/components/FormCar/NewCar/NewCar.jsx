import React, { Component } from "react";
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class NewCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryOptions: ["A", "B", "C", "D", "E", "F", "G", "H"]
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup row>
            <Label for="brand" sm={2}>
              Brand
            </Label>
            <Col sm={10}>
              <Input
                type="string"
                name="brand"
                placeholder="type brand name"
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="model" sm={2}>
              Model
            </Label>
            <Col sm={10}>
              <Input
                type="string"
                name="model"
                placeholder="type model"
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="category" sm={2}>
              Category
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="category"
                onChange={e => this.handleChange(e)}
              >
                {this.state.categoryOptions.map(c => (
                  <option key={c}>{c}</option>
                ))}
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>
              Price
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="price"
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="numDoors" sm={2}>
              Number of Doors
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                value="0"
                name="numDoors"
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </FormGroup>
          <Button className="btn-danger">Cancel</Button>
          <Button className="btn-success">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default NewCar;
