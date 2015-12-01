'use strict';

app.controller('allmembersgalleryController', ['$scope','$state', 'authToken','$window','myhttphelper','dbsearch','myConfig','$http',
  function($scope,$state, authToken,$window,myhttphelper,dbsearch,myConfig,$http)
  {

    var vm = this;
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
        var picName =  '/uploads/' + result[i].rid.toString() + '/raw/' + 1 + '.jpg';
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
          console.log($scope.messagebody +  " to send to: " + $scope.currentMemberToShow.id);

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
            var picName =  '/uploads/' + result[i].rid.toString() + '/raw/' + 1 + '.jpg';
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

