(function() {
  function HomeCtrl($scope, Room) {

  this.rooms = Room.all;

  }
  angular
  .module('blocChat')
  .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
