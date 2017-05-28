

(function () {
  angular.module('ShoppingListApp')
  .controller('ShoppingListController',ShoppingListController);
  ShoppingListController.$inject=['ShoppingListService','myItm'];
  function ShoppingListController(ShoppingListService,myItm) {

          var con=this ;
          // con.itemss=[];
          // con.$onInit =function () {
          //   ShoppingListService.getMyItems()
          //   .then(function (result) {
          //     con.itemss = result.data;
          //   });
          //
          // }
          con.itemss=myItm.data;

  console.log(   con.itemss);
  }
})()
