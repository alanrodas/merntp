import React, { Component } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./HeaderNav.css";

class HeaderNav extends Component {
  render() {
    return (
      <header className="Main-Header">
        <Navbar color="dark" dark>
          <NavbarBrand href="#">
            <img className="Brand-Logo" src="/logo.png" alt="Logo" /> &nbsp;
            CarApp
          </NavbarBrand>

          <Link to="/NewCar">
            <Button color="success">New Car</Button>
          </Link>
        </Navbar>
        <div />
      </header>
    );
  }
}

export default HeaderNav;
