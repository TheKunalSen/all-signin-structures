const express = require('express');
const router = express.Router();
const { displayUserName_jwt} = require("../controllers/Dashboard_jwt_profile");


const passport = require('passport');
require("../middleware/passport_jwt")(passport)

router.route("/profile").get(passport.authenticate('jwt', {session: false}),displayUserName_jwt);


module.exports = router;
