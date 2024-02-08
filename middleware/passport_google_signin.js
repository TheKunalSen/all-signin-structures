const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport_google = require("passport");
const User = require("../models/Users");
passport_google.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, callback) {
      //  console.log(profile.id)
      const email = profile.emails[0].value;

      const userAvilable = await User.findOne({email: email});
      // console.log(userAvilable);
      let existingUser = false;
      if (userAvilable) {
        console.log("welcome back")
        existingUser = true;
        profile.ExistingUser = existingUser;
        console.log(profile)
         callback(null, profile);
      }
      else {
        existingUser = false;
        profile.ExistingUser = existingUser;
        const New_user = {
          name: profile.displayName,
          email: profile.emails[0].value,
        };
        const user = await User.create(New_user);

        callback(null, profile);
          // console.log(user);
      }

    
      // const user = {
      //   id: profile.id,
      //   displayName: profile.displayName,
      //   email: profile.emails[0].value // Assuming you're interested in the primary email
      //   // Other profile data you may want to include
      // };
    
    }
  )
);

passport_google.serializeUser((user, done) => {
  done(null, user);
});

passport_google.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport_google;
