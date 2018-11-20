const Car = require("../models/car");
const carCtrl = {};

carCtrl.getCars = async (req, res, next) => {
  //to be implemented
  // res.ok(data); or  res.internalServerError();
  try {
    let cars = await Car.find();
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
    console.log(exception);
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
  const { id } = req.params;
  try {
    const car = await Car.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: req.body
      }
    );
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
  // to be implemented
  // res.noContent(); or  res.internalServerError(); or  res.notFound();
  try {
    const { id } = req.params.id;
    const car = await Car.deleteOne(id);
    if (car) {
      res.ok(car);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
};

module.exports = carCtrl;
