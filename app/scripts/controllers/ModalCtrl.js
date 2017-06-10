(function() {
  function ModalCtrl(Room, $uibModalInstance, $cookies) {
    var modal = this;

    modal.createRoom = function () {
      Room.add(modal.roomName);
      $uibModalInstance.close();
    };

    modal.cancel = function () {
      $uibModalInstance.close();
    };

    modal.setUsername = function () {
      $cookies.put('blocChatCurrentUser', modal.username);
      $uibModalInstance.close();

      //Verify that the username is saved to the appropriate cookie.
      console.log(document.cookie);

    };

  }
  angular
  .module('blocChat')
  .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
