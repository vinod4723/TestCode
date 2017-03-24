var app = angular.module("mainApp", []);

app.service('myService', function ($http) {
    this.SaveData = function (empSalary) {
        $http.post("/api/Values/SaveData/", empSalary, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            transformRequest: angular.identity
        }).then(function (success) {
            alert('success');
        }, function errorCallback(response) {
            alert('Fail');
        });
    }

    this.GetAllEmp = function (emp) {
        debugger;
        $http.post("/api/Values/GetAllData/", emp, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            transformRequest: angular.identity
        }).then(function (data) {
            debugger;
            var t = data;
            alert('success');
        }, function errorCallback(response) {
            alert('Fail');
        });
    }
});

app.controller('CRUDController', function ($scope, myService) {
    $scope.EmpModel = new Object();

    $scope.EmpModel.Id = 0;
    $scope.EmpModel.Salary = 0;
    $scope.EmpModel.Name = 'vinod singh';
    $scope.EmpCode = 1;
    $scope.EmployeeList = [];
    $scope.AddData = function () {

        var _emp = new Object()

        _emp.Id = $scope.EmployeeList.length + 1;
        _emp.Name = $scope.EmpModel.Name;
        _emp.Salary = $scope.EmpModel.Salary;

        $scope.EmpCode = _emp.Id + 1;
        $scope.EmployeeList.push(_emp);
    }

    $scope.DeleteData = function (emp) {
        var _index = $scope.EmployeeList.indexOf(emp);
        $scope.EmployeeList.splice(_index, 1);
    }
    
    $scope.SaveData = function () {
        var empSalary = JSON.stringify($scope.EmployeeList);
        myService.SaveData(empSalary);
    }

    $scope.GetEmpData = function (emp) {
        var emp1 = JSON.stringify(emp);
        myService.GetAllEmp(emp1);
    }
});
