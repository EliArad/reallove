app.factory("API", function($http,$q,myConfig,myutils)
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

    function IsOnlineUser()
    {
       //console.log('getNumberOfMails');
       var membersAPI = myConfig.url + "/api/online/IsOnlineUser";
       return $http.get(membersAPI).then(sendResponseData).catch(sendResponseError);
    }
    function IsOnlineUserById(id)
    {
      var membersAPI = myConfig.url + "/api/online/IsOnlineUserById";
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

    function SendChatRequest(fromid , toid , torid, callback)
    {
      var info = {
          fromid : fromid,
          toid: toid ,
          torid: torid
      }

      var membersAPI = myConfig.url + "/api/chat/SendChatRequest";
      $http.post(membersAPI , info).then(function(result) {
         callback("ok");
      }).catch(function (result) {
        callback("error:" + result);
      });
    }

  function getuserinfoById(rid, callback) {

    var vm = {};
    vm.currentMemberToShow = {};
    vm.index1 = 0;
    vm.index0 = 0;
    var membersAPI = myConfig.url + "/api/getuserinfoById";
    $http.post(membersAPI, {'UserId': rid}).success(function (result) {
      vm.userImageList = result.list;
      vm.currentUserAllPictures = [];
      var j = 0;
      for (var i = 1; i < 16; i++) {
        if (vm.userImageList[j] == true) {
          vm.currentUserAllPictures.push('/uploads/' + rid.toString() + '/raw/' + i + '.jpg');
        }
        j++;
      }
      vm.currentUserTotalPictures = vm.currentUserAllPictures.length;
      console.log("SIZE *******" + vm.currentUserTotalPictures);
      vm.currentMemberToShow.src = vm.currentUserAllPictures[0];
      if (vm.userImageList[1] == true) {
        vm.currentMemberToShow.src1 = vm.currentUserAllPictures[1];
        vm.index1 = 1;
      } else {
        vm.currentMemberToShow.src1 = vm.currentUserAllPictures[0];
      }
      vm.currentMemberToShow.member = result.member;
      vm.currentMemberToShow.member.age = myutils.getAge(vm.currentMemberToShow.member);

      callback(vm);
    });
  }


  function RoateMyPicture(id, callback)
  {
    console.log('RoateMyPicture : ' + id);
    var membersAPI = myConfig.url + "/api/general/roateMyPicture";
    $http.post(membersAPI , {id:id}).success(function (result) {

        //console.log("rotate: " + result)
        callback(result);
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
    getNickName:getNickName,
    IsOnlineUser:IsOnlineUser,
    IsOnlineUserById:IsOnlineUserById,
    SendChatRequest:SendChatRequest,
    getuserinfoById:getuserinfoById,
    RoateMyPicture:RoateMyPicture

  }


});
