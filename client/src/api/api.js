import axios from 'axios';
import sacarDataDeResponse from '../api/sacarDataResponse';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

function getCars() {
  return sacarDataDeResponse(instance.get('/api/cars'));
}

function addCar(datosCar) {
  return instance.post('/api/cars', datosCar);
}

function getCar(id) {
  return sacarDataDeResponse(instance.get(`/api/cars/${id}`));
}

function deleteCar(id) {
  return instance.delete(`/api/cars/${id}`);
}

function modifyCar(id, car) {
  return instance.put(`/api/cars/${id}`, car);
}

export default {
  getCar,
  getCars,
  addCar,
  deleteCar,
  modifyCar
};
