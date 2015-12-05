
app.factory("appCookieStore", function($cookieStore) {


   var getSessionStorage_wd  = function(page)
   {
      var c = sessionStorage.getItem(page);
      console.log("sessionStorage.getItem:" + c );
   }
    var getSessionStorage  = function(page)
    {
       return sessionStorage.getItem(page);
    }
    var setSessionStorage = function(page, value)
    {
        sessionStorage.setItem(page, value);
    }
    var set = function (page , value) {
        $cookieStore.put(page, value);
    }
    var get = function (page) {
        return $cookieStore.get(page);
    }
    var get_wd = function (page, d) {
      var c = $cookieStore.get(page);
      if(typeof c == "undefined") //no errors
        return d;
      return c;
    }
    var remove = function(page)
    {
        $cookieStore.remove(page);
    }

    var removeSessionStorage = function(page)
    {
      sessionStorage.removeItem(page);
    }

    return {
        set: set,
        get: get,
        remove : remove,
        get_wd:get_wd
    };
});
