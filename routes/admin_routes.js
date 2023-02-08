const controller = require("./../controllers/admin_controller.js");
const express = require("express");
const router = express.Router();

router.post("/admin/add_truck",controller.AddTruckToUser);
router.post("/admin/find_one",controller.FindOneAdmin);
router.post("/admin/signup",controller.AddTruckToDb);
router.post("/admin/google_login",controller.FindOneAdmin);
router.post("/admin/change_location",controller.UpdateLocation);
router.post("/admin/track_location",controller.TrackLocation);

module.exports = router;
