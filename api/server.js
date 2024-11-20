require("dotenv").config();

const app = require("./index");

const PORT = process.env.PORT || 3002;

const server = app.listen(PORT, () =>
  console.log(`Server ready on port ${PORT}.`)
);

module.exports = server;
