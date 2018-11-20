const mongoose = require("mongoose");
const URI = "mongodb://localhost/merntp";

mongoose
  .connect(
    URI,
    { useNewUrlParser: true }
  )
  .then(db => console.log("db is connected"))
  
  .catch(err => console.error(err));

module.exports = mongoose;
