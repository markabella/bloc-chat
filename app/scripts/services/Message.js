(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;

/**
        username: "<USERNAME HERE>",
        content: "<CONTENT OF THE MESSAGE HERE>",
        sentAt: "<TIME MESSAGE WAS SENT HERE>",
        roomId: "<ROOM UID HERE>"
**/

    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    return Message;
  }

  angular
  .module('blocChat')
  .factory('Message', ['$firebaseArray', Message]);
})();
