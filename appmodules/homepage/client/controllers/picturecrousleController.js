'use strict';


  app.controller('picturecrousleController', ['$scope','$state', 'authToken', 'myhttphelper',
      function($scope,$state, authToken,myhttphelper)
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


        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
          var newWidth = 600 + slides.length + 1;
          $scope.slides.push({text: '1!', image: '/uploads/56478b1f459688e266c7a303/raw/1.jpg'});
          $scope.slides.push({text: '2!', image: '/uploads/56478b1f459688e266c7a303/raw/2.jpg'});
          $scope.slides.push({text: '3!', image: '/uploads/56478b1f459688e266c7a303/raw/3.jpg'});
          $scope.slides.push({text: '4!', image: '/uploads/56478b1f459688e266c7a303/raw/4.jpg'});
        };

          $scope.addSlide();


      }

  ]);


