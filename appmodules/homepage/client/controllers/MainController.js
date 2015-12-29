'use strict';


app.controller('MainController', ['$scope', '$state', 'authToken', 'myhttphelper', 'dbsearch', 'myutils',
  'appCookieStore', 'socketioservice', 'Idle', '$rootScope',
  'SessionStorageService', 'API', 'myConfig', '$http', '$window', '$timeout','$msgbox',
  function ($scope, $state, authToken, myhttphelper, dbsearch, myutils,
            appCookieStore, socketioservice, Idle, $rootScope, SessionStorageService,
            API, myConfig, $http, $window, $timeout,$msgbox) {
    var vm = this;
    vm.skipSize = 0;
    $scope.pageClass = 'page-home';
    $scope.allmembersthumb = [];
    $scope.allthumberspictures = true;
    var index = 0;
    $scope.isOnline = false;
    var lastShowId = -1;
    var cssUpdateTimer;
    var cssUpdateTimer1;

    var lastMessage = {};

    var maxPageToLoad = 30;


    $scope.$on('IdleStart', function () {
      // the user appears to have gone idle
      console.log('IdleStart');
      socketioservice.disconnect();
    });

    $scope.$on('IdleTimeout', function () {
      // the user has timed out (meaning idleDuration + timeout has passed without any activity)
      // this is where you'd log them
      //console.log('IdleTimeout');
      //console.log("logging out");
      socketioservice.disconnect().success(function (id) {

        authToken.RemoveToken();
        $state.go('login', {}, {
          reload: true
        });
        $rootScope.$broadcast("updateHeader", authToken.getToken());
        return;
      });

    });

    $scope.$on('IdleEnd', function () {
      // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
      console.log('IdleEnd');
      socketioservice.connect();
    });
    socketioservice.setCallback(connectionCallback);

    function connectionCallback(status, id) {
      var isOnline = socketioservice.isUserOnline(id);
      console.log('online: ' + id);
    }

    appCookieStore.set('mainview', 'smallcardsview');

    myhttphelper.doGet('/isauth').
      then(sendResponseData).
      catch(sendResponseError);


    function sendResponseData(response) {
      if (response != "OK") {
        $state.go('login', {}, {
          reload: true
        });
      } else {

        var n1 = SessionStorageService.getSessionStorage('needInitiaDetailsBase');
        var n2 = SessionStorageService.getSessionStorage('needInitiaDetailsAll');
        var msgtoshow = '';
        if (n1 == 'true') {
          msgtoshow = 'נתוני בסיס חסרים';
        }

        if (n2 == 'true') {
          msgtoshow = 'פרטים נוספים חסרים';
        }

        if (n1 == 'true' || n2 == 'true') {
          $msgbox.show(msgtoshow)
            .then(function(){
              $state.go('memberdetails', {}, {
                reload: true
              });
            }, function(){
              $state.go('memberdetails', {}, {
                reload: true
              });
            });
        }

        API.IsProfilePictureLoaded().then(function(loaded){
          if (loaded.data == false)
          {
            msgtoshow = 'תמונות פרופיל חסרה.חובה להעלות לפחות תמונה אחת לפני שמתחילים';
            $msgbox.show(msgtoshow)
              .then(function(){
                $state.go('memberdetails', {}, {
                  reload: true
                });
              }, function(){
                $state.go('memberdetails', {}, {
                  reload: true
                });
              });
          }
        });


      }
    }

    function sendResponseError(response) {
      $state.go('login', {}, {
        reload: true
      });
    }

    dbsearch.setCriteria("none");
    dbsearch.getFirstNUserProfiles(maxPageToLoad).
      then(UsersOk).
      catch(UsersError);


    function UsersOk(result) {

      dbsearch.getAllShowMyVideoList().then(function (data) {


        console.log(data.size);
        var list = data.list;
        var listsize = data.size;
        console.log(listsize);

        var totalPictures = result.results.length;
        vm.skipSize = maxPageToLoad;
        for (var i = 0; i < result.results.length; i++) {
          //console.log(result[i]);
          var picName = '/uploads/' + result.results[i].registrationObjectId.toString() + '/raw/' + 100 + '.jpg';
          //console.log(picName);
          var x = {
            src: picName,
            id: result.results[i].id,
            rid: result.results[i].registrationObjectId,
            profile: result.results[i],
            online: result.results[i].isOnline
          }

          try {
            var exist = list[x.rid];
            if (exist != undefined) {
              x.showvideo = true;
            } else {
              x.showvideo = false;
            }
          }
          catch (e)
          {

          }

          x.profile.age = myutils.getAge(25);
          $scope.allmembersthumb.push(x);
        }
      });
    }

    function UsersError(result) {

    }

    $scope.AllowToSeeMyVideo = function (toid, obj) {


      var dataValue = obj.target.attributes.data.value;

      var id = 'myvideo' + dataValue;
      var allow = document.getElementById(id).checked;
      var data = {
        'allow': allow,
        'toid': toid
      };

      API.AllowUserToSeeMyVideo(data);
    }

    $scope.submit = function (isValid, obj, rid, nickName) {

      var dataValue = obj.target.attributes.data.value;
      if (!isValid) {
        console.log("not valid");
      } else {

        var msgId = 'mailtouser' + dataValue;
        var msgBody = document.getElementById(msgId).value;

        var sendBtnId = 'sendButton' + dataValue;
        var t = lastMessage[rid]
        if (t == (msgBody + nickName)) {
          document.getElementById(sendBtnId).className = 'animated rubberBand btn btn-info pull-left';
          document.getElementById(sendBtnId).style.color = 'red';
          document.getElementById(sendBtnId).innerHTML = 'לא נשלחת הודעה זהה';
          cssUpdateTimer1 = $timeout(function () {
            document.getElementById(sendBtnId).className = 'btn btn-info pull-left';
            document.getElementById(sendBtnId).innerHTML = 'שלח הודעה';
            document.getElementById(sendBtnId).style.color = 'white';
          }, 2000);
          return;
        }


        //console.log($scope.messagebody +  " to send to: " + $scope.currentMemberToShow.id);
        var data = {
          mb: msgBody,
          title:  'הודעה מ ' + nickName,
          toid: rid
        }
        myhttphelper.doApiPost('sendMessageToMember', data).then(function (response) {

          if (cssUpdateTimer != null)
            $timeout.cancel(cssUpdateTimer);


          document.getElementById(sendBtnId).className = 'animated tada btn btn-info pull-left';

          //vm.currentSentMessage.id = $scope.currentMemberToShow.id;
          //vm.currentSentMessage.messagebody = $scope.messagebody;

          document.getElementById(sendBtnId).style.color = 'lightgreen';
          document.getElementById(sendBtnId).innerHTML = 'הודעה נשלחה';

          lastMessage[rid] = msgBody + nickName;

          cssUpdateTimer = $timeout(function () {
            document.getElementById(sendBtnId).className = 'btn btn-info pull-left';
            document.getElementById(sendBtnId).innerHTML = 'שלח הודעה';
            document.getElementById(sendBtnId).style.color = 'white';
          }, 1000);

        }).catch(function (response) {
          document.getElementById(sendBtnId).className = 'animated rubberBand btn btn-info pull-left';
          document.getElementById(sendBtnId).style.color = 'red';
          document.getElementById(sendBtnId).innerHTML = 'לא נשלח';
        });
      }
    }


    $scope.AddToChatRoom = function (id, rid, obj) {

      var dataValue = obj.target.attributes.data.value;

      var fromid = SessionStorageService.getSessionStorage('userid');

      var onlineObject = document.getElementById('online' + dataValue);
      API.IsUserInACall(rid, function (result) {

        console.log(result);
        if (result == true) {
          onlineObject.innerHTML = 'לא פנוי, כרגע בשיחה';
          onlineObject.style.color = 'red';
          onlineObject.width = '240px';
          onlineObject.className = 'animated swing';
          setTimeout(function () {
            onlineObject.innerHTML = 'online';
            onlineObject.style.color = 'lime';
            onlineObject.width = '100px';
            onlineObject.className = 'animated infinite pulse';
          }, 3000);

          return;
        }

        //console.log('fromid %s , toid %s', fromid, rid);
        API.SendChatRequest(fromid, id, rid, function (err) {
          if (err != "ok") {
            $state.go('login', {}, {
              reload: false
            });
          } else {
            //$scope.showDialog = true;
          }
        });
      });
    }

    $(function (j) {
      j("#cLeft").text("אותיות נשארו: ");
      j(document).on('keypress', '#new_message', function () {
        if (this.value.length > 500) {
          return false;
        }
        j("#cLeft").text("אותיות נשארו: " + (500 - this.value.length));
      });
    });


    $(window).scroll(function () {
      if ($scope.allthumberspictures == false) {
        return;
      }
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {

        dbsearch.getNextNUserIds(maxPageToLoad, vm.skipSize).then(function (result) {
          //console.log("Get next: " + result);
          var totalPictures = result.length;
          if (totalPictures == 0) {
            console.log("no more to present")
            return;
          }
          vm.skipSize += maxPageToLoad;

          for (var i = 0; i < result.length; i++) {
            var picName = '/uploads/' + result[i].rid.toString() + '/raw/' + 100 + '.jpg';
            var x = {
              src: picName,
              id: result[i].id,
              rid: result[i].rid
            }
            $scope.allmembersthumb.push(x);
            //$scope.$apply();
          }
        }).catch(function (result) {

        });
      }
    });


    $scope.ShowMember = function (id, rid, obj) {

      var dataValue = obj.target.attributes.data.value;

      if (lastShowId != dataValue) {
        index = 0;
        lastShowId = dataValue;
        var membersAPI = myConfig.url + "/api/getuserinfoById";
        $http.post(membersAPI, {
          'UserId': rid
        }).success(function (result) {
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
          index = (index + 1) % vm.currentUserTotalPictures;
          console.log("here" + index);
          console.log(vm.currentUserTotalPictures);
          var id = 'imgsrc' + dataValue;
          document.getElementById(id).src = vm.currentUserAllPictures[index];


        }).error(function (result) {
          console.log(result);
        });
      } else {
        index = (index + 1) % vm.currentUserTotalPictures;
        console.log("here1" + index);
        var id = 'imgsrc' + dataValue;
        document.getElementById(id).src = vm.currentUserAllPictures[index];
      }
    }

  } // the controller closing
]).config(function (IdleProvider, KeepaliveProvider, myConfig) {
  // configure Idle settings
  IdleProvider.idle(myConfig.idletimeSeconds); // in seconds
  IdleProvider.timeout(myConfig.timeoutSeconds); // in seconds
  KeepaliveProvider.interval(2); // in seconds
})
  .run(function (Idle) {
    // start watching when the app runs. also starts the Keepalive service by default.
    Idle.watch();
  });
