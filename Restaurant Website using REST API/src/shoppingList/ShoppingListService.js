

(function () {
  angular.module('ShoppingListApp')
  .service('ShoppingListService',ShoppingListService);
  ShoppingListService.$inject=['$http'];
  function ShoppingListService($http) {
      var promise = this;
      promise.getMyItems=function() {
        var response = $http({
         method : "get",
         url : 'https://davids-restaurant.herokuapp.com/categories.json'
       });
       console.log(response);
       return response;
      }
      promise.getMyItemD=function(categoryShortName) {
        console.log("called...");
        console.log("asd"+categoryShortName);
        var response=$http({
         method : "get",
         url : ('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
       });
       console.log(response);
       return response;
      }
  }
})()
