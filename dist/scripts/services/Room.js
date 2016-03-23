(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://blazing-fire-7433.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    //var username = $cookies.get("blocChatCurrentUser");
    
    
    return {
        all: rooms,
      
      //  create: function(newRoom) {
        // Create method logic
    //  },
      getMessages: function(roomId) {
        var msgRef=firebaseRef.child("messages").orderByChild('roomId').equalTo(Number(roomId));
          return $firebaseArray(msgRef);
        }
    }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();