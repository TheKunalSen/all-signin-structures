const express = require('express');
const router = express.Router();
const { displayUserName} = require("../controllers/Dashboard_profile");
const express_sessionValidator = require("../middleware/express_session_validater");

router.route("/profile").get(express_sessionValidator,displayUserName);


module.exports = router;
