'use strict';

app.controller('coresearchController', ['$scope','$state', 'authToken','myhttphelper',
  function($scope,$state, authToken,myhttphelper)
  {
    $scope.pageClass = 'page-home';

    var vm = this;


    vm.status1 = ['רווק','גרוש'];
    vm.status2 = ['רווקה','גרושה'];
    vm.status = vm.status1;
    vm.gendercollection = ['גבר' ,'אישה'];
    vm.smokingLabel = 'מעשנים';
    vm.statussearch = vm.status2;
    vm.labelsearch = "מחפש..";
    vm.labelsmokingsearch = "מעשנת";

    vm.searchreligionman = ['חילוני' , 'מסורתי' , 'דתי' ,'לא משנה לי'];
    vm.searchreligionwoman =['חילונית' , 'מסורתית' , 'דתייה' ,'לא משנה לי'];

    vm.searchreligion = vm.searchreligionman;

    vm.usersearch = {
       searchreligion : '',
       smokingpartner: '',
       searchnumberofkids: ''
    }

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
  }

]);

