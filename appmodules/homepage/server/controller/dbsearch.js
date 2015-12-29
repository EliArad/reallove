'use strict';


var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;


module.exports = function (membersModel, videopermissionModel) {

  return {


    getAllShowMyVideoList1: function (req, res, next) {

      //console.log('id from t:' +  req.idFromToken);
      videopermissionModel.find({'fromRegistrationId': req.idFromToken, allow:true}).
        exec(function (err, results) {
          if (err) {
            res.sendStatus(500);
          } else {
            //console.log(results);
            var x = {};
            for (var i = 0; i < results.length;i++)
              x[results[i].toRegistrationId] = true;
            res.json({
              list:x,
              size:results.length
            });
          }
        });
    },


    getAllShowMyVideoList: function (req, res, next) {

      //console.log('id from t:' +  req.idFromToken);
      videopermissionModel.find({'toRegistrationId': req.idFromToken, 'allow':true }).
        exec(function (err, results) {
          if (err) {
            res.sendStatus(500);
          } else {
            //console.log(results);
            var x = {};
            for (var i = 0; i < results.length;i++)
               x[results[i].toRegistrationId] = true;
            res.json({
              list:x,
              size:results.length
            });
          }
        });
    },

    getFirstNVideosToShow: function (req, res, next) {

      var videousersid = {};
      var num = req.query.num;
      var skipsize = req.query.skipsize;

      membersModel.find({'videoOption': 3}).exec(function (err, results) {
        if (err) {
          res.sendStatus(500);
        } else {
          //console.log('1' + results);
          for (var i = 0; i < results.length; i++) {
            if (results[i].registrationObjectId == req.idFromToken)
              continue;

            videousersid[results[i].registrationObjectId] = results[i];
          }
          videopermissionModel.find({'toRegistrationId': req.idFromToken, 'allow': true}).
            populate('frommemberid').
            exec(function (err, results) {
              if (err) {
                res.sendStatus(500);
              } else {
                //console.log(results);
                for (var i = 0; i < results.length; i++) {
                  videousersid[results[i].fromRegistrationId] = results[i];
                }
                //console.log(videousersid);
                res.send(videousersid);
              }
            });
        }
      });
    }
  };
};
