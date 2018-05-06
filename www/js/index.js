var angularApp = angular.module('angularApp', ['ngRoute','ngMaterial']);
angularApp.controller('MyCtrl', ['$scope', '$http','$rootScope','$location',function ($scope, $http,$rootScope,$location) { 
     $rootScope.isHeaderVisible=true;
    
       $scope.burgermenu=function(){
        
              document.getElementById("openstyle").style.width = "250px";
      }
       $scope.closeMenu=function(){
           document.getElementById("openstyle").style.width = "0";
       }
       $scope.goLogout=function(){
           
       }
       $scope.goProfile=function(){
           $scope.closeMenu();
           $location.path('/profile');
           
       }
       $scope.goGallery=function(){
           $scope.closeMenu();
            $location.path('/gallery');
           
       }
       $scope.goCarrier=function(){
           
       }
       $scope.goApproach=function(){
           
       }
        $scope.goView=function(){
           
       }
        $scope.goHome=function(){
           $scope.closeMenu();
           $location.path('/home');
       }
    
    
}]);