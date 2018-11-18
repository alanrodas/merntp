import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

class HeaderNav extends Component {
  render() {
    return (
      <header className="Main-Header">
        <Navbar color="dark" dark>
          <NavbarBrand href="#">
            <img className="Brand-Logo" src="/logo.png" alt="Logo" /> &nbsp;
            CarApp
          </NavbarBrand>
          <Link className="btn btn-success" color="success" to="/edit">
            New Car
          </Link>
        </Navbar>
      </header>
    );
  }
}

export default HeaderNav;
