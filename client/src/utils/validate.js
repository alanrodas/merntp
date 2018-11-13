import isEmpty from 'lodash/isEmpty'


// valida un auto
// retorna string con lista de errores
function validateCar(car) {
  const err = []
  if (isEmpty(car.brand)) {
    err.push('BRAND must be non-empty')
  }
  if (isEmpty(car.model)) {
    err.push('MODEL must be non-empty')
  }
  if (!['A', 'B', 'C', 'D', 'E'].includes(car.category)) {
    err.push('CATEGORY must be A, B, C, D, or E')
  }
  if (car.numDoors <= 0) {
    err.push('# OF DOORS must greater than zero')
  }
  return err
}


export default validateCar
