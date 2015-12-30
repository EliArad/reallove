"use strict";

var mongoose = require('mongoose');

module.exports = function (mypageModel,memberModel) {

  return {
    add: function (req, res, next) {

      var m = new mypageModel();
      m.data = req.body.data;
      m.RegistrationId = req.idFromToken;
      m.save(function (err) {
        if (!err) {
          memberModel.findOne({'registrationObjectId': req.idFromToken}, function(err , member){
            member.havepage = true;
            member.save();
            res.send("ok");
          });
        } else {
          res.sendStatus(500);
        }
      });
    },

    getuserpage: function (req, res, next) {

      mypageModel.find({'RegistrationId': req.body.id}).sort({dated: -1}).exec(function (err, results) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(results);
        }
      });
    },
    getmine: function (req, res, next) {

      mypageModel.find({'RegistrationId': req.idFromToken}).sort({dated: -1}).exec(function (err, results) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(results);
        }
      });
    }
  };
};
