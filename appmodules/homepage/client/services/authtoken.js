app.factory("authToken", function($cookieStore) {

  var setToken = function (token) {
    $cookieStore.put('token', token);
  }

  function getToken() {
     return $cookieStore.get('token');
  }

  function isAuthenticated() {
    return !!getToken();
  }
  function RemoveToken() {
    $cookieStore.remove('token');
  }

  return {
    setToken: setToken,
    getToken: getToken,
    isAuthenticated : isAuthenticated,
    RemoveToken:RemoveToken
  };

});
