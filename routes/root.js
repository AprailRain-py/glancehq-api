const express = require("express");

const router = express.Router();
const rootController = require("../controllers/root");

router.get("/data", rootController.getData);
router.post("/upload", rootController.uploadFile);
router.get("/report", rootController.loadReportData);

module.exports = router;
