'use strict';


var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;


module.exports = function (inmailModel, outmailModel, membersModel) {


    return {


        getnumberofmails: function (req, res, next) {


            inmailModel
                .find({
                    'toRegistrationId': req.idFromToken
                })
                .populate('memberId')
                .exec(function (err, result) {
                    if (err) return handleError(err);
                    //console.log('The creator is %s', result);
                    // prints "The creator is Aaron"
                    res.json(result)
                });
        }
    }
};