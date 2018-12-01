import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function FilaCar({ car, onBorrar }) {
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
        <Link className="btn btn-info" to={'/EditionCar/' + car._id}>
          Editar
        </Link>

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
