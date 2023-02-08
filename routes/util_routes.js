var express = require("express");
var router = express.Router();
var controller = require("./../controllers/util_controller.js");

router.post("/util/get_coords",controller.GeoConverter);
router.post("/util/image_real",controller.CheckIfImageIsReal);
router.post("/api/distance-calculator",controller.DistanceCalculator);


module.exports = router;
