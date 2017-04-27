(function(){
  'use strict';

  angular.module('BudgetCalc',[])
  .controller('CalcController', CalcController);

  CalcController.$inject = ['$scope'];
  function CalcController($scope){
    var _this = this;

    $scope.totalBudget = $scope.homeValue * $scope.budgetPercentage / 100;
    console.log($scope.homeValue);
    console.log($scope.budgetPercentage);
  }

})();
