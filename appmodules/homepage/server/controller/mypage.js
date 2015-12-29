"use strict";

var mongoose = require('mongoose');

module.exports = function (mypageModel) {

  return {
    add: function (req, res, next) {

      var m = new mypageModel();
      m.data = req.body.data;
      m.RegistrationId = req.idFromToken;
      m.save(function (err) {
        if (!err) {
          res.send("ok");
        } else {
          res.sendStatus(500);
        }
      });
    },

    getmine: function (req, res, next) {

      console.log(req.idFromToken);
      mypageModel.find({'RegistrationId': req.idFromToken}).sort({dated: -1}).exec(function (err, results) {
        if (err) {
          res.sendStatus(500);
        } else {
          console.log(results);
          res.send(results);
        }
      });
    }
  };
};
