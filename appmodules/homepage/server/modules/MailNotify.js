var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var onlineUsers = require('./onlineUsers')();
var jwtauth = require('../common/jwtauth');


var mailNotify = function (io, LastonlineModel, usersFunction, membersModel) {


  io.on('connection', function (client) {
    console.log('a user connected ' + client.id);

    client.on('forcedisconnect', function (token) {

      var id = jwt.verify(token, secret);
      markUserasOnline(id.sub, client.id, false, function () {
        updateAllUsersOnlineCount();
        client.disconnect();
      });
    });

    client.on('sendMessage', function (fromid, toid, message) {
      //console.log('sendMessage ' + fromid + ' to id' + toid + ' message:' + message);
      try {

        LastonlineModel.findOne({registrationObjectId: toid}, function (err, member) {
          if (!err) {
            var clientid = member.clientId;
            //console.log('client id to send request is:' + clientid);
            if (clientid != undefined)
              io.sockets.connected[clientid].emit('sendMessage', fromid, toid, message);
          }
        });
      } catch (err) {
        console.log(err);
      }
    });

    client.on('join', function (token) {
      console.log('got join %s' , token);
      var id = jwt.verify(token, secret);
      //client.broadcast.emit('useridconnected' , id.sub);
      usersFunction.userExists(id.sub, function (err) {
        if (err == false) {
          console.log('user does not exists %s ', id.sub);
          return;
        }
        markUserasOnline(id.sub, client.id, true, function () {
          console.log(id.sub);
          //io.sockets.emit('useridconnected', id.sub, token);
          client.broadcast.emit('useridconnected', id.sub, token);
          console.log('user %s is online', id.sub);
          //console.log('online size: ' + getAllClientSize(allClients));
          updateAllUsersOnlineCount();
        });
      });
    });
    client.on('disconnect', function () {
      console.log('Got disconnect!' + client.id);

      var cid = client.id;
      LastonlineModel.find({clientId: cid}).exec(function (err, results) {
        if (err)
          console.log(err);
        if (results.length > 0) {
          markUserasOnline(results[0].registrationObjectId, client.id, false, function () {
            updateAllUsersOnlineCount();
            return;
          });
        }
      });
    });
  });

  function updateAllUsersOnlineCount() {
    //http://stackoverflow.com/questions/10811887/how-to-get-a-all-count-of-mongoose-model
    /*
     LastonlineModel.count({online:true}, function( err, count){
     console.log( "Number of online users:", count );

     io.sockets.connected[key].emit('onlinecount', count);

     })
     */

    //LastonlineModel.find({}, function (err, e) {
    //console.log('e = ' + e);
    //});


    LastonlineModel.find({isOnline: true}).exec(function (err, users) {
      if (!err) {
        var count = users.length;
        console.log('!!!!!!!!!number of online users: ' + count);
        io.emit('onlinecount', count);
      }
    });
  }

  function getAllClientSize(callback) {

    LastonlineModel.count({isOnline: true}, function (err, count) {
      //console.log('count: ' + count);
      callback(count);
    });
  };


  function markUserasOnline(id, clientId, online, callbcak) {


    membersModel.findOne({registrationObjectId: id}, function (err, member) {
      if (member) {
        member.isOnline = online;
        //console.log('save online to user: ' + member._id);
        //console.log(member);
        member.save(function (err) {
          if (err) {
            console.log('error save last online');
          }
        });
      }
    });


    LastonlineModel.findOne({
      'registrationObjectId': id
    }, function (err, lastOnline) {
      if (err) {
        callbcak(err);
        return;
      } else {
        if (lastOnline == undefined || lastOnline == null) {
          lastOnline = new LastonlineModel();
          if (online == true) {
            lastOnline.lastOnline = new Date();
          }
          lastOnline.registrationObjectId = id;
          lastOnline.clientId = clientId;

          // for the populate
          membersModel.findOne({registrationObjectId: id}, function (err, member) {
            if (member) {
              lastOnline.memberObjectId = member._id;
              lastOnline.isOnline = online;
              lastOnline.save(function (err) {
                if (err) {
                  console.log('error save last online');
                }
              });
              callbcak("ok");
            }
          });

        } else {

          // for the populate
          membersModel.findOne({registrationObjectId: id}, function (err, member) {
            if (member) {
              lastOnline.memberObjectId = member._id;
              lastOnline.isOnline = online;
              lastOnline.clientId = clientId;
              if (online == true) {
                lastOnline.lastOnline = new Date();
              }
              lastOnline.save(function (err) {
                if (err) {
                  console.log('error save last online');
                }
              });
            }
            callbcak("ok");
          });
        }
      }
    });
  }

  function SendChatRequest(fromid, toid, torid) {
    //console.log('SendChatRequest from id: %s   to id %s', fromid, torid);

    LastonlineModel.findOne({registrationObjectId: torid}, function (err, member) {
      if (!err) {
        var clientid = member.clientId;
        //console.log('client id to send request is:' + clientid);
        if (clientid != undefined)
           io.sockets.connected[clientid].emit('request_to_chat', fromid, toid, torid);
      }
    });

  }

  function GetNumberOnline(callback) {
    getAllClientSize(function (size) {
      callback(size);
    });
  }

  function UserAcceptMoveToChatRoom(fromid, toid) {

    LastonlineModel.findOne({registrationObjectId: toid}, function (err, member) {
      if (!err) {
        var clientid = member.clientId;
        if (clientid != undefined)
            io.sockets.connected[clientid].emit('chat_accpeted_move_to_chat_room', fromid, toid);
      }
    });
  }

  function logoutAll() {
      //console.log('logoutAll from notify');
      //io.sockets.emit('logoutall');
      io.emit('logoutall');
  }

  return {
    onlineUsers: onlineUsers,
    SendChatRequest: SendChatRequest,
    UserAcceptMoveToChatRoom: UserAcceptMoveToChatRoom,
    GetNumberOnline: GetNumberOnline,
    logoutAll: logoutAll
  }
};

module.exports = mailNotify;
