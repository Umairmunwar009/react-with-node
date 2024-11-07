const express = require("express");
const mangoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");
require("./routes/authRoutes")(app);
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
mangoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 