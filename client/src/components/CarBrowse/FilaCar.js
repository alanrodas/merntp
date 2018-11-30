import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function FilaCar({ car, onBorrar }) {
  return (
    <tr>
      <th scope="row">{car.brand}</th>
      <th scope="row">{car.model}</th>
      <td>{car.category}</td>
      <td>{car.numDoors}</td>
      <td>$ {car.price}</td>

      <td className="Action-Buttons">
        <Link
          className="btn btn-info Edit-Button"
          to={{ pathname: '/editarCar', state: { carEdit: car } }}
        >
          Edit Car
        </Link>
        <Button
          className="Delete-Button"
          color="danger"
          onClick={() =>
            window.confirm('ESTA SEGURO QUE DESEA BORRAR?') && onBorrar(car)
          }
        >
          Delete Car
        </Button>
      </td>
    </tr>
  );
}
