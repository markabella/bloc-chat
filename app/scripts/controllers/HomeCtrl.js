(function() {
  function HomeCtrl(Room, $uibModal, Message) {
    var home = this;
    //home.val = 1;

    home.rooms = Room.all;

    home.addRoom = function() {
      //home.val += 1;
      //alert(home.val);
      //var newRoomModal=true;
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal',
        size: 'sm'
      });
      return modalInstance;
    };

    home.setCurrentRoom = function (room) {
           home.currentRoom = room;
           home.messages = Message.getByRoomId(home.currentRoom.$id);
       };

  }
  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
