var app = angular.module('palindromo', []);
app.controller('palindromoCtrl', function($scope) {
    $scope.palavra   = "";
    $scope.palindromoOk = false;
    $scope.testado      = false;
    
    $scope.testaPalindromo = function () {
        $scope.testado = true;
        
        //Se a quantidade de letras for menor que 2 não é    
        if ($scope.palavra.length < 2) {
            $scope.palindromoOk = false;
            return false;
        }
        
        for (var i = 0; i <=  (($scope.palavra.length - 1) / 2); i++) {
            //Se houver ao menos uma diferença deixa de ser Palíndromo
            if (i != ($scope.palavra.length -1 - i) && $scope.palavra[i] != $scope.palavra[$scope.palavra.length -1 - i]) {
                $scope.palindromoOk = false;
                return false;
            }                    
        }
        
        $scope.palindromoOk = true;
        return true;                          
    }
    
    $scope.reset = function () {
        $scope.testado = false;
        $scope.palindromoOk = false;
    }
    
}); 