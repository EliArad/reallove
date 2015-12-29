"use strict";

var express = require('express');
var jwtauth = require('../common/jwtauth');
var mypageModel = require('../models/mypage').mypageModel;
var mypageController = require('../controller/mypage')(mypageModel);
var bodyParser = require('body-parser');
var util = require('util');
var mkdirp = require('mkdirp');
var fs = require('fs');
var crypto = require('crypto');
var router = express.Router();
router.post('/add', jwtauth, mypageController.add);
router.get('/getmine', jwtauth, mypageController.getmine);


router.post('/uploadvideo', jwtauth, bodyParser({
  limit: '50mb'
}), function (req, res) {


  var x = util.inspect(req.body.data);

  try {
    var dirToCreate = './mypage/' + req.idFromToken + '/';
    mkdirp(dirToCreate, function (err) {

      var r = x.search('data:video/mp4;base64,');
      var x1;
      if (r != -1) {
        x1 = x.replace('data:video/mp4;base64,', '');
      } else {
        res.sendStatus(500);
      }
      var _filename = crypto.randomBytes(4).readUInt32LE(0) + req.body.filename;
      var fileNameRaw = dirToCreate + _filename;

      var buff = new Buffer(x1, 'base64');

      var status = 500;
      fs.writeFile(fileNameRaw, buff, function (err) {
        if (err) {
          //console.log(err);
          res.sendStatus(status);
        } else {
          var m = new mypageModel();
          m.data = {};
          m.data.content_type = req.body.content_type;
          m.data.filename = _filename;
          m.RegistrationId = req.idFromToken;
          m.save(function (err) {
            console.log('uploaded ok');
            res.send("uploaded ok");
          });
        }
      });
    });
  } catch (e) {
    //console.log(e);
    res.status(404).send(e);
    return;
  }
});


router.post('/uploadpicture', jwtauth, bodyParser({
  limit: '15mb'
}), function (req, res) {


  var dirToCreate = './mypage/' + req.idFromToken + '/';
  mkdirp('./mypage/' + req.idFromToken, function (err) {
    var x = util.inspect(req.body.data);
    var r = x.search('data:image/jpeg;base64,');
    var x1;
    if (r != -1) {
      x1 = x.replace('data:image/jpeg;base64,', '');
    } else {
      r = x.search('data:image/png;base64,');
      if (r != -1) {
        x1 = x.replace('data:image/png;base64,', '');
      }
    }

    var _filename = crypto.randomBytes(4).readUInt32LE(0) + req.body.filename;

    var fileNameRaw = dirToCreate + _filename;
    var buff = new Buffer(x1, 'base64');

    var status = 500;
    fs.writeFile(fileNameRaw, buff, function (err) {
      if (err) {
        //console.log(err);
        res.sendStatus(status);
        return;
      } else {

        var m = new mypageModel();
        m.data = {};
        m.data.content_type = req.body.content_type;
        m.data.filename = _filename;
        m.RegistrationId = req.idFromToken;
        m.save(function (err) {
          console.log(err);
          res.send("uploaded ok");
        });
      }
    });
  });
});


module.exports = router;
