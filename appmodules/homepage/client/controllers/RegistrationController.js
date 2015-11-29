'use strict';

//(function() {


app.controller('RegistrationController', ['$scope', '$cookieStore', 'Registration', 'general','authToken',
    function($scope, $cookieStore, Registration,general,authToken) {


    //http://odetocode.com/blogs/scott/archive/2014/10/13/confirm-password-validation-in-angularjs.aspx
    var vm = this;
    $scope.pageClass = 'page-home';

    var currentUser = {};
    vm.message = "";
    $scope.showModal = false;
    $scope.showRegistration = true;

    vm.user = {
      password: "",
      email: "",
      confirmPassword: "",
      userguid: ""
    };

     $scope.logout = function() {
        $cookieStore.remove('token');
        currentUser = {};
     }

      $scope.save = function (params)
      {
        Registration.save(params,
          function (resp, headers) {
            //success callback
            $scope.showRegistration = false;

            var mailParams = {
                to: vm.user.email
            };
            //general.sendMail(mailParams);

            authToken.setToken(resp.token);

            var token = authToken.getToken();
            Registration.get({ registerId: token }, function(currentUser) {
              console.log(currentUser.user);

              var mailParams = {
                to: currentUser.user.email
              };
              general.sendMail(mailParams).
                then(sendResponseData).
                catch(sendResponseError);
            });
          },
          function (err) {
            // error callback
            vm.message = "Error " + err.data.error;
            $scope.showModal = true;
          });
      };

      vm.submit = function (isValid) {

        if ($scope.passStrength < 100)
        {
          // vm.message = "password strength should be 100";
          //return;
        }

        if (isValid) {
          $scope.save(vm.user);
        }
      }

      function sendResponseData(response)
      {
          vm.message = "Registration success - email has been sent to " + vm.user.email + " to validate";
      }
      function sendResponseError(response)
      {
        alert("sendResponseError" + response);
      }
    }

]);

  var compareTo = function() {
    return {
      require: "ngModel",
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {

        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue == scope.otherModelValue;
        };

        scope.$watch("otherModelValue", function() {
          ngModel.$validate();
        });
      }
    };
  };
  app.directive("compareTo", compareTo);

//}());
