var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var apiRouter = require('./api.router');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, '..', '..', '')));
app.use('/node_modules', express.static(path.join(__dirname, '..', '..', 'node_modules')));
app.use('/api', apiRouter);
// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = err;
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
var httpServer = app.listen(3000, "localhost", function () {
    var port = httpServer.address().port;
    console.log('HTTP Server is listening on %s', port);
});
//# sourceMappingURL=server.js.map