const express = require('express');

// Create an instance of express
const app = express();

// Listen on port 7865
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Route for the index page
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

module.exports = app;
