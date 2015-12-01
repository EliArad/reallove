'use strict';

  app.controller('imageresizergalleryController', ['$scope','$state', 'authToken','myConfig',
                  '$window','$timeout','myhttphelper','$http',
      function($scope,$state, authToken,myConfig,$window,$timeout,myhttphelper,$http)
      {

        var vm = this;
        var i = 0;
        var picName;
        var picName1;
        var picName2;
        var picName3;
        var pictures = [];
        var mytimeout;
        var startTimer = 0;
        var totalPictures;


        function authOk()
        {
          var membersAPI = myConfig.url + "/api/getuserid";
          $http.get(membersAPI).success(function(result) {

            vm.userid = result;
            //console.log(vm.userid);
            var id = vm.userid;
            pictures = [];

            var membersAPI = myConfig.url + "/api/getimagelist";
            $http.get(membersAPI).success(function(result) {
              //console.log(result);
              vm.userImageList = result.list;

              var j = 0;
              for (i = 1; i < 16 ; i++)
              {
                if (vm.userImageList[j] == true) {
                   pictures.push('/uploads/' + id.toString() + '/raw/' + i + '.jpg');
                }
                j++;
              }
              totalPictures = pictures.length;
              //console.log(pictures[0]);
              $scope.imagesrc = pictures[0];
            });

          }).error(function(result) {
            console.log(result);
          });

        }

        myhttphelper.doGet('/isauth').
          then(sendResponseData1).
          catch(sendResponseError1);


        function sendResponseData1(response)
        {
          if (response != "OK")
          {
            $state.go('login', {}, {reload: true});
          } else {
            authOk();
          }
        }
        function sendResponseError1(response)
        {
          $state.go('login', {}, {reload: true});
        }

        $scope.swiperight = function($event) {
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
            i = totalPictures;
          }
          $scope.imagesrc = pictures[i];
        }


        $scope.myStyle = {
          "max-width" : $window.innerWidth,
          "max-height" : $window.innerHeight - 100
        };


        $scope.next = function ()
        {
          i = (i + 1) % totalPictures;
          $scope.imagesrc = pictures[i];
        }


        $scope.startTimeout = function () {
          if (startTimer > 0)
            $scope.next();
          startTimer = 1;
          mytimeout = $timeout($scope.startTimeout , 6000);
        }
        $scope.startTimeout();

        $scope.stopTimeout = function () {
          $timeout.cancel(mytimeout);
        }


      }

  ]);


