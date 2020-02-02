const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Done");
  res.send("done");
});

app.listen(3000, () => {
  console.log(
    `App with Server: ${process.pid} Process  listening on port 3000!`
  );
});
