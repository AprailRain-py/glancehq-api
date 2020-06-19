const express = require("express");
const app = express();
const rootRoute = require("./routes/root");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const errorHandling = require("./errorHandling/error");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "data");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded <form>

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELTE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
  next();
});

app.use(multer({ storage: fileStorageEngine }).single("file"));
app.use("/data", express.static(path.join(__dirname, "data")));

app.use(rootRoute);
app.use(errorHandling.showError);
app.listen(8080);
