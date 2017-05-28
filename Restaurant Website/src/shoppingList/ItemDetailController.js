(function () {
  angular.module('ShoppingListApp')
  .controller('ItemDetailController',ItemDetailController);
  ItemDetailController.$inject=['ShoppingListService','ItmD']
  function ItemDetailController(ShoppingListService,ItmD) {
    var temp=this;
    temp.last=ItmD.data.menu_items;
  }
})()
