const Car = require("../models/car");
const carCtrl = {};
const validate = require("../validate/validator")


carCtrl.getCars = async (req, res, next) => {
  try {
    const cars = await Car.find({});
    if (cars) {
      res.ok(cars);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
};

carCtrl.createCar = async (req, res, next) => {
  let errorValidation = validate.car(req.body);
  if (errorValidation.length > 0) {
    res.badRequest(errorValidation)
    return;
  }
  try {
    const car = new Car({
      brand: req.body.brand,
      model: req.body.model,
      category: req.body.category,
      price: req.body.price,
      numDoors: req.body.numDoors
    });
    await car.save();
    res.created(car);
  } catch (exception) {
    res.internalServerError();
  }
};

carCtrl.getCar = async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
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
  try {
    validate.car(req.body);
  } catch (error) {
    res.badRequest(error)
    return;
  }
  const {
    id
  } = req.params;
  try {
    const car = await Car.findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    });
    if (car) {
      res.noContent();
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
};

carCtrl.deleteCar = async (req, res, next) => {
  try {
    const carRemove = await Car.findOneAndDelete({
      _id: req.params.id
    })
    if (!carRemove) {
      res.notFound()
    }
    res.noContent();
  } catch (error) {
    res.internalServerError();
  }

};

module.exports = carCtrl;