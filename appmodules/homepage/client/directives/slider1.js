app.directive("slider", function() {
  return {
    restrict: 'A',


    scope: {
      config: "=config",
      price: "=model",
      confirmAction: '&'
    },

    link: function(scope, elem, attrs, ngModel) {
      var setModel = function(value) {
        scope.model = value;
      }

      $(elem).slider({
        range: false,
        min: scope.config.min,
        max: scope.config.max,
        step: scope.config.step,
        slide: function(event, ui) {
          scope.$apply(function() {
            scope.price = ui.value;
            scope.confirmAction();
          });
        }
      });
    }
  }
});
