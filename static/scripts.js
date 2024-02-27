<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your HTML Page</title>
  <link rel="stylesheet" href="styles/main.css">
  <style>
    /* Add your CSS styles here if needed */
    .spinner {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  </style>
</head>
<body>

  <div id="spinner" class="spinner">Loading...</div>

  <script>
    // Task 2 - Query the Backend for List of Available Stocks:
    function fetchStockList() {
      fetch('/stocks')
        .then(response => response.json())
        .then(data => {
          console.log('Stock List:', data);
          // Implement further actions if needed
        })
        .catch(error => console.error('Error fetching stock list:', error));
    }

    // Task 3 - Query the Backend for Data about Each Stock
    function fetchStockData(stock) {
      fetch(`/stocks/${stock}`)
        .then(response => response.json())
        .then(data => {
          console.log(`Data for ${stock}:`, data);
          // Implement further actions if needed
        })
        .catch(error => console.error(`Error fetching data for ${stock}:`, error));
    }

    // Task 4 - Hide the Spinner after all Data is Loaded
    Promise.all([
      fetchStockList(),
      fetchStockData('AAPL'),
      fetchStockData('GOOGL'),
    ])
      .then(() => {
        document.getElementById('spinner').style.display = 'none';
      });
  </script>

</body>
</html>

const canvas = document.getElementById('chart')
const ctx = canvas.getContext('2d')

function drawLine (start, end, style) {
  ctx.beginPath()
  ctx.strokeStyle = style || 'black'
  ctx.moveTo(...start)
  ctx.lineTo(...end)
  ctx.stroke()
}

function drawTriangle (apex1, apex2, apex3) {
  ctx.beginPath()
  ctx.moveTo(...apex1)
  ctx.lineTo(...apex2)
  ctx.lineTo(...apex3)
  ctx.fill()
}

drawLine([50, 50], [50, 550])
drawTriangle([35, 50], [65, 50], [50, 35])

drawLine([50, 550], [950, 550])
drawTriangle([950, 535], [950, 565], [965, 550])

