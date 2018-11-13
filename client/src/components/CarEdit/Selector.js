// @ts-check
/* Componente React para mostrar un Select sin tener que crear cada una de la option a mano

Nota: un Valor podria ser String o un numero. Es algo que pueda mostrarse directamente

Props que toma el componente:

  caption     :: String,
  valor       :: Valor,         (Es es valor que actualmente tiene el componente)
  valores     :: [Valor]        (Son los valores posibles del componente)
  mostrar     :: [String]       (OPCIONAL: Estos son los string que voy a mostrar al usuario)
  onChange    :: Valor -> ()
*/
import React from 'react';

export default function Selector({
  caption,
  valor,
  valores,
  onChange,
  mostrar = null
}) {
  return (
    <div className="input-group mt-2">
      <div className="input-group-prepend">
        <span className="input-group-text width-10-em">{caption} </span>
      </div>
      <select
        value={mostrar ? valorToStr(valor, valores, mostrar) : valor}
        className="custom-select"
        onChange={event =>
          onChange(
            mostrar
              ? strToValor(event.target.value, valores, mostrar)
              : event.target.value
          )
        }
      >
        {renderOptions(valores, mostrar)}
      </select>
    </div>
  );
}

function valorToStr(valor, valores, mostrar) {
  return mostrar[valores.indexOf(valor)];
}

function strToValor(str, valores, mostrar) {
  return valores[mostrar.indexOf(str)];
}

function renderOptions(valores, mostrar) {
  return (mostrar ? mostrar : valores).map((valor, idx) => (
    <option key={idx} value={valor}>
      {valor}
    </option>
  ));
}
