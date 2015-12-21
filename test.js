var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/reallove');


'use_strict'
var express = require('express'),
    helpers = require('view-helpers'),
    bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

const MongoStore = require('connect-mongo')(session);
app.use(session({
    secret: 'eeee',
    store: new MongoStore({
        mongooseConnection: mongoose.connecion
    })
}));