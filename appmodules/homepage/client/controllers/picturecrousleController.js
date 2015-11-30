'use strict';


  app.controller('picturecrousleController', ['$scope','$state', 'authToken', 'myhttphelper','API',
      function($scope,$state, authToken,myhttphelper,API)
      {
        var slides = $scope.slides = [];
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;


        myhttphelper.doGet('/isauth').
          then(sendResponseData1).
          catch(sendResponseError1);


        function sendResponseData1(response)
        {
          if (response != "OK")
          {
            $state.go('login', {}, {reload: true});
          } else {

            API.getImageList(function(err , data)
            {
                if (err == true)
                {
                  console.log(data);
                  for (var i = 0; i < data.length ; i++)
                  {
                      var t = (i + 1) + '!';
                      $scope.slides.push({text: t, image: data[i]});
                  }
                  var newWidth = 600 + $scope.slides.length + 1;
               }
            });
          }
        }
        function sendResponseError1(response)
        {
          $state.go('login', {}, {reload: true});
        }


        $scope.addSlide = function() {
        };

        $scope.addSlide();

      }

  ]);


