const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
let port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(port, () => {
  console.log("App running");
});