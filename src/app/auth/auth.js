(function(){
  'use strict';
  angular.module('fsClone')
    .config(function ($stateProvider) {
      // This is needed so authentication works on mobile safari
      $stateProvider.state('auth', {
        url: '/auth',
        templateUrl: 'auth/auth.tpl.html',
        data: { pageTitle: 'Authentication' }
      });
    });
})();