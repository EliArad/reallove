'use strict';


var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;


module.exports = function (Model,usersFunction) {



    return {


        all: function (req, res) {
            console.log("get all registrators");
            res.send("error, not implemented");
        },

        deleteAll: function (req, res) {
            console.log("delete all registrators");
            res.send("error, not implemented");
        },

        show: function (req, res) {
            console.log("Show one registrator");
            delete req.reguser.password;
            delete req.reguser.userguid;
            console.log(req.reguser)
            res.json({
                user: req.reguser
            });
        },

        destroy: function (req, res) {

        },

        /**
         * Create a member
         */
        create: function (req, res) {
            console.log("register new member");

            var newmember = new Model(req.body);
            newmember.provider = 'local';
            newmember.role = 'user';
            console.log("New iD: " + newmember._id);

            // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
            Model.findOne({
                'email': newmember.email
            }, 'email', function (err, member) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        error: 'Cannot save the new member'
                    });
                }
                if (member != null) {
                    console.log("already exists");
                    return res.status(500).json({
                        error: 'member ' + newmember.email + " already exists"
                    });
                } else {

                    newmember.save(function (err, user) {
                        if (err) {
                            return res.status(500).json({
                                error: 'Cannot save the new member'
                            });
                        }

                        var payload = {
                            iss: req.hostname,
                            sub: user._id
                        }

                        var token = jwt.sign(payload, secret, {
                            expiresInMinutes: 60 * 5
                        });
                        res.json({
                            token: token,
                            user: newmember
                        });
                        //res.json(newmember);
                    });
                }
            })
        }
    };
}
