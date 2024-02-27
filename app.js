const express = require('express')
const path = require('path')
const stocks = require('./stocks')

const app = express()
app.use(express.static(path.join(__dirname, 'static')))

app.get('/stocks', async (req, res) => {
  const stockSymbols = await stocks.getStocks()
  res.send({ stockSymbols })
})

app.get('/stocks/:symbol', async (req, res) => {
  const { params: { symbol } } = req
  const data = await stocks.getStockPoints(symbol, new Date())
  res.send(data)
})

app.listen(3000, () => console.log('Server is running!'))
const express = require('express');
const path = require('path');
const stocks = require('../stocks'); // Assuming stocks-related files are in the parent directory

const app = express();
app.use(express.static(path.join(__dirname, '../static')));

app.get('/stocks', async (req, res) => {
  try {
    const stockSymbols = await stocks.getStocks();
    res.send({ stockSymbols });
  } catch (error) {
    console.error('Error fetching stock list:', error);
    res.status(500).send('Internal Server Error: Unable to fetch stocks');
  }
});

app.get('/stocks/:symbol', async (req, res) => {
  try {
    const { params: { symbol } } = req;
    const data = await stocks.getStockPoints(symbol, new Date());
    res.send(data);
  } catch (error) {
    console.error(`Error fetching data for ${req.params.symbol}:`, error);
    res.status(500).send(`Internal Server Error: Unable to fetch data for ${req.params.symbol}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));