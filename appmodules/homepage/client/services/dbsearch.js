'use_strict'
app.factory("dbsearch", function ($cacheFactory, $http, myConfig, $q) {

  var criteria;

  var setCriteria = function (c) {
    criteria = c;
  }

  var getAllShowMyVideoList = function () {
    var url = myConfig.url + "/api/dbsearch/getAllShowMyVideoList";
    return $http({
      url: url,
      method: "GET"
    }).then(sendResponseData).
      catch(sendResponseError);
  }

  var getAllShowMyVideoList1 = function () {
    var url = myConfig.url + "/api/dbsearch/getAllShowMyVideoList1";
    return $http({
      url: url,
      method: "GET"
    }).then(sendResponseData).
      catch(sendResponseError);
  }

  var getFirstNVideosToShow = function (num, skipsize) {
    var url = myConfig.url + "/api/dbsearch/getFirstNVideosToShow/";

    return $http({
      url: url,
      method: "GET",
      params: {
        num: num,
        skipsize: skipsize
      }
    }).then(sendResponseData).
      catch(sendResponseError);
  }

  var getNextNUserIds = function (n, skipsize) {
    var url = myConfig.url + "/api/getNextNUserIds/";

    return $http({
      url: url,
      method: "GET",
      params: {
        num: n,
        skipsize: skipsize
      }
    }).then(sendResponseData).
      catch(sendResponseError);
  }

  var getFirstNUserIds = function (n) {
    var url = myConfig.url + "/api/getFirstNUserIds/";

    return $http({
      url: url,
      method: "GET",
      params: {num: n}
    }).then(sendResponseData).
      catch(sendResponseError);
  }

  var getFirstNUserProfiles = function (n) {
    var url = myConfig.url + "/api/getFirstNUserProfiles/";

    return $http({
      url: url,
      method: "GET",
      params: {num: n}
    }).then(sendResponseData).
      catch(sendResponseError);
  }

  function sendResponseData(response) {
    //console.log(response);
    return response.data;
  }

  function sendResponseError(response) {
    return $q.reject("error from send " + response.status);
  }

  return {
    getFirstNUserIds: getFirstNUserIds,
    setCriteria: setCriteria,
    getNextNUserIds: getNextNUserIds,
    getFirstNUserProfiles: getFirstNUserProfiles,
    getFirstNVideosToShow: getFirstNVideosToShow,
    getAllShowMyVideoList:getAllShowMyVideoList,
    getAllShowMyVideoList1:getAllShowMyVideoList1
  };
});

