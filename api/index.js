require("dotenv").config();

const express = require("express");
const cors = require("cors");
const superHeroAPIRoute = require("./routes/superHeroAPI");
const helloWorldRoute = require("./routes/hello");

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/super-hero-api", superHeroAPIRoute);
app.use("/hello", helloWorldRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Som's API Proxy Server",
    documentation: "https://github.com/somramnani/api-proxy-server",
    author: "Som Ramnani",
  });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server ready on port ${PORT}.`);
  });
}

module.exports = app;
