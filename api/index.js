const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const hotText = "repo";
  const url = "https://github.com/somramnani/api-proxy-server";
  const link = res.send(
    `Server is running, check out the ${hotText.link(
      url
    )} to view the documentation`
  );
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
