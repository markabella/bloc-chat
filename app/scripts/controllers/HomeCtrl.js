(function() {
  function HomeCtrl(Room, $uibModal, Message, $cookies) {
    var home = this;
    home.currentUser = $cookies.get('blocChatCurrentUser');

    home.rooms = Room.all;

    home.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/newroom-modal.html',
        controller: 'ModalCtrl as modal',
        size: 'sm'
      });
    };

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      home.messages = Message.getByRoomId(home.currentRoom.$id);
    };

  }
  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
