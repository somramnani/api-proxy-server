const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

const SUPERHERO_API_KEY = process.env.SUPERHERO_API_KEY;

const corsOptions = {
  origin: "http://localhost:3001",
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  const hotText = "repo";
  const url = "https://github.com/somramnani/api-proxy-server";
  const link = res.send(
    `Server is running, check out the ${hotText.link(
      url
    )} to view the documentation`
  );
});

app.get("/hello", (req, res) => res.send({ message: "hello" }));

app.get("/super-hero-api/:data", async (req, res) => {
  await axios({
    method: "get",
    url: `https://superheroapi.com/api/${SUPERHERO_API_KEY}/search/${req.params.data}`,
  })
    .then(function (response) {
      return res.send(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

app.get("/api/post/*/:data", async (req, res) => {
  const urlLink = req.params[0];
  const authHeaders = req.headers.authorization || null;
  const data = req.params.data;

  await axios({
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: authHeaders,
      "Access-Control-Allow-Origin": "*",
    },
    method: "post",
    url: urlLink,
    data: {
      query: data,
    },
  })
    .then(function (response) {
      res.send(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
  console.log(" Post params:", req.params);
});

app.listen(3002, () => console.log("Server ready on port 3002."));

module.exports = app;
