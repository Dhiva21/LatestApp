const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const trendsRouter = require('./routes/trends');
const summarizeRouter = require('./routes/summary');
const flashRouter = require('./routes/flash');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', trendsRouter);
app.use('/', summarizeRouter);
app.use('/', flashRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
