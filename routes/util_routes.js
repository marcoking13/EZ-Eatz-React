var express = require("express");
var router = express.Router();
var controller = require("./../controllers/util_controller.js");

router.post("/api/geoconverter",controller.GeoConverter);
router.post("/api/distance-calculator",controller.DistanceCalculator);


module.exports = router;
