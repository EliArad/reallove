'use strict';


app.controller('MainController', ['$scope','$state','authToken','myhttphelper','dbsearch','myutils',
                                  'appCookieStore','socketioservice','Idle','$rootScope','SessionStorageService','API',
    function($scope,$state,authToken,myhttphelper,dbsearch,myutils,
             appCookieStore,socketioservice,Idle,$rootScope,SessionStorageService,API)
    {
      var vm = this;
      $scope.pageClass = 'page-home';
      $scope.allmembersthumb = [];
      $scope.allthumberspictures = true;

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


      appCookieStore.set('mainview' , 'smallcardsview');

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

      dbsearch.setCriteria("none");
      dbsearch.getFirstNUserProfiles(100).
        then(UsersOk).
        catch(UsersError);


      function UsersOk(result)
      {
        var totalPictures = result.length;
        vm.skipSize = 100;
        for (var i = 0; i < result.length;i++) {
          //console.log(result[i]);
          var picName =  '/uploads/' + result[i].registrationObjectId.toString() + '/raw/' + 100 + '.jpg';
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

      $scope.AddToChatRoom = function(id , rid)
      {

        var fromid = SessionStorageService.getSessionStorage('userid');
        console.log('fromid %s , toid %s' , fromid, rid);
        API.SendChatRequest(fromid, id , rid, function (err)
        {

             if (err != "ok")
             {
               $state.go('login', {}, {reload: false});
             } else {
               //$scope.showDialog = true;
             }

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


      $scope.ShowMember = function(id,rid)
      {


        var membersAPI = myConfig.url + "/api/getuserinfoById";
        $http.post(membersAPI, {'UserId':rid}).success(function(result) {
          vm.userImageList = result.list;
          vm.currentUserAllPictures = [];
          var j = 0;
          for (var i = 1; i < 16 ; i++)
          {
            if (vm.userImageList[j] == true) {
              vm.currentUserAllPictures.push('/uploads/' + rid.toString() + '/raw/' + i + '.jpg');
            }
            j++;
          }
          vm.currentUserTotalPictures = vm.currentUserAllPictures.length;
          $scope.currentMemberToShow.src = vm.currentUserAllPictures[0];
          if (vm.userImageList[1] == true)
          {
            $scope.currentMemberToShow.src1 = vm.currentUserAllPictures[1];
          } else {
            $scope.currentMemberToShow.src1 = vm.currentUserAllPictures[0];
          }
          $scope.currentMemberToShow.id = id;
          $scope.currentMemberToShow.rid = rid;
          $scope.currentMemberToShow.member = result.member;
          $scope.currentMemberToShow.member.age = myutils.getAge($scope.currentMemberToShow.member);
          $scope.allthumberspictures = false;
          $scope.lions = true;

        }).error(function(result) {
          console.log(result);
        });
      }

    } // the controller closing
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
