const express = require('express');
const ProductRouter = require('./router/product');
const {mongoose} = require('./database/dbCatalogue');
const app = express();

app.use(express.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api', ProductRouter);

app.listen(5000); // start Node + Express server on port 5000
