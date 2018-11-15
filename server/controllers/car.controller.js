const Car = require("../models/car");
const carCtrl = {};

const checkSortableFieldname = require('../utils/validate')


carCtrl.getCars = async (req, res, next) => {
  //to be implemented
  try {
    const cars = await Car.find({});
    res.ok(cars)
  } catch (exception) {
    // console.log(exception)
    res.internalServerError({
      error: exception.message
    });
  }
  // res.ok(data); or  res.internalServerError();
};

carCtrl.getCarsSortedBy = async (req, res, next) => {
  try {
    checkSortableFieldname(req.params.field)
    const cars = await Car.find({}).sort(req.params.field)
    res.ok(cars)
  } catch (exception) {
    // console.log(exception)
    res.internalServerError({
      error: exception.message
    });
  }
  // res.ok(data); or  res.internalServerError();
}

carCtrl.createCar = async (req, res, next) => {
  try {
    const car = new Car(extractCarFrom(req.body));
    await car.save();
    res.created(car);
  } catch (exception) {
    res.internalServerError({
      error: exception.message
    });
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
    res.internalServerError({
      error: exception.message
    });
  }
};

carCtrl.editCar = async (req, res, next) => {
  // to be implemented
  try {
    const { id } = req.params;
    const carUpdate = extractCarFrom(req.body);
    const car = await Car.findByIdAndUpdate(id, carUpdate, {runValidators: true} );
    if (car) {
      res.noContent(car);
    } else {
      res.notFound();
    }
  } catch (exception) {
    // console.log(exception)
    res.internalServerError({
      error: exception.message
    });
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
    // console.log(exception)
    res.internalServerError({
      error: exception.message
    });
  }
  // res.noContent(); or  res.internalServerError(); or  res.notFound();
};


/*
 * extrae datos de un auto del objeto indicado
 * params:
 * - obj: objeto del que se desea extraer un auto
 * retorna: un auto
 */
const extractCarFrom = (obj) => {
  const car = {
    brand: obj.brand,
    model: obj.model,
    category: obj.category,
    numDoors: obj.numDoors,
  }
  // sólo se incluye `price` si existe el campo en obj
  if (obj.price) {
    car.price = obj.price
  }
  return car
}


module.exports = carCtrl;
