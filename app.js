var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var rateLimit = require('express-rate-limit');
var passport = require('passport');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const db = require('./repository/SmartPallet');
db.SmartPallet.sync();

require('./config/passport.config');

var userRouter = require('./routes/user.route');
var loginRouter = require('./routes/login.route');
var itemRouter = require('./routes/item.route');
var locationRouter = require('./routes/location.route');
var labelRouter = require('./routes/label.route');

const limiter = rateLimit({
   windowMs:  15 * 60 * 1000,
    max: 100
});

var app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/item', itemRouter);
app.use('/location', locationRouter);
app.use('/label', labelRouter);

module.exports = app;
