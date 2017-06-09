(function() {
  function ModalCtrl(Room, $uibModalInstance) {
    var modal = this;

    modal.createRoom = function () {
      Room.add(modal.newRoom.name);
      $uibModalInstance.close();
    };

    modal.cancel = function () {
      $uibModalInstance.close();
    };

  }
  angular
  .module('blocChat')
  .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
