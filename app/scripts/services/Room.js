(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://blazing-fire-7433.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
   // var roomName="";  
    
   // this.addRoom = function() {  
     //     rooms.$add({ $value: roomName });
    //  }
    
    return {
      all: rooms
    };
      

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();