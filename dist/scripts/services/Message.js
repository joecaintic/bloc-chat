(function() {
  function Message(Room,$firebaseArray, $cookies) {
    var firebaseRef = new Firebase("https://blazing-fire-7433.firebaseio.com/");
    var messages = $firebaseArray(firebaseRef.child('messages'));
    var messageDate= new Date();
    
      return {
      send: function(newMessage, currentRoomId) {
          messages.$add({ content: newMessage,
                          roomId: currentRoomId,
                          sentAt: messageDate.toUTCString(),
                          username: $cookies.get("blocChatCurrentUser")
                        })
            }
        }
    }

  angular
    .module('blocChat')
    .factory('Message', ['Room','$firebaseArray','$cookies', Message]);
})();