'use_strict'
var express = require('express'),
  helpers = require('view-helpers'),
  bodyParser = require('body-parser'),
  moment = require('moment');
args = require('yargs').argv;


var cors = require('./appmodules/homepage/server/common/cors');

//var demofile = './uploads/' + '566408969e8d1b71d0982d20' + "/raw/5.jpg";
//var demofile1 = './uploads/' + '566408969e8d1b71d0982d20' + "/raw/6.jpg";
/*
 //https://www.npmjs.com/package/easyimage
 var easyimg = require('easyimage');
 easyimg.rotate({
 src: demofile,
 dst:demofile,
 degree :90
 }).then(
 function(image) {
 console.log('Resized and cropped: ' + image.width + ' x ' + image.height);
 },
 function (err) {
 console.log(err);
 }
 );
 */


var path = require('path'),
  fs = require('fs');
const bearerToken = require('express-bearer-token');
var app = express();
var jwtauth = require('./appmodules/homepage/server/common/jwtauth');

var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'PUT', 'GET', 'POST', 'DELETE', 'OPTIONS');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});


/*
 app.use(bearerToken(), function(req,res, next)
 {

 console.log("bearerToken");
 //console.log("token: " + req.token);
 if (typeof req.token == 'undefined')
 {
 console.log("no token");
 req.foundToken = false;
 return next();
 }
 req.foundToken = true;

 //console.log("token found");

 try {
 var decoded = jwt.verify(req.token, secret);
 req.idFromToken = decoded.sub;
 console.log("the user id from the token is: " + decoded.sub);
 membersModel.membersModel.findOne({'registrationObjectId': decoded.sub}, function (err, member) {
 if (err) {
 res.status(500).send("middleware did not found the id" + err);
 }
 else if (member) {
 req.member = member;
 //console.log("found member");
 } else {
 res.status(404).send('no book found');
 }
 next();
 });
 }
 catch(err)
 {
 console.log(err);
 req.foundToken = false;
 return next();
 }
 });
 */


var myhelper = require('./appmodules/homepage/server/modules/myhelpers');

var mkdirp = require('mkdirp');
var jwt = require('jsonwebtoken');
var secret = require('./appmodules/homepage/server/common/config').secret;
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/reallove');


mkdirp('./uploads/', function (err) {

});

mkdirp('./uploadsvideo/', function (err) {

});
//console.log(__dirname);

var membersModel = require('./appmodules/homepage/server/models/members');
var registrationModule = require('./appmodules/homepage/server/models/registration');

var regSchema = registrationModule.regSchema;
var regModel = registrationModule.regModel;

var usersFunction = require('./appmodules/homepage/server/modules/users')(regModel, membersModel.membersModel);

var lastonlineModel = require('./appmodules/homepage/server/models/lastonline').LastonlineModel;
var notifyServerModule = require('./appmodules/homepage/server/modules/MailNotify');
var notifyServer = new notifyServerModule(io, lastonlineModel, usersFunction, membersModel.membersModel);

var videopermissionModel = require('./appmodules/homepage/server/models/videopermissions').videoPermissionsModel;
var membersControllerModule = require('./appmodules/homepage/server/controller/members');
var membersController = new membersControllerModule(membersModel.membersModel);

var registerControllerModule = require('./appmodules/homepage/server/controller/register');
var registerController = new registerControllerModule(regModel, usersFunction);

var membersRouter = require('./appmodules/homepage/server/routes/members')(membersController, membersModel.membersModel, registerController, regModel);
var getmembersRouters = membersRouter.routes;


port = args.port || 8000;

