/*jshint node:true */
'use_strict';

var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var myhelper = require('../modules/myhelpers');
var jwtauth = require('../common/jwtauth');
var membersModel = require('../models/members').membersModel;
var videopermissionModel = require('../models/videopermissions').videoPermissionsModel;
var dbsearchController = require('../controller/dbsearch')(membersModel,videopermissionModel);


var router   = express.Router();
router.get('/getFirstNVideosToShow', jwtauth, dbsearchController.getFirstNVideosToShow);
router.get('/getAllShowMyVideoList', jwtauth, dbsearchController.getAllShowMyVideoList);


module.exports = router;
