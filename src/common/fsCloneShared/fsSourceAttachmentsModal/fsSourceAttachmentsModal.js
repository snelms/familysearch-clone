(function(){
  'use strict';
  angular.module('fsCloneShared')
    .factory('fsSourceAttachmentsModal', function($modal, $rootScope, fsUtils) {
      return {
        open: function(description) {
          return $modal.open({
            templateUrl: 'fsCloneShared/fsSourceAttachmentsModal/fsSourceAttachmentsModal.tpl.html',
            size: 'lg',
            controller: function($scope) {
              $scope.description = description;
              fsUtils.getSourceRefContexts(description, true, 0).then(function(response) {
                $scope.sourceRefContexts = response;
              });

              $scope.cancel = function() {
                $scope.$dismiss();
              };

              $scope.detach = function(sourceRefContext) {
                $scope.$close(sourceRefContext);
              };

            }
          }).result;
        }
      };
    });
})();