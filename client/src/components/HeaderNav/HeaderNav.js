import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

import './HeaderNav.css';


class HeaderNav extends Component {
    
    render() {
        return (
            <header className="Main-Header">
                <Navbar color="dark" dark>
                    <NavbarBrand href="">
                        <img className="Brand-Logo"
                            src="/logo.png"
                            alt="Logo"
                        ></img> &nbsp; CarApp
                    </NavbarBrand>

                    {this.renderNewCarButton()}
                    
                </Navbar>
            </header>
        );
    }

    renderNewCarButton() {
        return (
            this.props.mainComp.isEditing()
                ?   ''
                :   <Button color="success"
                        tag={Link}
                        to='/edit'
                    >
                        New Car
                    </Button>
        )
    }
    
}

export default HeaderNav;
