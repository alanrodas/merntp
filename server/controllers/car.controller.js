const Car = require("../models/car");
const carCtrl = {};

carCtrl.getCars = async (req, res, next) => {
  //to be implemented
  try {
    const cars = await Car.find({});
    res.ok(cars)
  } catch (exception) {
    res.internalServerError();
  }
  // res.ok(data); or  res.internalServerError();
};

carCtrl.createCar = async (req, res, next) => {
  try {
    const car = new Car(extractCarFromBody(req.body));
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
  try {
    const { id } = req.params;
    const carUpdate = extractCarFromBody(req.body);
    const car = await Car.findByIdAndUpdate(id, carUpdate);
    if (car) {
      res.noContent(car);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
  // res.noContent(); or  res.internalServerError(); or  res.notFound();
};

carCtrl.deleteCar = async (req, res, next) => {
  // to be implemented
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndDelete(id);
    if (car) {
      res.noContent(car);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
  // res.noContent(); or  res.internalServerError(); or  res.notFound();
};

const extractCarFromBody = (body) => {
  return {
    brand: body.brand,
    model: body.model,
    category: body.category,
    price: body.price,
    numDoors: body.numDoors,
  }
}

module.exports = carCtrl;
