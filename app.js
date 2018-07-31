var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var work = require('./routes/work');
var app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist/noufalppcom')));
app.use('/works', express.static(path.join(__dirname, 'dist/noufalppcom')));
app.use('/work', work);

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var dbUrlRemote = 'mongodb://noufalpp:Test1988@ds143451.mlab.com:43451/noufalppcom_db';
//var dbUrlRemote = process.env.MONGODB_URI;  // uses for secure connection, heroku encrypts the uname and pwd
var dbUrlLocal = 'mongodb://localhost:27017/noufalppcom';


// // connecting local db
// var connection = mongoose.connect(dbUrlLocal, { promiseLibrary: require('bluebird') });
// connection
//     .then(() => console.log('connection successfull'))
//     .catch((err) => console.error(err));


// connecting remote db
var connection = mongoose.connect(dbUrlRemote, { useNewUrlParser: true });
connection
    .then((db) => {
        console.log('connection successfull');
    })
    .catch((err) => {
        console.log('Error on start: ' + err.stack);
        process.exit(1);
    });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');


});

module.exports = app;