const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const proxy = require('http-proxy-middleware');

app.use(morgan('dev'));
// app.use('v1/product/:id/images', proxy('localhost:3003/v1/product/*/images'));
// app.use('v1/product/:id/reviews', proxy('localhost:3004/v1/product/:id/reviews'));
// app.use('v1/product/:id/summary', proxy('localhost:3002/v1/product/:id/summary'));
// app.use('v1/product/:id/images', proxy('localhost:3003/v1/product/:id/'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use('/v1/product/:id', express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
