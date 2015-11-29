app.directive('resize', function ($window) {
  return function (scope, element, attr) {

    function resize () {

      //** Use window will listen to the global window change,
      // If you want to destroy (unbind) the window event,  you can :
      // var window = angular.element($window)
      // call window on-resize: window.on('resize', funciton () {} )
      // destroy on scope.$on('$destroy', function () { window.off('resize') })
      //
      var windowHeight = window.innerHeight,
        windowWidth  = window.innerWidth;

      scope.windowHeight = windowHeight;
      scope.windowWidth  = windowWidth;

      console.log('w.innerHeight', windowHeight);
      console.log('w.innerWidth', windowWidth);

      //** If want to apply style on element, can do something like:
      var elemStyle = {
        'max-width': windowWidth + 'px',
        'max-height': (windowHeight - 100) + 'px'
      };

      element.css(elemStyle);
    }
    resize();

    //** On resize
    window.onresize = function () {
      resize();
      scope.$apply();
    }
  }
});
//http://www.mircozeiss.com/shake-that-login-form-with-angularjs/
app.directive('shakeThat', ['$animate', function($animate) {

  return {
    require: '^form',
    scope: {
      submit: '&',
      submitted: '='
    },
    link: function(scope, element, attrs, form) {
      // listen on submit event
      element.on('submit', function() {
        // tell angular to update scope
        scope.$apply(function() {
          // everything ok -> call submit fn from controller
          if (form.$valid) return scope.submit();
          // show error messages on submit
          scope.submitted = true;
          // shake that form
          $animate.addClass(element, 'shake', function() {
            $animate.removeClass(element, 'shake');
          });
        });
      });
    }
  };

}]);
