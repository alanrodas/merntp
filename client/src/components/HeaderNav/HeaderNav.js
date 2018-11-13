import React, { Component } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import "./HeaderNav.css";
import { Link } from "react-router-dom";
import Route from "react-router-dom/Route";

class MyNav extends Component {
  render() {
    return (
      <header className="Main-Header">
        <Navbar color="dark" dark>
          <Link className="navbar-brand" to="/">
            <img className="Brand-Logo" src="/logo.png" alt="Logo" /> &nbsp;
            CarApp
          </Link>
          {this.props.children}
        </Navbar>
      </header>
    );
  }
}

class HeaderNav extends Component {
  render() {
    return (
      <MyNav>
        <Route
          path="/newCar"
          exact={true}
          children={({ match }) =>
            match ? null : (
              <Link className="btn btn-success" to="/newCar">
                New Car
              </Link>
            )
          }
        />
      </MyNav>
    );
  }
}

export default HeaderNav;
