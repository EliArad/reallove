'use strict';

  app.controller('ngGalleryController', ['$scope','$state', 'authToken', 'myhttphelper',
      function($scope,$state, authToken) {
        var self = this;

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
        var picName = '/uploads/' + id.toString() + '/raw/' + 1 + '.jpg';
        var picName1 = '/uploads/' + id.toString() + '/raw/' + 2 + '.jpg';
        var picName2 = '/uploads/' + id.toString() + '/raw/' + 3 + '.jpg';
        var picName3 = '/uploads/' + id.toString() + '/raw/' + 4 + '.jpg';


        $scope.slides = [
          {image: picName},
          {image: picName1},
          {image: picName2},
          {image: picName3}
        ];



        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
          $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
          $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
          return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
          $scope.direction = 'left';
          $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
          $scope.direction = 'right';
          $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };


      }
  ]);




  app.directive('.slide-animation', function () {
  return {
    beforeAddClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        var finishPoint = element.parent().width();
        if(scope.direction !== 'right') {
          finishPoint = -finishPoint;
        }
        TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
      }
      else {
        done();
      }
    },
    removeClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        element.removeClass('ng-hide');

        var startPoint = element.parent().width();
        if(scope.direction === 'right') {
          startPoint = -startPoint;
        }

        TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
      }
      else {
        done();
      }
    }
  };
});
