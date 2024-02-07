const express = require('express');
const router = express.Router();
const { Google_Sign_in,Google_callback } = require("../controllers/Sign_in");

router.route("/google").get(Google_Sign_in);
router.route("/google/callback").get(Google_callback);

module.exports = router;
