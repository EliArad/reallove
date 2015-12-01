app.factory("picturesManager", function($http, $q,myConfig) {

  var userId = '';
  var userImageList = [];
  var pictures = [];

  var clearManager = function()
  {
    userId = '';
    pictures = [];
    userImageList = [];

  }
  var getMyId = function()
  {
    if (userId != '')
    {
        return userId;
    }
    var membersAPI = myConfig.url + "/api/getuserid";
    return $http.get(membersAPI).success(function(result) {
      userId = result;
      return userId;
    }).error(function(result) {
        return "failed";
    });
  }

  var getMyPictureList = function(callback)
  {

    var membersAPI = myConfig.url + "/api/getimagelist";
    return $http.get(membersAPI).success(function(result) {

      userImageList = result.list;
      //console.log("userImageList " + userImageList);
      pictures = [];
      var j = 0;
      for (var i = 1; i < 16; i++) {
        if (userImageList[j] == true) {
          pictures.push('/uploads/' + result.id.toString() + '/raw/' + i + '.jpg');
        }
        j++;
      }
      callback("ok", pictures , userImageList);

    }).error(function(result) {
      callback("fail", null, null);
    });
  }

  function getPicturePath()
  {
    for (var i = 0 ; i < userImageList.length ; i++)
    {
      if (userImageList[i] == true) {
        return pictures[i];
      }
    }
    return null;
  }
  var getProfilePictureSourcePath = function(callback)
  {
      if (pictures.length == 0)
      {
        getMyPictureList(function(err, pictures , userImageList) {

          callback(getPicturePath());
        });
      } else {
         callback(getPicturePath());
      }
   }

  return {
     getMyId: getMyId,
     getMyPictureList:getMyPictureList,
     getProfilePictureSourcePath:getProfilePictureSourcePath
  }

});
