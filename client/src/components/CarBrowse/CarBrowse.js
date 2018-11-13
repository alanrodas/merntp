import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import './CarBrowse.css';

import { deleteCar, getCars } from '../../api/cars'


class CarBrowse extends Component {

    constructor() {
        super()
        this.state = {
            cars: [],
        }
    }

    componentDidMount() {
        this.doGetCars()
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <Table dark>
                        <thead>
                            <tr>
                                <th scope="col">Brand</th>
                                <th scope="col">Model</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCars()}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

    renderCars() {
        return (
            this.state.cars.map(car => {
                return this.renderCar(car)
            })
        )
    }

    renderCar(car) {
        return(
            <tr key={car._id}>
                <th scope="row">{car.brand}</th>
                <th scope="row">{car.model}</th>
                <td>{car.category}</td>
                <td>{car.price}</td>
                <td className="Action-Buttons">
                    <Button className="Edit-Button" color="info"
                        onClick={() => this.showEdit(car)}
                    >
                        Edit Car
                    </Button>
                    <Button className="Delete-Button" color="danger"
                        onClick={() => this.onDelete(car)}
                    >
                        Delete Car
                    </Button>
                </td>
            </tr>
        )
    }

    showEdit(car) {
        this.props.mainComp.toggleEditing(true)
        this.props.history.push({
            pathname: '/edit',
            car,
        })
    }

    async doGetCars() {
        try {
            const res = await getCars()
            this.setState({
                cars: res.data,
            })

        } catch (err) {
            console.log(err)
        }

    }

    async onDelete(car) {
        try {
            const res = await deleteCar(car._id)
            console.log(res.data)
            this.doGetCars()

        } catch (err) {
            console.log(err)
        }

    }

}


export default CarBrowse;
