import axios from 'axios';

/* Un car es un literal de la forma:
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
  return sacarDataDeResponse(axios.get('/api/cars'));
}

function deleteCar(id) {
  return axios.delete(`/api/cars/${id}`);
}

// Funciones auxiliares

function sacarDataDeResponse(axiosPromise) {
  return new Promise((resolve, reject) =>
    axiosPromise.then(res => resolve(res.data)).catch(err => reject(err))
  );
}

export default {
  init,
  getCars,
  deleteCar
};
