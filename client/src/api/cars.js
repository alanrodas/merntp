import axios from 'axios'

const baseURL = 'http://localhost:3001/api/cars'

const createCar = (car) => {
  return axios.post(baseURL, car)
}

const getCars = () => {
  return axios.get(baseURL)
}

const getCar = (id) => {
  return axios.get(`${baseURL}/${id}`)
}

const editCar = (id, car) => {
  return axios.put(`${baseURL}/${id}`, car)
}

const deleteCar = (id) => {
  return axios.delete(`${baseURL}/${id}`)
}

export {
  createCar,
  getCar,
  getCars,
  editCar,
  deleteCar,
}
