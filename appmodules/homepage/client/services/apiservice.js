app.factory("API", function($http,$q,myConfig)
{
    var selectedfood = [];
    var selectedlang = [];
    var selectedpasstime = [];

    function saveSelectedlang(d)
    {
      selectedlang = d;
    }
    function getSelectedlang()
    {
      return selectedlang;
    }

    function saveSelectedpasstime(d)
    {
      selectedpasstime = d;
    }
    function getSelectedpasstime()
    {
      return selectedpasstime;
    }

    function saveSelectedfood(d)
    {
      selectedfood = d;
    }
    function getSelectedfood()
    {
      return selectedfood;
    }

    function getNumberOfMails()
    {
        //console.log('getNumberOfMails');
        var membersAPI = myConfig.url + "/api/mail/getnumberofmails";
        return $http.get(membersAPI).then(sendResponseData).catch(sendResponseError);

    }
    function sendResponseData(response)
    {
        //console.log(response);
        return response.data;
    }
    function sendResponseError(response)
    {
        //console.log("error from send " + response);
        return $q.reject("error from send " + response.status);
    }

    function getNickName()
    {
      var membersAPI = myConfig.url + "/api/getNickName";
      return $http.get(membersAPI).then(sendResponseData).catch(sendResponseError);
    }

    function getImageList(callback)
    {
      var pictures = [];

      var membersAPI = myConfig.url + "/api/getimagelist";
      $http.get(membersAPI).then(function(result) {
        var userImageList = result.data.list;
        var id = result.data.id;
        //console.log(id);
        var j = 0;
        for (var i = 1; i < 16 ; i++)
        {
          if (userImageList[j] == true) {
            pictures.push('/uploads/' + id.toString() + '/raw/' + i + '.jpg');
          }
          j++;
        }
        callback(true, pictures, userImageList);
      }).catch(function (result) {
        callback(false, null, null);
      });
    }


    function getImageListForUser(userId, callback)
    {
      var pictures = [];

      var membersAPI = myConfig.url + "/api/getimagelistForUser";
      $http.post(membersAPI , {'userId':userId}).then(function(result) {
        var userImageList = result.data.list;
        var id = result.data.id;
        //console.log(id);
        var j = 0;
        for (var i = 1; i < 16 ; i++)
        {
          if (userImageList[j] == true) {
            pictures.push('/uploads/' + id.toString() + '/raw/' + i + '.jpg');
          }
          j++;
        }
        callback(true, pictures , userImageList);
      }).catch(function (result) {
        callback(false, null, null);
      });
    }

  return {
    getNumberOfMails:getNumberOfMails,
    getImageList:getImageList,
    saveSelectedfood:saveSelectedfood,
    getSelectedfood:getSelectedfood,
    saveSelectedlang:saveSelectedlang,
    getSelectedlang:getSelectedlang,
    saveSelectedpasstime:saveSelectedpasstime,
    getSelectedpasstime:getSelectedpasstime,
    getImageListForUser:getImageListForUser,
    getNickName:getNickName
  }


});
