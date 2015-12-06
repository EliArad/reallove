
app.controller('memberprofileController', ['$scope','$state', 'authToken','$window','PassServiceParams','API','myutils',
  function($scope,$state, authToken,$window,PassServiceParams,API,myutils) {

    var vm = this;
    var i = 0;
    $scope.currentMemberToShow = {};
    vm.currentUserTotalPictures = 0;
    vm.currentUserAllPictures = [];


    $scope.currentMemberToShow = PassServiceParams.GetParam('memberProfileToShow');
    console.log($scope.currentMemberToShow);

    if (typeof $scope.currentMemberToShow == "undefined") {
      $state.go('mail', {}, {reload: true});
      return;
    }

    $scope.ClosePopup = function()
    {
      $state.go('mail', {}, {reload: true});
    }

    API.getImageListForUser($scope.currentMemberToShow.fromRegistrationId, function(err , pictures , userImageList)
    {

      vm.currentUserAllPictures = pictures;
      $scope.currentMemberToShow.src = pictures[0];
      vm.currentUserTotalPictures = pictures.length;
      if (userImageList.length > 1)
      {
        $scope.currentMemberToShow.src1 = pictures[1];
      } else {
        $scope.currentMemberToShow.src1 = pictures[0];
      }
      $scope.currentMemberToShow.memberId.age = myutils.getAge($scope.currentMemberToShow.member);
    });

    var previous = function()
    {
      if (i > 0)
        i = i - 1;
      else {
        i = vm.currentUserTotalPictures -1;
      }
      $scope.currentMemberToShow.src = vm.currentUserAllPictures[i];
    }

    $scope.swiperight = function($event) {
      console.log("swiperight");
      $scope.next();
    };
    $scope.swipeleft = function($event) {
      previous();
    };

    $scope.next = function ()
    {
        try {
          i = (i + 1) % vm.currentUserTotalPictures;
          $scope.currentMemberToShow.src = vm.currentUserAllPictures[i];
          console.log(i);
        }
        catch (err)
        {

        }
    }


  }
]);
