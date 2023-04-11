const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSucessStatus: 200,
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/get/*", async (req, res) => {
  const urlLink = req.params[0];
  const authHeaders = req.headers.authorization || null;

  await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeaders,
    },
    method: "get",
    url: urlLink,
  })
    .then(function (response) {
      res.send(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
  console.log("params:", req.params);
});

app.get("/api/post/*/:data", async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Max-Age", "1800");
  // res.setHeader("Access-Control-Allow-Headers", "content-type");
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  // );
  const urlLink = req.params[0];
  const authHeaders = req.headers.authorization || null;
  const data = req.params.data;

  await axios({
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: authHeaders,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": true,
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

app.get("/", (req, res) => {
  const hotText = "repo";
  const url = "https://github.com/somramnani/api-proxy-server";
  const link = res.send(
    `Server is running, check out the ${hotText.link(
      url
    )} to view the documentation`
  );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
