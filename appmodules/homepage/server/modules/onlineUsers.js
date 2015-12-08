var onlineUsers = {};

module.exports = function()
{

  var set = function(id, token)
  {
     onlineUsers[id] = token;
  }

  var get = function(id)
  {
      try {
        var x = onlineUsers[id];
        return x;
      }
      catch (e)
      {
         return undefined;
      }
  }
  var isOnline = function(id)
  {
    try {
      var x = onlineUsers[id];
      if (x == undefined)
        return false;
      return true;
    }
    catch (e)
    {
      return false;
    }
  }

  var remove = function(id)
  {
     try {
       delete onlineUsers[id];
     }
     catch (e)
     {

     }
  }


  return {
    set:set,
    get:get,
    isOnline:isOnline
  };

}
