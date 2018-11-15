import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, CardFooter, CardTitle, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

import { createCar, editCar } from '../../api/cars'
import checkCar from '../../utils/validate'

import '../CarBrowse/CarBrowse.css'
import './CarEdit.css'


class CarEdit extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      car: this.props.location.car || {
        brand: '',
        model: '',
        category: '',
        price: '',
        numDoors: 1,
      },
    }
    props.mainComp.setEditing(true)
  }

  /*
   * actualiza el estado cuando cambian las props
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.car) {
      this.setState({
        car: nextProps.car,
      })
    }
  }

  render() {
    return (
      <Card outline color='primary'>
        <CardHeader className='bg-primary text-light'>
          <CardTitle>{`${this.state.car._id ? 'Edit' : 'New'} Car`}</CardTitle>
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
      <div>
        {this.renderInput('Brand', 'brand', 'text', this.state.car.brand)}
        {this.renderInput('Model', 'model', 'text', this.state.car.model)}
        {this.renderInput('Category', 'category', 'text', this.state.car.category)}
        {this.renderInput('Price', 'price', 'number', this.state.car.price, 1)}
        {this.renderInput('# of doors', 'numDoors', 'number', this.state.car.numDoors, 1)}
      </div>
    )
  }

  renderInput(label, name, type, ctrlField, minVal) {
    return (
      <InputGroup className='mt-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText className='with-7-em'>{label}:</InputGroupText>
        </InputGroupAddon>
        <Input
          type={type}
          name={name}
          value={ctrlField}
          min={minVal}
          onChange={event =>
            this.onInputChange(
              event.target.name,
              event.target.value,
            )
          }
        />
      </InputGroup>
    )
  }
  
  renderActions() {
    return (
      <div className='Action-Buttons'>
        <Button className='Edit-Button' color='primary'
          onClick={() => this.onAccept(this.state.car)}
        >
          OK
        </Button>
        <Button className='Edit-Button' color='secondary'
          onClick={() => this.onClose()}
        >
          Cancel
        </Button>
      </div>
    )
  }
  
  /*
   * actualiza el valor de un input controlado
   * params:
   * - name: nombre del estado asociado al input
   * - value: nuevo valor
   */
  onInputChange(name, value) {
    const newCar = this.state.car
    newCar[name] = value
    this.setState({
      usr: newCar,
    })
  }
  
  /*
   * decide si debe actualizar o dar de alta un nuevo auto
   * si car._id es truthy, actualiza - si no, hace un alta
   * (un auto nuevo aún no ha sido agregado a la BD, y por eso no tiene _id)
   * params:
   * - car: auto a actualizar o agregar
   */
  async onAccept(car) {
    if (car._id) {
      await this.update(car)
    } else {
      await this.create(car)
    }
  }
  
  /*
   * sale de modo edición, y muestra el comp CarBrowse
   */
  onClose() {
    this.props.mainComp.setEditing(false)
    this.props.history.push('/')
  }

  // queries a la api

  /*
   * da de alta un auto nuevo
   * params:
   * - car: auto a agregar
   */
  async create(car) {
    try {
      checkCar(car)
      await createCar(car)
      this.props.alerts.delAndAddOk(`created car ${car.brand} ${car.model}`)
      this.onClose()

    } catch (err) {
      this.props.alerts.delAndAddError(`error creating car ${car.brand || ''} ${car.model || ''}`, err)
    } finally {
      this.props.mainComp.refreshAlerts()
    }
  }

  /*
   * modifica datos de un auto
   * params:
   * - car: auto a modificar
   */
  async update(car) {
    try {
      checkCar(car)
      await editCar(car._id, car)
      this.props.alerts.delAndAddOk(`updated car ${car.brand} ${car.model}`)
      this.onClose()

    } catch (err) {
      this.props.alerts.delAndAddError(`error updating car ${car.brand || ''} ${car.model || ''}`, err)
    } finally {
      this.props.mainComp.refreshAlerts()
    }
  }

}


export default withRouter(CarEdit)
