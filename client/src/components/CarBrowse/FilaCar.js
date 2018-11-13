import React from 'react';
import { Button } from 'reactstrap';

export default function FilaCar({ car }) {
  return (
    <tr>
      <th scope="row">{car.brand}</th>
      <th scope="row">{car.model}</th>
      <td>{car.category}</td>
      <td>{car.price}</td>
      <td>{car.numDoors}</td>
      <td className="Action-Buttons">
        <Button className="Edit-Button" color="info">
          Edit Car
        </Button>
        <Button className="Delete-Button" color="danger">
          Delete Car
        </Button>
      </td>
    </tr>
  );
}
