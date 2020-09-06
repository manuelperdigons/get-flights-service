const express = require('express');
const flightRoute = require('./routes/flightsRoute');
const app = express();

app.use('/flights', flightRoute);

app.all('*', (req, res, next) => {
    next(new Error(`Unable to find ${req.url}, please try again`, 404));
});

module.exports = app;