const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/*/:authorization", async (req, res) => {
  const urlLink = req.params[0];
  const authorization = req.params.authorization;
  await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    method: "post",
    url: urlLink,
  })
    .then(function (response) {
      res.send(res.json(response.data));
    })
    .catch((err) => {
      console.log("error", err);
    });
  console.log("params:", req.params);
});

app.get("/", (req, res) => {
  const hotText = "here";
  const url = "https://api-proxy-server-steel.vercel.app/api/nft";
  const link = res.send(
    `Server is running, click ${hotText.link(url)} to view the API`
  );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
