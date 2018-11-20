const Car = require("../models/car");
const carCtrl = {};

carCtrl.getCars = async (req, res, next) => {
  //to be implemented
  // res.ok(data); or  res.internalServerError();
  try {
    const cars = await Car.find();
    res.ok(cars);
  }
  catch (exception) {
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
      res.notFound().send({ message: `Error el auto no está en la base de datos: ${err} `});
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
      nroDoors: req.body.nroDoors,
      price: req.body.price
    });
    await car.save();
    res.created(car);
  } catch (exception) {
    res.internalServerError();
  }
};


carCtrl.editCar = async (req, res, next) => {
  // to be implemented
  // res.noContent(); or  res.internalServerError(); or  res.notFound();
  try {
    const { id } = req.params;
    const car = await Car.updateOne({"_id":id}, {
      $set:{
        brand: req.body.brand,
        model: req.body.model,
        category: req.body.category,
        nroDoors: req.body.nroDoors,
        price: req.body.price
      }
    });
    if (car) {
      res.ok(car)
      console.log("Modifico ok");

    } else {
      res.notFound();
    }

  } catch (exception) {
    res.internalServerError();
  }
};

carCtrl.deleteCar = async (req, res, next) => {
  // to be implemented
  // res.noContent(); or  res.internalServerError(); or  res.notFound();
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndRemove(id);
    if (car) {
      res.ok(car)
    }
  } catch (exception) {
    res.internalServerError();
  }

};

module.exports = carCtrl;
