(function() {
     function LoginCtrl($uibModalInstance,$cookies) {  
this.title="Enter Username";
this.username="";
this.changeUsername = function() {
    if(this.username===""){
        null}
    else
        {
          $cookies.put("blocChatCurrentUser",this.username);
          $uibModalInstance.close(this);}
           };
         
           }
 
     angular
         .module('blocChat')
         .controller('LoginCtrl', ['$uibModalInstance','$cookies', LoginCtrl]);
 })();