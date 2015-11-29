'use strict';



  app.controller('allmembersgalleryController', ['$scope','$state', 'authToken','$window','myhttphelper',
    function($scope,$state, authToken,$window,myhttphelper)
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

      $scope.lions = false;
      $scope.allthumberspictures = true;
      var totalPictures = pictures.length;
      $scope.currentMemberToShow = {};

      var index = 0;
      $scope.allmembersthumb = [];

      for (i = 0; i < 100;i++) {
        var x = {
          src: pictures[index],
          id: '56478b1f459688e266c7a303'
        }
        $scope.allmembersthumb.push(x);
      }

      $scope.ClosePopup = function()
      {
        $scope.lions = false;
        $scope.allthumberspictures = true;
      }

      $scope.ShowMember = function(id)
      {
        $scope.currentMemberToShow.src = picName;
        $scope.currentMemberToShow.id = id;
        $scope.allthumberspictures = false;
        $scope.lions = true;
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
        $scope.currentMemberToShow.src = pictures[i];
      }


      $scope.myStyle = {
        "max-width" : $window.innerWidth,
        "max-height" : $window.innerHeight - 100
      };


      $scope.next = function ()
      {
        i = (i + 1) % totalPictures;
        $scope.currentMemberToShow.src = pictures[i];
      }

      index = (index + 1) % 4;

      $(window).scroll(function() {
        if ($scope.allthumberspictures == false)
        {
          return;
        }
        if($(window).scrollTop() + $(window).height() == $(document).height()) {

          for (i = 0; i < 100;i++) {
            var x = {
              src: pictures[index],
              id: '56478b1f459688e266c7a303'
            }
            $scope.allmembersthumb.push(x);
            $scope.$apply();
          }
          index = (index + 1) % 4;
        }
      });

    }

  ]);

