app.controller('fullpagecardlistingController', ['$scope','$state', 'authToken','API','PassServiceParams',
                                                 'myhttphelper','dbsearch','myutils','$window','$timeout',
                                                 'appCookieStore','socketioservice','Idle','$rootScope',
  function($scope,$state, authToken,API,PassServiceParams,myhttphelper,
           dbsearch,myutils,$window,$timeout,appCookieStore,socketioservice,Idle,$rootScope)
  {

    var vm = this;
    $scope.pageClass = 'page-home';
    $scope.allmembersthumb = [];
    $scope.allthumberspictures = true;
    vm.currentUserAllPictures = {};
    vm.currentUserTotalPictures = 0;
    vm.userImageList = {};
    var index = 0;
    vm.currentId =0;
    vm.currentSentMessage = {};
    var cssUpdateTimer;
    var cssUpdateTimer1;

    appCookieStore.set('mainview' , 'bigcardsview');


    myhttphelper.doGet('/isauth').
      then(sendResponseData).
      catch(sendResponseError);


    function sendResponseData(response)
    {
      if (response != "OK")
      {
        $state.go('login', {}, {reload: true});
      }
    }
    function sendResponseError(response)
    {
      $state.go('login', {}, {reload: true});
    }

    $scope.isOnline = false;

    $scope.$on('IdleStart', function() {
      // the user appears to have gone idle
      console.log('IdleStart');
      socketioservice.disconnect();
    });

    $scope.$on('IdleTimeout', function() {
      // the user has timed out (meaning idleDuration + timeout has passed without any activity)
      // this is where you'd log them
      //console.log('IdleTimeout');
      //console.log("logging out");
      socketioservice.disconnect().success(function (id) {

        authToken.RemoveToken();
        $state.go('login', {}, {reload: true});
        $rootScope.$broadcast("updateHeader", authToken.getToken());
        return;
      });

    });

    $scope.$on('IdleEnd', function() {
      // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
      console.log('IdleEnd');
      socketioservice.connect();
    });

    socketioservice.setCallback(connectionCallback);

    function connectionCallback(status , id)
    {

      $scope.isOnline = socketioservice.isUserOnline(id);
      console.log('connectionCallback ' + $scope.isOnline);
      $scope.$digest();
    }


    $scope.myStyle = {
      "max-width" : Math.min($window.innerWidth, 750),
      "max-height" :Math.min( $window.innerHeight - 100, 600)
    };

    dbsearch.setCriteria("none");
    dbsearch.getFirstNUserProfiles(100).
      then(UsersOk).
      catch(UsersError);


    function UsersOk(result)
    {
      var totalPictures = result.length;
      vm.skipSize = 100;
      for (var i = 0; i < result.length;i++) {
        console.log(result[i]);
        var picName =  '/uploads/' + result[i].registrationObjectId.toString() + '/raw/' + 1 + '.jpg';
        var x = {
          src: picName,
          id: result[i].id,
          rid: result[i].registrationObjectId,
          profile:result[i]
        }

        x.profile.age  = myutils.getAge(result[i].created);
        $scope.allmembersthumb.push(x);
      }
    }

    function UsersError(result)
    {

    }


    $scope.submit = function(obj, rid)
    {

      var dataValue = obj.target.attributes.data.value;


      var buttonid = 'sendButton' + dataValue;
      var msgbodyid = 'msgbody' + dataValue;
      var msgtitleid = 'msgtitle' + dataValue;

      var msgBody = document.getElementById(msgbodyid).value;
      var msgTitle = document.getElementById(msgtitleid).value;


      //console.log($scope.messagebody +  " to send to: " + $scope.currentMemberToShow.id);
      var data = {
        mb : msgBody,
        title: msgTitle,
        toid: rid
      }
      myhttphelper.doApiPost('sendMessageToMember', data).then(function(response)
      {

        if (cssUpdateTimer != null)
          $timeout.cancel(cssUpdateTimer);


        document.getElementById(buttonid).className = "btn btn-info pull-left animated tada";
        document.getElementById(buttonid).style.color = 'lightgreen';
        document.getElementById(buttonid).innerHTML = 'הודעה נשלחה';

        cssUpdateTimer = $timeout(function() {
          document.getElementById(buttonid).innerHTML = 'שלח הודעה';
          document.getElementById(buttonid).style.color = 'white';
          document.getElementById(buttonid).className = "btn btn-info pull-left";
        }, 1000);

      }).catch(function(response) {
        document.getElementById(buttonid).style.color = 'lightred';
        document.getElementById(buttonid).innerHTML = 'לא נשלח';
        document.getElementById(buttonid).className = "btn btn-info pull-left animated rubberBand";
        cssUpdateTimer = $timeout(function() {
          document.getElementById(buttonid).className = "btn btn-info pull-left";
        }, 1000);
      });
    }

    $(function(j) {
      j("#cLeft").text("אותיות נשארו: 320");
      j(document).on('keypress', '#new_message', function() {
        if (this.value.length > 500) {
          return false;
        }
        j("#cLeft").text("אותיות נשארו: " + (320 - this.value.length));
      });
    });


    $scope.swiperight = function($event) {
      console.log("swiperight");
      $scope.next();
    };
    $scope.swipeleft = function($event) {
      previous();
    };

    $scope.notifyServiceOnChage = function(){
      console.log($scope.windowHeight);
    };

    var previous = function()
    {
      if (index > 0)
        index = index - 1;
      else {
        index = vm.currentUserTotalPictures -1;
      }
      $scope.currentMemberToShow.src = vm.currentUserAllPictures[index];
    }

    $scope.next = function (id , rid, obj)
    {
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
]).config(function(IdleProvider, KeepaliveProvider,myConfig) {
  // configure Idle settings
  IdleProvider.idle(myConfig.idletimeSeconds); // in seconds
  IdleProvider.timeout(myConfig.timeoutSeconds); // in seconds
  KeepaliveProvider.interval(2); // in seconds
})
  .run(function(Idle){
    // start watching when the app runs. also starts the Keepalive service by default.
    Idle.watch();
  });

