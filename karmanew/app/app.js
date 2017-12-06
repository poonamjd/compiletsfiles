var app = angular.module("app", []);

app.controller("SimpleCtrl", function($scope){
    $scope.message = "Hllo World";
});

app.factory("SimpleService", function(){

    var service = {
        getData: function(){
            return [{
                id: 1,
                name: "Mark"
            }];
        }

    };

    return service;
});