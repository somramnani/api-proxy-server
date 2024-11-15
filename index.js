const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const allowedOrigins = [
  "https://api-proxy-server-git-fix-vercel-deployment-somramnanis-projects.vercel.app/",
  "https://api-proxy-server-algy6v65w-somramnanis-projects.vercel.app/",
];

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? (origin, callback) => {
          if (allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        }
      : "http://localhost:3001",
  credentials: true,
  optionSucessStatus: 200,
};
app.use(cors(corsOptions));

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
