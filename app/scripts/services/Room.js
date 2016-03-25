(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://blazing-fire-7433.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    
    
    return {
        all: rooms,
      
      getMessages: function(roomId) {
        var msgRef=firebaseRef.child("messages").orderByChild('roomId').equalTo(roomId);
          return $firebaseArray(msgRef);
        }
    }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();