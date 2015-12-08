
app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('register' , {
    url:'/register',
    templateUrl: '/appmodules/homepage/client/views/register.html',
    controller: 'RegistrationController'
  }).state('main' , {
    url:'/',
    templateUrl: '/appmodules/homepage/client/views/main.html',
    controller: 'MainController'
  }).state('contact' , {
    url:'/contact',
    controller: 'ContactController',
    templateUrl: '/appmodules/homepage/client/views/contact.html'
  }).state('about' , {
    url:'/about',
    controller: 'AboutController',
    templateUrl: '/appmodules/homepage/client/views/about.html'
  }).state('test' , {
    url:'/test',
    controller: 'TestApiController',
    templateUrl: '/appmodules/homepage/client/views/test.html'
  }).state('newmember' , {
    url:'/newmember',
    controller: 'ContinueRegistrationController',
    templateUrl: '/appmodules/homepage/client/views/continueregistration.html'
  }).state('logout' , {
    url:'/logout',
    controller: 'LogoutController'
  }).state('login' , {
    url:'/login',
    controller: 'LoginController',
    templateUrl: '/appmodules/homepage/client/views/login.html'
  }).state('mail' , {
    url:'/mail',
    controller: 'YouGotAMailController',
    templateUrl: '/appmodules/homepage/client/views/YouGotAMail.html'
  }).state('mypictures' , {
    url:'/mypictures',
    controller: 'mypicturesController',
    templateUrl: '/appmodules/homepage/client/views/mypictures.html'
  })
    .state('updatedetails' , {
      url:'/updatedetails',
      controller: 'ContinueRegistrationController',
      templateUrl: '/appmodules/homepage/client/views/continueregistration.html'
    }).state('coredetails' , {
      url:'/coredetails',
      controller: 'coredetailsController',
      templateUrl: '/appmodules/homepage/client/views/coredetails.html'
    }).state('picturecrousle' , {
      url:'/picturecrousle',
      controller: 'picturecrousleController',
      templateUrl: '/appmodules/homepage/client/views/picturecrousle.html'
    }).state('nggallery' , {
      url:'/nggallery',
      controller: 'ngGalleryController',
      templateUrl: '/appmodules/homepage/client/views/nggallery.html'
    }).state('imgresizer' , {
      url:'/imgresizer',
      controller: 'imageresizergalleryController',
      templateUrl: '/appmodules/homepage/client/views/imgresizercrousle.html'
    }).state('galleryall' , {
      url:'/galleryall',
      controller: 'allmembersgalleryController',
      templateUrl: '/appmodules/homepage/client/views/allmembersgallery.html'
    }).state('help' , {
      url:'/help',
      controller: 'HelpController',
      templateUrl: '/appmodules/homepage/client/views/help.html'
    }).state('deletecard' , {
      url:'/deletecard',
      controller: 'deletecardController',
      templateUrl: '/appmodules/homepage/client/views/deletecard.html'
    }).state('memberdetails' , {
      url:'/memberdetails',
      controller: 'memberdetailsController',
      templateUrl: '/appmodules/homepage/client/views/memberdetails.html'
    }).state('preferencessearch' , {
      url:'/preferencessearch',
      controller: 'preferencessearchController',
      templateUrl: '/appmodules/homepage/client/views/preferencessearch.html'
    }).state('memberprofile' , {
      url:'/memberprofile',
      controller: 'memberprofileController',
      templateUrl: '/appmodules/homepage/client/views/memberprofile.html'
    }).state('fullpagecardlist' , {
      url:'/fullpagecardlist',
      controller: 'fullpagecardlistingController',
      templateUrl: '/appmodules/homepage/client/views/fullpagecardlisting.html'
    }).state('mychatplaces' , {
      url:'/mychatplaces',
      controller: 'mychatplaceController',
      templateUrl: '/appmodules/homepage/client/views/mychatplace.html'
    })



  $httpProvider.interceptors.push('authIntercepter');



});

