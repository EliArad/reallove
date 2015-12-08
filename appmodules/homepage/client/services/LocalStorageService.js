app.factory("localStorageService", function() {


  var getlocalStorage_wd  = function(page)
  {
    var c = localStorage.getItem(page);
    console.log("sessionStorage.getItem:" + c );
  }
  var getlocalStorage  = function(page)
  {
    return localStorage.getItem(page);
  }
  var setlocalStorage = function(page, value)
  {
    localStorage.setItem(page, value);
  }
  var removelocalStorage = function(page)
  {
    localStorage.removeItem(page);
  }

  return {
    set: setlocalStorage,
    get: getlocalStorage,
    remove : removelocalStorage,
    get_wd:getlocalStorage_wd
  };
});
