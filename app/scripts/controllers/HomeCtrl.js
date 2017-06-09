(function() {
  function HomeCtrl(Room, $uibModal) {
    var home = this;
    //home.val = 1;

    home.rooms = Room.all;

    home.addRoom = function() {
      //home.val += 1;
      //alert(home.val);
      var newRoomModal=true;
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal',
        size: 'sm'
      });
      return modalInstance;
    };

  }
  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
