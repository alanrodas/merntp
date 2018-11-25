import React from 'react';
import { Button } from 'reactstrap';

function FilaCar({ car, onBorrar, onModificar }) {
  return (
    <tr>
      <td className="text-center" id="brand">
        {car.brand}
      </td>
      <td className="text-center" id="model">
        {car.model}
      </td>
      <td className="text-center" id="category">
        {car.category}
      </td>
      <td className="text-center" id="price">
        {car.price}
      </td>
      <td className="text-center" id="puertas">
        {car.numDoors}
      </td>
      <td className="Action-Buttons">
        <Button
          className="Delete-Button"
          color="info"
          onClick={() => onModificar(car)}
        >
          Editar Car
        </Button>

        <Button
          className="Delete-Button"
          color="danger"
          onClick={e =>
            window.confirm('esta seguro que quiere borrar esta unidad?') &&
            onBorrar(car)
          }
        >
          Delete Car
        </Button>
      </td>
    </tr>
  );
}
export default FilaCar;
