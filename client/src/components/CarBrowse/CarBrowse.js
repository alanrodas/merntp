import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Table } from 'reactstrap';

import ModalPopup from '../ModalPopup/ModalPopup'

import './CarBrowse.css';

import { deleteCar, getCars, getCarsSortedBy } from '../../api/cars'


class CarBrowse extends Component {

    constructor() {
        super()
        this.state = {
            cars: [],
            sortBy: null,
            sortAscending: true,
            delCar: null,
            showDelModal: false,
        }
    }

    componentDidMount() {
        this.doGetCars()
    }

    render() {
        return (
            <div>
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
                {this.renderModal()}
            </div>
        );
    }

    /*
     * header con th clickeables para poder ordenar la tabla
     */
    renderSortableHeader(header) {
        const headerLC = header.toLowerCase()
        return (
            <th className='Sortable'
                scope='col'
                onClick={() => this.sortBy(headerLC)}
            >
                {header} {this.renderSortIcon(headerLC)}
            </th>
        )
    }

    /*
     * ícono que indica orden ascendente o descendente
     */
    renderSortIcon(header) {
        return (
            (header === this.state.sortBy)
            ?   (this.state.sortAscending)
                ?   <span className='ml-1'>&#9662;</span>
                :   <span className='ml-1'>&#9652;</span>
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
                        onClick={() => this.confirmDelete(car)}
                    >
                        Delete Car
                    </Button>
                </td>
            </tr>
        )
    }

    /*
     * diálogo modal para confirmar si se desea borrar un auto
     */
    renderModal() {
        return (
            (this.state.showDelModal)
            ? <ModalPopup
                  isOpen={this.state.showDelModal}
                  title={'Delete Car'}
                  msg={`Delete ${this.state.delCar.brand} ${this.state.delCar.model} ?`}
                  fnOnAccept={() => this.onAcceptDel()}
                  fnOnCancel={() => this.onCloseDelModal()}
              />
            : null
        )
    }

    /*
     * settea el estado para ordenar la tabla por la columna indicada
     * params:
     * - header: columna por la que se desea ordenar la tabla
     */
    async sortBy(header) {
        if (this.state.sortBy !== header) {
            await this.setState({
                sortBy: header,
                sortAscending: true,
            })
        } else {
            await this.setState({
                sortAscending: !this.state.sortAscending,
            })
        }
        this.doGetCarsSortedByHeader()
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

    /*
     * lee todos los autos,
     * ordenados según estado setteado en this.state.sortBy y this.state.sortAscending
     */
    async doGetCarsSortedByHeader() {
        try {
            const res = await getCarsSortedBy(`${this.state.sortAscending ? '' : '-'}${this.state.sortBy}`)
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
     * settea estado para mostrar el modal Delete Car
     * params:
     * - car: auto a borrar
     */
    confirmDelete(car) {
        this.setState({
            delCar: car,
            showDelModal: true,
        })
    }
    
    /*
     * callback para el modal Delete Car, se ejecuta al presionar el botón Ok;
     * llama a la api para borrar el auto setteado en el estado y cierra el modal
     */
    async onAcceptDel() {
        await this.onDelete(this.state.delCar)
        this.onCloseDelModal()
    }

    /*
     * se ejecuta al cerrar el modal Delete Car;
     * limpia el auto a borrar del estado,
     * y settea estado para ocultar el modal Delete Car
     */
    onCloseDelModal() {
        this.setState({
            delCar: null,
            showDelModal: false,
        })
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
