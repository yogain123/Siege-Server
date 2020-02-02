const os = require("os");
const cluster = require("cluster");

if (cluster.isMaster) {
  const n_cpus = os.cpus().length;
  console.log(`Forking ${n_cpus} CPUs`);
  for (let i = 0; i < n_cpus; i++) {
    cluster.fork();
  }
} else {
  const express = require("express");
  const app = express();
  app.get("/", (req, res) => {
    console.log("done");
    res.send("done");
  });

  app.listen(3000, () => {
    console.log(
      `App with Server: ${process.pid} Process  listening on port 3000!`
    );
  });
}
