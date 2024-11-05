const express = require("express");
const mangoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
require("./models/User");
require("./services/passport");
require("./routes/authRoutes")(app);

mangoose.connect(keys.mongooseURI);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 