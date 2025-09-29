const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

let digitalIds = []; // simple in-memory storage

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

// Handle Digital ID form
app.get("/id", (req, res) => {
  res.render("id.ejs");
});

// Check-in page
app.get("/checkin", (req, res) => {
  res.render("checkin", { digitalIds });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
