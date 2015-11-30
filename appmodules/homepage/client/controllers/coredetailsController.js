'use strict';



  app.controller('coredetailsController', ['$scope','$state', 'authToken','myhttphelper','myConfig','$http','$timeout',
    function($scope,$state, authToken,myhttphelper,myConfig,$http,$timeout)
    {
      var vm = this;
      $scope.member = {};
      $scope.pageClass = 'page-home';
      $scope.showerrormessage1 = false;
      $scope.messagetoshow1 = "";
      $scope.showerrormessage2 = false;
      $scope.messagetoshow2 = "";
      $scope.showerrormessage3 = false;
      $scope.messagetoshow3 = "";
      vm.religionbelong = ['יהודי', 'בדרך לשם - מתגייר' , 'לא'];

      var cssUpdateTimer = null;
      $scope.citygenerator = [1,2,3];



      //statussearch: "",
      //searchnumberofkids:"",
      //smokingpartner :"",

      myConfig.getcities($http, function(err , result)
      {
        if (err)
          console.log(err);
        else {
          vm.cities = result.data;
          console.log(vm.cities[0][0]);
        }
      });


      vm.showfirstselection = false;

      var currentUser = {};
      vm.status1 = ['רווק','גרוש'];
      vm.status2 = ['רווקה','גרושה'];
      vm.status = vm.status1;
      vm.gendercollection = ['גבר' ,'אישה'];
      vm.smokingLabel = 'מעשנים';
      vm.statussearch = vm.status2;
      vm.labelsearch = "מחפש..";
      vm.labelsmokingsearch = "מעשנת";

      vm.religionman = ['חילוני' , 'מסורתי' , 'דתי'];
      vm.religionwoman = ['חילונית' , 'מסורתית' , 'דתיה'];

      vm.religion = vm.religionman;

      myhttphelper.doGet('/isauth').
        then(sendResponseData1).
        catch(sendResponseError1);


      function sendResponseData1(response)
      {
        console.log(response);
        if (response != "OK")
        {
          $state.go('login', {}, {reload: true});
        } else {
          var token = authToken.getToken();
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
        $scope.member = result.member;
      }
      function errorGetMember(result)
      {
        console.log("error #70: " + result);
        authToken.RemoveToken();
        $rootScope.$broadcast("updateHeader", authToken.getToken());
        $state.go('login', {}, {reload: true});
      }

      $scope.updatestatus = function(value)
      {
        if (value == 1) {
          $scope.showerrormessage1 = false;
          $scope.messagetoshow1 = "";
          if (vm.user.gender == 'אישה'){
            vm.status = vm.status2;
            vm.smokingLabel = 'מעשנת';
            vm.statussearch = vm.status1;
            vm.labelsmokingsearch = "מעשן";
            vm.labelsearch = "מחפשת..";
            vm.religion = vm.religionwoman;
          }else {
            vm.status = vm.status1;
            vm.smokingLabel = 'מעשן';
            vm.statussearch = vm.status2;
            vm.labelsmokingsearch = "מעשנת";
            vm.labelsearch = "מחפש..";
            vm.religion = vm.religionman;
          }

        } else
        if (value == 2) {
          $scope.showerrormessage2 = false;
          $scope.messagetoshow2 = "";
        }
      }

      $scope.submit = function (isValid) {


        if(typeof $scope.member.city === 'undefined')
        {
          alert ("error");
          return;
        }

        if (cssUpdateTimer != null)
          $timeout.cancel(cssUpdateTimer);
        $scope.changesuccess = false;



        var token1 = authToken.getToken();
        var membersAPI = myConfig.url + "/api/members/" + token1;

        console.log($scope.member.gender);
        $scope.member.needInitiaDetailsBase = false;
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
  ]);

