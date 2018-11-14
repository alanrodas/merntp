import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './CarBrowse.css';
import api from '../../api/cars';
import CarEdit from '../CarEdit/CarEdit';
import { Link } from 'react-router-dom';

class CarBrowse extends Component {
  constructor(props) {
    super(props);
    api.init();
    this.state = {
      cars: [],
      itemABorrar: null
    };
  }

  componentDidMount() {
    this.updateCars();
  }

  render() {
    return (
      <Table dark>
        {this.renderTableHeader()}
        <tbody>
          {this.state.cars.map((car, idx) => this.renderCarRow(car, idx))}
        </tbody>
        {this.renderModalConfirmarBorrar()}
      </Table>
    );
  }

  renderTableHeader() {
    return (
      <thead>
        <tr>
          <th scope="col">
            <button
              type="button"
              className="btn btn-outline-light border-0"
              onClick={() => this.changeOrderTo('brand')}
            >
              <strong>Brand</strong>
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-outline-light border-0"
              onClick={() => this.changeOrderTo('model')}
            >
              <strong>Model</strong>
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-outline-light border-0"
              onClick={() => this.changeOrderTo('category')}
            >
              <strong>Category</strong>
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-outline-light border-0"
              onClick={() => this.changeOrderTo('numDoors')}
            >
              <strong>Doors</strong>
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-outline-light border-0"
              onClick={() => this.changeOrderTo('price')}
            >
              <strong>Price</strong>
            </button>
          </th>
          <th scope="col" className="text-center">
            Actions
          </th>
        </tr>
      </thead>
    );
  }

  renderCarRow(car, idx) {
    return (
      <tr key={idx}>
        <th>{car.brand}</th>
        <th>{car.model}</th>
        <td>{car.category}</td>
        <td>{car.numDoors}</td>
        <td>{'$' + car.price}</td>
        <td className="Action-Buttons text-center">
          <Link
            className="Edit-Button"
            color="info"
            to={{ pathname: '/edit', props: { car } }}
            onClick={() =>
              this.props.owner.setMainWindow(
                <CarEdit car={car} owner={this.props.owner} />
              )
            }
          >
            Edit Car
          </Link>
          <Button
            className="Delete-Button"
            color="danger"
            onClick={() => this.setState({ itemABorrar: car })}
          >
            Delete Car
          </Button>
        </td>
      </tr>
    );
  }

  renderModalConfirmarBorrar() {
    if (this.state.itemABorrar) {
      return (
        <Modal isOpen={true}>
          <ModalHeader>Please confirm</ModalHeader>
          <ModalBody>
            <p>
              Are you sure you want to delete the car&nbsp;
              <strong>
                {this.state.itemABorrar.brand} {this.state.itemABorrar.model}
              </strong>
            </p>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-cancel btn-outline-danger"
              onClick={() => {
                this.deleteCar(this.state.itemABorrar);
                this.setState({ itemABorrar: null });
              }}
            >
              I´m sure
            </button>

            <button
              className="btn btn-success"
              onClick={() => this.setState({ itemABorrar: null })}
            >
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      );
    } else {
      return null;
    }
  }

  changeOrderTo(order) {
    return api
      .getCarsOrderedBy(order)
      .then(cars => this.setState({ cars }))
      .catch(err => console.error(err));
  }

  updateCars(order) {
    return api
      .getCars()
      .then(cars => this.setState({ cars }))
      .catch(err => console.error(err));
  }

  deleteCar(car) {
    return api
      .deleteCar(car._id)
      .then(() => this.updateCars())
      .catch(err => console.error(err));
  }
}

export default CarBrowse;
