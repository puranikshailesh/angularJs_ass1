(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', function ($scope) {
$scope.LunchItemEvaluation = "";
$scope.inputText = "";

$scope.totalItems = function () {
    var totalNameValue = checkLunchItems($scope.inputText);
    if( totalNameValue === 0 ){
       $scope.LunchItemEvaluation = "Please enter data first";
    }
    else if( totalNameValue > 0 && totalNameValue < 4 ){
        $scope.LunchItemEvaluation = "Enjoy";
    }
    else if( totalNameValue > 3 ) {
        $scope.LunchItemEvaluation = "Too much";
    }
  };

  function checkLunchItems(string) {
    var totalLunchItems = 0;
    var lunchItemList = string.split(',');

    if( string.length != 0  )
    {
      for( var i=0; i< lunchItemList.length ; i++ )
      {
        totalLunchItems++;
      }
    }
    return totalLunchItems;
  }

});

})();
