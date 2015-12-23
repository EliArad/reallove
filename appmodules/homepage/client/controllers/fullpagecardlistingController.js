app.controller('fullpagecardlistingController', ['$scope', '$state', 'authToken', 'API', 'PassServiceParams',
  'myhttphelper', 'dbsearch', 'myutils', '$window', '$timeout',
  'appCookieStore', 'socketioservice', 'Idle', '$rootScope', 'SessionStorageService',
  function ($scope, $state, authToken, API, PassServiceParams, myhttphelper,
            dbsearch, myutils, $window, $timeout, appCookieStore, socketioservice,
            Idle, $rootScope, SessionStorageService) {

    var vm = this;
    $scope.pageClass = 'page-home';
    $scope.allmembersthumb = [];
    $scope.allthumberspictures = true;
    vm.currentUserAllPictures = {};
    vm.currentUserTotalPictures = 0;
    vm.userImageList = {};
    var index = 0;
    vm.currentId = 0;
    vm.currentSentMessage = {};
    var cssUpdateTimer;
    var cssUpdateTimer1;

    appCookieStore.set('mainview', 'bigcardsview');


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

        if (n1 == 'true' || n2 == 'true') {
          $state.go('memberdetails', {}, {
            reload: true
          });
        }
      }
    }

    function sendResponseError(response) {
      $state.go('login', {}, {
        reload: true
      });
    }

    $scope.isOnline = false;

    $scope.$on('IdleStart', function () {
      // the user appears to have gone idle
      //console.log('IdleStart');
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
      //console.log('IdleEnd');
      socketioservice.connect();
    });

    socketioservice.setCallback(connectionCallback);

    function connectionCallback(status, id) {

      //$scope.isOnline = socketioservice.isUserOnline(id);
      //console.log('connectionCallback ' + $scope.isOnline);
      //$scope.$digest();
    }


    $scope.myStyle = {
      "max-height": $window.innerHeight - 200
    };

    dbsearch.setCriteria("none");
    dbsearch.getFirstNUserProfiles(100).
      then(UsersOk).
      catch(UsersError);


    function UsersOk(result) {

      dbsearch.getAllShowMyVideoList().then(function(list){

        var totalPictures = result.results.length;
        vm.skipSize = 100;
        var i;
        for (i = 0; i < result.results.length; i++) {
          //console.log(result[i]);
          var picName = '/uploads/' + result.results[i].registrationObjectId.toString() + '/raw/' + 1 + '.jpg';
          var x = {
            src: picName,
            id: result.results[i].id,
            rid: result.results[i].registrationObjectId,
            profile: result.results[i]
          }

          try {
            var exist = list[x.rid];
            if (exist != undefined) {
               x.showvideo = true;
            }
          }
          catch (e)
          {

          }
          x.profile.age = myutils.getAge(result.results[i].created);
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
         'allow':allow,
         'toid':toid
      };

      API.AllowUserToSeeMyVideo(data);
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


    $scope.submit = function (obj, rid) {

      var dataValue = obj.target.attributes.data.value;


      var buttonid = 'sendButton' + dataValue;
      var msgbodyid = 'msgbody' + dataValue;
      var msgtitleid = 'msgtitle' + dataValue;

      var msgBody = document.getElementById(msgbodyid).value;
      var msgTitle = document.getElementById(msgtitleid).value;


      //console.log($scope.messagebody +  " to send to: " + $scope.currentMemberToShow.id);
      var data = {
        mb: msgBody,
        title: msgTitle,
        toid: rid
      }
      myhttphelper.doApiPost('sendMessageToMember', data).then(function (response) {

        if (cssUpdateTimer != null)
          $timeout.cancel(cssUpdateTimer);


        document.getElementById(buttonid).className = "btn btn-info pull-left animated tada";
        document.getElementById(buttonid).style.color = 'lightgreen';
        document.getElementById(buttonid).innerHTML = 'הודעה נשלחה';

        cssUpdateTimer = $timeout(function () {
          document.getElementById(buttonid).innerHTML = 'שלח הודעה';
          document.getElementById(buttonid).style.color = 'white';
          document.getElementById(buttonid).className = "btn btn-info pull-left";
        }, 1000);

      }).catch(function (response) {
        document.getElementById(buttonid).style.color = 'lightred';
        document.getElementById(buttonid).innerHTML = 'לא נשלח';
        document.getElementById(buttonid).className = "btn btn-info pull-left animated rubberBand";
        cssUpdateTimer = $timeout(function () {
          document.getElementById(buttonid).className = "btn btn-info pull-left";
        }, 1000);
      });
    }

    $(function (j) {
      j("#cLeft").text("אותיות נשארו: 320");
      j(document).on('keypress', '#new_message', function () {
        if (this.value.length > 500) {
          return false;
        }
        j("#cLeft").text("אותיות נשארו: " + (320 - this.value.length));
      });
    });


    $scope.swiperight = function ($event) {
      console.log("swiperight");
      $scope.next();
    };
    $scope.swipeleft = function ($event) {
      previous();
    };

    $scope.notifyServiceOnChage = function () {
      console.log($scope.windowHeight);
    };

    var previous = function () {
      if (index > 0)
        index = index - 1;
      else {
        index = vm.currentUserTotalPictures - 1;
      }
      $scope.currentMemberToShow.src = vm.currentUserAllPictures[index];
    }

    $scope.next = function (id, rid, obj) {
      var dataValue = obj.target.attributes.data.value;
      //console.log(dataValue);
      //console.log('id %s  rid %s' , id , rid);
      if (vm.currentId != rid) {
        vm.currentId = rid;


        API.getImageListForUser(rid, function (err, pictures, userImageList) {

          vm.currentUserAllPictures = pictures;
          vm.userImageList = userImageList;
          //console.log(vm.userImageList);
          vm.currentUserTotalPictures = pictures.length;

          index = 0;
          if (vm.currentUserTotalPictures > 1)
            index = 1;

          var imageid = 'img' + dataValue;
          document.getElementById(imageid).src = vm.currentUserAllPictures[index];
          index = (index + 1) % vm.currentUserTotalPictures;
        });
      } else {
        var imageid = 'img' + dataValue;
        document.getElementById(imageid).src = vm.currentUserAllPictures[index];
        index = (index + 1) % vm.currentUserTotalPictures;
      }
    }
  }
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
