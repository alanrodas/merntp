/*
 * valida si el campo indicado es elegible como criterio de ordenamiento
 * si el nombre no es elegible, genera una excepción con la descripción del error
 * params:
 * - fieldName: nombre del campo a validar
 */
const checkSortableFieldname = (fieldName) => {
  if (!isSortableFieldname(fieldName)) {
    throw new Error('`sorted` CRITERIUM must be `brand`, `category` or `price`')
  }
}

/*
 * indica si el campo indicado es elegible como criterio de ordenamiento
 * params:
 * - fieldName: nombre de campo a verificar
 * retorna: true o false
 */
const isSortableFieldname = (fieldName) => {
  const sortable = ['brand', 'category', 'price']
  return sortable.includes(fieldName) || sortable.includes(stripLeadingDash(fieldName))
}

/*
 * si el string indicado empieza con '-', retorna el string sin el primer '-';
 * si no, retorna el string sin cambios
 * params:
 * - str: string al que se desea quitar el primer caracter
 */
const stripLeadingDash = (str) => {
  return (str.charAt(0) === '-') ? str.substr(1) : str
}


module.exports = checkSortableFieldname
