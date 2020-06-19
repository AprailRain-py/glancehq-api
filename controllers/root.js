const fs = require("fs");

exports.getData = (req, res, next) => {
  res.status(200).json({
    message: "Successfull",
    body: {
      data: "dummy text",
    },
  });
};
