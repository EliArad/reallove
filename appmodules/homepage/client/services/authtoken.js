app.factory("authToken", function($cookieStore) {

  var setToken = function (token) {
    //$cookieStore.put('token', token);
    sessionStorage.setItem('token', token);
  }

  function getToken() {
     //return $cookieStore.get('token');
     return sessionStorage.getItem('token');
  }

  function isAuthenticated() {
    return !!getToken();
  }
  function RemoveToken() {
    //$cookieStore.remove('token');
    sessionStorage.removeItem('token');
  }

  return {
    setToken: setToken,
    getToken: getToken,
    isAuthenticated : isAuthenticated,
    RemoveToken:RemoveToken
  };

});
