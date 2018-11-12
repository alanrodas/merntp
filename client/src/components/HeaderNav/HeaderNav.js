import React, { Component } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import "./HeaderNav.css";
import { Link } from "react-router-dom";

class HeaderNav extends Component {
  render() {
    return (
      <header className="Main-Header">
        <Navbar color="dark" dark>
          <NavbarBrand href="#">
            <img className="Brand-Logo" src="/logo.png" alt="Logo" /> &nbsp;
            CarApp
          </NavbarBrand>
          <Link className="btn btn-success" to="/newCar">
            New Car
          </Link>
        </Navbar>
      </header>
    );
  }
}

export default HeaderNav;
