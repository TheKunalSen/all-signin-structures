const express = require('express');
const router = express.Router();
const { Facebook_Sign_in,Facebook_Sign_Out,Facebook_callback } = require("../controllers/Facebook_Sign");

router.route("/").get(Facebook_Sign_in);
router.route("/logout").get(Facebook_Sign_Out);
router.route("/callback").get(Facebook_callback);

module.exports = router;
