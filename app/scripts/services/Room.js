(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://blazing-fire-7433.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
   // var msgsRef = new Firebase("https://blazing-fire-7433.firebaseio.com/messages"); 
     // var msgs = $firebaseArray(firebaseRef.child('messages'));
    
    return {
      all: rooms,
      //  create: function(newRoom) {
        // Create method logic
    //  },
      getMessages: function(roomId) {
      //  var rID=roomId;
      //  console.log(rID);
        var msgRef=firebaseRef.child('messages').orderByChild('roomId').equalTo(roomId);

          return $firebaseArray(msgRef);
            //.on('value', function(snapshot) {console.log(snapshot.val())});
          // getMessages query logic
      
        }
    }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();