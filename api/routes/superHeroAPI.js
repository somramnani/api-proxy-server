const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:data", async (req, res) => {
  await axios({
    method: "get",
    url: `https://superheroapi.com/api/88fa1b97046d4d9666b719510bbb8257/search/${req.params.data}`,
  })
    .then(function (response) {
      return res.send(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

module.exports = router;
