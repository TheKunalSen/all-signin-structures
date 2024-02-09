const express = require('express');
const router = express.Router();
const { pjwt_Sign_in,pjwt_Sign_up } = require("../controllers/jwt_sign");


router.route("/signin").post(pjwt_Sign_in);
router.route("/signup").post(pjwt_Sign_up);
// router.route("/callback").get(pjwt_callback);


module.exports = router;