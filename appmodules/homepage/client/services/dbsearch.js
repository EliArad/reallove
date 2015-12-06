
app.factory("dbsearch", function($cacheFactory,$http,myConfig,$q) {

  var criteria;

  var setCriteria = function(c)
  {
    criteria = c;
  }


  var getNextNUserIds = function(n,skipsize)
  {
    var url = myConfig.url + "/api/getNextNUserIds/";

    return $http({
      url: url,
      method: "GET",
      params: {
        num: n,
        skipsize: skipsize
      }
    }).then(sendResponseData).
      catch(sendResponseError)
  }

  var getFirstNUserIds = function(n)
  {
    var url = myConfig.url + "/api/getFirstNUserIds/";

    return $http({
        url: url,
        method: "GET",
        params: {num: n}
      }).then(sendResponseData).
         catch(sendResponseError)
  }

  var getFirstNUserProfiles = function(n)
  {
    var url = myConfig.url + "/api/getFirstNUserProfiles/";

    return $http({
      url: url,
      method: "GET",
      params: {num: n}
    }).then(sendResponseData).
      catch(sendResponseError)
  }

  function sendResponseData(response)
  {
    //console.log(response);
    return response.data;
  }
  function sendResponseError(response)
  {
    console.log("error from send " + response);
    return $q.reject("error from send " + response.status);
  }
  return {
    getFirstNUserIds: getFirstNUserIds,
    setCriteria:setCriteria,
    getNextNUserIds:getNextNUserIds,
    getFirstNUserProfiles:getFirstNUserProfiles
  };
});

