const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleCliendID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken,refreshToken,profile,done) => {
        console.log("🚀 ~ done:", done)
        console.log("🚀 ~ profile:", profile);
        User({ googleId: profile.id }).save();
        console.log("🚀 ~ refreshToken:", refreshToken)
        console.log("🚀 ~ accessToken:", accessToken);
      }
    )
  );