const express = require('express');
const { proxyMiddleware, authenticate } = require('./middlewares/authMiddleware');

const app = express();

app.use('/3000/product', authenticate, proxyMiddleware);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
