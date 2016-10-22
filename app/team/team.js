'use strict';

angular.module('myApp.team', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team', {
    templateUrl: 'team/team.html',
    controller: 'TeamCtrl'
  });
}])

.controller('TeamCtrl', ['$scope', TeamModelBox]);

function TeamModelBox($scope) {
    $scope.data = [
        {team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']}, 
        {team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
        {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
        {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
    ];
    $scope.options = { team: [], employees: []};
    $scope.teamMatched = false;
    $scope.employeeMatched = false;
    $scope.showError = false;

    $scope.data.forEach(function(teamObj) {
      $scope.options.team.push(teamObj.team);
    });

    $scope.$watch('team', function(teamNew, teamOld) {
        $scope.employee = '';
        $scope.options.employees = [];
        $scope.teamMatched = false;
        $scope.employeeMatched = false;
        if(!angular.equals(teamNew, teamOld)){
            $scope.data.forEach(function(teamObj) {
                if(teamObj.team === teamNew){
                    $scope.options.employees = teamObj.employees;
                    $scope.teamMatched = true;
                }
            });
        }
    });

    $scope.$watch('employee', function(employeeNew, employeeOld) {
        $scope.employeeMatched = false;
        if(!angular.equals(employeeNew, employeeOld)){
            $scope.data.forEach(function(teamObj) {
                if(teamObj.team === $scope.team && teamObj.employees.indexOf($scope.employee) > -1){
                    $scope.employeeMatched = true;
                }
            });
        }
    });

    $scope.clickedSubmit = function clickedSubmit() {
        if($scope.teamMatched && $scope.employeeMatched) {
            $scope.team = '';
            $scope.showError = false;
            alert('Data submitted successfully!');
        } else {
            $scope.showError = true;
            alert('Please resolve invalid data on the form');
        }
    }

    $scope.clickedCancel = function clickedCancel() {
        if(($scope.team !== '' || $scope.employee !== '') && confirm('Are you sure to cancel your actions?')) {
            $scope.team = '';
            $scope.showError = false;
            alert('Form cleared!');
        }
    }
}