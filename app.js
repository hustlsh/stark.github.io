var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webConfig = require('./webpack.dev');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    var compiler = webpack(webConfig);
    app.use(devMiddleware(compiler, {
        publicPath:'/'
    }));
    app.use(hotMiddleware(compiler, {
        log: console.log, 
        path: '/__webpack_hmr', 
        heartbeat: 10 * 1000
      }));

    // 开发模式里，用 src 里的静态资源
    app.use(express.static(path.join(__dirname, '../../src')))
}else{
    app.use(express.static(path.join(__dirname, 'dist')));
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
