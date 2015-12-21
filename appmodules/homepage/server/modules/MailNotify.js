var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var onlineUsers = require('./onlineUsers')();
var jwtauth = require('../common/jwtauth');
var totalOnlineUsers = 0;
var m_allClients = new Map();
var LastonlineModel = require('../models/lastOnline').LastonlineModel;


var mailNotify = function (io) {


    io.on('connection', function (client) {
        console.log('a user connected ' + client.id);

        //client.broadcast.emit('user connected' , 1);

        client.on('forcedisconnect', function (token) {


            var id = jwt.verify(token, secret);
            markUserasOnline(id.sub, false);
            io.sockets.emit('userdisconnected', id.sub, token);
            try
            {
              m_allClients.delete(client.id);
            }
            catch (e)
            {

            }
            client.disconnect();
        });

        client.on('sendMessage', function (fromid, toid, message) {
            console.log('sendMessage ' + fromid + ' to id' + toid + ' message:' + message);
            try {
                var clientid = m_allClients.get(toid);
                if (clientid != undefined) {
                    io.sockets.connected[clientid].emit('sendMessage', fromid, toid, message);
                } else {
                    console.log('On sendMessage _client[%s] is not define', toid);
                }
            } catch (err) {
                console.log(err);
            }
        });

        client.on('join', function (token) {
            //console.log('join %s' , token);
            var id = jwt.verify(token, secret);
            //client.broadcast.emit('useridconnected' , id.sub);
            markUserasOnline(id.sub,true);
            io.sockets.emit('useridconnected', id.sub, token);
            console.log('user %s is online', id.sub);
            m_allClients.set(client.id , id.sub);
            //console.log('online size: ' + getAllClientSize(allClients));
            totalOnlineUsers++;
            console.log('totalOnlineUsers:' + totalOnlineUsers);
            updateAllUsersOnlineCount(totalOnlineUsers);
        });
        client.on('disconnect', function () {
            console.log('Got disconnect!' + client.id);
             var size = 0;
             var id = m_allClients.get(client.id);
             m_allClients.delete(client.id);
             console.log('deleted ' + client.id);
             totalOnlineUsers--;
             console.log('totalOnlineUsers:' + totalOnlineUsers);
             markUserasOnline(id,false);
             updateAllUsersOnlineCount(totalOnlineUsers);
             return;

        });
    });




  function updateAllUsersOnlineCount(n)
  {
    m_allClients.forEach(function(value, key, map) {
      try {
         io.sockets.connected[key].emit('onlinecount', totalOnlineUsers);
      }
      catch (e)
      {

      }
    });

  }

   function getAllClientSize(obj) {
     console.log(m_allClients.size);
      return m_allClients.size;
  };

  function markUserasOnline(id , online)
  {
    LastonlineModel.findOne({
      'registrationObjectId': id
    }, function (err, lastOnline) {
      if (err) {
        //console.log(err);
        return res.status(500).json({
          error: 'Cannot save the new member'
        });
      } else {
        if (lastOnline == undefined || lastOnline == null) {
          lastOnline = new LastonlineModel();
          if (online == true)
            lastOnline.lastOnline = new Date();
          lastOnline.registrationObjectId = id;
          lastOnline.isOnline = online;
          lastOnline.save(function (err){
            if (err)
            {
              console.log('error save last online');
            }
          });
        } else {
          lastOnline.isOnline = online;
          if (online == true)
            lastOnline.lastOnline = new Date();
          lastOnline.save(function (err){
              if (err)
              {
                 console.log('error save last online');
              }
          });
        }
      }
    });
  }

    function SendChatRequest(fromid, toid, torid) {
        console.log('SendChatRequest from id: %s   to id %s', fromid, torid);
        var clientid = allClients[torid];
        console.log('clientid: ' + clientid);
        if (clientid != undefined)
            io.sockets.connected[clientid].emit('request_to_chat', fromid, toid, torid);
    }

    function GetNumberOnline()
    {
      var size = getAllClientSize();
      console.log('GetNumberOnline ' + size);
      return size;
    }

    function UserAcceptMoveToChatRoom(fromid, toid) {
        var clientid = allClients[toid];
        console.log('UserAcceptMoveToChatRoom: ' + clientid);
        if (clientid != undefined)
            io.sockets.connected[clientid].emit('chat_accpeted_move_to_chat_room', fromid, toid);
    }

    function logoutAll()
    {
       console.log('logoutAll from notify');
       io.sockets.emit('logoutall');
    }

    return {
        onlineUsers: onlineUsers,
        SendChatRequest: SendChatRequest,
        UserAcceptMoveToChatRoom: UserAcceptMoveToChatRoom,
        GetNumberOnline:GetNumberOnline,
        logoutAll:logoutAll
    }
};

module.exports = mailNotify;
