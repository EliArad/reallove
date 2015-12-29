app.factory("general", function($http, $q){

  var sendMail = function(mailParams)
  {

    return $http.post("/api/send",mailParams).
      then(sendResponseData).
      catch(sendResponseError);
  }
  function sendResponseData(response)
  {
    console.log(response.data);
    return response.data;
  }
  function sendResponseError(response)
  {
    console.log("error from send " + response);
    return $q.reject("error from send " + response.status);
  }

  return{
    sendMail: sendMail
  };
});
