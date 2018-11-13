import axios from 'axios';

/* A car is an object literal of the following form:
  {id : MongoId
   brand: String,
   model: String,
   category: String,
   numDoors:  Number,
   price:  Number
  }
*/

function init() {
  axios.defaults.baseURL = 'http://localhost:3001';
}

function getCars() {
  return retriveDataFromResponse(axios.get('/api/cars'));
}

function deleteCar(id) {
  return axios.delete(`/api/cars/${id}`);
}

function editCar(car) {
  return axios.put(`/api/cars/${car._id}`, omit(car, ['_id']));
}

function createCar(car) {
  return axios.post(`/api/cars`, car);
}

// ------------------ Funciones auxiliares -------------------------

function retriveDataFromResponse(axiosPromise) {
  return new Promise((resolve, reject) =>
    axiosPromise.then(res => resolve(res.data)).catch(err => reject(err))
  );
}

function omit(obj, omitKeys) {
  return Object.keys(obj).reduce((result, key) => {
    if (!omitKeys.includes(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

export default {
  init,
  getCars,
  deleteCar,
  editCar,
  createCar
};
