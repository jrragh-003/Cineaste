// config.js
// require("dotenv").config();

// const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// mongoose.set("strictQuery", false);

// module.exports = {
//   mongoose,
// };


// config.js
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo-db/raghsData");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.set("strictQuery", false);

module.exports = {
  mongoose,
};
