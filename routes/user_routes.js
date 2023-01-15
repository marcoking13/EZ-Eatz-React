const express = require("express");
const router = express.Router();
const controller = require("./../controllers/user_controller.js");

router.post("/api/trucks",controller.FindAllTrucks);
router.post("/api/best_rated_trucks",controller.FindBestRatedTrucks);
router.post("/api/vegan_trucks", controller.FindVeganTrucks);
router.post("/api/nearest_trucks", controller.FindNearestTrucks);
router.post("/api/cheapest_trucks",controller.FindCheapestTrucks);


module.exports = router;
