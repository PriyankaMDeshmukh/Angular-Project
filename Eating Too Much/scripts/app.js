(function() {
  angular.module('checkIfTooMuch',[])
  .controller('checkIfTooMuchController',function ($scope) {
    $scope.items="";
    $scope.checkIfTooMuchF=function () {
      var yourResultCount=0;
      var individualItemList=$scope.items.trim().split([',']);
      console.log($scope.items.trim());
      var length=$scope.items.split([',']).length;
      for (var i = 0; i < length; i++) {
        if (individualItemList[i].trim()!="") {
          yourResultCount++;
        }
      }
      if( $scope.items===""||yourResultCount==0){
        $scope.yourResult="Please enter data first!";
        $scope.greenOrRedI={
          "border":"red 2px solid"
        }
        $scope.greenOrRedD={

          "color":"red"
        }

      }

      else{
        if(yourResultCount<=3)
        $scope.yourResult="Enjoy!";
        else
        $scope.yourResult ="Too much!";
        $scope.greenOrRedI={
          "border":"green 2px solid"
        }
        $scope.greenOrRedD={
          "color":"green"
        }
      }
    }
  })
})();
