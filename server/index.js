const express = require('express');
const app = express();
const PORT=process.env.PORT || 5000;
// routes handlers 
app.get('/', (req, res) => {
    console.log("🚀 ~ app.get ~ req:", req)
  res.send('Jahayi gui mei kare!!, chai pyanr halao???');
});
app.listen(PORT, () => {
  console.log('Server is running on port 5000');
}); 