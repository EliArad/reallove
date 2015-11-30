'use strict';


app.controller('ContinueRegistrationController', ['$scope', 'Members', 'general','appCookieStore','$window',
               '$http','authToken','$timeout','myConfig','$state','myhttphelper','$rootScope','API',
    function($scope, Members,general,appCookieStore,$window,
             $http,authToken,$timeout,myConfig,
             $state,myhttphelper,$rootScope, API)
    {

      var vm = this;

      $scope.member = {};

      $scope.formmsgheader = 'המשך הרשמה';

      vm.selectedfood = [];
      vm.selectedlang = ['עברית'];
      vm.selectedpasstime = [];

      $scope.$watchCollection('vm.selectedfood', function(newNames, oldNames) {
          API.saveSelectedfood(newNames);
      });

      $scope.$watchCollection('vm.selectedlang', function(newNames, oldNames) {
        API.saveSelectedlang(newNames);
      })

      $scope.$watchCollection('vm.selectedpasstime', function(newNames, oldNames) {
        API.saveSelectedpasstime(newNames);
      })




      $scope.foodlist = ['איטלקי','דגים','על האש','שום','חריף','עמבה','סושי','חצילים','כוסברה','בצל','אוהב כל דבר'];
      vm.listoflanguges = ['אנגלית', 'עברית', 'צרפתיתי', 'איטלקית', 'רוסית', 'עוד שפות שלא רשומות כאן']

      vm.yeargenerator = [];
      for (var i = 1930; i <= (2015-21) ; i++)
      {
         vm.yeargenerator.push(i);
      }

      vm.monthgenerator = [];
      for (var i = 1; i <= 12 ; i++)
      {
        vm.monthgenerator.push(i);
      }

      vm.daygenerator = [];
      for (var i = 1; i <= 31 ; i++)
      {
        vm.daygenerator.push(i);
      }


      $scope.calczodiacsign = function()
      {

          try {
            var x = zodiacsigns($scope.member.bornmonth, $scope.member.bornday)
            $scope.member.zodiacsign = x;
          }
          catch (err)
          {

          }
      }


      $scope.pageClass = 'page-home';

      vm.passtime = ['סדרות טלויזיה','סרטים בבית', 'סרטים בקולוע' ,
        'קריוקי' , 'ריקודי עם' , 'ריקודי שנות השישים' , 'מועדונים' ,'בארים', 'עוד כאלו שלא מופיעים כאן'
      ];


      $scope.message = "122211";
      $scope.showModal = true;
      $scope.showRegistration = true;

      //$scope.member = appCookieStore.get("crpage_member");

      var token = authToken.getToken();



      myhttphelper.doGet('/isauth').
        then(sendResponseData1).
        catch(sendResponseError1);


      function sendResponseData1(response)
      {
        if (response != "OK")
        {
          $state.go('login', {}, {reload: true});
        } else {
          //console.log (token);
          myhttphelper.doGet('/api/Members/' + token).
            then(successGetMember).
            catch(errorGetMember);
        }
      }
      function sendResponseError1(response)
      {
         $state.go('login', {}, {reload: true});
      }


      function successGetMember(result)
      {
          //console.log(result.member);
          $scope.member = result.member;
          try {
            $scope.member.bornyear = $scope.member.bornyear.toString();
            $scope.member.bornmonth = $scope.member.bornmonth.toString();
            $scope.member.bornday = $scope.member.bornday.toString();
          }
          catch (e)
          {

          }
          vm.selectedfood = $scope.member.selectedfood;
          vm.selectedlang = $scope.member.selectedlang;
          if (vm.selectedlang.length == 0)
          {
             vm.selectedlang = ['עברית'];
          }
          vm.selectedpasstime = $scope.member.selectedpasstime;
      }
      function errorGetMember(result)
      {
        console.log("error #70: " + result);
        authToken.RemoveToken();
        $rootScope.$broadcast("updateHeader", authToken.getToken());
        $state.go('login', {}, {reload: true});
      }

      /*
        Members.get({ memberId: token }, function(successResult) {
            console.log("success #70: " + successResult.member);
            $scope.member = successResult.member;
        },
        function(errorResult) {
          console.log("error #70: " + errorResult);
          authToken.RemoveToken();
          $rootScope.$broadcast("updateHeader", authToken.getToken());
          $state.go('login', {}, {reload: true});
          return;
          if(errorResult.status != 401) {
            alert (errorResult.status);
          }
      });
      */




      $scope.resturants = [
            'יפני',
            'איטלקי',
            'דגים',
            'פרסי',
            'תימני',
      ];


      // selected fruits
      //$scope.selection = [];
      //$scope.member.restselection =  appCookieStore.get("crpage_resturants_restselection");

      // toggle selection for a given fruit by name
      $scope.toggleSelection = function toggleSelection(fruitName) {
        var idx = $scope.member.restselection.indexOf(fruitName);

        // is currently selected
        if (idx > -1) {
          $scope.member.restselection.splice(idx, 1);
        }

        // is newly selected
        else {
          $scope.member.restselection.push(fruitName);
        }
      };



      $scope.save = function (params) {
        Members.save(params,
          function (resp, headers) {
            //success callback
            $scope.showRegistration = false;

          },
          function (err) {
            // error callback
            $scope.message = "Error " + err.data.error;
            $scope.showModal = true;
          });
      };

      function sendResponseData(response)
      {

      }
      function sendResponseError(response)
      {

      }
      var cssUpdateTimer = null;
      $scope.onExit = function() {
        //appCookieStore.set('crpage_member' , $scope.member);
        //appCookieStore.set('crpage_resturants_restselection' , $scope.member.restselection);
        appCookieStore.set("crpage_picturesize" , $scope.price);

      };

      $scope.dateofbirthmsgheader = 'תאריך לידה';
      $scope.calcage = function()
      {
          var age = 2015 - $scope.member.bornyear;
        $scope.dateofbirthmsgheader = 'תאריך לידה' + "   גילך הוא  " +age;

      }

       $window.onbeforeunload =  $scope.onExit;
       $scope.submit = function (isValid) {
        if (isValid) {
          if (cssUpdateTimer != null)
            $timeout.cancel(cssUpdateTimer);
          $scope.changesuccess = false;

          var token1 = authToken.getToken();
          var membersAPI = myConfig.url + "/api/members/" + token1;

          $scope.member.selectedfood = API.getSelectedfood();
          $scope.member.selectedpasstime = API.getSelectedpasstime();
          $scope.member.selectedlang = API.getSelectedlang();
          console.log($scope.member.selectedfood);
          console.log($scope.member.selectedlang);
          console.log($scope.member.selectedpasstime);
          $scope.member.needInitiaDetailsAll = false;

          $http.put(membersAPI, { 'member': $scope.member }).success(function(result) {
             $scope.changesuccess = true;

            cssUpdateTimer = $timeout(function() {
              $scope.changesuccess = false;
            }, 6000);


          }).error(function() {
            console.log("error");
          });
        }
      }
    }
  ]);

