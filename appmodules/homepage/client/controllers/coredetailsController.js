'use strict';



  app.controller('coredetailsController', ['$scope','$state', 'authToken','myhttphelper','myConfig','$http',
    function($scope,$state, authToken,myhttphelper,myConfig,$http)
    {
      var vm = this;
      $scope.pageClass = 'page-home';
      $scope.showerrormessage1 = false;
      $scope.messagetoshow1 = "";
      $scope.showerrormessage2 = false;
      $scope.messagetoshow2 = "";
      $scope.showerrormessage3 = false;
      $scope.messagetoshow3 = "";
      vm.religionbelong = ['יהודי', 'בדרך לשם - מתגייר' , 'לא'];


      $scope.citygenerator = [1,2,3];

      vm.user = {
        gender: "",
        status: "",
        numberofkids: "",
        smoking: "",
        religionman : ''
      };



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
        if (response != "OK")
        {
          $state.go('login', {}, {reload: true});
        }
      }
      function sendResponseError1(response)
      {
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

      vm.submit = function (isValid) {

        if ($scope.passStrength < 100)
        {
          // vm.message = "password strength should be 100";
          //return;
        }

        var notcomplete = false;


        if (vm.user.gender == '')
        {
          $scope.showerrormessage1 = true;
          $scope.messagetoshow1 = "Select gender please";
          notcomplete = true;
        }
        if (vm.user.smoking == '')
        {
          $scope.showerrormessage2 = true;
          $scope.messagetoshow2 = "Select smoking or not please";
          notcomplete = true;
        }
        if (vm.user.smokingpartner == '')
        {
          $scope.showerrormessage3 = true;
          $scope.messagetoshow3 = "Select smoking partner";
          notcomplete = true;
        }


        if (notcomplete == true)
          return


        if (isValid) {
          $scope.save(vm.user);
        }
      }

    }

  ]);

