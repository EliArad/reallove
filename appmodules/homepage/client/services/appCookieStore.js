
app.factory("appCookieStore", function($cookieStore) {

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

    return {
        set: set,
        get: get,
        remove : remove,
        get_wd:get_wd
    };
});
