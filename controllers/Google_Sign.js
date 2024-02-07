const asyncHandler = require("express-async-handler");
const passport_google = require("../middleware/passport_google_signin");

const Google_Sign_in = asyncHandler((req, res) => {
  passport_google.authenticate("google", { scope: ["profile", "email"] })(req, res);
});

const Google_callback = passport_google.authenticate("google", {
  successRedirect: "/dashboard/profile",
  failureRedirect: "/login/failed",
});

const Google_Sign_Out = asyncHandler((req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.status(500).send("Error logging out");
    }
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          console.error("Error destroying session:", err.message);
          return res.status(500).send("Internal Server Error");
        }

        res.redirect("/logeedOut");
      });
    } else {
      res.json("already logged out");
      return;
    }
  });
});

module.exports = { Google_Sign_in, Google_Sign_Out, Google_callback };
