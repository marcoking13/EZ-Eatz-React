const controller = require("./../controllers/user_login_controllers.js");
const express = require("express");
const router = express.Router();

router.post("/api/change_user_address",controller.ChangeAddress);
router.post("/api/signup",controller.UserSignup);
router.post("/api/login",controller.UserLogin);
router.post("/api/google_login",controller.GoogleLogin );


module.exports = router;
