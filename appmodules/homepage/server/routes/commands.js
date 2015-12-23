/*jshint node:true */
'use_strict';
var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var contactusconModel = require('../models/contactus').contactusModel;
var myhelper = require('../modules/myhelpers');
var jwtauth = require('../common/jwtauth');
var fs = require('fs');
var randomstring = require("randomstring");
var captchaModel = require("../models/captcha").captchaModel;
var membersModel = require('../models/members').membersModel;
var registrationModule = require('../models/registration');
var regSchema = registrationModule.regSchema;
var regModel = registrationModule.regModel;
var cityLoaderobject = require('../../../../classhelpers').siteHelper;
var cityLoader = new cityLoaderobject();
var cors = require('../common/cors');
var inmessagesModel = require("../models/inmessages").inmessagesModel;
var PersistanceModel = require('../models/persistance').PersistanceModel;


var membersModelCount = 0;


var routes = function (app, notifyServer, usersFunction,videopermissionModel) {


  app.get('/api/GetNumberUsersOnline', jwtauth, function (req, res, next) {

    console.log('GetNumberUsersOnline   ' + req.idFromToken);
    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        console.log('not allow!!!');
        return res.sendStatus(403);
      }
      notifyServer.GetNumberOnline(function (count) {
        console.log('GetNumberUsersOnline: ' + count);
        res.send(count.toString());
      });
    });
  });

  app.get('/api/logout', jwtauth, function (req, res, next) {


    PersistanceModel.findOne({
      'registrationObjectId': req.idFromToken
    }, function (err, precistance) {
      if (err) {
        //console.log(err);
        return res.status(500).json({
          error: 'Cannot save the new member'
        });
      } else {
        console.log(req.idFromToken);
        console.log(precistance);
        if (precistance == null || precistance == undefined) {
          res.sendStatus(500);
        } else {
          precistance.logoutDate = new Date();
          precistance.save();
          res.send("ok")
        }
      }
    });
  });


  app.post('/api/sendMessageToMember', jwtauth, function (req, res, next) {
    var m = new inmessagesModel();

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        console.log('not allow!!!');
        return res.sendStatus(403);
      }


      membersModel.findOne({
        'registrationObjectId': req.idFromToken
      }, '_id', function (err, member) {
        if (err) {
          //console.log(err);
          return res.status(500).json({
            error: 'Cannot save the new member'
          });
        }
        if (member) {
          //console.log("The member id of this user is: " + member._id);
          m.memberId = member._id;

          var id = req.idFromToken;
          // i could do the schema at the client and contruct new here

          m.messagebody = req.body.mb;
          m.fromRegistrationId = id;
          m.toRegistrationId = req.body.toid;
          m.title = req.body.title;

          m.save(function (err) {
            if (err) {
              //console.log(err);
              return res.status(500).json({
                error: 'Cannot send message to this member' + err
              });
            }
            res.send("ok");
          });
        }
      });
    });
  });

  app.get('/api/getFirstNUserIds', jwtauth, function (req, res, next) {

    var id = req.idFromToken;
    //console.log("getFirstNUserIds: " + id);

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        console.log('not allow!!!');
        s
        return res.sendStatus(403);
      }


      var num = req.query.num;
      //var criteria = req.body.criteria;
      membersModel.count({}, function (err, count) {
        membersModelCount = count;
        var limit = Math.min(membersModelCount, num);
        membersModel.find(/*{published: true}*/)
          //.sort({'date': -1})
          .limit(limit)
          .exec(function (err, results) {
            //console.log(results)
            if (err) {
              res.status(500).send("error in getFirstNUserIds" + err);
            } else {
              var r = [];
              for (var i = 0; i < results.length; i++) {
                if (results[i].registrationObjectId == id) {
                  continue;
                }
                var x = {
                  id: results[i]._id,
                  rid: results[i].registrationObjectId,
                  online: results[i].isOnline
                }
                r.push(x);
              }
              //console.log(r);
              return res.send(r);
            }
          });
      });
    });
  });

  app.get('/api/getNextNUserIds', jwtauth, function (req, res, next) {
    var id = req.idFromToken;

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        return res.sendStatus(403);
      }


      //console.log("getFirstNUserIds: " + id);
      var num = req.query.num;
      var skipsize = req.query.skipsize;
      //var criteria = req.body.criteria;

      membersModel.find(/*{published: true}*/)
        //.sort({'date': -1})
        .skip(skipsize)
        .limit(num)
        .exec(function (err, results) {
          //console.log(results)
          if (err) {
            res.status(500).send("error in getFirstNUserIds" + err);
          } else {
            var r = [];
            //console.log(results.length);
            for (var i = 0; i < results.length; i++) {
              if (results[i].registrationObjectId == id)
                continue;
              var x = {
                id: results[i]._id,
                rid: results[i].registrationObjectId
              }
              r.push(x);
            }
            //console.log(r);
            return res.send(r);
          }
        });
    });
  });

  app.get('/api/getFirstNUserProfiles', jwtauth, function (req, res, next) {
    var id = req.idFromToken;

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false)
        return res.sendStatus(403);


      var num = req.query.num;
      //var criteria = req.body.criteria;
      membersModel.count({}, function (err, count) {
        membersModelCount = count;

        var limit = Math.min(membersModelCount, num);

        membersModel.find(/*{published: true}*/)
          //.sort({'date': -1})
          .limit(limit)
          .exec(function (err, results) {
            //console.log(results)
            if (err) {
              res.status(500).send("error in getFirstNUserIds" + err);
            } else {
              var r = [];
              //console.log(results.length);
              for (var i = 0; i < results.length; i++) {
                if (results[i].registrationObjectId == id)
                  continue;
                r.push(results[i]);
              }
              return res.json({
                results: r
              });
            }
          });
      });
    });
  });


  app.get('/api/getVideoOption', jwtauth, function (req, res, next) {

    membersModel.findOne({'registrationObjectId': req.idFromToken}, function (err, member) {
      if (member) {
         res.send(member.videoOption.toString());
      } else {
        res.sendStatus(500);
      }
    });


  });
  app.post('/api/saveVideoOption', jwtauth, function (req, res, next) {
    membersModel.findOne({'registrationObjectId': req.idFromToken}, function (err, member) {
      if (member) {
        member.videoOption = req.body.option;
        member.save(function (err) {
          if (!err) {
            res.send('ok');
          } else {
            res.sendStatus(500);
          }
        });
      } else {
        res.sendStatus(500);
      }
    });

  });

  app.get('/api/getuserinfo', jwtauth, function (req, res, next) {

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        return res.sendStatus(403);
      }


      var id = req.idFromToken;
      var a = myhelper.getImageList(id);
      membersModel.findOne({
        'registrationObjectId': req.idFromToken
      }, function (err, member) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json({
            id: id,
            member: member,
            list: a
          });
        }
      });
    });
  });


  app.post('/api/getuserinfoById', jwtauth, function (req, res, next) {

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        return res.sendStatus(403);
      }


      var id = req.body.UserId;
      var a = myhelper.getImageList(id);
      membersModel.findOne({
        'registrationObjectId': id
      }, function (err, member) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json({
            id: id,
            member: member,
            list: a
          });
        }
      });
    });
  });


  app.get('/api/getimagelist', jwtauth, function (req, res, next) {

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false)
        return res.sendStatus(403);


      var id = req.idFromToken;
      var a = myhelper.getImageList(id);
      res.json({
        id: id,
        list: a
      });
    });
  });


  app.post('/api/getimagelistForUser', jwtauth, function (req, res, next) {

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false)
        return res.sendStatus(403);


      console.log(req.body.userId);
      var id = req.body.userId;
      var a = myhelper.getImageList(id);
      res.json({
        id: id,
        list: a
      });
    });
  });


  app.get('/api/getNickName', jwtauth, function (req, res, next) {


    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        return res.sendStatus(403);
      }

      membersModel.findOne({
        'registrationObjectId': req.idFromToken
      }, 'nickName', function (err, member) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: 'Cannot get nick name'
          });
        } else {
          console.log(member);
          if (member == undefined || member.nickName == undefined) {
            res.send('');
          } else {
            res.send(member.nickName);
          }

        }
      });
    });
  });


  app.get('/api/getuserid', jwtauth, function (req, res, next) {

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false)
        return res.sendStatus(403);


      res.send(req.idFromToken);
    });
  });

  app.get('/api/getcities', jwtauth, function (req, res, next) {

    //console.log('getcities');
    cityLoader.basic("./citieswithcode.csv", function (rows) {
      //console.log(rows);
      res.send(rows);
    });
  });

  app.get('/api/getcaptch', jwtauth, function (req, res, next) {


    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false)
        return res.sendStatus(403);


      var value = randomstring.generate(5);

      var c = new captchaModel();
      c.registrationObjectId = req.idFromToken;


      captchaModel.findOne({
        'registrationObjectId': req.idFromToken
      }, function (err, data) {
        if (err) {
          //console.log(err);
          return res.status(401).json({
            error: err
          });
        }
        if (!data) {
          c.value = value;
          c.save(function (err) {
            if (err) {
              //console.log(err);
              return res.status(500).json({
                error: 'Cannot save the new member'
              });
            } else {
              res.json({
                value: value
              });
            }
          });
        } else {
          //console.log("need to update the captch ");
          captchaModel.findOneAndUpdate({
            'registrationObjectId': req.idFromToken
          }, {
            'value': value
          }, function (err, data) {
            if (err) {
              console.log(err);
              return res.status(500).json({
                error: 'Cannot save the new member'
              });
            }
          });

          res.json({
            value: value
          });
        }
      });
    });
  });


  app.post('/api/deletepospondcard', jwtauth, function (req, res, next) {

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false)
        return res.sendStatus(403);

      //console.log(req.body.capdata.usercode);

      //console.log(req.idFromToken);

      contactusconModel.remove({
        'registrationObjectId': req.idFromToken
      }, function (err) {
        if (err) {
          //console.log(err);
          return res.status(401).json({
            error: err
          });
        }

        membersModel.remove({
          'registrationObjectId': req.idFromToken
        }, function (err) {
          if (err) {
            //console.log(err);
            return res.status(401).json({
              error: err
            });
          }

          captchaModel.remove({
            'registrationObjectId': req.idFromToken
          }, function (err) {
            if (err) {
              //console.log(err);
              return res.status(401).json({
                error: err
              });
            }

            regModel.remove({
              '_id': req.idFromToken
            }, function (err) {
              if (err) {
                //console.log(err);
                return res.status(401).json({
                  error: err
                });
              }
              res.sendStatus(201);
            });
          });
        });
      });
    });
  });


  app.post('/api/deletepicture', jwtauth, function (req, res, next) {

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        return res.sendStatus(403);
      }

      try {
        var decoded = jwt.verify(req.body.token, secret);
        // delete a file from the directory
        var fileName = './uploads/' + decoded.sub + '/raw/' + req.body.filenum + '.jpg';
        fs.unlinkSync(fileName);
        fileName = './uploads/' + decoded.sub + '/base64/' + req.body.filenum + '.jpg';
        //console.log(fileName);
        fs.unlinkSync(fileName);
        res.sendStatus(200);
      } catch (err) {
        res.sendStatus(500);
      }
    });
  });

  app.post('/api/AllowUserToSeeMyVideo', jwtauth, function (req, res) {


    videopermissionModel.findOne(
      {
        'fromRegistrationId':req.idFromToken,
        'toRegistrationId':req.body.toid
      },function(err , result){
         if (err)
         {
            res.sendStatus(500);
         } else{
           //console.log(result);
           if (result)
           {
             result.allow = req.body.allow;
             result.datedGiven = new Date();
             result.save();
             res.send('ok');
           } else {
             var r = new videopermissionModel();

             membersModel.findOne({'registrationObjectId' : req.idFromToken}, function(err, member){
               r.frommemberid = member._id;
               r.allow = req.body.allow;
               r.toRegistrationId = req.body.toid;
               r.fromRegistrationId = req.idFromToken;
               membersModel.findOne({'registrationObjectId' :  req.body.toid}, function(err, member){
                 r.tomemberrid = member._id;
                 r.save();
                 res.send('ok');
               });
              });
           }
         }
    });
  });


  app.post('/api/commands/contactus', jwtauth, function (req, res) {

    usersFunction.userExists(req.idFromToken, function (err) {


      if (err == false) {
        return res.sendStatus(403);
      }


      var c = new contactusconModel(req.body);
      c.registrationObjectId = req.idFromToken;
      //console.log(c.registrationObjectId);

      var todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);

      var query = contactusconModel.find({
        'created': {
          $gte: todayDate
        }
      });
      query.exec(function (err, docs) {
        //console.log(docs.length);
        if (docs.length < 5) {
          c.save(function (err) {
            if (err) {
              //console.log(err);
              return res.status(500).json({
                error: 'Cannot save the new member'
              });
            }
            res.status(204).send("ok");
          });
        } else {
          res.status(500).send("you have sent too much message today\nmax allow are 5 messages per day");
        }
      });
    });
  });

  return {
    routes: routes
  };
}

module.exports = routes;
