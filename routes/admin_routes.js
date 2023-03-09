const controller = require("./../controllers/admin_controller.js");
const express = require("express");
const router = express.Router();

router.post("/admin/add_truck",controller.AddTruckToUser);
router.post("/admin/find_one",controller.FindOneAdmin);
router.post("/admin/signup",controller.AddTruckToDb);
router.post("/admin/google_login",controller.FindOneAdmin);
router.post("/admin/change_location",controller.UpdateLocation);
router.post("/admin/edit_truck",controller.EditTruck);
router.post("/admin/track_location",controller.TrackLocation);
router.post("/admin/find_one_truck",controller.FindAdminTruck);

module.exports = router;
