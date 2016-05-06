angular.module('app.services').factory('MyService', userService );


function userService($http, randomUserUrl) {
 var fac = {};  
    fac.getUser = function () {
         return $http({
            'url': randomUserUrl,
            'method':'get',
            'headers':{
                'Content-type':'application/json'
                },             
            'cache':true
        }).then(function(response){
            return response.data.results;
        }); 
    }
    return fac;
}