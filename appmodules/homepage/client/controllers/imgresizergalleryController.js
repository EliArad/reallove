'use strict';

  app.controller('imageresizergalleryController', ['$scope','$state', 'authToken','myConfig',
                  '$window','$timeout','myhttphelper',
      function($scope,$state, authToken,myConfig,$window,$timeout,myhttphelper)
      {


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


        var id = '56478b1f459688e266c7a303';
        var picName =  '/uploads/' + id.toString() + '/raw/' + 1 + '.jpg';
        var picName1 = '/uploads/' + id.toString() + '/raw/' + 2 + '.jpg';
        var picName2 = '/uploads/' + id.toString() + '/raw/' + 3 + '.jpg';
        var picName3 = '/uploads/' + id.toString() + '/raw/' + 4 + '.jpg';

        var i = 0;
        var pictures = [picName,picName1,picName2,picName3];
        var mytimeout;
        var startTimer = 0;
        var totalPictures = pictures.length;


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


        $scope.imagesrc = pictures[0];

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