app.use(bodyParser({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');
var session = require('express-session');
/*
 const MongoStore = require('connect-mongo')(session);
 app.use(session({
 secret: 'eeee',
 saveUninitialized: true,
 resave: true,
 store: new MongoStore({
 mongooseConnection: mongoose.connecion
 })
 }));
 */
/*
 app.use(cookieParser());

 require('./config/passport')(app);
 */

var commandsRoutes = require('./appmodules/homepage/server/routes/commands')(app, notifyServer, usersFunction, videopermissionModel);
var generalRoutes = require('./appmodules/homepage/server/routes/general')(app);
var getGeneralRoutes = generalRoutes.routes;

var registerRoutes = require('./appmodules/homepage/server/routes/register')(registerController, regModel);
var mailRoutes = require('./appmodules/homepage/server/routes/mail');
var dbsearchRoutes = require('./appmodules/homepage/server/routes/dbsearch');
var adminRoutes = require('./appmodules/homepage/server/routes/admin')(notifyServer);
var chatRoutes = require('./appmodules/homepage/server/routes/chat')(app, notifyServer, membersModel.membersModel);
var onlineRoutes = require('./appmodules/homepage/server/routes/online');


app.use('/api/members', getmembersRouters);
app.use('/api/register', registerRoutes.routes);
app.use('/api/mail', mailRoutes);
app.use('/api/dbsearch', dbsearchRoutes);
app.use('/api/admin', adminRoutes.router);
app.use('/api/online', onlineRoutes);
app.use('/api/general', jwtauth, getGeneralRoutes);

var createNewMember = require("./appmodules/homepage/server/modules/createNewMember")(membersModel.membersModel);

// we send the app to this module
var mailverify = require('./appmodules/homepage/server/modules/nodemailer')(app, regModel, createNewMember);


app.use(
  "/", //the URL throught which you want to access to you static content
  express.static(__dirname) //where your static content is located in your filesystem
);


var loginCtrl = require('./appmodules/homepage/server/controller/login');
loginCtrl.setModel(regModel, membersModel.membersModel);
app.post('/api/login', loginCtrl.login);

var util = require('util');

app.post('/api/upload', bodyParser({
  limit: '15mb'
}), function (req, res) {

  //console.log(req.body.images);
  var x = util.inspect(req.body.images);
  console.log(req.body.filenum);

  //var x1 = x.replace(/^data:image\/(png|gif|jpeg);base64,/,'');

  //console.log(req.body.token);

  try {
    var decoded = jwt.verify(req.body.token, secret);
    //console.log(decoded.sub);


    var dirToCreateRaw = './uploads/' + decoded.sub + "/raw/"
    mkdirp(dirToCreateRaw, function (err) {
      // path was created unless there was error

      if (req.body.filenum == 0) {
        var thumbfile = './uploads/' + decoded.sub + "/raw/0.jpg";
        //console.log(thumbfile);
        var buf1 = new Buffer(req.body.images, 'base64'); // decode
        fs.writeFile(thumbfile, buf1, function (err) {
          if (err) {
            //console.log("err", err);
            return res.sendStatus(500);
          } else {
            return res.json({
              picnum: req.body.filenum,
              err: "uploaded ok"
            });
          }
        });
        return;
      }

      //  the image gallery size picture 150 on 150
      if (req.body.filenum == 100) {
        var thumbfile = './uploads/' + decoded.sub + "/raw/100.jpg";
        //console.log(thumbfile);
        var buf1 = new Buffer(req.body.images, 'base64'); // decode
        fs.writeFile(thumbfile, buf1, function (err) {
          if (err) {
            //console.log("err", err);
            return res.sendStatus(500);
          } else {
            return res.json({
              picnum: req.body.filenum,
              err: "uploaded ok"
            });
          }
        });
        return;
      }


      var r = x.search('data:image/jpeg;base64,');
      var x1;
      if (r != -1)
        x1 = x.replace('data:image/jpeg;base64,', '');
      else {
        r = x.search('data:image/png;base64,');
        if (r != -1)
          x1 = x.replace('data:image/png;base64,', '');
      }

      var fileNameRaw = dirToCreateRaw + req.body.filenum + ".jpg";
      var buff = new Buffer(x1, 'base64');


      //console.log("saving file: " + fileNameRaw);
      var status = 500;
      fs.writeFile(fileNameRaw, buff, function (err) {
        if (err) {
          //console.log(err);
          res.sendStatus(status);
          return;
        }
        res.json({
          picnum: req.body.filenum,
          err: "uploaded ok"
        });
      });
    });
  } catch (e) {
    //console.log(e);
    res.status(404).send(e);
    return;
  }
});

app.get('/api/deleteVideo', jwtauth, function (req, res) {

  console.log('deleteVideo');
  var fileName =  './uploadvideo/' + req.idFromToken + "/raw/1.mp4";
  fs.unlink(fileName, function (err){

    membersModel.membersModel.findOne({'registrationObjectId' : req.idFromToken}, function(err , member){
      if (err)
      {
        res.sendStatus(500);
      } else {
        member.videoloaded = false;
        res.send('ok');
      }
    });
  });

});

app.post('/api/uploadvideo', bodyParser({
  limit: '50mb'
}), function (req, res) {

  //console.log("upload video");
  var x = util.inspect(req.body.images);
  //console.log(req.body.filenum);

  //var x1 = x.replace(/^data:image\/(png|gif|jpeg);base64,/,'');

  //console.log(req.body.token);

  try {
    var decoded = jwt.verify(req.body.token, secret);
    //console.log(decoded.sub);
    var dirToCreateRaw = './uploadvideo/' + decoded.sub + "/raw/"
    mkdirp(dirToCreateRaw, function (err) {

      var r = x.search('data:video/mp4;base64,');
      var x1;
      if (r != -1)
        x1 = x.replace('data:video/mp4;base64,', '');
      else {
        res.sendStatus(500);
      }

      var fileNameRaw = dirToCreateRaw + req.body.filenum + ".mp4";
      var buff = new Buffer(x1, 'base64');

      var status = 500;
      fs.writeFile(fileNameRaw, buff, function (err) {
        if (err) {
          //console.log(err);
          res.sendStatus(status);
        } else {

          membersModel.membersModel.findOne({'registrationObjectId': decoded.sub}, function (err, member) {
            if (err) {
              res.sendStatus(500);
            } else {
              member.videoloaded = true;
              member.save(function (err) {
                res.send(err);
              });
            }
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


app.get('/isauth', jwtauth, function (req, res, next) {
  res.sendStatus(200); // must return a response!!!
});


app.get('/eli', cors, function (req, res) {
  res.send("ok from this");
});


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.get('*', function (req, res) {
  res.send(500, 'error 4000');
});

app.post('*', function (req, res) {
  res.send(500, 'error 5000');
});


testConnection(lastonlineModel, io);

function testConnection(lastonlineModel, io) {

  var lastOnlineKnown = -1;
  setInterval(function () {
    //console.log(lastonlineModel);
    lastonlineModel.find({isOnline: true}).exec(function (err, results) {

      if (lastOnlineKnown != results.length) {
        lastOnlineKnown = results.length;
        for (var i = 0; i < results.length; i++) {
          try {
            io.sockets.connected[results[i].clientId].emit('testconnection');
            //console.log('ok   ' + results[i].clientId);
          }
          catch (e) {
            //console.log(e + results[i].clientId);
            results[i].isOnline = false;
            results[i].save(function (err) {
            });
          }
        }

        lastonlineModel.find({isOnline: true}).exec(function (err, users) {
          if (!err) {
            var count = users.length;
            //console.log('!!!!!!!!!number of online users: ' + count);
            io.emit('onlinecount', count);
          }
        });
      }
    });
  }, 10000, lastonlineModel, io);
}


server.listen(port);
console.log("Running on port " + port);


