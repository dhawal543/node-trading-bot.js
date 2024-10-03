Trading Bot Backend

A backend application that simulates a basic trading bot for a hypothetical stock market. The bot executes trades (buy/sell) based on predefined conditions, tracks the bot's positions, and calculates profit or loss.
Features

    Simulates stock price changes using mock data.
    Implements a basic trading strategy:
        Buy when stock price drops by 2%.
        Sell when stock price rises by 3%.
    Tracks the bot’s balance, stock holdings, and profit/loss.
    REST API to get stock prices, execute trades, and check the bot's status.

Requirements

    Node.js (v14 or higher)

Installation

    Clone the Repository:

    bash

git clone <repository-url>
cd trading-bot

Install Dependencies:

bash

npm install

Configure Environment Variables:

    Create a .env file in the root of the project (optional).
    Example:

    bash

    PORT=3000

Run the Application:

bash

    node trading-bot.js

    The server will start and run on the specified port (default is 3000).

API Endpoints
1. Get Stock Price

    Method: GET
    URL: /price
    Response: Returns a simulated stock price.

    json

    {
      "price": "105.34"
    }

2. Execute Trade

    Method: POST
    URL: /trade
    Request Body: Send the current stock price to evaluate trade logic.

    json

{
  "price": "105.34"
}

Response: Returns the updated balance, stock holdings, and profit/loss.

json

    {
      "balance": "950.00",
      "stock": 1,
      "profitLoss": "5.00"
    }

3. Get Bot Status

    Method: GET
    URL: /status
    Response: Returns the current balance, stock, and profit/loss of the bot.

    json

    {
      "balance": "950.00",
      "stock": 1,
      "profitLoss": "5.00"
    }

Example Usage

To simulate a trading cycle:

    Fetch the stock price:

    bash

curl http://localhost:3000/price

Execute a trade using the current price:

bash

curl -X POST http://localhost:3000/trade -H 'Content-Type: application/json' -d '{"price": "105.34"}'

Check the bot’s status (balance, stocks, and profit/loss):

bash

    curl http://localhost:3000/status

Future Enhancements

    Support for multiple stocks.
    Integration with real stock market data.
    More advanced trading strategies (e.g., momentum trading, moving averages).
    Detailed trade logging and performance analytics.

