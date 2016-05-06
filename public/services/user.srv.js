angular.module('app.services').factory('MyService', userService );


function userService($http, randomUserUrl, localMessageApiUrl) {
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
    
    fac.getLocalMessage = function () {       
        return $http({
            'url': localMessageApiUrl,
            'method':'get',
            'headers': {
                'Content-type':'application/json' 
                },
            'cache':true
        }).then(function(response){          
            return response.data.message;
        });
    }
    
    return fac;
       
}