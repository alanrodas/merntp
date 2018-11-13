import React, { Component } from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";

class InputGroup extends Component {
  render() {
    let p = this.props;
    return (
      <FormGroup row>
        <Label for={p.name} sm={2}>
          {p.label}
        </Label>
        <Col sm={10}>
          <Input
            className="bg-dark text-light"
            type={p.type || "string"}
            name={p.name}
            value={p.value}
            placeholder={p.placeholder}
            onChange={p.onChange}
            min={p.min}
            max={p.max}
          >
            {this.props.children}
          </Input>
          {this.props.validator}
        </Col>
      </FormGroup>
    );
  }
}

export default InputGroup;
