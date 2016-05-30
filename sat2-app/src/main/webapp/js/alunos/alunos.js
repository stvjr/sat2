'use strict';

angular.module('myApp.alunos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alunos', {
    templateUrl: 'alunos/alunos.html',
    controller: 'AlunosCtrl'
  });
}])

.controller('AlunosCtrl', ['$scope', '$http', 'Messages', 'Validation', 'Notifica', function($scope, $http, Messages, Validation, Notifica) {

  $scope.Aluno = function() {
    return {
      id: null,
      nome: "",
      situacao: true,
      sexo: "M",
      nascimento: ""
    }
  };

  $scope.aluno = $scope.Aluno();

  // process the form
  $scope.limparForm = function() {
    $scope.aluno = $scope.Aluno();
    Validation.limpar('#aluno-form',false);
  };

    // process the form
  $scope.save = function() {

    $http({
      method  : 'POST',
      url     : '/sat2/api/aluno',
      data    : $.param($scope.aluno),  // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
    .success(function(data) {
      $('#dataTables-alunos').DataTable().ajax.reload( null, false );
      $scope.limparForm();
      Notifica.exibaSucesso(null,Messages.salvoComSucesso("Aluno"));
    })
    .error(function(data) {

      if(data!=null) {
        Validation.exibir('#aluno-form', data.validations, null, false);
      }else{
        Notifica.exibaErro(null,Messages.erroEfetuarOp);
      }

    });

  };

  $scope.edit = function(id) {

    if($scope.aluno.id != id){

      $scope.limparForm();

      $http({
        method  : 'GET',
        url     : '/sat2/api/aluno/'+id
      }).success(function(aluno) {
         $scope.aluno = aluno;
      }).error(function(data) {
        Notifica.exibaErro(null,Messages.erroEfetuarOp);
      });

    }
  };

  $scope.delete = function() {
    if($scope.aluno != null){
      $http({
        method  : 'GET',
        url     : '/sat2/api/aluno/'+$scope.aluno.id+"/delete"
      }).success(function(response){
        $("#confirm-delete").modal('hide');
        $('#dataTables-alunos').DataTable().ajax.reload( null, false );
        $scope.aluno = $scope.Aluno();
        Notifica.exibaSucesso(null,Messages.registroRemovido);
      }).error(function(response) {
        Notifica.exibaErro(null,Messages.erroEfetuarOp);
      });
    }
  };

}]);

