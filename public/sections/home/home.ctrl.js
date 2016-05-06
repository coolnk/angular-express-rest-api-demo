angular.module('app.core').controller('HomeController',function(MyService){
    var vm = this;   
    MyService.getUser().then(function(response){
        vm.users = response;
    });
        
});