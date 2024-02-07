const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
      },
      function (accessToken, refreshToken, profile, callback) {
       
        // const user = {
        //   id: profile.id,
        //   displayName: profile.displayName,
        //   email: profile.emails[0].value // Assuming you're interested in the primary email
        //   // Other profile data you may want to include
        // };
        callback(null, profile);
      }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;
