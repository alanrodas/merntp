import axios from 'axios'

const baseURL = 'http://localhost:3001/api/cars'

/*
 * llamada a la api para dar de alta un auto
 * params:
 * - car: auto a agregar
 * retorna 1 promise
 */
const createCar = (car) => {
  return axios.post(baseURL, car)
}

/*
 * llamada a la api para consultar todos los autos
 * retorna 1 promise
 */
const getCars = () => {
  return axios.get(baseURL)
}

const getCarsSortedBy = (field) => {
  return axios.get(`${baseURL}/sorted/${field}`)
}

/*
 * llamada a la api para consultar 1 auto según su id
 * retorna 1 promise
 */
const getCar = (id) => {
  return axios.get(`${baseURL}/${id}`)
}

/*
 * llamada a la api para modificar los datos de un auto según su id
 * params:
 * - id: id del auto a modificar
 * - car: datos a modificar
 * retorna 1 promise
 */
const editCar = (id, car) => {
  return axios.put(`${baseURL}/${id}`, car)
}

/*
 * llamada a la api para borrar 1 auto según su id
 * retorna 1 promise
 */
const deleteCar = (id) => {
  return axios.delete(`${baseURL}/${id}`)
}

export {
  createCar,
  getCar,
  getCars,
  getCarsSortedBy,
  editCar,
  deleteCar,
}
