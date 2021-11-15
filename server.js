const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
// Removed below thought may cause problem with Heroku, if bug during next launch check here. Provides an security issue.
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});

// Rate Limit
const RateLimit = require("express-rate-limit");
const limiter = new RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
});

// Applying rate limiter
app.use(limiter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port);
