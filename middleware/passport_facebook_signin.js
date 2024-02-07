const FacebookStrategy = require("passport-facebook").Strategy;
const passport_facebook = require("passport");

passport_facebook.use(
    new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, callback) {
        
          return callback(null, profile);

      }
    )
);

passport_facebook.serializeUser((user, done) => {
    done(null, user);
});

passport_facebook.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport_facebook;
