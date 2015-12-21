app.factory("admin", function ($http, $q, myConfig, myutils) {



  function logoutAllUsers() {
    console.log('logoutAllUsers');
    var membersAPI = myConfig.url + "/api/admin/logoutAllUsers";
    return $http.get(membersAPI).then(sendResponseData).catch(sendResponseError);

  }

  function sendResponseData(response) {
    return response.data;
  }

  function sendResponseError(response) {
    //console.log("error from send " + response);
    return $q.reject("error from send " + response.status);
  }

  return {
    logoutAllUsers: logoutAllUsers
  }


});
