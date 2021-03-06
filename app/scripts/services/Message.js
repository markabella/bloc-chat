(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.send = function (newMessage, currentUser, currentRoom) {
      messages.$add({
        'username': currentUser,
        'content': newMessage,
        'sentAt': firebase.database.ServerValue.TIMESTAMP,
        'roomId': currentRoom.$id
      });
    };

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
