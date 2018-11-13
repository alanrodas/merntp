const Car = require("../models/car");
const carCtrl = {};

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
  console.log('@getCarsSortedBy')
  console.log(req.params.field)
  try {
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
    const car = new Car(extractCarFromBody(req.body));
    console.log(car)
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
    const carUpdate = extractCarFromBody(req.body);
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

const extractCarFromBody = (body) => {
  const car = {
    brand: body.brand,
    model: body.model,
    category: body.category,
    numDoors: body.numDoors,
  }
  if (body.price) {
    car.price = body.price
  }
  return car
}

module.exports = carCtrl;
