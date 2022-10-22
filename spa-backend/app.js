const path = require('path');
const express = require('express');
const morgan = require('morgan');

const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const messageRouter = require('./routes/messageRouter');

const app = express();
app.use(cors({ origin: "*", credentials: true }));

// 1) MIDDLEWARES
app.use(morgan('dev'));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.headers);
    next();
});

// 3) ROUTES
app.use('/', messageRouter);

app.get('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;