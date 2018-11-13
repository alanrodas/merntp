import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, CardFooter, CardTitle, Col, Form, FormGroup, Input, Label } from 'reactstrap'

import { createCar, editCar } from '../../api/cars'

import './CarBrowse.css'


class CarEdit extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      car: this.props.location.car || mkNewCar(),
    }
    props.mainComp.toggleEditing(true)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.car) {
      this.setState({
        car: nextProps.car,
      })
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>editing car</CardTitle>
        </CardHeader>
        <CardBody>
          {this.renderBody()}
        </CardBody>
        <CardFooter>
          {this.renderActions()}
        </CardFooter>
      </Card>
    )
  }
  
  renderBody() {
    return (
      <Form>
        {this.renderInput('brand', 'text', this.state.car.brand)}
        {this.renderInput('model', 'text', this.state.car.model)}
        {this.renderInput('category', 'text', this.state.car.category)}
        {this.renderInput('price', 'number', this.state.car.price, 1)}
        {this.renderInput('numDoors', 'number', this.state.car.numDoors, 1)}
      </Form>
    )
  }
  
  renderInput(name, type, ctrlField, minVal, maxVal) {
    return (
      <FormGroup row>
        <Label sm={2}
          for={name}
        >
          {name}
        </Label>
        <Col sm={10}>
          <Input
            type={type}
            name={name}
            value={ctrlField}
            min={minVal}
            max={maxVal}
            onChange={event =>
              this.onInputChange(
                event.target.name,
                event.target.value,
              )
            }
          />
        </Col>
      </FormGroup>
    )
  }
  
  onInputChange(name, value) {
    const newUsr = this.state.car
    newUsr[name] = value
    this.setState({
      usr: newUsr,
    })
  }
    
  renderActions() {
    return (
      <div className="Action-Buttons">
        <Button className='Edit-Button' color='success'
          onClick={() => this.onAccept(this.state.car)}
        >
          ok
        </Button>
        <Button className='Edit-Button' color='danger'
          onClick={() => this.onClose()}
        >
          cancel
        </Button>
      </div>
    )
  }
  
  async onAccept(car) {
    if (car._id) {
      await this.update(car)
    } else {
      await this.create(car)
    }
    this.onClose()
  }

  async create(car) {
    try {
      const res = await createCar(car)
      console.log(res)

    } catch (err) {
      console.log(err)
    }
  }

  async update(car) {
    try {
      const res = await editCar(car._id, car)
      console.log(res)

    } catch (err) {
      console.log(err)
    }
  }
  
  onClose() {
    this.props.mainComp.toggleEditing(false)
    this.props.history.push('/')
  }

}

const mkNewCar = () => {
  return {
    brand: '',
    model: '',
    category: '',
    price: 1,
    numDoors: 1,
  }
}


export default CarEdit
