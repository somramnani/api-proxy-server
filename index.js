const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
  methods: "GET, POST",
  allowedHeaders: "Content-Type,Authorization",
};

// const corsOptions = {
//   origin:
//     process.env.NODE_ENV === "production"
//       ? "api-proxy-server-steel.vercel.app"
//       : "http://localhost:3000",
//   credentials: true,
//   optionsSucessStatus: 200,
// };
app.use(cors(corsOptions));

app.get("/api/get/*", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow certain methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
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
