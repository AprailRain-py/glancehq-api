const express = require("express");

const router = express.Router();
const rootController = require("../controllers/root");

router.get("/data", rootController.getData);

module.exports = router;
