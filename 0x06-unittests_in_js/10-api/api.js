const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();
app.use(bodyParser.json());

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

// New endpoint: GET /available_payments
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// New endpoint: POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('Missing userName');
  }
  res.status(200).send(`Welcome ${userName}`);
});

// Start listening on port 7865
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
