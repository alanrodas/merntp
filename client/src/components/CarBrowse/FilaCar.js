import React from 'react';
import { Button } from 'reactstrap';

export default function FilaCar({ car, onBorrar, onModificar }) {
  return (
    <tr>
      <th scope="row">{car.brand}</th>
      <th scope="row">{car.model}</th>
      <td>{car.category}</td>
      <td>{car.numDoors}</td>
      <td>$ {car.price}</td>

      <td className="Action-Buttons">
        <Button
          className="Edit-Button"
          color="info"
          onClick={() => onModificar(car)}
        >
          Edit Car
        </Button>
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
