'use strict';

app.controller('allmembersgalleryController', ['$scope','$state', 'authToken','$window',
               'myhttphelper','dbsearch','myConfig','$http','$timeout',
  function($scope,$state, authToken,$window,myhttphelper,dbsearch,myConfig,$http,$timeout)
  {

    var vm = this;
    vm.currentSentMessage = {};
    var cssUpdateTimer;
    var cssUpdateTimer1;
    $scope.allmembersthumb = [];
    vm.currentUserTotalPictures = 0;
    vm.currentUserAllPictures = [];
    var i = 0;
    var index = 0;
    vm.skipSize = 0;

    myhttphelper.doGet('/isauth').
      then(sendResponseData1).
      catch(sendResponseError1);

    function sendResponseData1(response)
    {
      if (response != "OK")
      {
        $state.go('login', {}, {reload: true});
      }
    }
    function sendResponseError1(response)
    {
      $state.go('login', {}, {reload: true});
    }


    dbsearch.setCriteria("none");
    dbsearch.getFirstNUserIds(100).
      then(UsersOk).
      catch(UsersError);


    function UsersOk(result)
    {

      var totalPictures = result.length;
      vm.skipSize = 100;
      for (i = 0; i < result.length;i++) {
        var picName =  '/uploads/' + result[i].rid.toString() + '/raw/' + 100 + '.jpg';
        var x = {
          src: picName,
          id: result[i].id,
          rid: result[i].rid
        }
        $scope.allmembersthumb.push(x);
      }
    }

    function UsersError(result)
    {

    }

    $scope.lions = false;
    $scope.allthumberspictures = true;
    $scope.currentMemberToShow = {};

    $(function(j) {
      j("#cLeft").text("אותיות נשארו: 320");
      j(document).on('keypress', '#new_message', function() {
        if (this.value.length > 500) {
          return false;
        }
        j("#cLeft").text("אותיות נשארו: " + (320 - this.value.length));
      });
    });

    $scope.ClosePopup = function()
    {
      $scope.lions = false;
      $scope.allthumberspictures = true;
    }

    function getAge(member)
    {
        return 25;
    }
    $scope.ShowMember = function(id,rid)
    {
      //console.log("Show member: " + id + " " + rid);


      var membersAPI = myConfig.url + "/api/getuserinfo";
      $http.get(membersAPI).success(function(result) {
        vm.userImageList = result.list;
        //console.log(vm.member);
        vm.currentUserAllPictures = [];
        var j = 0;
        for (i = 1; i < 16 ; i++)
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
        $scope.currentMemberToShow.member.age = getAge($scope.currentMemberToShow.member);
        $scope.allthumberspictures = false;
        $scope.lions = true;

      }).error(function(result) {
        console.log(result);
      });
    }

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
      if (i > 0)
        i = i - 1;
      else {
        i = vm.currentUserTotalPictures -1;
      }
      $scope.currentMemberToShow.src = vm.currentUserAllPictures[i];
    }

    $scope.myStyle = {
      "max-width" : $window.innerWidth,
      "max-height" : $window.innerHeight - 100
    };


    $scope.next = function ()
    {
      i = (i + 1) % vm.currentUserTotalPictures;
      $scope.currentMemberToShow.src = vm.currentUserAllPictures[i];
    }

    $scope.submit = function(isValid)
    {
       if (!isValid)
       {
          console.log("not valid");
       } else {
         if (vm.currentSentMessage.id == $scope.currentMemberToShow.id &&
             vm.currentSentMessage.messagebody == $scope.messagebody)
         {


            if (cssUpdateTimer1 != null)
               $timeout.cancel(cssUpdateTimer1);

              $scope.showMessageSendFailure = true;
              document.getElementById('sendButton').innerHTML = 'לא נשלח';
              document.getElementById('sendButton').style.color = 'red';
             cssUpdateTimer1 = $timeout(function() {
               $scope.showMessageSendFailure = false;
               document.getElementById('sendButton').style.color = 'white';
               document.getElementById('sendButton').innerHTML = 'שלח הודעה';
             }, 1000)
             return;
         }

          //console.log($scope.messagebody +  " to send to: " + $scope.currentMemberToShow.id);
          var data = {
            mb : $scope.messagebody,
            title: $scope.title,
            toid: $scope.currentMemberToShow.rid
          }
          myhttphelper.doApiPost('sendMessageToMember', data).then(function(response)
          {

            if (cssUpdateTimer != null)
              $timeout.cancel(cssUpdateTimer);

            $scope.showMessageSendOk = true;
            vm.currentSentMessage.id = $scope.currentMemberToShow.id;
            vm.currentSentMessage.messagebody = $scope.messagebody;

            document.getElementById('sendButton').style.color = 'lightgreen';
            document.getElementById('sendButton').innerHTML = 'הודעה נשלחה';

            cssUpdateTimer = $timeout(function() {
              $scope.showMessageSendOk = false;
              document.getElementById('sendButton').innerHTML = 'שלח הודעה';
              document.getElementById('sendButton').style.color = 'white';
            }, 1000);

          }).catch(function(response) {
            $scope.showMessageSendFailure = true;
            document.getElementById('sendButton').style.color = 'lightred';
            document.getElementById('sendButton').innerHTML = 'לא נשלח';
          });
       }
    }

    index = (index + 1) % 4;

    $(window).scroll(function() {
      if ($scope.allthumberspictures == false)
      {
        return;
      }
      if($(window).scrollTop() + $(window).height() == $(document).height()) {

        dbsearch.getNextNUserIds(100, vm.skipSize).then(function(result)
        {
          console.log("Get next: " + result);
          var totalPictures = result.length;
          if (totalPictures == 0) {
            console.log("no more to present")
            return;
          }
          vm.skipSize += 100;


          for (i = 0; i < result.length;i++) {
            var picName =  '/uploads/' + result[i].rid.toString() + '/raw/' + 100 + '.jpg';
            var x = {
              src: picName,
              id: result[i].id,
              rid: result[i].rid
            }
            $scope.allmembersthumb.push(x);
            //$scope.$apply();
          }
          index = (index + 1) % 4;

        }).catch(function (result)
        {

        });
      }
    });
  }
]);

