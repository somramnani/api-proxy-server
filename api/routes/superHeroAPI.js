const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:data", async (req, res) => {
  await axios({
    method: "get",
    url: `https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/search/${req.params.data}`,
  })
    .then(function (response) {
      return res.send(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

module.exports = router;
