import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Table } from 'reactstrap';
import './CarBrowse.css';

import { deleteCar, getCars, getCarsSortedBy } from '../../api/cars'


class CarBrowse extends Component {

    constructor() {
        super()
        this.state = {
            cars: [],
            sortBy: null,
        }
    }

    componentDidMount() {
        this.doGetCars()
    }

    render() {
        return (
            <Table dark>
                <thead>
                    <tr>
                        {this.renderSortableHeader('Brand')}
                        <th scope="col">Model</th>
                        {this.renderSortableHeader('Category')}
                        {this.renderSortableHeader('Price')}
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCars()}
                </tbody>
            </Table>
        );
    }
    
    renderSortableHeader(header) {
        const headerLC = header.toLowerCase()
        return (
            <th className='Sortable'
                scope='col'
                onClick={() => this.sortBy(headerLC)}
            >
                {header} {this.renderCaret(headerLC)}
            </th>
        )
    }
    
    renderCaret(header) {
        return (
            (header === this.state.sortBy)
            ? <span>&diams;</span>
            : null
        )
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

    sortBy(header) {
        if (this.state.header !== header) {
            this.setState({
                sortBy: header,
            })
            this.doGetCarsSortedBy(header)
        }
    }

    /*
     * entra en modo edición, y pasa control al comp CarEdit,
     * con el auto indicado como argumento
     * params:
     * - car: auto a editar
     */
    showEdit(car) {
        this.props.mainComp.setEditing(true)
        this.props.history.push({
            pathname: '/edit',
            car,
        })
    }
    
    // queries a la api
    
    /*
     * lee todos los autos
     */
    async doGetCars() {
        try {
            const res = await getCars()
            this.setState({
                cars: res.data,
            })

        } catch (err) {
            this.props.alerts.addError('error fetching cars from server', err)
        } finally {
            this.props.mainComp.refreshAlerts()
        }
    }
    
    async doGetCarsSortedBy(header) {
        try {
            const res = await getCarsSortedBy(header)
            this.setState({
                cars: res.data,
            })

        } catch (err) {
            this.props.alerts.addError('error fetching cars from server', err)
        } finally {
            this.props.mainComp.refreshAlerts()
        }
    }
    
    /*
     * borra el auto indicado
     * params:
     * - car: auto a borrar
     */
    async onDelete(car) {
        try {
            await deleteCar(car._id)
            this.props.alerts.delAndAddOk(`deleted car ${car.brand} ${car.model}`)
            this.doGetCars()

        } catch (err) {
            this.props.alerts.delAndAddError(`error deleting car ${car.brand} ${car.model}`, err)
        } finally {
            this.props.mainComp.refreshAlerts()
        }
    }

}


export default withRouter(CarBrowse);
