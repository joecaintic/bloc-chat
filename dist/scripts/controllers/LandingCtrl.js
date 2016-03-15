(function() {
     function LandingCtrl(Room, $uibModal, $scope) {
         this.title="Bloc Chat";
         this.rooms=Room.all;
         this.open=open;
         this.roomName="Select a Room";
         this.messages=[];
         
         
         this.setRoom = function (room) {
		//    var roomId=room.$id;
             this.roomName = room.$value;
           this.roomVal=room.$id;
             this.messages=Room.getMessages(this.roomVal);
         };
         
   //      $scope.currentRoom={};
         
         
      //   $rootScope.$on('SET_CURRENT_ROOM', function(event, ref){
    //        var room = $scope.rooms[$scope.rooms.$indexFor(ref)]
    //        $scope.setCurrentRoom(room);
    //        });
         
        // console.log($scope);
     //    $scope.setCurrentRoom=function(room) {
    //         $scope.currentRoom=room;
    //     };
         
        // lc.findRoom= function($index){
        //     lc.rooms[$index] = $scope.room;
         //};
        // lc.selected="";
         
         this.animationsEnabled = true;

          function open() {
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/newroom.html',
                size: "sm",
                controller: "NewRoomCtrl",
                controllerAs: "newroom",
               });
             };
         
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl', ['Room','$uibModal', LandingCtrl]);
 })();