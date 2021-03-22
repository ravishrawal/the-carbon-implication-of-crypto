const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app); //socket io
const path = require("path");

// REACT files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log("server is running on port: ", PORT));

module.exports = app;
