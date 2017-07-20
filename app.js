const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;
const myRouter = require('./routes.js');
const bikeRouter = require('./bikeRoutes.js');

app.use('/api', myRouter);
app.use('/bikes', bikeRouter);

app.listen(port);
