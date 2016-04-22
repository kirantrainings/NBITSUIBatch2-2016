(function () {
    'use strict';
    function tempCtrl($scope) {
        $scope.countriesTemp = [{ "Name": "India", "Month": "May", "Temperature": "45C" },
            { "Name": "Russia", "Month": "May", "Temperature": "25C" },
            { "Name": "England", "Month": "May", "Temperature": "35C" },
        { "Name": "United State", "Month": "May", "Temperature": "15C" },
        ];
    }
    angular.module('weatherApp.weather')
    .controller('temperatureCtrl', ["$scope", tempCtrl])
})()