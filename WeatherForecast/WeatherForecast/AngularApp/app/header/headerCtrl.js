(function () {
    angular.module("weatherApp.header")
          .controller('headerCtrl', ['$scope', function ($scope) {
              $scope.headerUrl = "AngularApp/app/header/header.tpl.html";

              $scope.loadView = function (type) {
                  console.log(type);
                  if (type == 'login') {
                      $scope.contentUrl = "AngularApp/app/login/login.tpl.html";
                  }
                 else if (type == 'register') {
                      $scope.contentUrl = "AngularApp/app/register/register.tpl.html";
                  }
                  else if (type == 'home') {
                      $scope.contentUrl = "AngularApp/app/home/home.tpl.html";
                  }
                  else if (type == 'countries') {
                      $scope.contentUrl = "AngularApp/app/weather/countries.tpl.html";
                  }
                  else {
                      $scope.contentUrl = "AngularApp/app/home/home.tpl.html";
                  }
              };

              $scope.loadView();
          }]);
})();