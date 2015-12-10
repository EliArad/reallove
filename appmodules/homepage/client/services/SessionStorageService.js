app.factory("SessionStorageService", function() {


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
  var removeSessionStorage = function(page)
  {
    sessionStorage.removeItem(page);
  }

  return {
    setSessionStorage: setSessionStorage,
    getSessionStorage: getSessionStorage,
    removeSessionStorage : removeSessionStorage,
    getSessionStorage_wd:getSessionStorage_wd
  };
});
