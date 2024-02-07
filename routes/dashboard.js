const express = require('express');
const router = express.Router();
const { displayUserName} = require("../controllers/Dashboard_profile");

router.route("/profile").get(displayUserName);


module.exports = router;
