const express = require('express');

// Create an instance of express
const app = express();

// Define the port
const PORT = 7865;

// Create a route for the index page
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Create a route for cart with an id validation (only numbers allowed)
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

// If id is not a number, return a 404 error
app.get('/cart/*', (req, res) => {
  res.status(404).send('Not Found');
});

// Start listening on port 7865
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
