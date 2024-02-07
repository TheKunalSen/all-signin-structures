const asyncHandler = require("express-async-handler");
const passport = require("../middleware/passport_google_signin");

const Google_Sign_in = asyncHandler((req, res) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(req, res);
});

const Google_callback = passport.authenticate("google",{
    successRedirect:"/dashboard/profile",
    failureRedirect:"/login/failed",
})


module.exports = { Google_Sign_in, Google_callback };
