//Two params
//1. module name
//2. dependent modules

angular.module("weatherApp", [
"weatherApp.login",
"weatherApp.register",
"weatherApp.weather",
"weatherApp.header"]);

angular.module("weatherApp")
       .config(function () {
           console.log("I am the weatherApp Main Module")
       });