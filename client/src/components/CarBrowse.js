import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import "./CarBrowse.css";
const axios = require("axios");

class CarBrowse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDeAutos: []
    };
  }

  componentDidMount() {
    this.getAutos();
  }

  getAutos() {
    let self = this;
    return axios
      .get("/api/cars")
      .then(function(response) {
        const json = response.data;

        self.setAutos(json);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  setAutos(json) {
    this.setState({
      listaDeAutos: json[0]
    });
    console.log(json[0]);
  }
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Renault</th>
            <th scope="row">Sandero</th>
            <td>B</td>
            <td>$400.000</td>
            <td className="Action-Buttons">
              <Button className="Edit-Button" color="info">
                Edit Car
              </Button>
              <Button className="Delete-Button" color="danger">
                Delete Car
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">Peugeot</th>
            <th scope="row">208</th>
            <td>B</td>
            <td>$500.000</td>
            <td className="Action-Buttons">
              <Button className="Edit-Button" color="info">
                Edit Car
              </Button>
              <Button className="Delete-Button" color="danger">
                Delete Car
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">Peugeot</th>
            <th scope="row">308</th>
            <td>C</td>
            <td>$800.000</td>
            <td className="Action-Buttons">
              <Button className="Edit-Button" color="info">
                Edit Car
              </Button>
              <Button className="Delete-Button" color="danger">
                Delete Car
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default CarBrowse;
