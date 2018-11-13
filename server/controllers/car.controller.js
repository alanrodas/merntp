// @ts-check
const Car = require('../models/car');
const carCtrl = {};

carCtrl.getCars = async (req, res, next) => {
  Car.find({})
    .then(items => res.json(items))
    .catch(err => res.internalServerError());
};

carCtrl.createCar = async (req, res, next) => {
  try {
    const car = new Car({
      brand: req.body.brand,
      model: req.body.model,
      category: req.body.category,
      numDoors: req.body.numDoors,
      price: req.body.price
    });

    await car.save();
    res.created(car);
  } catch (exception) {
    res.internalServerError();
  }
};

carCtrl.getCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);

    if (car) {
      res.ok(car);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
};

carCtrl.editCar = async (req, res, next) => {
  Car.findByIdAndUpdate(req.params.id, req.body)
    .then(item => {
      if (item) {
        res.noContent();
      } else {
        res.notFound();
      }
    })
    .catch(err => res.internalServerError());
};

carCtrl.deleteCar = async (req, res, next) => {
  Car.findByIdAndRemove(req.params.id)
    .then(item => {
      if (item) {
        res.noContent();
      } else {
        res.notFound();
      }
    })
    .catch(err => res.internalServerError());
};

module.exports = carCtrl;
