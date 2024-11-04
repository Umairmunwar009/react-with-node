const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();
const keys = require("./config/keys");
const PORT = process.env.PORT || 5000;

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleCliendID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log("🚀 ~ accessToken:", accessToken);
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
