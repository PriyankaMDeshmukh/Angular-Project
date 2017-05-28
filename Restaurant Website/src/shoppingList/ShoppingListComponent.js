(function () {
  angular.module('ShoppingListApp')
  .component('shop',{
    templateUrl:'src/shoppingList/templates/ShoppingListComponent.html',
    bindings:{
      itemss:'<'
    }
  })
})()
