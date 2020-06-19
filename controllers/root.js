const fs = require("fs");
const path = require("path");
const csvtoJson = require("csvtojson");

const ROW_PER_PAGE = 10;

exports.getData = (req, res, next) => {
  res.status(200).json({
    message: "Successfull",
    body: {
      data: "dummy text",
    },
  });
};

exports.uploadFile = (req, res, next) => {
  const file = req.file;
  console.log(file);
  if (!file) {
    const err = new Error("No Files selected");
    err.statusCode = 404;
    throw err;
  }

  res.status(201).json({
    message: "File uploaded successfully",
  });
};

exports.loadReportData = async (req, res, next) => {
  const filePath = path.join(__dirname, "../data/", "data.csv");

  csvtoJson()
    .fromFile(filePath)
    .then((data) => {
      const result = data.slice(0, ROW_PER_PAGE);
      res.status(200).json({
        message: "Fetch successfull",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
