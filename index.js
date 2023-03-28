const express = require("express");
const axios = require("axios");
const cors = require("cors");
var path = require("path");

const app = express();
app.use(cors());

app.get("/api/:nft", async (req, res) => {
  await axios({
    headers: { "Content-Type": "application/json" },
    method: "post",
    url: "https://api.primitives.xyz/api/interview/searchTokens",
    data: {
      query: req.params.nft,
    },
  }).then(function (response) {
    res.json(response.data);
  });
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
