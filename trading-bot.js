//trading-bot.js

// Required Libraries
const express = require('express');
const axios = require('axios'); // Optional if using an actual API for stock prices
require('dotenv').config(); // For environment variables

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Variables to Track Bot's Balance, Stock, and Profit/Loss
let balance = 1000; // Starting balance
let stock = 0; // Stock owned
let buyPrice = 0; // Last buy price
let profitLoss = 0; // Total profit or loss

// Function to Simulate Stock Price Changes
const getStockPrice = () => {
  return (Math.random() * (150 - 100) + 100).toFixed(2); // Random price between 100 and 150
};

// Function to Calculate Profit/Loss
const calculateProfitLoss = (sellPrice, buyPrice) => {
  return (sellPrice - buyPrice);
};

// API Endpoint to Get Current Stock Price
app.get('/price', (req, res) => {
  const price = getStockPrice();
  res.json({ price });
});

// Trading Bot Logic - Buy or Sell Based on Strategy
app.post('/trade', (req, res) => {
  const price = parseFloat(req.body.price);

  if (stock === 0 && price < buyPrice * 0.98) {
    // Buy stock if price drops by 2% or more
    stock += 1;
    balance -= price;
    buyPrice = price;
    console.log(`Bought 1 stock at $${price}`);
  } else if (stock > 0 && price > buyPrice * 1.03) {
    // Sell stock if price increases by 3% or more
    stock -= 1;
    balance += price;
    const profit = calculateProfitLoss(price, buyPrice);
    profitLoss += profit;
    console.log(`Sold 1 stock at $${price}, Profit: $${profit.toFixed(2)}`);
  }

  // Return Current Status
  res.json({
    balance: balance.toFixed(2),
    stock,
    profitLoss: profitLoss.toFixed(2),
  });
});

// API Endpoint for Bot Status
app.get('/status', (req, res) => {
  res.json({
    balance: balance.toFixed(2),
    stock,
    profitLoss: profitLoss.toFixed(2),
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Trading bot server running on port ${PORT}`);
});
