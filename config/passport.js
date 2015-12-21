var passport = require('passport');

module.exports = function (app) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(err, user);
    });

    passport.deserializeUser(function (user, done) {
        done(err, user);
    });

    require('./strategies/local.strategy')();
};