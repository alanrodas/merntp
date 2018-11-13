import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import CarEdit from '../CarEdit/CarEdit';
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
          <Button
            color="success"
            onClick={() =>
              this.props.owner.setMainWindow(
                <CarEdit car={null} owner={this.props.owner} />
              )
            }
          >
            New Car
          </Button>
        </Navbar>
      </header>
    );
  }
}

export default HeaderNav;
