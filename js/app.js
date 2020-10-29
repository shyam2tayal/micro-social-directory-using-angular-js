var app = angular.module("myApp", []);



function myFunction1()
{
  $scope.deginingValues = true;
  
  if ($scope.definingValues) {
      $scope.myValue=true;
       $scope.myValue1=false;
  }
  
  
}

function callMe() {
   myFunction1();
  
}

callMe();


