import React, { Component } from 'react';
import {Navbar, NavbarBrand, Button } from 'reactstrap';
import './HeaderNav.css';

class HeaderNav extends Component {
    render() {
        return (
            <header className="Main-Header">
                <Navbar color="dark" dark>
                    <NavbarBrand href="#">
                        <img className="Brand-Logo"
                            src="/logo.png"
                            alt="Logo"
                        ></img> &nbsp; CarApp
                    </NavbarBrand>
                    <Button color="success">New Car</Button>
                </Navbar>
            </header>
        );
    }
}

export default HeaderNav;