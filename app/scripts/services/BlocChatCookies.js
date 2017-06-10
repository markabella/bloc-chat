(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/username-modal.html',
        controller: 'ModalCtrl as modal',
        size: 'sm'
      });
    }
  }

  angular
  .module('blocChat')
  .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
