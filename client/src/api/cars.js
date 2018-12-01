import axios from 'axios';
import sacarDataResponse from './sacarDataResponse';

// const auto = auto.create({
//   _id: '',
//   brand: '',
//   model: '',
//   category: '',
//   price: '',
//   numDoors: ''
// });

const ax = axios.create({
  baseURL: 'http://localhost:3001'
});

function getCars() {
  return sacarDataResponse(ax.get('/api/cars'));
}

function addCar(dataCar, fn) {
  return ax.post('/api/cars', dataCar).then(() => fn());
}

function getCar(id) {
  return ax.get(`/api/cars/${id}`);
}

function deleteCar(id) {
  return ax.delete(`/api/cars/${id}`);
}

function modifyCar(id, car) {
  return ax.put(`/api/cars/${id}`, car);
}

export default {
  getCar,
  getCars,
  addCar,
  deleteCar,
  modifyCar
};
