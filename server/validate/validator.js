const validator = require('validator');
let validate = {};

validate.car = function (car) {
    let errors = []

    if (["A", "B", "C", "D", "E"].findIndex(e => e === car.category) == -1) {
        errors.push("category")
    }

    if (errors) {
        return errors;
    }
}

module.exports = validate;