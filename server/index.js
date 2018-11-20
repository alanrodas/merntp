const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const resStatus = require("express-res-status");

const { mongoose } = require("./database");

const app = express();

// Settings
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(resStatus());

// Routes
app.use("/api/cars", require("./routes/car.routes"));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
