const asyncHandler = require("express-async-handler");
const passport_facebook = require("../middleware//passport_facebook_signin");

const Facebook_Sign_in = asyncHandler((req, res) => {
    
    passport_facebook.authenticate("facebook", { scope: ['user_friends', 'manage_pages'] })(req, res);
});

const Facebook_callback = passport_facebook.authenticate("facebook", {
  successRedirect: "/dashboard/profile",
  failureRedirect: "/login/failed",
});

const Facebook_Sign_Out = asyncHandler((req, res) => {
 res.json("facebook log out")
});

module.exports = { Facebook_Sign_in, Facebook_Sign_Out, Facebook_callback };
