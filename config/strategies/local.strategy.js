var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, function (username, password, done) {
        // this is where we check again the data base
        var user = {
            username = username,
                password = password
        };
        done(null, user);
    }));
}