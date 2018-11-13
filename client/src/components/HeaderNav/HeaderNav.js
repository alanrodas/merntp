import React, { Component } from 'react';
import { Button, FormGroup, Input, Label, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom'

import './HeaderNav.css';


class HeaderNav extends Component {
    
    render() {
        return (
            <header className="Main-Header">
                <Navbar color="dark" dark>
                    <NavbarBrand href=""
                        onClick={(event) => event.preventDefault()}
                    >
                        <img className="Brand-Logo"
                            src="/logo.png"
                            alt="Logo"
                        ></img> &nbsp; CarApp
                    </NavbarBrand>

                    <FormGroup check nav='true' className='ml-4 mr-auto mt-1'>
                        <Label check className='text-light'>
                            <Input type="checkbox" className='mr-2'
                                onChange={(event) => this.onAlertsChange(event.target.checked)}
                            />
                            Display Alerts
                        </Label>
                    </FormGroup>

                    {this.renderNewCarButton()}
                </Navbar>
            </header>
        );
    }

    /*
     * muestra el botón 'New Car', solamente si no se está editando un auto
     */
    renderNewCarButton() {
        return (
            this.props.mainComp.isEditing()
                ?   null
                :   <Button color="success"
                        tag={Link}
                        to='/edit'
                    >
                        New Car
                    </Button>
        )
    }

    /*
     * controla si se mostrarán alertas, o no
     */
    onAlertsChange(isChecked) {
        this.props.mainComp.setAlerting(isChecked)
    }
    
}

export default HeaderNav;
