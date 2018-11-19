import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

class HeaderNav extends Component {
  render() {
    return (
      <header className="Main-Header">
        <Navbar color="dark" dark>
          <Link to="/" className="navbar-brand">
            <img className="Brand-Logo" src="/logo.png" alt="Logo" /> &nbsp;
            CarApp
          </Link>
          <Link className="btn btn-success" color="success" to="/new">
            New Car
          </Link>
        </Navbar>
      </header>
    );
  }
}

export default HeaderNav;
