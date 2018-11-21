import axios from 'axios';
import sacarDataResponse from './sacarDataResponse';

const ax = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

function getCars() {
  return sacarDataResponse(ax.get('/api/cars'));
}

function addCar(dataCar) {
  return ax.post('/api/cars', dataCar);
}

function getCar(id) {
  return sacarDataResponse(ax.get(`/api/cars/${id}`));
}

function deleteCar(id) {
  return ax.delete(`/api/cars/${id}`);
}

function modifyCar(id, car) {
  return ax.put(`/api/cars/${id}`, car);
}
function getCountCars() {
  return sacarDataResponse(ax.get('/api/cars/count/'));
}

export default {
  getCar,
  getCars,
  addCar,
  deleteCar,
  modifyCar,
  getCountCars
};
