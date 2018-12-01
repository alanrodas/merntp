const axios = require("axios");

function getCar(id) {
  return axios.get("http://localhost:3001/api/cars/" + id);
}

function modCar(id, carInfo, cb) {
  axios.put("http://localhost:3001/api/cars/" + id, carInfo).then(() => cb());
}

function createCar(car, cb) {
  axios.post("http://localhost:3001/api/cars", car).then(() => cb());
}

function deleteCar(id, fn) {
  axios.delete("http://localhost:3001/api/cars/" + id).then(() => fn());
}

function getCars() {
  return axios.get("http://localhost:3001/api/cars");
}
export default { getCar, modCar, createCar, getCars, deleteCar };
