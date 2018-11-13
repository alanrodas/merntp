const Car = require("../models/car");
const carCtrl = {};

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
  const {
    id
  } = req.params;
  try {
    const car = await Car.findByIdAndUpdate(id, {
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