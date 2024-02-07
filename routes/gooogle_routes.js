const express = require('express');
const router = express.Router();
const { Google_Sign_in,Google_Sign_Out, Google_callback } = require("../controllers/Google_Sign");

router.route("/").get(Google_Sign_in);
router.route("/logout").get(Google_Sign_Out);
router.route("/callback").get(Google_callback);

module.exports = router;
