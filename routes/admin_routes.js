const controller = require("./../controllers/admin_controller.js");
const express = require("express");
const router = express.Router();

router.post("/admin/add_truck",controller.AddTruckToUser);
router.post("/admin/find_one",controller.AddTruckToUser);
router.post("/admin/signup",controller.AddTruckToDb);


module.exports = router;
