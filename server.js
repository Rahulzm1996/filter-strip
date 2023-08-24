let filterList = {
  invoice_status: [],
  last_responded_from: "",
  last_responded_to: "",
  last_responded_type: "",
};

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/filter", function (req, res) {
  return res.send(filterList);
});

app.put("/filter/update", function (req, res) {
  if (req && req.body.filter) {
    filterList = req.body.filter;
  }

  return res.send(filterList);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
