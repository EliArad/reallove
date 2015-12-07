
var mailNotify = function (io) {


  io.on('connection', function(client) {
    console.log('a user connected');


    client.on('online', function() {
      console.log('online');
    });

    client.on('join', function(token) {
      console.log('join %s' , token);
    });


    client.on('disconnect', function() {
      console.log('Got disconnect!');
    });
  });


};

module.exports = mailNotify;
