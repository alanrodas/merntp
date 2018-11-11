const Car = require("../models/car");
const carCtrl = {};

carCtrl.getCars = async (req, res, next) => {
  //to be implemented
  // res.ok(data); or  res.internalServerError();
};

carCtrl.createCar = async (req, res, next) => {
  try {
    const car = new Car({
      brand: req.body.brand,
      model: req.body.model,
      category: req.body.category,
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
  // to be implemented
  // res.noContent(); or  res.internalServerError(); or  res.notFound();
};

carCtrl.deleteCar = async (req, res, next) => {
  // to be implemented
  // res.noContent(); or  res.internalServerError(); or  res.notFound();
};

module.exports = carCtrl;
