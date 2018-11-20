// @ts-check
import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import api from '../../api/cars';
import { Link } from 'react-router-dom';

class CarBrowse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortColumn: 'brand',
      sortAsc: true,
      cars: [],
      itemToDelete: null
    };
    this.updateCars();
  }

  render() {
    return (
      <Table dark>
        {this.renderTableHeader()}
        <tbody>
          {this.state.cars.map((car, idx) => this.renderRow(car, idx))}
        </tbody>
        {this.renderModalConfirmation()}
      </Table>
    );
  }

  renderTableHeader() {
    return (
      <thead>
        <tr>
          {this.renderColHeader('brand', 'Brand')}
          {this.renderColHeader('model', 'Model')}
          {this.renderColHeader('category', 'Category')}
          {this.renderColHeader('numDoors', 'Doors')}
          {this.renderColHeader('price', 'Price')}
          <th className="text-center">Actions</th>
        </tr>
      </thead>
    );
  }

  renderColHeader(col, string) {
    return (
      <th scope="col">
        <button
          type="button"
          className="btn btn-outline-light border-0"
          onClick={() => this.changeOrderTo(col)}
        >
          <strong>
            {string}
            {col === this.state.sortColumn ? (
              this.state.sortAsc ? (
                <span>&darr;</span>
              ) : (
                <span>&uarr;</span>
              )
            ) : null}
          </strong>
        </button>
      </th>
    );
  }

  renderRow(car, idx) {
    return (
      <tr key={idx}>
        <th>{car.brand}</th>
        <th>{car.model}</th>
        <td>{car.category}</td>
        <td>{car.numDoors}</td>
        <td>{car.price ? '$' + car.price : 'not set'}</td>
        {this.renderRowButtons(car)}
      </tr>
    );
  }

  renderRowButtons(car) {
    return (
      <td className="Action-Buttons text-center">
        <Link className="btn btn-info Edit-Button" to={`/edit/${car._id}`}>
          Edit Car
        </Link>
        <Button
          className="Delete-Button"
          color="danger"
          onClick={() => this.setState({ itemToDelete: car })}
        >
          Delete Car
        </Button>
      </td>
    );
  }

  renderModalConfirmation() {
    if (this.state.itemToDelete) {
      return (
        <Modal isOpen={true}>
          <ModalHeader>Please confirm</ModalHeader>
          <ModalBody>
            <p>
              Are you sure you want to delete the car&nbsp;
              <strong>
                {this.state.itemToDelete.brand} {this.state.itemToDelete.model}
              </strong>
              &nbsp;?
            </p>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-cancel btn-outline-danger"
              onClick={() => {
                this.deleteCar(this.state.itemToDelete);
                this.setState({ itemToDelete: null });
              }}
            >
              I´m sure
            </button>

            <button
              className="btn btn-success"
              onClick={() => this.setState({ itemToDelete: null })}
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
    this.setState({
      sortColumn: order,
      sortAsc: this.state.sortColumn === order ? !this.state.sortAsc : true
    });
    this.updateCars();
  }

  updateCars() {
    return api
      .getCarsSortedBy((this.state.sortAsc ? '' : '-') + this.state.sortColumn)
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
