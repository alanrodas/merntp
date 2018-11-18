import axios from 'axios';
/* A car is an object literal of the following form:
  {_id : MongoId
   brand: String,
   model: String,
   category: String,
   numDoors:  Number,
   price:  Number
  }
*/

init(); // Autoinitialization at module level

function init() {
  axios.defaults.baseURL = 'http://localhost:3001';
}

function getCar(id) {
  return retriveDataFromResponse(axios.get(`/api/cars/${id}`));
}

function getCars() {
  return retriveDataFromResponse(axios.get('/api/cars'));
}

function getCarsSortedBy(order) {
  return retriveDataFromResponse(axios.get(`/api/cars/order/${order}`));
}

function deleteCar(id) {
  return axios.delete(`/api/cars/${id}`);
}

function editCar(id, car) {
  return axios.put(`/api/cars/${id}`, car);
}

function createCar(car) {
  return axios.post(`/api/cars`, car);
}

// ------------------ Helper functions -------------------------

// Retrieve the data from the response
function retriveDataFromResponse(axiosPromise) {
  return new Promise((resolve, reject) =>
    axiosPromise.then(res => resolve(res.data)).catch(err => reject(err))
  );
}

export default {
  init,
  getCars,
  getCar,
  getCarsSortedBy,
  deleteCar,
  editCar,
  createCar
};
