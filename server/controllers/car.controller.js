// @ts-check
const Car = require('../models/car');
const carCtrl = {};
const Ajv = require('ajv');
const ajv = new Ajv();

carCtrl.getCars = async (req, res, next) => {
  Car.find({})
    .then(items => res.json(items))
    .catch(err => res.internalServerError());
};

carCtrl.getCarsOrderedBy = async (req, res, next) => {
  Car.find({})
    .sort(req.params.order)
    .then(items => res.json(items))
    .catch(err => res.internalServerError());
};

carCtrl.createCar = async (req, res, next) => {
  if (!isValidCar(req.body, res)) return;
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
  if (!isValidCar(req.body, res)) return;
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

//------------------------------------ Helper Functions --------------------------

const schCar = {
  properties: {
    brand: { type: 'string' },
    model: { type: 'string' },
    category: { type: 'string', enum: ['A', 'B', 'C', 'D', 'E'] },
    numDoors: { type: 'integer', minimum: 1, maximum: 8 },
    price: { type: 'number', minimum: 0 }
  },
  required: ['brand', 'model', 'category', 'numDoors']
};
const isCar = ajv.compile(schCar);

function isValidCar(car, res) {
  const isOk = isCar(car);
  if (!isOk) {
    res.status(400).json({ errMsg: 'Invalid car data' });
  }
  return isOk;
}

module.exports = carCtrl;
