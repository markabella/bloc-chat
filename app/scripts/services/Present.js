(function() {
  function Present($firebaseArray) {
    var Present = {};
    var listRef = firebase.database().ref('presence');
    var presence = $firebaseArray(listRef);

    var userRef = listRef.push();

    // Add ourselves to presence list when online.
    var presenceRef = firebase.database().ref('.info/connected');
    presenceRef.on("value", function(snap) {
      if (snap.val()) {
        // Remove ourselves when we disconnect.
        userRef.onDisconnect().remove();

        userRef.set(true);
      }
    });

    // Number of online users is the number of objects in the presence list.
    listRef.on("value", function(snap) {
      document.getElementById("participantsOnline").innerHTML = "Users Online: " + snap.numChildren();
    });

    return Present;
  }

  angular
  .module('blocChat')
  .factory('Present', ['$firebaseArray', Present]);
})();
