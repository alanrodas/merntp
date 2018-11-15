import isEmpty from 'lodash/isEmpty'


/*
 * valida el auto indicado
 * si el auto no es válido, genera una excepción con la descripción de los errores
 * params:
 * - car: auto a validar
 */
const checkCar = (car) => {
    const errs = validateCar(car)
    if (errs.length) {
      throw new Error(`error: ${errs.join(' - ')}`)
    }
  }

/*
 * valida el auto indicado
 * params:
 * - car: auto a validar
 * retorna:
 * - string con lista de errores
 */
const validateCar = (car) => {
  const err = []
  if (isEmpty(car.brand)) {
    err.push('BRAND must be non-empty')
  }
  if (isEmpty(car.model)) {
    err.push('MODEL must be non-empty')
  }
  if (!isValidCategory(car.category)) {
    err.push('CATEGORY must be `A`, `B`, `C`, `D`, or `E`')
  }
  if (car.numDoors <= 0) {
    err.push('# OF DOORS must greater than zero')
  }
  return err
}

/*
 * indica si la categoría indicada es válida
 * params:
 * - cat: categoría a validar
 * retorna: true o false
 */
const isValidCategory = (cat) => {
  return ['A', 'B', 'C', 'D', 'E'].includes(cat)
}


export default checkCar
